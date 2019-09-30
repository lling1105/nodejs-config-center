import axios from "./axiosHelper"
export default class data {
    static async getGroups(){
       let results =  await axios.get("/api/config/getGroups");
       return results.data;
    }
    static async getGroupSchema(groupName){
        let results =  await axios.get("/api/config/getSchema",{params:{configGroup:groupName}});
        return results.data;
    }
}
