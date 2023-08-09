// components/postList.js

import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import PostView from './postView'

class PostList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
    }
  }

  componentDidMount() {
    axios.get('https://techcrunch.com/wp-json/wp/v2/posts').then((res) => {
      const posts = res.data
      this.setState({ posts })
    })
  }

  createMarkup(html) {
    return { __html: html }
  }

  render() {
    return (
      <div>
        {this.state.posts.map((post) => (
          <Link to={`/${post.slug}`} key={post.id}>
            <div className="card" key={post.id}>
              <div className="card-content">
                <h3>
                  <div
                    dangerouslySetInnerHTML={this.createMarkup(
                      post.title.rendered,
                    )}
                  />
                </h3>
                <div
                  dangerouslySetInnerHTML={this.createMarkup(
                    post.excerpt.rendered,
                  )}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    )
  }
}

export default PostList
