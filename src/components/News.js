import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 5,
    category: "science",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  //consttuctor..................
  constructor() {
    super();
    this.state = { articles: [], loading: false, page: 1, totalResults: 0 };
  }
  async updateNews() {
    this.props.setProgress(20);

    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(50);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  // FetchMoreData Function

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults
    });
  };

  //React Lifecycle method...................
  async componentDidMount() {
    this.updateNews();
  }
  movePrevFunc = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };
  moveNextFunc = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  render() {
    return (
      <div className="container my-5">
        <h2 className="text-center">News Nation Top Headlines</h2>

        {this.state.loading && <Spinner/>}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          style={{overflow:"hidden"}} 
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container ">
            <div className="row">
              {/* {!this.state.loading &&<Spinner/> } */}
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-3" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 48) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 80)
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      url={element.url}
                      date={element.publishedAt}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default News;

// buttons prev and nex code
/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.movePrevFunc}
          >
            &laquo; Previous
          </button>
          <button
            disabled={
              this.state.page >=
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.moveNextFunc}
          >
            {" "}
            Next &raquo;
          </button>
        </div> */
