// const getUsers=()=>{
//     return fetch('https://jsonplaceholder.typicode.com/users')
//         .then(value => value.json())
// }
// const getUser=(id)=>{
//     return fetch('https://jsonplaceholder.typicode.com/users/'+id)
//         .then(value => value.json())
//
// }
// export {getUsers,getUser}
import axios from "axios";
let axiosInstance=axios.create ({
    baseURL: 'https://jsonplaceholder.typicode.com/posts',
 })
const getPosts=()=>axiosInstance.get();
const getPost=(id)=>axiosInstance.get(id);
export  {getPost,getPosts};
