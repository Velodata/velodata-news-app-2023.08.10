import React from 'react'
import '../index.css'

function createMarkup(html) {
  return { __html: html }
}

function NewsItem(props) {
  return (
    <>
      <div
        className="card shadow"
        style={{ backgroundColor: 'rgb(41, 47, 51)', color: 'white' }}
      >
        <img className="card-img-top" src={props.imageUrl} alt={props.alt} />
        <div className="card-body">
          <h5 className="card-title">
            <div dangerouslySetInnerHTML={createMarkup(props.title)} />
          </h5>
          <p
            className="card-text"
            style={{ color: '#b6b4b4' }}
            dangerouslySetInnerHTML={createMarkup(props.description)}
          ></p>
          <p
            className="card-text"
            style={{ marginTop: '-5px', marginBottom: '0px' }}
          >
            <small className="text-muted">
              Author: {!props.author ? 'Unknown' : props.author}
            </small>
          </p>
          <p
            className="card-text"
            style={{ marginBottom: '-3px', marginBottom: '0px' }}
          >
            <small className="text-muted">Channel: {props.channel}</small>
          </p>
          <p className="card-text" style={{ marginBottom: '15px' }}>
            <small className="text-muted">
              {/* Date: {props.date} */}
              {/* Date: {new Date(props.date).toGMTString()} */}
              Date: {new Date(props.date).toLocaleString()}
            </small>
          </p>
          {/* <details style={{ marginBottom: '15px' }}>
            <summary style={{ color: '#f5f5f5', fontSize: '15px' }}>
              Author, Channel and Date
            </summary>
          </details> */}
          <a
            href={props.urlNews}
            className="btn text-white shadow"
            style={{ borderRadius: '12px', fontWeight: 'bold' }}
            rel="noreferrer"
            target="_blank"
          >
            Read more →
          </a>
        </div>
      </div>
    </>
  )
}

export default NewsItem
