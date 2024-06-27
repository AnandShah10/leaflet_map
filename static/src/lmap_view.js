/**@odoo-module**/

import { registry } from "@web/core/registry";
import {LeafletMapController} from "./lmap_controller.js";
import { LeafletMapRenderer } from "./lmap_renderer.js";
import { LeafletMapArchParser } from "./lmap_arch_parser";

export const leafletMapView ={
   type:'lmap',
   display_name:'Leaflet Map',
   icon:'fa fa-map-marker',
   multiRecord:true,
   Controller:LeafletMapController,
   Renderer: LeafletMapRenderer,
   ArchParser : LeafletMapArchParser,
   props(genericProps,view)
   {
    const {ArchParser} = view
    const { arch } = genericProps
    const archInfo = new ArchParser().parse(arch)
    console.log(archInfo)
    return {...genericProps,archInfo}
   }
}
registry.category('views').add('lmap',leafletMapView)