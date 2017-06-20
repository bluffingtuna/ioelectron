import React, { Component } from "react";
import Saved from "./Saved"
import API from "../utils/API"
import Panel from "./common/Panel"

class Search extends Component {
	constructor(){
		super();
		this.state = {
			term:"",
			start:"",
			end:"",
			results:[]
		};
		this.handleEndChange = this.handleEndChange.bind(this);
		this.handleTermChange = this.handleTermChange.bind(this);
		this.handleStartChange = this.handleStartChange.bind(this);
		this.getArticles = this.getArticles.bind(this);
	}
	getArticles(e){
		e.preventDefault();
		var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
		var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
  authKey + "&q=";
  		var searchTerm = this.state.term;
  		var startYear = this.state.start;
  		var endYear = this.state.end;
  		var queryURL = queryURLBase + searchTerm;
  		if (parseInt(startYear)){
  			queryURL = queryURL + "&begin_date=" + startYear + "0101";
  		}
  		if (parseInt(endYear)){
  			queryURL = queryURL + "&end_date=" + endYear +"1231";
  		}
  		$.ajax({url:queryURL, method: "GET"})
  		.done((NYTdata) =>{
  			
  			return this.setState({results: NYTdata.response.docs})
  		});
	}
	renderArticles(){
		return this.state.results.map(article => (
				<Panel
					title={article.headline.main}
					url={article.web_url}
					key={article._id}
					id={article._id}
					/>

			));
	}
	handleTermChange(event) {
		this.setState({ term: event.target.value });
	}
	handleStartChange(event) {
		this.setState({ start: event.target.value });
	}
	handleEndChange(event) {
		this.setState({ end: event.target.value });
	}
	handleButtonClick() {
		const newArticle = this.state;
		API.saveArticle(newArticle).then(this)
	}
    render() {
        return (
            <div className="container">
	            <div className="row">
			      <div className="col-md-12 col-sm-12">
			        <br/>
			        
			        <div className="panel panel-primary">
			          <div className="panel-heading">
			            <h3 className="panel-title"><strong><i className="fa fa-list-alt"></i> Search Parameters</strong></h3>
			          </div>
			          <div className="panel-body">		            
			            <form role="form">	              
			              <div className="form-group">
			                <label htmlFor="search">Search Term:</label>
			                <input type="text" onChange={this.handleTermChange} value={this.state.term} className="form-control" id="search-term"/>
			              </div>	         
			              <div className="form-group">
			                <label htmlFor="start-year">Start Year (Optional):</label>
			                <input type="text" onChange={this.handleStartChange} value={this.state.start} className="form-control" id="start-year"/>
			              </div>
			              <div className="form-group">
			                <label htmlFor="end-year">End Year (Optional):</label>
			                <input type="text" onChange={this.handleEndChange} value={this.state.end} className="form-control" id="end-year"/>
			              </div>
			              <button onClick={this.getArticles} type="submit" className="btn btn-info" id="run-search"><i className="fa fa-search"></i> Search</button>
			              <button type="button" className="btn btn-danger" id="clear-all"><i className="fa fa-trash"></i> Clear Results</button>
			            </form>
			          </div>
			        </div>
			      </div>
			    </div>{/*end of the search row*/}

			    <div className ="row">
			    	<div className="col-md-12 col-sm-12">
			    		<br />
			    		<div className="panel panel-primary">
			    			<div className="panel-heading">
			    				<h3 className="panel-title"><strong><i className="fa fa-list-alt"></i> Results</strong></h3>
			    			</div>
			    			<div className="panel-body">
			    				<hr />
			    				{this.renderArticles()}
			    			</div>
			    		</div>
			    	</div>
			    </div> {/*end of result panel*/}
		    </div>
        )
    }
}

export default Search;