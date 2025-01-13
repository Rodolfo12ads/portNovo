import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:3000",
})

//  depois de ter configurado o axi como esta é so 
//  importar no index do projeto 

export default api
