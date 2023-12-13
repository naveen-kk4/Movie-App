import React,{useState} from 'react';
import './App.css';
import MovieDisplay from "./Components/MovieDisplay.js";
import MovieList from "./Components/MovieList.js";

function App() {
  const [selectedMovie,setSelectedMovie] = useState(null);
  return (
   <div>
    <MovieList setMovie={setSelectedMovie}></MovieList>
    <MovieDisplay selectedMovie={selectedMovie}></MovieDisplay>
   </div>
    
  );
}

export default App;
