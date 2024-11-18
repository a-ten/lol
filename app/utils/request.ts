import axios from "axios";
const request = axios.create({
    timeout: 5000
})

request.interceptors.request.use((config) => {
        return config;
    }
)
request.interceptors.response.use(
    response => {
            ({
            message: 'request success',
            type: 'success',
          })
        return response;
    },
    error => {
        ({
            message: 'request success',
            type: 'warning',
          })
        return Promise.reject(error)
    }
)
export default request;