import React, { Component, useState, useContext, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'
import Nullimage from './Images/nullimage.png'
import { API_DOMAIN, API_KEY } from '../config/api'
import '../index.css'
import GlobalState from '../contexts/GlobalState'



function News(props) {
  const [articles, setArticles] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [totalResults, setTotalResults] = useState(0)
  const [state, setState] = useContext(GlobalState)

  const capitaLize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  const getCorrectCountry = () => {
    if (props.category === 'general') {
      return `${props.country}`
    }
    if (props.category === 'health') {
      return `au`
    }
    if (props.category === 'science' || props.category === 'technology') {
      return `us`
    }
    if (
      props.category === 'business' ||
      props.category === 'sports' ||
      props.category === 'entertainment'
    ) {
      if (props.lxCountry === 'US') {
        return `us`
      }
      if (props.lxCountry === 'AU') {
        return `au`
      }
      if (props.lxCountry === 'GB') {
        return `gb`
      }
    }
  }

  document.title = `${capitaLize(props.category)} - News App`

  const updateNews = async () => {
    props.setProgress(15)
    // let url = `https://velodata.org/model/Retrieve_News_Articles.php?category=${props.category}&country=${props.country}&page=${page}&pageSize=${props.pageSize}`
    let url = buildURL(1)
    setLoading(true)
    let data = await fetch(url)
    props.setProgress(35)
    let parsedData = await data.json()
    props.setProgress(70)
    if (data.status === 200) {
      console.log('OK. The request was executed successfully.')
    } else if (data.status === 429) {
      console.error(
        'Too Many Requests. You made too many requests within a window of time and have been rate limited. ',
      )
    } else if (data.status === 401) {
      console.error(
        "Unauthorized. Your API key was missing from the request, or wasn't correct.",
      )
    } else if (data.status === 500) {
      console.error('Server Error. Something went wrong on our side.')
    }
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100)
  }

  const buildURL = (lnPageNumber) => {
    // console.log(`OK. props.category = ${props.category}`)
    // console.log(`props.country  value = ${props.country}`)
    // console.log(`props.lxCountry value = ${props.lxCountry}`)
    // console.log(`this.state.country BEFORE value = ${state.country}`)
    let url_start = `https://velodata.org/model/Retrieve_News_Articles.php?category=${props.category}`
    let url_end = `&page=${lnPageNumber}&pageSize=${props.pageSize}`

    // console.log(`Correct Country value = ${url_country}`)
    let url_middle = `&country=` + getCorrectCountry()
    let syntax = url_start + url_middle + url_end
    console.log(`And now check URL value = ${syntax}`)
    return syntax
  }

  useEffect(() => {
    updateNews()
    setState((state) => ({ ...state, lxCategory: `${props.category}` }))
  }, [])

  const fetchMoreData = async () => {
    // const url = `https://velodata.org/model/Retrieve_News_Articles.php?category=${
    //   props.category
    // }&country=${props.country}&page=${page + 1}&pageSize=${props.pageSize}`
    const url = buildURL(page + 1)
    setPage(page + 1)
    let data = await fetch(url)
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  }

  return (
    <>
      <h1
        className="text-center"
        style={{ marginTop: '30px', marginBottom: '-10px', color: 'white' }}
      >
        News - Top {capitaLize(props.category)} Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container-fluid mt-4">
          <div className="row">
            {articles.map((element) => {
              return (
                // <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 my-3" key={element.url}>
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 my-3" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    author={element.author}
                    date={element.publishedat}
                    channel={element.name}
                    alt="Card image cap"
                    publishedAt={element.publishedat}
                    imageUrl={
                      element.urlToImage === null || element.urlToImage === ''
                        ? Nullimage
                        : element.urltoimage
                    }
                    urlNews={element.url}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  )
}

News.defaultProps = {
  country: 'us',
  pageSize: 7,
  category: 'general',
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News
