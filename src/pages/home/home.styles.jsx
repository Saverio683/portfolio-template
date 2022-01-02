import styled from 'styled-components';
import backgroundImage from '../../assets/images/background.jpg';

export const PageContainer = styled.div`
    height: 100%;
    background: url(${backgroundImage}) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-position-y: 60%;
`;

export const SpanContainer = styled.div`
    margin-left: 20vw;

    span {
        display: block;
    }

    @media only screen and (max-width: 700px) {
        margin-bottom: 25vh;
        margin-left: 5vw;
    }
`;

export const BigTypedSpan = styled.span`
    color: #F0E7DC;
    font-size: 96px;
    font-family: 'Roboto Slab', serif;
`;

export const LittleTypedSpan = styled.span`
    color: #34BB22;
    font-size: 44px;
    font-family: 'Roboto Slab', serif;
    letter-spacing: 5px;
    position: absolute;
`;