export type BaseModelType = {
    table: string;
    primaryKey: string;
    singularName: string;
    defaultOrder: "desc" | "asc";
    defaultOrderColumn: string;
};
