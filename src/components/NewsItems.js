import React, { Component } from "react";

export default class NewsItems extends Component {
  constructor(){
    super()
    console.log("Hello I am Constructor From NewsItems");
  }
  render() {
    let { title, description, author, ImageUrl, NewsUrl} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={!ImageUrl ?  "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg" : ImageUrl}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <div>
              <p><b>Author:-</b> {author}</p>
            </div>
            <a rel="noreferrer" href={NewsUrl} target="_blank" className="btn btn-dark btn-sm">
              Read More...
            </a>
          </div>
        </div>
      </div>
    );
  }
}
