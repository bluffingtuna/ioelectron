import axios from "axios";

const API = {
	//Retrieves all saved articles from the db
	getArticles: function() {
		return axios.get("/api/saved");
	},
	//save an article to the db
	saveArticle: function(article){
		const { title, url }=article
		console.log({ title, url })
		return axios.post("/api/saved",   { title, url })
	},
	//Delete an article user choosed from the db
	deleteArticle: function(id) {
		return axios.delete("/api/saved/"+id)
	}
};

export default API;