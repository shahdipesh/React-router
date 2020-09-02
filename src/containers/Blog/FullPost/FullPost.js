import React, { Component } from "react";
import axios from "axios";

import "./FullPost.css";

class FullPost extends Component {
  state = {
    loadedPost: null,
  };

  componentDidMount() {            //once the component loads, fetch post with specific id
    this.fetchPost()
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevProps!== this.props){
      console.log("PreviousProps",prevProps)
      console.log("Props",this.props)
    this.fetchPost()
    }
  }
  

  fetchPost =()=>{

    axios
    .get(`https://jsonplaceholder.typicode.com/posts/` + this.props.match.params.id)
    .then((res) => {
      this.setState({ loadedPost: res.data });
    });
  }

  render() {
    let post = "Loading";

    if (this.state.loadedPost) {     
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
