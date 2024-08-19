import React, { Component } from 'react'
import NewsItems from './NewsItems'
export default class News extends Component {
  articles =  [
    {
      "source": {
        "id": "bbc-sport",
        "name": "BBC Sport"
      },
      "author": null,
      "title": "The Hundred 2024 LIVE: Birmingham Phoenix vs Southern Brave eliminator - cricket score & radio commentary",
      "description": "Birmingham Phoenix face Southern Brave in the men’s Hundred Eliminator – follow radio commentary & score updates.",
      "url": "http://www.bbc.co.uk/sport/cricket/live/c7285zvl3p9t",
      "urlToImage": "https://static.files.bbci.co.uk/ws/simorgh-assets/public/sport/images/metadata/poster-1024x576.png",
      "publishedAt": "2024-08-17T17:07:16.9934792Z",
      "content": "Birmingham Phoenix: Moeen Ali (c), Ben Duckett, Jamie Smith (wk), Liam Livingstone, Dan Mousley, Jacob Bethell, Benny Howell, Sean Abbott, Adam Milne, Tim Southee, Chris Wood\r\nSouthern Brave: James V… [+152 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]
  constructor(){
    super()
    console.log("Hello i am Constrictor From News App");
    this.state = {
    articles: this.articles,
    loading: false,
    page:1,
    }
  }

 async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=328a9a74a4c4407a9ea2025772289620";
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);
    this.setState({articles: parsedata.articles})
  }

handleNextBtn = async () => {
  console.log("Next");
  let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=328a9a74a4c4407a9ea2025772289620&page=${this.state.page + 1}`;
  let data = await fetch(url);
  let parsedata = await data.json();
  console.log(parsedata);
  this.setState({
    page:this.state.page + 1,
    articles: parsedata.articles
  })
}
  
handlePreviousbtn = async () => {
  let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=328a9a74a4c4407a9ea2025772289620&page=${this.state.page - 1}`;
  let data = await fetch(url);
  let parsedata = await data.json();
  console.log(parsedata);
  this.setState({
    page:this.state.page - 1,
    articles: parsedata.articles
  })
}

  render() {
    return (
      <div className="container my-3">

        <h2>News Monkey - Top HeadLines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
          return <div className="col-md-4" key={element.url}>
          <NewsItems title={element.title ? element.title: ""} description={element.description ? element.description : ""} ImageUrl={element.urlToImage} NewsUrl={element.url} author={element.author}/>    
          </div>
          })}
        </div>
         <div className="container d-flex justify-content-between">
         <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePreviousbtn}>Previous</button>
         <button disabled={this.state.page>=2} type="button" className="btn btn-primary" onClick={this.handleNextBtn}>Next</button>
         </div>
      </div>
    )
  }
}
