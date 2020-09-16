const connection = require("./connection")

var orm = {

    selectAll: function(cb) {

        var queryString = "SELECT * from burgers;";

        connection.query(queryString, function(err, result) {
            if (err) throw err;

            cb(result)


        });

    
    },

    insertOne: function(burgername,cb) {

        var queryString = "INSERT INTO burgers SET ?"

        connection.query(queryString, {burger_name: burgername}, function(err, result) {
            if (err) throw err;

           cb(result)


        });


    },

    updateOne: function(id,cb){
        var queryString = "UPDATE burgers SET devoured = true WHERE id = ?"

        connection.query(queryString, [id], function(err, result) {
            if (err) throw err;

            cb(result)


        });


    }


    
  };
  
  module.exports = orm;
  

