import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../components/Footer';
import './Home.css'

function Home () {
    return (
        <div className='main-frame'>
            <div className='pokedex-title'>
                <h1>
                    Pokedex
                </h1>
            </div>
            <div className='pokedex-description'>
                Projeto pra estudo, criado com base no famoso game Pokemon
            </div>

            <div className='pokedex-pokemon-div'>
                <div className='pokedex-access-button'>
                    <Link to="/pokedex" className='text-decoration'>
                                Acessar Pokedex
                    </Link>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}
export default Home;