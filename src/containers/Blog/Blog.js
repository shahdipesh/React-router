import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import Newpost from "../Blog/NewPost/NewPost";
import "./Blog.css";

import Posts from "../Blog/Posts/posts";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/new-post" exact>
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/new-post" exact component={Newpost} />

          <Route
            path="/"
            component={Posts}
          />
        </Switch>
      </div>
    );
  }
}

export default Blog;
