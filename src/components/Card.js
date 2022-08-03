import './Card.css'
function Card(){
    const PokemonName = 'Bullbassauro';
    const Descricao = 'Vive Na Grama';
    return(
        <div>

            <div className="card">
            <img alt="Foto Pokemao" ></img>
            <div className="container">
                <h4><b>{PokemonName}</b></h4> 
                <p>{Descricao}</p> 
            </div>
            </div> 
        </div>
    );
}

export default Card;