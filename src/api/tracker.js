import axios from 'axios';
 
export default axios.create({
baseURL:'http://d7cea3ad6553.ngrok.io',
headers:{
    'Authorization':'application/json'
}

 });