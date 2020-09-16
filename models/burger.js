const orm = require("./../config/orm")

var burger = {
selectAll: function(cb){
orm.selectAll(function(res){
    cb(res)
});

},

insertOne: function(cb){
    
orm.insertOne(newburger,function(res){
    cb(res)
})

},

updateOne: function(cb) {

orm.updateOne(id, function(res){
    cb(res);
})

}

}

module.exports = burger;
