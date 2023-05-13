import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://meal-app-a2cad-default-rtdb.firebaseio.com/'
});

export default instance;