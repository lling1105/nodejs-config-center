import vue from "vue"
import vuex from "vuex"
import data from "./data"
vue.use(vuex);
export default new vuex.Store({
    state:{
        window_height:0,
        window_width:0,
        groups:[],
        selectedGroup:null,
        selectedSelectedVersion:null,
        activeVersion:null,
    },
    actions:{//load groups from server
        async loadGroups({commit}){
            let groups = await data.getGroups();
            commit('setGroups',groups);
        }
    },
    mutations:{
        setWindowSize(state,sizeObj){
            state.window_width = sizeObj.width;
            state.window_height = sizeObj.height;
        },
        setGroups(state,groups){
            state.groups = groups
        },
        setSelectedGroup(state,selectedGroup){
            state.selectedGroup = selectedGroup;
        },
        setSelectedVersion(state,selectedVersion){
            state.selectedSelectedVersion = selectedVersion;
        },
        setActiveVersion(state,activeVersion){
            state.activeVersion = activeVersion;
        }
    }
});