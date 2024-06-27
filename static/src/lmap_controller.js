/**@odoo-module**/

import {Component,useState,onWillStart} from "@odoo/owl";
import { standardViewProps } from "@web/views/standard_view_props";
import { LeafletMapRenderer } from "./lmap_renderer";
import { LeafletMapModel } from "./lmap_model.js";
import {useService} from "@web/core/utils/hooks";
import { Layout } from "@web/search/layout";
export class LeafletMapController extends Component{
    static template = 'leaflet_map.MapView';
    static components = {LeafletMapRenderer,Layout}
    static props =
    {
    ...standardViewProps,
    archInfo:Object,
    }
    setup()
    {
        this.orm = useService('orm')
        this.model = useState(new LeafletMapModel({orm:this.orm},this.props.resModel,this.props.archInfo));
        console.log("Controller",this.model)
        onWillStart(async ()=> await this.model.load())
    }
}