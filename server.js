const mysql = require('mysql');

const express = require('express');

const sequelize = require('sequelize');


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