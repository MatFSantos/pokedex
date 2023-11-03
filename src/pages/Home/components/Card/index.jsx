// import { TextField } from '@mui/material';
import { CardContent,CardContainer,BackgroundPokeball,CardTitle,PokemonId,PokemonImage } from './styles';

const Card = () => {
    return (
        <CardContainer>
            <CardContent>
                <BackgroundPokeball/>
                <PokemonId/>
                <CardTitle>

                </CardTitle>
                <PokemonImage>
                    
                </PokemonImage>
            </CardContent>
        </CardContainer>
    );
}

export default Card;