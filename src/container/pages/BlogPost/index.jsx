import React, { Component, Fragment } from 'react';
import Post from '../../../component/Post'
import './BlogPost.css'
import axios from 'axios';

class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        },
        isUpdate: false
    }

    // interaksi API (GET, POST, PUT)
    getPostAPI = () => {
        axios.get('http://localhost:3001/posts?_sort=id&_order=desc')
        .then((res) => {
            this.setState({
                post: res.data
            })
        })
    }

    postDataToAPI = () => {
        axios.post('http://localhost:3001/posts', this.state.formBlogPost)
        .then(() => {
            this.getPostAPI();
        },(err) => {
            console.log('error : ', err )
        })
    }

    putDataToAPI = () => {
        let result = window.confirm('yakin ingin mengubah data?')
        if(result){
            axios.put(`http://localhost:3001/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost)
            .then(() => {
                this.getPostAPI();
                this.setState({
                    isUpdate: false,
                    formBlogPost : {
                        id: 1,
                        title: '',
                        body: '',
                        userId: 1
                    }
                })
            },(err) => {
                console.log('error : ', err )
            })
        }
    }

    // handler (Submit, Update, Remove)
    handleSubmit = () => {
        if(this.state.isUpdate){
            this.putDataToAPI();
        }else {
            this.postDataToAPI();
        }
    }

    handleUpdate = (data) => {
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
    }

    handleRemove = (id) => {
        let result = window.confirm('yakin ingin menghapus?')
        if(result){
            axios.delete(`http://localhost:3001/posts/${id}`)
            .then(() => { 
                this.getPostAPI(); 
            })
            window.alert('berhasil dihapus!')
        } else {
            window.alert('data anda aman!')
        }
    }

    handleFormChange = (e) => {
        let formBlogPostNew = {...this.state.formBlogPost};
        let timestamp = new Date().getTime();
        if(!this.state.isUpdate){
            formBlogPostNew['id'] = timestamp
        }
        formBlogPostNew[e.target.name] = e.target.value;

        this.setState({
            formBlogPost: formBlogPostNew
        })
    }

    // LifeCycle
    componentDidMount(){
        this.getPostAPI();
    }

    render() { 
        return (  
            <Fragment>
                <p className="section-title">Blog Post</p>
                <div className="justify-center">
                    <div className="form-add-post">
                        <label htmlFor="title" className="title">Title</label>
                        <input type="text" name="title" placeholder="add title" value={this.state.formBlogPost.title} onChange={this.handleFormChange}/>
                        <label htmlFor="body">Blog Content</label>
                        <textarea name="body" id="body" cols="30" rows="10" placeholder="add blog content" value={this.state.formBlogPost.body} onChange={this.handleFormChange}></textarea>
                        <button className="btn-submit" onClick={this.handleSubmit}>{this.state.isUpdate ? 'Update' : 'Simpan'}</button>
                    </div>
                </div>
                <div className="flex">
                    {
                        this.state.post.map(post => {
                            return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate}/>
                        })
                    }
                </div>
            </Fragment>
        );
    }
}
 
export default BlogPost;