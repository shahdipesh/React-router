import React, { Component } from "react";
import "./posts.css";
import axios from "axios";
import Post from "../../../components/Post/Post";
import { Route } from "react-router-dom";
import FullPost from '../FullPost/FullPost'

class Posts extends Component {
  state = {
    posts: [],
  };
  clickHandler = (id) => {
    this.props.history.push(`/${id}`);
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      const posts = res.data.slice(0, 4);
      const updatedPosts = posts.map((post) => {
        return {
          ...post,
          author: "Dipesh",
        };
      });

      this.setState({ posts: updatedPosts });
    });
  }

  render() {
    console.log("posts",this.props)
    let posts = this.state.posts.map((post) => {
      return (
        <Post
          title={post.title}
          author={post.author}
          clicked={() => this.clickHandler(post.id)}
        ></Post>
      );
    });
    return (
      <div>
        <section className="Posts">{posts}</section>
        <Route path= "/:id" component={FullPost} />
      </div>
    );
  }
}

export default Posts;
