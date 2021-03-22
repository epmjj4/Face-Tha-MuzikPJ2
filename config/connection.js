const mysql = require('mysql');

const database = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    port:3306,
    database:'face_tha_muzikDB'
});

database.connect((err) => {
    if (err) throw err;
    //cal first function
});