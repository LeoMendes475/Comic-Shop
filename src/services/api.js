import axios from 'axios'
import md5 from 'md5'

const publicKey = '784d1ac70ce61d3efc2104600916a766'
const privateKey = '5b5f8ed3c8183a1407744799357cdf263d52c913'

const time = Number(new Date())
const hash = md5(time + privateKey + publicKey)

const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/',
    params: {
        ts: time,
        apikey: publicKey,
        hash: hash
    }
})

export default api