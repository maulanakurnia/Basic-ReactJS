import Get from './Get';
import Post from './Post';

// GET
const getNewsBlog = (data) => Get(false,'posts?_sort=id&_order=desc', data);
const getDetailPost = (data) => Get(false,'posts/', data);
const getComments = (data) => Get(true,'comments', data);

// POST
const postNewsBlog = (data) => Post('posts', false, data)

const API = {
    getNewsBlog,
    getComments,
    getDetailPost,
    postNewsBlog
}

export default API;