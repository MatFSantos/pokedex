import { styled } from "@mui/material";

export const Container = styled("div")`
  --bg-color: hsla(0, 0%, 100%, 0.75);
  background-image: linear-gradient(0deg, var(--bg-color), var(--bg-color)), url("bg.jpg");
  font-family: Poppins, sans-serif;
  padding: 48px 16px;
`;

export const Title = styled('h1')`
    font-weight: bold;
    font-size: 3rem;
    i {
        display: inline-block;
        height: 0.7em;
        width: 0.7em;
        background-image:  url("pokeball.svg");
        background-repeat: no-repeat;
    }
    ::after{
        content: "";
        position: relative;
        display: block;
        width: 2.3em;
        height: 4px;
        background-color: ${({ theme }) => theme.palette.pokedex.main};
        top: 100%;
        left: 50%;
    }
    text-align: center;
`;

export const PokedexGrid = styled('div')`
    display: grid;
    align-items: center;
    justify-content: center;
    gap: 10px;
    
    grid-template-columns: repeat(4,1fr);
`

export const ContainerForm = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  margin: 50px 0;

  > {
    margin: 0 10px;
  }
`;

export const TitleForm = styled('h3')`
    color: ${({ theme }) => theme.palette.pokedex.main};
    font-weight: bold;
    font-size: 2rem;
    margin: 0;
`;

export const ContentForm = styled("div")`
  display: flex;
  justify-content: center;
`;

export const Option = styled("a")`
  padding: 8px;
  font-size: 1rem;
  margin: 2px;
  border-radius: 4px;
  border: 1px solid ${(props) => (props.selected ? props.theme.palette.pokedex.main : "black")};
  background-color: ${(props) => (props.selected ? props.theme.palette.pokedex.main : "white")};
  color: ${(props) => (props.selected ? "white" : "black")};
  font-weight: bold;
  cursor: pointer;
  transition: all ease 0.2s;

  :hover {
    transform: scale(1.1);
  }
`;