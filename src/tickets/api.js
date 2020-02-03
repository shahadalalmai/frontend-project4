import axios from 'axios'
import apiUrl from '../apiConfig'

export const index = (user) => {
    return axios({
        url:apiUrl + "/tickets",
        method: "get",
        headers: {
            "Authorization": `Bearer ${user.token}` // to attach the user token to the API request through headers key
        }
    })
}

export const show = (user, id) => {
    return axios({
        url:apiUrl + "/tickets/" +id,
        method: "get",
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    })
}

export const create = (user, ticket) => {
    return axios({
        url:apiUrl + "/ticket/new",
        method: "post",
        headers: {
            "Authorization": `Bearer ${user.token}`
        },
        data:{ticket: ticket}
    })
}

export const update = (user, ticket,id) => {
    return axios({
        url:apiUrl + "/tickets/" + id,
        method: "put",
        headers: {
            "Authorization": `Bearer ${user.token}`
        },
        data:{ticket: ticket}
    })
}

export const destroy = (user, id) => {
    return axios({
        url:apiUrl + "/tickets/" +id,
        method: "delete",
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    })
}