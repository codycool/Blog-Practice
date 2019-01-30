import axios from 'axios';


export const post = (url, data= {}, config= {
    headers: {
        'Content-Type': 'application/json'
    },
}) => axios.post(url, data, config).then(res => res.data, err => Promise.reject(err.response.data))

export const get = (url, config= {
    headers: {
        'accept': 'application/json'
    },
}) => axios.get(url, config).then(res => res.data, err => Promise.reject(err.response.data))
    

    
