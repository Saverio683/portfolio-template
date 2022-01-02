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
`;

export const Info = styled.span`
    ${spanStyles}
`;

