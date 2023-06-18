import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'



export default class News extends Component {

  static defaultProps = {
    country:"in",
    pageSize:9,
    category:"general"
  }

  static propTypes = {
    country:PropTypes.string,
    pageSize:PropTypes.number,
  }

  capitalizer(s){
    return s.charAt(0).toUpperCase()+s.slice(1);
  }

  constructor(props) {
    super(props);
    // console.log("i am constructor from news component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title=`${this.capitalizer(this.props.category)} - PressWire`
  }

  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_APIKEY}&page=4&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    // console.log(process.env.REACT_APP_APIKEY);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults:parsedData.totalResults, loading:false });
  }

  handleNextClick = async () => {
    if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_APIKEY}&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading:false
      });
    }
  };

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_APIKEY}&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading:false
    });
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center my-5">PressWire - Top Headlines in {this.capitalizer(this.props.category)}</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={
                    element.title.length >= 45
                      ? element.title.slice(0, 45)
                      : element.title
                  }
                  description={
                    element.description != null &&
                    element.description.length >= 60
                      ? element.description.slice(0, 60)
                      : element.description
                  }
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page<=1}
            className="btn btn-dark"
            onClick={this.handlePrevClick}>
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)}
            onClick={this.handleNextClick}>
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
