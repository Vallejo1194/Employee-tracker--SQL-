const mysql = require("mysql")
const express = require("express")
require(console.table);
require('dotenv').config();
const app = require('./index');
const Connection = require("mysql2/typings/mysql/lib/Connection");

const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
    },
    console.log('Connected to database.')
)

db.connect(err => {

if (err) {
    console.log(err)
    throw err};

});