import axios from 'axios';

const api = axios.create({
    baseURL: "https://port-novo-backend.vercel.app", // Use a URL do backend no Vercel
});

// Agora você pode importar o `api` em outros arquivos e fazer requisições.
export default api;
