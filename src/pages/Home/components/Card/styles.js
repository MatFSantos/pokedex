import { styled } from "@mui/material";

export const CardContainer = styled('div')`
    padding: 1rem;
    height: 100%;
    cursor: pointer;
`;

export const CardContent = styled('div')`
    background-color: #48d0b0;
    color: #fff;
    box-shadow: 0 0 20px 0 #48d0b0;
    border-radius: 3rem;
    overflow: hidden;
    height: 100%;
    padding: 3rem 1rem 3rem 3rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    will-change: box-shadow,transform;
    transition: all .3s;
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
        background-color: #48d0b0;
    }
`
export const PokemonId = styled ('span')`
`
export const CardTitle = styled ('div')`
`
export const PokemonImage = styled ('div')`
`