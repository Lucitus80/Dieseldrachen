export default class DieseldrachenItemsheet extends ItemSheet {
    get template() {
        return `systems/dieseldrachen/templates/sheets/${this.item.type}-sheet.html`;
    }  
     
    getData() {
        const data = super.getData();

        data.config = CONFIG.dieseldrachen;

        return data;
    }
}