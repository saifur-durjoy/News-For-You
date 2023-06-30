import React, { Component } from 'react'
import NewPara from './NewPara'
import Spinner from './Spinner';

export class News extends Component {
    constructor(){
        super();
        this.state = {
            articles: [],
            page: 1,
            loading: false
        }
    };

    async componentDidMount () {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apikey}&pageSize=${this.props.pageSize}&page=1`
        let data = await fetch(url);
        this.setState({loading: true})
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    handlePrevious = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apikey}&pageSize=${this.props.pageSize}&page=${this.state.page-1}`;
        this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            page: this.state.page-1,
            totalResults: parsedData.totalResults,
            loading: false
        })
        
    }
    handleNext = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apikey}&pageSize=${this.props.pageSize}&page=${this.state.page+1}`;
        this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            page: this.state.page+1,
            totalResults: parsedData.totalResults,
            loading: false
        })        
    }

    render() {   
     let {mode} = this.props    
    return (
    <>
    <div className="container my-3 text-center">
        <h1 className={`my-5 text-${this.props.mode==='dark' ? 'light' : 'dark'}`}> NewsForYou - Top News  </h1>
        {this.state.loading===true && <Spinner/>}
        <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>{
              return <div className="col-md-4" key={element.url}>
                <NewPara title={element.title} description={element.description?element.description.slice(0,120):""} 
                         imgSrc={!element.urlToImage?"https://scitechdaily.com/images/Alpha-Centauri-A-and-B-scaled.jpg":element.urlToImage} url={element.url} 
                         publishedAt={element.publishedAt} mode={mode} />
                     </div> 
            })}
        </div>
        <div className="d-flex justify-content-between mx-5">
            <button onClick={this.handlePrevious} type="button" className={`btn btn-${mode==='dark' ? 'warning' : 'dark'} ${this.state.page<=1? "invisible" : "visible"}`}>Previous</button>
            <button onClick={this.handleNext} type="button" className={`btn btn-${mode==='dark' ? 'warning' : 'dark'}`} disabled={Math.ceil(this.state.totalResults/this.props.pageSize)<=this.state.page ? true : false} >Next</button>
        </div>   
    </div>
    </>     
    )
  }
}

export default News