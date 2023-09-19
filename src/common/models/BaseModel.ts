import DB from "../../app.connection";
import { Knex } from "knex";

import { BaseModelType } from "../types/BaseModelTypes";

/**
 * @author Mark David Bogayan <mrkdvdbgyn@gmail.com>
 */

class BaseModel {
    db;
    query;
    table;
    lasQuery: any;
    primaryKey;
    singularName;
    defaultOrder;
    defaultOrderColumn;

    static transaction: Knex.Transaction;

    constructor({
        table,
        primaryKey,
        singularName,
        defaultOrder,
        defaultOrderColumn,
    }: BaseModelType) {
        this.db = DB;

        this.query = () => DB(table);

        this.table = table;
        this.primaryKey = primaryKey;
        this.singularName = singularName;
        this.defaultOrder = defaultOrder;
        this.defaultOrderColumn = defaultOrderColumn;
    }

    async startTransaction() {
        BaseModel.transaction = await DB.transaction();
    }

    endTransaction(toCommit: boolean) {
        if (!BaseModel.transaction) return;

        if (toCommit) BaseModel.transaction.commit();
        else BaseModel.transaction.rollback();

        BaseModel.transaction = null as any;
    }

    // CRUD OPERATION BELOW //

    findAll(page: number = 1, limit: number = 10) {
        const query = (
            BaseModel.transaction
                ? BaseModel.transaction(this.table)
                : this.query()
        )
            .orderBy(
                this.defaultOrderColumn || `${this.singularName}_id`,
                this.defaultOrder || "acs",
            )
            .limit(limit)
            .offset(limit * (page - 1));

        this.lasQuery = query.toQuery();

        return query;
    }

    ///////////////////////////////////////////////////////////////
    async find(id: string) {
        const query = (
            BaseModel.transaction
                ? BaseModel.transaction(this.table)
                : this.query()
        )
            .where({ [this.primaryKey]: id })
            .first();

        this.lasQuery = query.toQuery();

        return query.then((result) => result || 0);
    }

    ///////////////////////////////////////////////////////////////
    async insert(data: {}, returnColumns?: string) {
        const query = (
            BaseModel.transaction
                ? BaseModel.transaction(this.table)
                : this.query()
        )
            .insert(data)

        this.lasQuery = query.toQuery();

        return query.then((result) => this.query().table(this.table).where({ [this.primaryKey]: result[0] }).first() || 0);
    }

    ///////////////////////////////////////////////////////////////
    async update(id: string, data: {}) {
        const query = (
            BaseModel.transaction
                ? BaseModel.transaction(this.table)
                : this.query()
        )
            .where({ [this.primaryKey]: id })
            .update(data)

        this.lasQuery = query.toQuery();

        return query.then((result) => result || 0);
    }

    ///////////////////////////////////////////////////////////////
    async delete(id: string) {
        const query = (
            BaseModel.transaction
                ? BaseModel.transaction(this.table)
                : this.query()
        )
            .where({ [this.primaryKey]: id })
            .delete();

        this.lasQuery = query.toQuery();

        return query.then((result) => result || 0);
    }
}

export default BaseModel;
