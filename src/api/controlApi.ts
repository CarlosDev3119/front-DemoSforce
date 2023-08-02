
import axios from 'axios';


const controlApi = axios.create({
    baseURL: 'http://localhost:8000/api'
});


export default controlApi;