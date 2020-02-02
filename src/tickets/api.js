import axios from 'axios'
import apiUrl from '../apiConfig'

export const index = () => {
    return axios({
        url:apiUrl + "/tickets",
        method: "get"//,
        // headers: {
        //     "Authorization": `Bearer ${user.token}`
        // }
    })
}

export const show = (id) => {
    return axios({
        url:apiUrl + "/tickets/" +id,
        method: "get"
    })
}

export const create = (ticket) => {
    return axios({
        url:apiUrl + "/ticket/new",
        method: "post",
        data:{ticket: ticket}
    })
}

export const update = (ticket,id) => {
    return axios({
        url:apiUrl + "/tickets/" + id,
        method: "put",
        data:{ticket: ticket}
    })
}

export const destroy = (id) => {
    return axios({
        url:apiUrl + "/tickets/" +id,
        method: "delete"//,
        // headers: {
        //     "Authorization": `Bearer ${user.token}`
        // }
    })
}