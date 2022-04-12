const mysql = require('mysql') ;
const express = require('express');

const app = express();
app.use("/assets",express.static("assets"));

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Abhi@2022",
    database: "Lab_9"
})
 
// connection between database and nodejs 
conn.connect(function(error){
    if(error) throw error
    else console.log("connected to the database successfully!")
})

//* connection between html and nodejs
app.get("/",function(req,res){
    res.sendFile(__dirname+'/index.html');
})

app.listen(4500);  // assening port number for html 

var TABLE_NAME="ROOM_VACATING_TABLE_2";
var VALUES="Student_Fname='F5'";
var CONDITION = "Student_id=2001006";

// var commund_1 = 'insert into '+TABLE_NAME+' VALUES('+VALUES+')';
// var  commund_2  = 'delete from '+TABLE_NAME+' where '+CONDITION;
// var commund_3 = 'select *from '+TABLE_NAME;
 var commund_4 = 'update '+TABLE_NAME+' SET '+VALUES+' WHERE '+CONDITION;

// conn.query( commund_1, (err, result, fields) => {
//     if (err) {
//         return console.log(err);
//     }
//     return console.log(result);
// })

// conn.query( commund_2, (err, result, fields) => {
//     if (err) {
//         return console.log(err);
//     }
//     return console.log(result);
// })

// conn.query( commund_3, (err, result, fields) => {
//     if (err) {
//         return console.log(err);
//     }
//     return console.log(result);
// })

conn.query( commund_4, (err, result, fields) => {
    if (err) {
        return console.log(err);
    }
    return console.log(result);
})

