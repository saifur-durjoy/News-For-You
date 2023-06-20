import React, { Component } from 'react'
import NewPara from './NewPara'

export class News extends Component {
    constructor(){
        super();
        this.state = {
            articles: [],
            page: 1,
        }
    };

    async componentDidMount () {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=532b2e17dc014ae3bfa91063bb5f400f&pageSize=${this.props.pageSize}&page=1`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults
        })
        console.log(this.state.totalResults)
    }

    handlePrevious = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=532b2e17dc014ae3bfa91063bb5f400f&pageSize=${this.props.pageSize}&page=${this.state.page-1}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            page: this.state.page-1,
            totalResults: parsedData.totalResults
        })
        
    }
    handleNext = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=532b2e17dc014ae3bfa91063bb5f400f&pageSize=${this.props.pageSize}&page=${this.state.page+1}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            page: this.state.page+1,
            totalResults: parsedData.totalResults
        })        
    }

    render() {       
    return (
    <>
    <div className="container my-3">
        <h1> Top News </h1>
        <div className="row">
            {this.state.articles.map((element)=>{
              return <div className="col-md-4" key={element.url}>
                <NewPara title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,90):""} 
                         imgSrc={!element.urlToImage?"https://videoland.com/welkom-app/uploads/2023/05/Group-20.png":element.urlToImage} url={element.url} />
                     </div>
            })}
        </div>
        <div className="d-flex justify-content-between mx-5">
            <button onClick={this.handlePrevious} type="button" className={`btn btn-dark ${this.state.page<=1? "invisible" : "visible"}`}>Previous</button>
            <button onClick={this.handleNext} type="button" className="btn btn-dark" disabled={Math.ceil(this.state.totalResults/this.props.pageSize)<=this.state.page ? true : false} >Next</button>
        </div>   
    </div>
    </>     
    )
  }
}

export default News