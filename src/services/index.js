import axios from 'axios';

const RootPath = 'http://localhost:3001';
const OnlineRoot = 'https://jsonplaceholder.typicode.com';

const Get = (path, root) => (action) => {
    const promise = new Promise((resolve, reject) => {
        axios.get(`${root ? OnlineRoot : RootPath}/${path}${action}`)
        .then((res) => {
            resolve(res.data);
        }, err => {
            reject(err);
        })
    })

    return promise;
}

const getNewsBlog = Get('posts?_sort=id&_order=desc', false);
const getDetailPost = Get('posts/', false);
const getComments = Get('comments', true);

const API = {
    getNewsBlog,
    getComments,
    getDetailPost
}

export default API;