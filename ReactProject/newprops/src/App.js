import React from "react"
import { useEffect } from "react";
import './App.css';
import { BiSearchAlt2 } from "react-icons/bi";
// import SearchIcon from './search.svg';

const _API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=6e952c93`;

const movie1 = {
        "Title": "Doctor Strange",
        "Year": "2016",
        "imdbID": "tt1211837",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg"
    }

const App = () =>{
    const searchMovies = async(title) =>{
        const response = await fetch(`${_API_URL}&s=${title}`)
        const data = await response.json();

        console.log(data)
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
                <div className="container">
                    <div className="movie">
                        <div>
                            <p> {movie1.Year}</p>
                        </div>
                        <div>
                            <img src={movie1.Poster} alt={movie1.Title} />
                        </div>
                        <div>
                            <span>{movie1.Type}</span>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export { App  }