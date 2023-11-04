import { styled } from "@mui/material";

export const CardContainer = styled('div')`
    padding: 1rem;
    height: 100%;
`;

export const CardContent = styled("div")`
  background-color: ${(props) => props.colorBg};
  color: #fff;
  box-shadow: 0 0 20px 0 ${(props) => props.colorBg};
  border-radius: 3rem;
  overflow: hidden;
  height: 80%;
  padding: 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  will-change: box-shadow, transform;
  transition: all 0.3s;
  cursor: pointer;
  :hover {
    transform: scale(1.07);
  }
`;

export const BackgroundPokeball = styled ('div')`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    right: -10px;
    bottom: -10px;
    font-size: 10px;
    color: hsla(0,0%,100%,.2);
    ::before{
        display: block;
        border-radius: 100%;
        content: "";
        position: relative;
        width: 10em;
        padding-bottom: 10em;
        border: 4em solid;
        -webkit-clip-path: polygon(0 0,0 40%,50% 40%,50% 60%,0 60%,0 100%,100% 100%,100% 60%,50% 60%,50% 40%,100% 40%,100% 0);
        clip-path: polygon(0 0,0 40%,50% 40%,50% 60%,0 60%,0 100%,100% 100%,100% 60%,50% 60%,50% 40%,100% 40%,100% 0);
    }
    ::after{
        display: block;
        border-radius: 100%;
        content: "";
        position: absolute;
        width: 5em;
        padding-bottom: 5em;
        background-color: hsla(0,0%,100%,.2);
    }
`
export const PokemonId = styled("span")`
  position: absolute;
  top: 20px;
  right: 40px;
  font-size: 2.5rem;
  color: hsla(0, 0%, 100%, 0.2);
`;

export const CardTitle = styled("div")`
  align-self: flex-start;

  > h2 {
    text-transform: capitalize;
    margin: 0;
    font-size: 2rem;
  }
`;


export const Types = styled("div")`
  margin-top: 1rem;

  > span {
    border-radius: 100rem;
    display: table;
    background-color: hsla(0, 0%, 100%, 0.2);
    padding: 0.3rem 0.7rem;
    text-align: center;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
  }
`;

export const PokemonImage = styled("div")`
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  max-width: 50%;

  > img {
    max-width: 100%;
    max-height: 100%;
    -webkit-filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.2));
    filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.2));

    overflow-clip-margin: content-box;
    overflow: clip;
  }
`;