import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [pokemonData, setPokemonData] = useState([]);
    useEffect(() => {
      axios
        .get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then((response) => {
          console.log(response.data.results);
          setPokemonData(response.data.results);
        })
        .catch((err) => console.log(err));
    }, []);
    
    return (
      <>
        <h1 className='title'>Axios Pokemon API</h1>
        <div className='App' style={{border:"solid black 3px", 
        width:"30%",
        fontSize:"24px",
        alignItems:"center", 
        textAlign:"center", 
        margin:"20px",
        marginLeft: "35%",
        marginRight: "35%",
        display:"flex",
        backgroundColor:"red",
        color: "white"}}>
          <ul>
            {pokemonData.map((pokemon, index) => (
              <li key={index}>{pokemon.name}</li>
            ))}
          </ul>
          
        </div>
      </>
    );
};

export default App;
