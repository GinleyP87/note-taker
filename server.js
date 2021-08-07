const express = require("express");
const fs = require("fs");


const app = express();
const PORT = process.env.PORT || 3001
const noteHTMLroute = require("./routes/htmlRoutes/note-HTML-routes.js")

// const noteAPIroute = require("./routes/apiRoutes/note-API-routes.js")


// Sets up the Express app to handle data parsing


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/assets", express.static("./assets"));


// app.use('/api', noteAPIroute)

app.use('', noteHTMLroute )
// Starts the server to begin listening

app.listen(PORT, () => {
    console.log(`Application is listening on PORT ${PORT}!`);
});