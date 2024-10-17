const express= require('express');
const app =express();
const dotevn = require('dotenv');
dotevn.config();

app.use(express.static("../client"));
const mongoConnect = require('./db/connection');
const router = require('./routers/userRouter');
app.use(express.json());
app.use(express.urlencoded({extended : true}))
mongoConnect();

app.use(router);

app.listen(process.env.PORT,() =>{
    console.log(`Server running at http://localhost:${process.env.PORT}`);
})
