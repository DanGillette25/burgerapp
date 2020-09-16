const orm = require('./../config/orm');
//const exphbs = require("express-handlebars")
const express = require("express")
const burger = require("./../models/burger.js")

var router = express.Router();

// router.engine("handlebars", exphbs({ defaultLayout: "main"}));
// router.set("view engine", "handlebars");

router.get("/", function (req, res) {

    burger.selectAll(function(data){

        var burgObject = {

            burgers: data

        }

        console.log(burgObject)
        res.render("index", burgObject);

    })

})

router.post("/api/burgers", function(req,res){

    burger.insertOne([req.body.burgername],
    function(result){
        res.json({ id: result.insertID});
    })



})

router.put("/api/burgers/:id", function(req, res){

    var condition = "id = " + req.params.id;

    burger.updateOne({
        devoured: true
    }, condition, function(result){

        if(result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }


    })


})


module.exports = router