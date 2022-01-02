import styled, { css } from 'styled-components';

export const AppContainer = styled.div`
    height: 100%;
`;

export const Title = styled.h1`
    color: #EEECE9;
    font-family: 'Poppins', sans-serif;
    letter-spacing: 2px;

    @media only screen and (max-width: 480px) {
        width: 100%;
    }
`;

export const buttonStyle = css`
    background-color: #EEECE9;
    color: #115108;
    font-weight: bold; 
    border: 1.5px solid #000;
    transition: 0.3s ease-in-out;
    font-family: 'Roboto mono', monospace;
    letter-spacing: 2px;

    &:hover {
        cursor: pointer;
        background-color: #115108;
        transition: 0.3s ease-in-out;
        color: #EEECE9;
    }  
`;