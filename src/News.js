import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Footer from './Components/Footer';
import Navbar from './Navbar/Navbar';
//css grid has at max 12 col , col-md-4 , so 4*3 = 12,divides spaces among three items
export class News extends Component {

   
    constructor() {
        super();

        this.state = {
            articles: [],
            loading: false,
            page:1
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=dd8aec9ff0e94b5e956b6ac0219ad979&page=1&pageSize=20";
        let data = await fetch(url);

        // async makes it asynchronus and await waits for the requried response from api
        let parsedData = await data.json()
        this.setState({articles:parsedData.articles, totalResults: parsedData.totalResults})


    }

    handlePrevClick = async ()=>{

        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=dd8aec9ff0e94b5e956b6ac0219ad979&page=${this.state.page-1}&pageSize=20`;
        let data = await fetch(url);

        // async makes it asynchronus and await waits for the requried response from api
        let parsedData = await data.json()

        this.setState(
           {
            page : this.state.page -1,
            articles:parsedData.articles
           }
        )
    }
    handleNextClick = async ()=>{

        //we have kept by ourself that pageSize should be 20
        // Math.ceil(totalResults/pageSize) will be checked , as if it is true then only we move on to next page

        if(  this.state.page +1 > Math.ceil (this.state.totalResults/20)){


        }
        else{
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=dd8aec9ff0e94b5e956b6ac0219ad979&page=${this.state.page+1}&pageSize=20`;
            let data = await fetch(url);

            // async makes it asynchronus and await waits for the requried response from api
            let parsedData = await data.json()
            

            this.setState(
                {
                page : this.state.page +1,
                articles:parsedData.articles
                }
            )

        }

    }
    render() {
        return (
            <>
              <Navbar  />
            
            <div className="container my-3">
                <h1 className="text-centre" style={{textAlign:"center",margin:"20px 20px"}}> Top Headlines</h1>

                <div className="container d-flex justify-content-between"> 
                    <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}>&larr;Previous</button>
                    <button disabled={ this.state.page +1 > Math.ceil (this.state.totalResults/20)} type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                
                </div>
                
                <div className="row">

                    {this.state.articles.map((element) => {

                        return <div className="col-md-4" key={element.url}>
                            <Newsitem  title={element.title ? element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageurl={element.urlToImage} newsUrl={element.url} />
                        </div>

                    })}


                </div>

               


            </div>
             
                </>
        )
    }
}

export default News
