import { useEffect, useState } from 'react';
import { CardContent,CardContainer,BackgroundPokeball,CardTitle,PokemonId,PokemonImage, Types } from './styles';
import { API_URL } from '../../../../data/store/config';
import ApiService from '../../../../data/services/api.service';
import { typeColors } from "../../../../data/utils/common.util";
import { CircularProgress } from '@mui/material';

const Card = ({name, url }) => {
  const [pokemon, setPokemon] = useState();
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await ApiService.get(url.replace(API_URL, ""));
        setPokemon(data);
        setTypes(data?.types);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return (
    <CardContainer>
      {loading ? (
        <CircularProgress color="pokedex" size={100} />
      ) : (
        <CardContent colorBg={typeColors[types[0]?.type.name]}>
          <BackgroundPokeball />
          <PokemonId>#{pokemon?.id}</PokemonId>
          <CardTitle>
            <h2>{name}</h2>
            <Types>{types.length > 0 ? types.map((v, i) => <span key={i}>{v.type.name}</span>) : null}</Types>
          </CardTitle>
          <PokemonImage>
            <img
              src={pokemon?.sprites.other.dream_world.front_default ?? pokemon?.sprites.other['official-artwork'].front_default}
              alt={name}
            />
          </PokemonImage>
        </CardContent>
      )}
    </CardContainer>
  );
}

export default Card;