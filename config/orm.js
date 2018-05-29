//Import mySQL connection.
var connection = require ("../config/connection.js");

var orm = {
    selectAll: function(tableInput){
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function (err,result){
            if (err) throw err;
            console.log(result);      
        });
    },
    insertOne: function(tableInput, colOne, colTwo, valOfColOne, valOfColTwo){
        var queryString = "INSERT INTO ?? (??,??) VALUES (?,?)";
        connection.query(querySrting, [tableInput, colOne, colTwo, valOfColOne, valOfColTwo], function(err, result){
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function(tableInput, colToUpdate, valofCol, itemID){
        var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
        conenction.query(queryString, [tableInput, colToUpdate, valofCol, itemID], function(err, result){
            if (err) throw err;
            console.log(result);
        });
    }
};

module.exports = orm;


