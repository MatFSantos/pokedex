import Card from './components/Card';
import { Container, Title,PokedexGrid, ContainerForm, TitleForm, ContentForm, Option} from './styles';
import { useEffect, useState } from 'react';
import { generations } from '../../data/utils/common.util';
import ApiService from '../../data/services/api.service';
import { CircularProgress } from '@mui/material';

const Home = () => {
  const [generation, setGeneration] = useState(Object.keys(generations)[0]);
  const [ data, setData ] =  useState([]);
  const [loading, setLoading] = useState(true);
  const [pages, setPages] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      if(pages[generation])
        setData(pages[generation]);
      else {
        setLoading(true);
        try {
          const { data } = await ApiService.get(
            `/pokemon?limit=${generations[generation].limit}&offset=${generations[generation].offset}`
          );
          setData(data.results);
          setPages((prev) => ({...prev, [generation]: data.results}));
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchData();
  }, [generation]);


  return (
    <Container>
      <Title>
        P<i />
        kédex
      </Title>
      <ContainerForm>
        <TitleForm>Selecione a geração:</TitleForm>
        <ContentForm>
          {Object.keys(generations).map((g, i) => (
            <Option key={i} selected={generation === g} onClick={() => setGeneration(g)}>
              {g}
            </Option>
          ))}
        </ContentForm>
      </ContainerForm>
      <PokedexGrid>
        {loading ? <CircularProgress color='pokedex' size={100} /> : data.map((v, i) => <Card key={i} name={v.name} url={v.url} />)}
      </PokedexGrid>
    </Container>
  );
}

export default Home;