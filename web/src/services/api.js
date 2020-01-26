import axios from 'axios'

const api = axios.create({
    baseURL: 'https://3333-eaf5c9ab-a96b-4902-a013-ba8841492a0f.ws-eu01.gitpod.io'
})

export default api