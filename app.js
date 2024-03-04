const mysql = require('mysql');
const express = require('express');
let app = express();

const connection = mysql.createConnection({
    host: "localhost",
    user: "root", 
    password: "MySQL@1552", 
    database: "Company"
});
app.listen(2324, ()=> {
    console.log('Working');
})