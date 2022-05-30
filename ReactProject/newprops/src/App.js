import React from "react"
import { useEffect } from "react";


//process.env.REACT_APP_API_KEY
const _API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=6e952c93`;

const App = () =>{
    const searchMovies = async(title) =>{
        const response = await fetch(`${_API_URL}&s=${title}`)
        const data = await response.json();

        console.log(data)
    }
    
    useEffect(() =>{
        searchMovies('')
        
    },[]);

    return (
            <div>
                
                <h1>Hello there</h1>
            </div>
    );
}

export { App  }