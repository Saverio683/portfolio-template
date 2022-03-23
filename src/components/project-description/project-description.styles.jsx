import styled, { css } from 'styled-components';

const spanStyles = css`
    font-family: 'Roboto mono', monospace;
    color: #C8B399; 
`;

export const Wrapper = styled.div`
    margin-bottom: 10px;
`;

export const Title = styled.span`
    font-weight: bolder;
    ${spanStyles}

    &.clickable {
        a {            
            &:hover {
                color: #34BB22;
                transition: 0.3s ease-in-out;
            }
            color: inherit;
            text-decoration: inherit;
        }
    }
`;

export const Info = styled.span`
    ${spanStyles}
`;

