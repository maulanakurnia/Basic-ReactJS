import axios from 'axios';
import {OnlineRoot, RootPath} from './config'

const Put = (root, path, data) => {    
    const promise = new Promise((resolve, reject) => {
        axios.put(`${root ? OnlineRoot : RootPath}/${path}`, data)
        .then((res) => {
            resolve(res);
        }, err => {
            reject(err);
        })
    })

    return promise
}

export default Put;