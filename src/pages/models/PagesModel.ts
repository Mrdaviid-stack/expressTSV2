import BaseModel from "../../common/models/BaseModel";
import { PagesModelType, PagesModelProperties } from "../typings/PagesModelType";

class PagesModel extends BaseModel {

    fields;

    constructor() {

        const fields = {
            id: 'page_id',
            name: 'page_name',
        }

        super({
            table: "pages",
            primaryKey: "page_id",
            singularName: "page",
            defaultOrder: "desc",
            defaultOrderColumn: "page_id",
        });

        this.fields = fields;
    }

    async nameExist(name: string) {
        return await this.query()
            .where({ [this.fields.name]: name })
            .first()
    }

};

const pages = new PagesModel()
export default pages as PagesModel;
