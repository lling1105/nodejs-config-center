import vue from "vue"
import elementUI from "element-ui"
vue.use(elementUI);
import '../../node_modules/element-ui/lib/theme-chalk/index.css'

import main_layout from "./layout/main.vue"
import data from "./data"


new vue({
    el:"#app",
    render:e=>e(main_layout),
    data: {
        groups:[] //config groups from server
    },
    created:async function () {
        this.groups =await data.getGroups();
    }
})