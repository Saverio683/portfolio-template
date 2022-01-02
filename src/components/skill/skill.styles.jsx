import styled from "styled-components";

export const SkilsContainer = styled.div`
    margin-bottom: 65px;

    @media only screen and (max-width: 700px) {
        margin-bottom: 40px;

        &.toggled {
            margin-bottom: 0;
        }
    }
`;

export const Preview = styled.div`
    display: flex;
    align-items: center;
`;

export const Arrow = styled.img`
    width: 28px;
    height: 28px;
    margin-right: 5px;
    transition: 0.2s ease-in-out;

    &.toggled {
        -ms-transform: rotate(20deg); /* IE 9 */
        transform: rotate(90deg);
    }

    &:hover {
        cursor: pointer;
        transition: 0.3s ease-in-out;
    }
`;

export const SkillName = styled.span`
    color: #ECD8BF;
    font-size: 28px;
    vertical-align: baseline;
    font-family: 'Poppins', sans-serif;
`;

export const IconsWrapper = styled.div`
    position: absolute;
    margin: 10px 0 0 50px;
    display: none;

    &.visible {
        display: flex;
        flex-flow: row wrap;
        transition: 0.2s ease-in-out;
    }

    @media only screen and (max-width: 700px) {
        position: relative;

        &.visible {
            max-width: 50vw;
        }
    }

    @media only screen and (max-width: 480px) {
        margin-left: 30px;    
        
        &.visible {
            max-width: 60vw;
        }
    }
`;

export const IconContainer = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: center;

    &:hover span{
        display: block;
    }    

    @media only screen and (max-width: 700px) {
        margin-bottom: 40px;
    }

    @media only screen and (max-width: 480px) {

    }
`;

export const Icon = styled.img`
    width: 34px;
    height: 34px;
    margin: 0 10px;

    &:hover {
        cursor: pointer;
    }

    @media only screen and (max-width: 480px) {
        width: 30px;
        height: 30px;
    }
`;

export const IconName = styled.span`
    color: #115108;
    font-weight: 500;
    display: none;
    position: absolute;
    margin-top: 38px;
`;