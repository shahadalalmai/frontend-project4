import axios from 'axios'
const tourApiUrl = 'http://localhost:3000'



export const index = () => {
    return axios({
        url:tourApiUrl + "/tours",
        method: "get"
    })
}