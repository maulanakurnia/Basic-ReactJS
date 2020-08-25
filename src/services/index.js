import Get from './Get';
import Post from './Post';
import Put from './Put';
import Delete from './Delete';

// GET
const getNewsBlog = (data) => Get(false,'posts?_sort=id&_order=desc', data);
const getDetailPost = (data) => Get(false,'posts/', data);
const getComments = (data) => Get(true,'comments', data);

// POST
const postNewsBlog = (data) => Post(false, 'posts', data);

// PUT
const updateNewsBlog = (data, id) => Put(false,`posts/${id}`, data);

// DELETE
const deletNewsBlog = (id) => Delete(false, `posts/${id}`)

const API = {
    getNewsBlog,
    getComments,
    getDetailPost,
    postNewsBlog,
    updateNewsBlog,
    deletNewsBlog
}

export default API;