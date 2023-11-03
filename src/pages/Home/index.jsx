// import { TextField } from '@mui/material';
import Card from './components/Card';
import { Container, Title,PokedexGrid} from './styles';

const Home = () => {
    return (
        <Container>
            <Title>P<i />kédex</Title>
            <PokedexGrid>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </PokedexGrid>
            {/* <Form>
                <TextField></TextField>
                <Dropdown></Dropdown>
            </Form>
            <Content>
                <Card>
            </Content> */}
        </Container>
    );
}

export default Home;