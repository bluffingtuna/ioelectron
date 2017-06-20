import React, { Component } from "react";
import API from "../../utils/API";

class Panel extends Component {
	saveArticle(article){
		API.saveArticle(article).then($(`#${this.props.id}`).attr("class", "fa fa-star gold"))
	}
	deleteArticle(id){
		API.deleteArticle(id).then(this.props.getArticles);
	}
    render() {
        return (
            <div className="col-md-12 col-sm-6">
		        <div className="panel panel-default">
		          <div className="panel-body">
		            
		            <h5><i
		            	onClick={()=>this.saveArticle(this.props)}
		              style={styles.favoriteStyle}
		              className={this.props.saved ? "fa fa-star gold" : "fa fa-star-o"}
		              aria-hidden="true"
		              id={this.props.id}
		            /> {this.props.title}

		            {this.props.saved? <i
              onClick={() => this.deleteArticle(this.props.id)}
              style={styles.deleteStyle}
              className="fa fa-trash-o"
              aria-hidden="true"
            />:<i/>} <right className="pull-right">{this.props.createdAt}</right>
		            </h5>
		            <a href={this.props.url}>{this.props.url}</a>
		          </div>
		        </div>
		      </div>
        );
    }
}

const styles = {
    favoriteStyle: {
        cursor: "pointer",
        marginRight: 5,
        float: "left"
    },
    deleteStyle: {
        cursor: "pointer",
        marginLeft: 5,
        color: "red",
        float: "right"
    }
};

export default Panel;
