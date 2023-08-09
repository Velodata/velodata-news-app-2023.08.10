import React, { Component } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() }
    return <Children {...props} match={match} />
  }
}

class PostView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      post: {},
    }
    this.createMarkup = this.createMarkup.bind()
  }

  componentDidMount() {
    console.log('OK,  made it this far...')
    console.log('object props = ' + this.props)
    const slug = this.props.match.params.slug
    axios
      .get(`https://techcrunch.com/wp-json/wp/v2/posts?slug=${slug}`)
      .then((res) => {
        const post = res.data[0]
        this.setState({ post })
      })
  }

  createMarkup(html) {
    return { __html: html }
  }

  render() {
    let build
    if (this.state.post.title) {
      build = (
        <div>
          <h1>
            <div
              dangerouslySetInnerHTML={this.createMarkup(
                this.state.post.title.rendered,
              )}
            />
          </h1>
          <div
            dangerouslySetInnerHTML={this.createMarkup(
              this.state.post.content.rendered,
            )}
          />
        </div>
      )
    } else {
      build = <div />
    }
    return build
  }
}

export default withRouter(PostView)
