import axios from 'axios';

const RootPath = 'http://localhost:3001';
const OnlineRoot = 'https://jsonplaceholder.typicode.com';

const Get = (root, path, data) => {
    const promise = new Promise((resolve, reject) => {
        axios.get(`${root ? OnlineRoot : RootPath}/${path}${data ? '/'&&data : ''}`)
        .then((res) => {
            resolve(res.data);
        }, err => {
            reject(err);
        })
    })

    return promise;
}

const getNewsBlog = (data) => Get(false, 'posts?_sort=id&_order=desc', data);
const getDetailPost = (data) => Get(false, 'posts/', data);
const getComments = (data) => Get(true, 'comments', data);

const API = {
    getNewsBlog,
    getComments,
    getDetailPost
}

export default API;