import axios from 'axios'

const api = axios.create({
    baseURL: "https://proud-enchantment-production.up.railway.app/",
})

//  depois de ter configurado o axi como esta é so 
//  importar no index do projeto 

export default api
