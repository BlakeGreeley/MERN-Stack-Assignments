import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then(response => {
      return response.json()
    })
    .then(response => {
      setPokemon(response.results)
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);

  return (
    <>
    <h1 className='title'>FETCH</h1>
    <h2 className='title'>807 pokemon</h2>
    <div className='App' style={{border:"solid black 3px", 
                                width:"300px",
                                fontSize:"24px",
                                alignItems:"center", 
                                textAlign:"center", 
                                margin:"20px",
                                marginLeft: "33%",
                                display:"flex",
                                backgroundColor:"red",
                                color: "white"}}>
      <ul>
        {
          pokemon.map((pokemonObj, index) => {
            return (<li key={index}>{pokemonObj.name}</li>)
          })
        }
      </ul>
    </div>
    </>
  );
};

export default App;