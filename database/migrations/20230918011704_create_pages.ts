import { Knex } from "knex";

const tableName = "pages";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists(tableName);
    await knex.schema.createTable(tableName, table => {
        table.increments("page_id");
        table.string("page_name", 150);
    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists(tableName);
}

