import styled, { css } from 'styled-components';

const scrollStyles = css`
    &::-webkit-scrollbar {
        width: 10px;
    }          

    &::-webkit-scrollbar-track {
        background: rgba($color: #115108, $alpha: 0.0); 
    }     

    &::-webkit-scrollbar-thumb {
        background: #B7CBB4; 

        &:hover {
            background: #DBEFD8;
        }
    }   
`

export const PageContainer = styled.div`
    padding-top: 150px;
    margin-left: 150px;
    height: auto;

    @media only screen and (max-width: 700px) {
        margin-left: 100px;
        padding-top: 100px;
        margin: 0 100px;
    }

    @media only screen and (max-width: 480px) {        
        margin: 0 50px;
    }
`;

export const Introduction = styled.p`
    margin-top: 20px;
    color: #C8B399;
    margin-right: 150px;
    font-family: 'Roboto mono', monospace;

    @media only screen and (max-width: 700px) {
        margin-right: 0;
    }

    @media only screen and (max-width: 480px) {
    }
`;

export const ProjectsContainer = styled.div`
    margin: 40px 0 0 0;
    display: flex;
    flex-direction: row;
    height: 50vh;

    @media only screen and (max-width: 700px) {
        flex-direction: column;
        height: auto;
        margin-left: 0;
    }
`;

export const ProjectsPreview = styled.div`
    width: 40%;
    min-width: 300px;
    overflow-y: scroll;
    ${scrollStyles}

    @media only screen and (max-width: 700px) {
        display: flex;
        width: auto;
        overflow-x: scroll;
        overflow-y: hidden;

        &::-webkit-scrollbar {
            height: 10px;
        } 
    }

    @media only screen and (max-width: 480px) {
        min-width: 0;
    }
    
`;

export const DescriptionContainer = styled.div`
    overflow-y: scroll;
    overflow-x: hidden;
    width: 60%;
    margin: 5px 10px 0 3vw;
    margin-right: 150px;
    ${scrollStyles}

    @media only screen and (max-width: 700px) {
        margin: 40px 0 0 0;
        width: 100%;
        height: 60vh;
        overflow-y: scroll;
        ${scrollStyles}
    }
`;

export const InitialSpan = styled.span`
    font-family: 'Roboto mono', monospace;
    color: #C8B399;
    display: flex;
    justify-content: center;
`;