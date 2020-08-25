import axios from 'axios';
import {OnlineRoot, RootPath} from './config'

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

export default Get;