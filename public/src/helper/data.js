import axios from "axios"
export default class data {
    static async getGroups(){
       let results =  await axios.get("/api/config/getGroups");
       return results.data;
    }
}
