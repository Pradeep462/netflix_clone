import axios from "./axios";
import React, { useEffect, useState } from "react";
import requests from './requests';
import './Banner.css';


const Banner=()=>{

    const [movie, setMovie] = useState([]);


   useEffect(()=>{ // 
    async function fetchData(){
         const request =  await  axios.get(requests.fetchActionMovies); //fetch(`https://api.themoviedb.org/3/discover/movie?api_key=43eafacaa18cb599da684f2e10dab6e0&with_genres=28`).then((responce)=>{
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length) 
            ]);
           console.log(axios.get(requests.fetchActionMovies)); 
            return request;         
    }
     fetchData();
   
},[]);

 console.log(movie);  

    return(
     <header className="banner"
         style={{
             backgroundSize: "cover",
             backgroundImage : `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
             backgroundPosition: "center center",
        }}
        >
       <div className="banner-contents">

           <h1 className="banner-title"
           >
               {movie?.title || movie?.name || movie?.original_name}
           </h1>

           <div className="banner_buttons">

            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>  

            </div>

            <h1 className="banner_description">
                {movie?.overview}
            </h1>
          
       </div>

       <div className="banner-bottom" />

     </header>

    );
}

export default Banner;