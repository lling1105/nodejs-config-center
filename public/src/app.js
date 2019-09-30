import vue from "vue"
import store from "./helper/store"
import elementUI from "element-ui"
vue.use(elementUI);
import '../../node_modules/element-ui/lib/theme-chalk/index.css'

import main_layout from "./layout/main.vue"




new vue({
    el:"#app",
    render:e=>e(main_layout),
    store,
    created:async function () {
        this.$store.dispatch('loadGroups')
    }
})