import React from 'react';
import Card from "../components/Card";
import './Pokedex.css';
import {Link} from 'react-router-dom';
function Pokedex () {
    return (
        <div className='main-frame'>
            <h1>POKEDEX</h1>
            <Link to="/">
                <button>Voltar</button>
            </Link>
            <div className='pokedex-cards'>
                <div>
                    <Card pokemonName="Bulbassauro" pokemonDescricao="Vive na grama"/>
                </div>
                <div>
                    <Card pokemonName="Squirtle" pokemonDescricao="Vive na agua"/>
                </div>
                <div>
                    <Card pokemonName="Charmander" pokemonDescricao="Vive na putaqueopariu" />
                </div>
            </div>
        </div>
    );
}
export default Pokedex;