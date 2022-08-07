import './Footer.css'
import React from 'react';
function Footer () {
    return (
        <div>
            <footer>
                <ul className='pokedex-footer'>
                    <li>&copy;Mateus Castro Da Cunha</li>
                    <li>
                        <a   rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/mateus-castro-5113b610b/">Linkedin</a> 
                    </li>
                    <li>
                        <a  rel="noopener noreferrer" target="_blank" href="https://github.com/Mateuscastroc">Github</a>
                    </li>
                </ul>
            </footer>
        </div>
    );
}

export default Footer;