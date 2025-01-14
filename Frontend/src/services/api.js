import axios from 'axios'

const api = axios.create({
    baseURL: "https://portfolio-6e8a.onrender.com",
})

//  depois de ter configurado o axi como esta é so 
//  importar no index do projeto 

export default api
