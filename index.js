import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

let globalMovieInfo;
const port = 3000;
const app = express();
const apiUrl = "http://www.omdbapi.com/?apikey=ec79605a" //API Key is included as query parameter

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//starting our server 
app.listen(port, ()=>{
    console.log("Server has started on port " + port);
});

//homepage 
app.get("/", (req, res) =>{
    res.render("index.ejs");
});

//when a user clicks "Search" for a movie
app.post("/submit", async (req, res) =>{

    console.log(req.body);

    try {
        const result = await axios.get(apiUrl + "&t=" + req.body.movieTitle);
        let resultData = result.data;
        // console.log(resultData);
        globalMovieInfo = resultData;
        console.log(globalMovieInfo);
        res.render("index.ejs", {movieContent: resultData});
    
      } catch (e) {
        console.log(e.message);
      }
});

app.get("/detailedMovieInfo", (req, res) =>{
  res.render("detailedMovieInfo.ejs", {movieContent: globalMovieInfo})
  
})