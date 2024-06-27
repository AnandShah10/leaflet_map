/**@odoo-module**/

export class LeafletMapModel
{
    constructor(services,resModel,archInfo)
    {
        this.resModel =resModel
        this.orm = services.orm
        const { latitude,longitude,fieldsToDisplay} = archInfo
        this.latitude = latitude
        this.longitude = longitude
        this.fieldsToDisplay = fieldsToDisplay
        console.log("Constructor End")
    }
    async load()
    {   let fields = ['display_name',this.latitude,this.longitude]
        if(this.fieldsToDisplay.length>0)
        {
            fields= fields.concat(this.fieldsToDisplay)
        }
        console.log(fields)
        const data = await this.orm.searchRead(this.resModel,[],fields)
        this.records = data
        console.log('Records:',this.records)
    }
}