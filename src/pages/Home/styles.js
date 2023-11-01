import { styled } from "@mui/material";

export const Container = styled('div')`
    background-image: url('bg.jpg');
    background-repeat: repeat;
    height: 100vh;
    font-family: Poppins, sans-serif;
    padding: 48px 16px;
`;

export const Title = styled('h1')`
    font-weight: bold;
    font-size: 2rem;
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
        height: 2px;
        background-color: #FB6C6C;
        top: 100%;
        left: 50%;
    }
    text-align: center;
`;