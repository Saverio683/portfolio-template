import styled, { css } from 'styled-components';
import { buttonStyle } from '../../app/app.styles';

const globalStyles = css`
    width: 100%;
    display: block;
    margin: 25px 0;
    padding: 5px; 
    font-family: 'Roboto mono', monospace;
`;

export const EmailInput = styled.input`
    height: 30px;
    ${globalStyles}
`;

export const TextInput = styled.textarea`
    height: 300px;
    max-width: 100%;
    ${globalStyles}
`;

export const SubmitButton = styled.button`
    font-size: 16px;
    padding: 10px;
    ${buttonStyle}
`;