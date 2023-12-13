import React from "react";
import moviesData from "../Data/movieData"; 

const MovieList = ({setMovie}) => {
   

    return (
       
       <div className="movie-list">
       {
        moviesData.map((item)=>(
           <p onClick={()=>setMovie(item)}>{item.title}</p>    
        ))
       }

      
       </div>
        
    )
}
export default MovieList;