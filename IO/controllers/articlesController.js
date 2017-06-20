var Article = require("../models/Articles");

module.exports = {

	create: function(req, res) {
		console.log("yea")
		Article.create(req.body).then(function(doc){
			res.json(doc);
		}).catch(function(err){
			res.json(err);
		});
	},
	
	read: function(req, res) {
		Article.find({})
		.then(function(doc){
			res.json(doc);
		}).catch(function(err){
			res.json(err);
		})
	},

	destroy: function(req, res){
		Article.remove({
			_id: req.params.id
		}).then(function(doc){
			res.json(doc);
		}).catch(function(err){
			res.json(err);
		})
	}
}