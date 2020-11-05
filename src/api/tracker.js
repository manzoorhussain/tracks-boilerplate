import axios from 'axios';
 
export default axios.create({
baseURL:'http://da82386b020a.ngrok.io',
headers:{
    'Authorization':'application/json'
}

 });