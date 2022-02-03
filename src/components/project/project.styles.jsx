import styled from "styled-components";
import { rgba } from 'polished';

export const ProjectCard = styled.div`
    margin: 30px; 
    background-color:${rgba('#EEECE9', 0.5)};
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    &:hover {
        background-color: ${rgba('#479D3A', 0.6)};
        cursor: pointer;
        transition: 0.2s ease-in-out;

        span {
            color: #EEECE9;
        }
    }  

    @media only screen and (max-width: 700px) {
        min-width: 250px;
    }
`;

export const ProjectImage = styled.img`
    margin: 0 auto;
    margin-top: 30px;
`;

export const ProjectName = styled.span`
    font-size: 25px;
    margin: 10px auto;
    color: #115108;
    font-family: 'Poppins', sans-serif;
`;