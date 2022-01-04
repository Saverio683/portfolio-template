import styled from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
    margin-top: 80px;

    @media only screen and (max-width: 700px) {
        margin-top: 5vw;   
    }

    a {
        color: inherit;

        &:hover {
            color: #34BB22;
        }
    }

    &.hidden {
        display: none;
    }
`;

export const FooterString = styled.span`
    color: #EEECE9;
    opacity: 0.9;    
    font-family: 'Poppins', sans-serif;
`;