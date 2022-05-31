import React, { useState,useEffect } from "react"
import './App.css';
import { BiSearchAlt2 } from "react-icons/bi";
// import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

const _API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=6e952c93`;

const movie1 = {
        "Title": "Doctor Strange",
        "Year": "2016",
        "imdbID": "tt1211837",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg"
    }

const App = () =>{
    const [movies,setMovies] = useState([]);

    const searchMovies = async(title) =>{
        const response = await fetch(`${_API_URL}&s=${title}`)
        const data = await response.json();

        searchMovies(data.Search)
    }
    
    useEffect(() =>{
        searchMovies('doctor strange')
        
    },[]);

    return (
            <div className="app">
                
                <h1>Find Movie</h1>
                <div className="search">
                  <input placeholder="Search Movies"
                //   value={}
                //onChange={()=>{}}
                  /> 
                    <h3 onClick={()=>{}}> 
                        <BiSearchAlt2 />  
                    </h3>
                </div>
                 {
                     movies?.length>0
                     ? (
                        <div className="container">

                        <MovieCard movie1={movies[0]}/>

                        </div>
                       ):(
                       <div className="empty">
                           <h2>No Movies Available</h2>
                       </div>
                       )
                 }
               
            </div>
    );
}

export { App  }