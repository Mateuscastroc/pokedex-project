import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css'

function Home () {
    return (
        <div>
            <div className='pokedex-title'>
                <h1>
                    Pokedex
                </h1>
            </div>
            <div className='pokedex-description'>
                Projeto pra estudo, criado com base no famoso game Pokemon
            </div>

            <div>
                <Link className='text-decoration' to="/pokedex">
                    <div className='pokedex-access-button'>
                        Acessar Pokedex
                    </div>
                </Link>
            </div>
        </div>
    );
}
export default Home;