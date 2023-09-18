import BaseModel from "../../common/models/BaseModel";

class PagesModel extends BaseModel {
    constructor() {
        super({
            table: "pages",
            primaryKey: "page_id",
            singularName: "page",
            defaultOrder: "desc",
            defaultOrderColumn: "page_id",
        });
    }
};

export default PagesModel;
