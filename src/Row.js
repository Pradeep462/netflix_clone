import React, { useEffect, useState } from 'react';
import axios from './axios';

import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/"

const Row=({title,fetchURL, isLargeRow})=>{

    const [movies, setMovies] = useState([]);

    useEffect(()=>{ // 
        async function fetchData(){
            const request =  await  axios.get(fetchURL); //fetch(`https://api.themoviedb.org/3/movie/550?api_key=e0b07ffc884de8b4da0f02dbb9a478a9`).then((responce)=>{
           setMovies(request.data.results);
           

            return request;
        }
         fetchData();
       
    },[fetchURL]);
   
//console.log(movies);

    return (

       

        <div  className="row">

          <h2>{title}</h2>
          
          <div className="row-posters">
                   {}
                  {movies.map(movie =>(
                      <img  
                      key={movie.id}
                      className={`row-poster ${isLargeRow && "row-posterLarge"}`}
                      src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                  )
                 )  }
          </div>
        </div>

      
    );

}


export default Row;