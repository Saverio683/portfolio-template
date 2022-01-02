import styled from 'styled-components';

export const HeaderContainer = styled.div`
    padding: 10px;
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    z-index: 1000;

    @media only screen and (max-width: 700px) {
        padding: 0;
        width: 100%;
        flex-direction: column;
        background-color: #232322;

        img {
            display: block;
        }
    }
`;

export const Element = styled.span`
    font-size: 20px;
    font-family: 'Poppins', sans-serif;
    color: #EEECE9;
    padding: 20px;
    transition: 0.3s ease-in-out;

    &.selected {
        color: #34BB22;            
        font-weight: bolder;
    }

    &:hover {
        color: #34BB22;
        cursor: pointer;
    }    

    @media only screen and (max-width: 700px) {
        width: 100%;
        display: flex;
        justify-content: center;
        animation: growDown 300ms ease-in-out forwards;
        transform-origin: top center;

        @keyframes growDown {
            0% {
                transform: scaleY(0)
            }
            80% {
                transform: scaleY(1.1)
            }
            100% {
                transform: scaleY(1)
            }
        }

        &.hidden {
            display: none;
        }

        &:hover {
            background-color: #2C2C2B;
        }
    }
`;

export const MenuIcon = styled.img`
    width: 38px;
    height: auto;
    display: none;
    margin: 20px;
    top: 5px;
    margin-left: 80%;
    position: absolute;

    &:hover {
        cursor: pointer;
    }
`;