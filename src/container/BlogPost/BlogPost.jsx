import React, { Component, Fragment } from 'react';
import './BlogPost.css';
import Post from '../../component/Post/Post';
import axios from 'axios';
class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1,
        },
        isUpdate: false
    }

    getPostAPI = () => {
        axios.get('http://127.0.0.1:3000/posts?_sort=id&_order=desc')
        .then((result) => { //parameter result penamaannya bebas...
            this.setState({
                post: result.data
            })
        })
    }

    postDatatoAPI = ()=> {
        axios.post('http://127.0.0.1:3000/posts', this.state.formBlogPost).then((res) => {
            // console.log(res);
            this.getPostAPI();
            this.setState({
                isUpdate: false,
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1,
                }
            })
        }, (err) => {
            console.log('error : ', err)
        })
    }

    putDatatoAPI = () => {
        axios.put(`http://127.0.0.1:3000/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost).then(res =>{
            // console.log(res);
            this.getPostAPI();
            this.setState({
                isUpdate: false,
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1,
                }
            })
        })
    }

    handleRemove = (data) =>{
        axios.delete(`http://127.0.0.1:3000/posts/${data}`).then((res) => {
            this.getPostAPI();
        });
    }

    handleUpdate = (data) => {
        console.log(data)
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
    }

    handleFormChange = (event) => {
        let formBlogPostNew = {...this.state.formBlogPost};
        let timestamp = new Date().getTime();
        if(!this.state.isUpdate){
            formBlogPostNew['id'] = timestamp;
        }
        formBlogPostNew[event.target.name] = event.target.value;
        this.setState({
            formBlogPost: formBlogPostNew
        })
    }

    handleSubmit = () => {
        if(this.state.isUpdate){
            this.putDatatoAPI();
        }else{
            this.postDatatoAPI();
        }
    }

    componentDidMount(){
        // Pemanggilan API menggunakan Fetch
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(json => {
        //         this.setState({
        //             post: json
        //         })
        //     })

        // Pemanggilan API menggunakan Axios
        // axios.get('http://127.0.0.1:3000/posts')
        //     .then((result) => { //parameter result penamaannya bebas...
        //         this.setState({
        //             post: result.data
        //         })
        //     })

        // Pemanggilan API menggunakan Axios (menggunakan method)
        this.getPostAPI();
    }
    render() { 
        return (  
            <Fragment>
                <p className="section-title">Blog Post</p>
                <div className="form-add-post">
                    <label className="title">Title</label>
                    <input type="text" name="title" value={this.state.formBlogPost.title} className="title" placeholder="add title" onChange={this.handleFormChange}/>
                    <label className="body">Blog Content</label>
                    <textarea type="text" name="body" value={this.state.formBlogPost.body} className="body-content" id="body" cols="30" rows="10" placeholder="add blog content" onChange={this.handleFormChange}/>
                    <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
                </div>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate}/>
                    })
                }
            </Fragment>
        );
    }
}
 
export default BlogPost;