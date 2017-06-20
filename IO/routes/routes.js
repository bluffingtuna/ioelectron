var express = require("express");
var path = require("path");
var articlesController = require("../controllers/articlesController");

var router = new express.Router();



router.get("/api/saved", articlesController.read);
router.post("/api/saved", articlesController.create);
router.delete("/api/saved/:id", articlesController.destroy);

//Send all requests the index.html page
//React router will handle the rest routing.
router.get("*", function(req, res) {
	res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;