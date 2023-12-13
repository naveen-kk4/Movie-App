import React from "react";


const MovieDisplay = ({selectedMovie})=>{

    return(
        selectedMovie?<div>
        <div>{selectedMovie.title}</div>
        <div>{selectedMovie.director}</div>
        <div>{selectedMovie.actor}</div>
        <div>{selectedMovie.genre}</div>
        </div>:""
    )

}
export default MovieDisplay;