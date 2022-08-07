import './Card.css'
import React from 'react';
function Card(props){
    return(
        <div>

            <div className="card">
            {/*
                <img alt="Foto Pokemao" ></img>
            */}

            <div className="container">
                <h4><b>{props.pokemonName}</b></h4> 
                <p>{props.pokemonDescricao}</p> 
            </div>
            </div> 
        </div>
    );
}

export default Card;