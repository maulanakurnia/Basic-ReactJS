import axios from 'axios';
import {OnlineRoot, RootPath} from './config'

const Post = (root, path, data) => {    
    const promise = new Promise((resolve, reject) => {
        axios.post(`${root ? OnlineRoot : RootPath}/${path}`, data)
        .then((res) => {
            resolve(res);
        }, err => {
            reject(err);
        })
    })

    return promise
}

export default Post;