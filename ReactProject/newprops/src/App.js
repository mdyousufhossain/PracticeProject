import React, { useState,useEffect } from "react"
import './App.css';
import { BiSearchAlt2 } from "react-icons/bi";
// import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

const _API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=6e952c93`;



const App = () =>{
    const [movies,setMovies] = useState([]);
    const [searchTerm,setSerachTerm] = useState([])
    const searchMovies = async(title) =>{
        const response = await fetch(`${_API_URL}&s=${title}`)
        const data = await response.json();

        setMovies(data.Search)
    }
    
    useEffect(() =>{
        searchMovies('Spiderman')
        
    },[]);

    return (
            <div className="app">  
                <h1>Find Movie</h1>

                <div className="search">
                  <input placeholder="Search Movies"
                    value={searchTerm}
                    onChange={(e)=>{setSerachTerm(e.target.value)}}
                  />

                    <h3 onClick={()=>searchMovies(searchTerm)}> 
                        <BiSearchAlt2 />  
                    </h3>
                </div>
                 {
                     movies?.length>0
                     ? (
                        <div className="container">
                            {movies.map((movie) =>(
                                <MovieCard movie={movie} />
                            ))}
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