import "./App.css";
import { useState,useEffect } from "react";
import { AddColor } from "./ColorBox";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Routes, Route, NavLink,Navigate } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';
import {MovieDetails} from './MovieDetails';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu'
import {useNavigate} from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
// import Paper from '@mui/material/Paper';
import { Paper } from '@mui/material';
import { BasicForm } from "./BasicForm";
<script src="js/reactjs/main.js" type = "text/babel"></script>





export default function App(){

  
  const INITIAL_MOVIE_LIST =
   [ { id:"100",name: "RRR", poster: "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG", rating: 8.8, summary: "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.", }, { id:"101",name: "Iron man 2", poster: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg", rating: 7, summary: "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.", }, { id:"102",name: "No Country for Old Men", poster: "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg", rating: 8.1, summary: "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.", }, { id:"103",name: "Jai Bhim", poster: "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg", summary: "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case", rating: 8.8, }, { id:"104",name: "The Avengers", rating: 8, summary: "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.", poster: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg", }, { id:"105",name: "Interstellar", poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg", rating: 8.6, summary: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.", }, { name: "Baahubali", poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg", rating: 8, summary: "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.", }, { name: "Ratatouille", poster: "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=", rating: 8, summary: "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him." } ]; 
  
  fetch("https://6294c26d63b5d108c1933336.mockapi.io/movies")
  .then(response => response.json())
  .then(data => { 
    console.log(data);
    INITIAL_MOVIE_LIST(data);
  });
  
  const[movieList, setMovieList] = useState(INITIAL_MOVIE_LIST);
  const[mode,setMode] = useState("light")
  const theme = createTheme({
    palette: {  
      mode: mode,
    },
  });
  const navigate = useNavigate();
  return (
    
    <ThemeProvider theme={theme}>
    <Paper style={{minHeight:"100vh"}} elevation={3} >
    
    <div>
      <AppBar position="static">
        <Toolbar>
           
          
          <Button color="inherit"  onClick={() => navigate('/')}>Welcome</Button>
          <Button color="inherit" onClick={() => navigate('/Movies')}>Movie List</Button>
          <Button color="inherit" onClick={() => navigate('/Movies/add')}>Add Movie</Button>
          <Button 
          startIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          color="inherit" onClick={() => setMode(mode==="light"?"dark":"light")}>
            
          {mode==="light"?"dark":"light"} mode
          </Button>
        </Toolbar>
      </AppBar>
<div className="router-container">
<Routes>
    <Route path="/" element={<Welcome/>} />
    <Route path="/movies" element={<Movielist movieList={movieList} setMovieList={setMovieList}/>} />
    <Route path="/movies/:id" element={<MovieDetails  movieList={movieList} />} />
    <Route path="/404" element={<NotFound/>} />
    <Route path="*" element={<Navigate replace to="/404" />} />
    <Route path="/movies/add" element={<AddMovie movieList={movieList} setMovieList={setMovieList}/>} />
    <Route path="basicform" element={<BasicForm/>} />

    </Routes>
    </div>
</div>
</Paper>
    </ThemeProvider>

  )
  
}

function NotFound() {
  return(
    <div>
      <img 
      className="not-found"
      width ="100%"
      height ="100%"
      src=" https://c.tenor.com/swTDQJ85dDEAAAAC/aaaa.gif"
      alt= "not found"/>
    </div>
  )
}



 




function Welcome(){
  return (
    <h1>Welcome to Movie App</h1>
  )
}

function Movielist({movieList, setMovieList}){
  const INITIAL_MOVIE_LIST = [ { name: "RRR", poster: "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG", rating: 8.8, summary: "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.", }, { name: "Iron man 2", poster: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg", rating: 7, summary: "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.", }, { name: "No Country for Old Men", poster: "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg", rating: 8.1, summary: "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.", }, { name: "Jai Bhim", poster: "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg", summary: "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case", rating: 8.8, }, { name: "The Avengers", rating: 8, summary: "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.", poster: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg", }, { name: "Interstellar", poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg", rating: 8.6, summary: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.", }, { name: "Baahubali", poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg", rating: 8, summary: "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.", }, { name: "Ratatouille", poster: "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=", rating: 8, summary: "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him." } ]; 
  
  
  
  // const movieList = [ { name: "RRR", poster: "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG", rating: 8.8, summary: "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.", }, { name: "Iron man 2", poster: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg", rating: 7, summary: "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.", }, { name: "No Country for Old Men", poster: "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg", rating: 8.1, summary: "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.", }, { name: "Jai Bhim", poster: "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg", summary: "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case", rating: 8.8, }, { name: "The Avengers", rating: 8, summary: "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.", poster: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg", }, { name: "Interstellar", poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg", rating: 8.6, summary: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.", }, { name: "Baahubali", poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg", rating: 8, summary: "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.", }, { name: "Ratatouille", poster: "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=", rating: 8, summary: "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him." } ]; 
  
  return (
    <div className="App">

    
     
      <div className="movie-list">
      {movieList.map(mv => <Movie movie={mv}/> )} 

    
      

      
      </div>
      
    
   
    </div>
  
  );
}  

function Movie({movie}){
  const styles = {
    color: movie.rating>8 ? "green" : "red",
     
  };
  const [show,setshow] = useState(true) 

  const parastyle = {
    display: show ? "block" : "none",
  }
  // const movie =  { name: "RRR", poster: "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG", rating: 8.8, summary: "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.", }
  return(
    <Card className="movie-container">
      <img src={movie.poster} className= "movie-poster" alt={movie.name} />
      <CardContent>
      <div className="movie-specs">
          <h2 className="movie-name">{movie.name}
          <IconButton onClick={() => setshow(!show)} color="primary">
         {show ?<ExpandLessIcon /> : <ExpandMoreIcon />}
         <InfoIcon />
      </IconButton></h2>
          <p style ={styles}className="movie-rating">⭐{movie.rating}</p>
      </div>
      </CardContent>
      
       
      <p style ={parastyle} className="movie-summary">{movie.summary}</p>

       
      <CardActions>
      <Counter/> <IconButton onClick={() =>{ let copyMovieList = [...Movielist];
        copyMovieList.splice(movie.name,1);
        let removedMovie=console.log(movie.name);
        console.log(removedMovie)
        // setMovieList(copyMovieList);
      }} color="error">
        <DeleteIcon /></IconButton>
        </CardActions>
       
    </Card>
  )
}


function Counter() {
  // let like = 0;
  const [like, setLike] = useState(0);
  const [dislike, setdislike] = useState(0);
  // useEffect(() =>{ 
  //   console.log("like is",like);
  //   console.log("total click is ",like+dislike);
  // },[like,dislike])
  // const [state,setstate] = useState(initialvalue);
  

  return (
    <div className="counter-container">
      <IconButton onClick={() => setLike(like + 1)} className="btlarge" aria-label="like" color ="primary">
      
      <Badge badgeContent= {like} color="primary">
      👍  
</Badge>
</IconButton>
       
<IconButton onClick={() => setdislike(dislike + 1)} className="btlarge" aria-label="dislike" color ="error">
      
    <Badge badgeContent= {dislike} color="error">
    👎  
 </Badge>
</IconButton>
   
    </div>
  );
}






function AddMovie({movieList,setMovieList}){
  const[name,setName] = useState(" ");
  const[poster,setPoster] = useState(" ");
  const[rating,setRating] = useState(" "); 
  const[summary,setSummary] = useState("");
  const newMovie ={name: name, poster:  poster, rating: rating, summary: summary }
  return (
    <div className="add-movie-form">
       
    <TextField  onChange={(event) => setName(event.target.value)}    label="Name" variant="outlined" />
     
    <TextField  onChange={(event) => setPoster(event.target.value)}    label="Poster" variant="outlined" />
  
    <TextField  onChange={(event) => setRating(event.target.value)}   label="Rating" variant="outlined" />
     
    <TextField  onChange={(event) => setSummary(event.target.value)}  label="Summary" variant="outlined" />
    
    {/* <button > Add Movie </button>   */}
    <Button onClick={() =>{setMovieList ([...movieList, newMovie])}} variant="contained">ADD MOVIE</Button>
    </div>
  )
}



