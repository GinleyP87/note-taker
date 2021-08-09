//depend
const express = require("express");
const fs = require("fs");


// express, set port
const app = express();
const PORT = process.env.PORT || 3002


// required  
const noteAPIrouter = require("./routes/note-API-router.js")
const noteHTMLrouter = require("./routes/note-HTML-router.js")
const dbFilePath = "./db/db.json";


//parses data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//call styles
app.use("/assets", express.static("./public/assets"));


//use routers
app.use('/api', noteAPIrouter)
app.use('/', noteHTMLrouter)


// listen to server
app.listen(PORT, () => {
    console.log(`Application is listening on PORT ${PORT}!`);
});