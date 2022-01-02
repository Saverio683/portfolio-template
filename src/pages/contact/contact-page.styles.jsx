import styled from "styled-components";

export const PageContainer = styled.div`
    padding: 150px 150px 0 150px;

    @media only screen and (max-width: 700px) {
        padding: 100px 100px 0 100px;
    }

    @media only screen and (max-width: 480px) {
        padding: 100px 50px 0 50px;
    }
`;

export const CoolSpan = styled.span`
    color: #34BB22;
    font-size: 26px;
    display: block;
    margin-top: 50px;
    font-family: 'Poppins', sans-serif;

    @media only screen and (max-width: 700px) {
        font-size: 22px;
    }
`;

export const ImagesContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
    justify-content: center;
    margin-bottom: 100px;

    @media only screen and (max-width: 700px) {
        margin-bottom: 50px;
    }
`;

export const AccountIco = styled.img`
    width: 50px;
    height: 50px;
    padding: 15px;

    &:hover {
        cursor: pointer;
    }

    @media only screen and (max-width: 700px) {
        width: 42px;
        height: 42px;   
    }

`;