import BaseModel from "../../common/models/BaseModel";

const PagesModel = new (class extends BaseModel {
    constructor() {
        super({
            table: "pages",
            primaryKey: "page_uuid",
            singularName: "page",
            defaultOrder: "desc",
            defaultOrderColumn: "page_id",
        });
    }
})();

export default PagesModel;
