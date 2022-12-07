const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs")

app.get("/", function(req, res) {
    res.render("index.ejs");
});

app.listen(5000, () => {
    console.log("the server has started at port 5000");
} );