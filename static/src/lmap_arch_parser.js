/**@odoo-module**/
import { visitXML} from "@web/core/utils/xml";
export class LeafletMapArchParser{
    parse(arch)
    {
        const latitude = arch.getAttribute("latitude")
        const longitude = arch.getAttribute("longitude")
//        arch.getElementByTagName('field')
        const fieldsToDisplay = []
        visitXML(arch,(node)=>{
            if(node.tagName==='field')
            {
                fieldsToDisplay.push(node.getAttribute('name'))
            }
        })
        console.log("Arch",fieldsToDisplay)
        return {
            latitude,longitude,fieldsToDisplay,
        }
    }
}