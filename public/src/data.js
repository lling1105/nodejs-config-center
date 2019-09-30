import axios from "axios"
export default class data {
    static async getGroups(){
       return await axios.get("/api/config/getGroups");
    }
}
