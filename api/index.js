require('dotenv').config(); // .env 파일 로드

const mongoose = require('mongoose');
const CONNECTION_STRING = process.env.CONNECTION_STRING; // MongoDB 연결 문자열
const DATABASE = "sample_mflix"; // 데이터베이스 이름

mongoose.connect(CONNECTION_STRING)
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("MongoDB connection error:", err));


let Express = require("express");
let Mongoclient = require("mongodb").MongoClient;
let cors=require("cors");
const multer=require("multer");

let app=Express();
app.use(cors());



let database;

app.listen(5038,()=>{
    Mongoclient.connect(CONNECTION_STRING,(error,client)=>{
        database = client.db(DATABASE);
        console.log("Mongo DB 연결 성공");
    })
})

app.get('/api/sample_mflix/GetNotes', (request, response) => {
    database.collection("todoappcollection").find({}).toArray((error, result) => {
        response.send(result);
    });
});

app.post('/api/sample_mflix/AddNotes', multer().none(), (request, response) => {
    database.collection("todoappcollection").count({}, function (error, numOfDocs) {
        database.collection("todoappcollection").insertOne({
            id: (numOfDocs + 1).toString(),
            description: request.body.newNotes
        });
        response.json("Added Successfully");
    });
});


app.delete('/api/sample_mflix/DeleteNotes', (request, response) => {
    database.collection("todoappcollection").deleteOne({
        id: request.query.id
    });
    response.json("Delete Successfully");
});
