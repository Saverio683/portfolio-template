import styled from 'styled-components';
import { buttonStyle } from '../../app/app.styles';

export const PageContainer = styled.div`
    margin-left: 150px;

    @media only screen and (max-width: 700px) {
        margin-left: 100px;
    }

    @media only screen and (max-width: 480px) {
        margin-left: 50px;
    }
`;

export const Wrapper = styled.div`
    padding: 150px 150px 0 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media only screen and (max-width: 700px) {
        flex-direction: column;
        padding: 100px 0 0 0;
    }  
`;

export const DownloadButton = styled.button`
    font-size: 12px;
    padding: 5px;
    ${buttonStyle}

    a {
        text-decoration: none;
        color: inherit;
    }   

    @media only screen and (max-width: 700px) {
        width: 10rem;
        margin-top: 10px;
        height: 48px
    }
`;

export const Paragraph = styled.p`
    margin-top: 20px;
    color: #C8B399;
    max-width: 50vw;
    font-family: 'Roboto mono', monospace;

    @media only screen and (max-width: 700px) {
        max-width: none;
        padding-right: 100px;
    }

    @media only screen and (max-width: 480px) {
        max-width: none;
        padding-right: 50px;
    }
`;

export const SecondTitle = styled.span`
    font-family: 'Poppins', sans-serif;
    font-size: 32px;
    display: block;
    margin-top: 50px;
    color: #34BB22;
`;

export const SkillSContainer = styled.div`
    margin-left: 45px;
    margin-top: 30px;

    @media only screen and (max-width: 480px) {
        margin-left: 30px;
    }
`;