import React, { useState, useEffect} from 'react'
import NewPara from './NewPara'
import Spinner from './Spinner';

function News (props) {
    const [articles, setarticles] = useState([])
    const [page, setpage] = useState(1)
    const [loading, setloading] = useState(false)
    const [totalResults, settotalResults] = useState(0)

    const updateNews = async ()=> {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apikey}&pageSize=${props.pageSize}&page=${page}`
        setloading(true)
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData.articles)
        setarticles(parsedData.articles)
        settotalResults(parsedData.totalResults)
        setloading(false)
        filterData();

    }

    const filterData = async ()=>{
        console.log("hello")
        articles.filter((e)=>{
            return e.title.toLowerCase().includes('nba');
        }).map((value)=>{
           return console.log(value.title) 
        })
    }

    useEffect(() => {
     updateNews();
    }, []);
    

    const handlePrevious = async ()=>{
         setpage(page-1)
         updateNews();
    }

    const handleNext = async ()=>{
        setpage(page+1)
        await updateNews();   
    }
  
    return (
    <>
    <div className="container my-3 text-center">
        <h1 className={`my-5 text-${props.mode==='dark' ? 'light' : 'dark'}`}> NewsForYou - Top News  </h1>
        {loading===true && <Spinner/>}
        <div className="row">
            {!loading && articles.filter((e)=>{
            return e.title.toLowerCase().includes('nba');
        }).map((element)=>{
              return <div className="col-md-4" key={element.url}>
                <NewPara title={element.title} description={element.description?element.description.slice(0,120):""} 
                         imgSrc={!element.urlToImage?"https://scitechdaily.com/images/Alpha-Centauri-A-and-B-scaled.jpg":element.urlToImage} url={element.url} 
                         publishedAt={element.publishedAt} mode={props.mode} />
                     </div> 
            })}
        </div>
        <div className="d-flex justify-content-between mx-5">
            <button onClick={handlePrevious} type="button" className={`btn btn-${props.mode==='dark' ? 'warning' : 'dark'} ${page<=1? "invisible" : "visible"}`}>Previous</button>
            <button onClick={handleNext} type="button" className={`btn btn-${props.mode==='dark' ? 'warning' : 'dark'}`} disabled={Math.ceil(totalResults/props.pageSize)<=page ? true : false} >Next</button>
        </div>   
    </div>
    </>     
    )
}

export default News