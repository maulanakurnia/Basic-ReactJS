import axios from 'axios';
import {OnlineRoot, RootPath} from './config'

const Delete = (root, path, data) => {
    const promise = new Promise((resolve, reject) => {
        axios.delete(`${root ? OnlineRoot : RootPath}/${path}${data ? '/'&&data : ''}`)
        .then((res) => {
            resolve(res.data);
        }, err => {
            reject(err);
        })
    })

    return promise;
}

export default Delete;