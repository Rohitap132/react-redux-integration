import React, { Component } from 'react'
import axios from 'axios'

export class PostList extends Component {
  constructor(props){
    super(props)
    this.state = {
        posts: []
    }
  } 
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response =>{
        this.setState({
            posts:response.data
        })
    })
    .catch(error=>{
        console.error()
    })
  } 
  render() {
    return (
      <div>
        <h2>PostList</h2>
        {this.state.posts.map((posts)=><h2 key = {posts.id}>{posts.title}</h2>)}
      </div>
    )
  }
}

export default PostList
