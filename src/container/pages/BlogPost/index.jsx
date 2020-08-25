import API from '../../../services';
import Post from '../../../component/Post'
import React, { Component, Fragment } from 'react';
import './BlogPost.css'

class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        },
        isUpdate: false,
        comments: []
    }

    // interaksi API (GET, POST, PUT)
    getPostAPI = () => {
        API.getNewsBlog().then(res => {
            this.setState({
                post: res
            })
        })
    }

    postDataToAPI = () => {
        API.postNewsBlog(this.state.formBlogPost).then((res) => {
            this.getPostAPI();
            this.setState({
                isUpdate: false,
                formBlogPost : {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                }
            });
        }, err => {
            console.log('error : ', err )
        })
    }

    putDataToAPI = () => {
        let result = window.confirm('yakin ingin mengubah data?')
        if(result){
            API.updateNewsBlog(this.state.formBlogPost, this.state.formBlogPost.id)
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
            API.deletNewsBlog(id)
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

    handleDetail = (id) => {
        this.props.history.push(`/detail-post/${id}`);
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
                            return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail}/>
                        })
                    }
                </div>
            </Fragment>
        );
    }
}
 
export default BlogPost;