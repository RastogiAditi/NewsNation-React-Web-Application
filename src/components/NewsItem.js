import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, url, date } = this.props;
    return (
      <div className="my-5 mx-6">
        <div className="card" >
          <img
            src={
              !imageUrl
                ? "https://images.wsj.net/im-841703/social": imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <div className="card-footer">
        <small className="text-muted">Published Date:&nbsp; {new Date(date).toGMTString()} </small>
      </div>
            <a href={url} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
