import React, { Component } from "react";
import API from "../utils/API"
import Panel from "./common/Panel"

class Saved extends Component {
	constructor() {
		super();
		this.state={
			results:[]
		}
		this.getArticles= this.getArticles.bind(this);
	}
	getArticles(){
		API.getArticles().then(res=>{
			console.log(res.data)
			this.setState({results:res.data})
		})
	}
	componentWillMount(){
		this.getArticles();
	}
	rendersavedArticles(){
		return this.state.results.map(article => (
				<Panel
					title={article.title}
					url={article.url}
					id={article._id}
					key={article._id}
					createdAt={article.createdAt}
					saved={true}
					getArticles={this.getArticles}
					/>
			));
	}
    render() {
        return (
            <div className="container">
	            <div className="row">
						<div className="col-md-12 col-sm-12">
						<br/>
							<div className="jumbotron text-center" style={styles.buttonStyle}>
								<h1 style={styles.testcolor}>Your saved articles</h1>
							</div>
							<div className="panel panel-primary">
								<div className="panel-heading">
									<h3 className="panel-title"><strong><i className="fa fa-list-alt"></i> Saved</strong></h3>
								</div>
								<div className="panel-body">
								{this.rendersavedArticles()}
								</div>
							</div>
						</div>
				</div>
			</div>
        );
    }
}

const styles = {
  buttonStyle: {
    backgroundColor: "#2196F3"
  },
  testcolor:{
  	color: "white"
  }
};

export default Saved;
