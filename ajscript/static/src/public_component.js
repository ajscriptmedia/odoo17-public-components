/** @odoo-module */

import { Component, useState, onWillStart } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks"

class AjsPublicComponent extends Component {
    static template = "ajscript.public_component_template";

    setup() {
        this.orm = useService("orm")
        this.notification = useService("notification")
        this.state = useState({
            counter: 0
        })

        onWillStart(async () => {
            const data = await this.orm.searchRead("res.partner", [], ["name"],{ limit: 10 })
            this.state.data = data
        })
    }

    counter(){
        this.state.counter++
    }

    notify() {
        this.notification.add("This is awesome!")
    }
}

registry.category("public_components")

.add("ajscript.my_public_component", AjsPublicComponent);
