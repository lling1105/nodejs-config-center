import axios from "axios"
import { Loading } from 'element-ui'
let loadCount = 0;
let loadingInstance;
axios.interceptors.request.use(
    config => {
        loadCount++;
        loadingInstance = Loading.service({ fullscreen: true });

        return config
    },
    err => {
        return Promise.reject(err)
    }
)

axios.interceptors.response.use(
    res => {
        loadCount--
        if (!loadCount) {
            loadingInstance.close();

        }
        return res;
    },
    err => {
        loadCount--;
        if (!loadCount) {
            loadingInstance.close();

        }
        return Promise.reject(err);
    }
)
export default axios