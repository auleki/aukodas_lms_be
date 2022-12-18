import axios from 'axios'

const Axios = axios.create({
    baseURL: "", // fetch base url from
    timeout: 10000,
    headers: {}
})

export default Axios