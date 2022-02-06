const express = require('express')
const app = express();

const PORT = 3000;


let favoriteMovies =
[
{Title: 'Superman', Actor: 'Christopher Reid', Year: '1978'},
{Title: 'Batman', Actor: 'Michael Keaton', Year: '1989' },
{Title: 'Spiderman', Actor: 'Toby Maguire', Year: '2002' },
{Title: 'Iron Man', Actor: 'Robert Downey Jr.', Year: '2005' },


];

let movie = 
[         { Title: 'Superman'},
          {Title: 'Batman'},       
          {Title: 'Spiderman'},
          {Title: 'Iron Man'},         
    
];    

let actor = 
[         {Actor: 'Christopher Reid'},
          {Actor: 'Michael Keaton'},         
          {Actor: 'Toby Maguire'},   
          {Actor: 'Robert Downey Jr.'},

    
];       

let year = 
[         {Year: '1978'}, 
          { Year: '1989'},
          {Year: '2002'},
          {Year: '2005'},


  {Class: 'FSW-125 Week2 First Server', CreatedBy: 'Rafael Fernandez'},    
    
];   




app.get('/favoriteMovies',(req, res) => {
    res.send(favoriteMovies)
});         

app.get('/favoriteMovies/:movie',(req, res) => {
    res.send(movie)
});

app.get('/favoriteMovies/:movie/:actor',(req, res) => {
    res.send(actor)
});

app.get('/favoriteMovies/:movie/:actor/:year',(req, res) => {
    res.send(year)
});





// server start logic
app.listen('3000', () => {
    console.log(`App started on port: ${PORT}`)
})



