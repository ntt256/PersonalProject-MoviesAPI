API Movies Project 

Description: This project will be about using API to fetch information about movies and display it to the user. I will be using front-end technologies such as HTML and CSS while 
using Node.js (JavaScript), Express.js, Axios, and of course API.

Requirements: 
Front-End:
*CSS file 

Back-End:
*JSON file for list of dependencies
*Index.js file 
*Index.ejs file
*API key 

Steps:
Stage 1- Requirements:
*Install NPM (npm i & npm init) x
*Install Express, body-parser, axios, and ejs and set to "Type= module" in package.JSON x
*Create all necessary folders and files: Index.js, Views/Index.ejs, public/styles/stylesheet.css x

Stage 2- Design:
*Begin designing how I want the website to look like. Including the different tabs on the website. (15m)

Stage 3- Development 
Phase 1: 
*Setup index.js Start by importing all necessary modules and boot up the server. Then, set up body-parser and Express's static for CSS. 
Set up the API URL and get API Key. x

Phase 2: 
*Begin coding 'index.ejs' for HTML and 'stylesheet.css' for CSS (1hr 45m)

Phase 3: 
*Begin coding 'index.js'

Phase 4: 
*Begin coding and styling "detailedMovieInfo.ejs" file

Stage 4- Testing & Finishing Touch




Problems: 
*Had an issue with styling the layout of <form> using CSS in terms of display-flex... fixed it by learning that 
<form> takes up the only necessary height and width according to its content
-----------------------------------------------------------------------------------------------------------------
*"Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client", this error occured because I typed
"res.render("index.ejs")" 2x. It is basically saying, a request has already been sent to the client, cannot send another one.... fixed it by removing the
additional "res.render()"
-----------------------------------------------------------------------------------------------------------------
*The poster image set as <img> would not fit inside the <div> container, its size is bigger than the <div> container...fixed it by setting height and width of <img> to be 100%
-----------------------------------------------------------------------------------------------------------------
*Experiencing an issue when a user clicks Search button on homepage with 0 movie information entered, it just shows an empty <img> block... fixed it by reading the responses from
Console.log. I figured out a way to make sure the API request is successful, and use another conditional statement
to check an attribute inside the JSON data the API sent to me. For example, if API request was successful, and able to find a movie according 
to my search criteria, then Response = 'True'
-----------------------------------------------------------------------------------------------------------------
*Experienced an issue in detailedMovieInfo.ejs file with where the "Back" button is positioned... fixed it by 
setting Body to be position=relative so that we can make the button position=absolute in order to move it around
-----------------------------------------------------------------------------------------------------------------
*Experienced an issue when trying to load up the detailedMovieInfo.ejs file with all the information displayed about the movie 
from homepage... figured it out by creating a global array and whenever we make API request, we can store that data inside it in order to 
do stuff with that data, such as rendering in detailedMovieInfo.ejs file