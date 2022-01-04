import { FooterContainer, FooterString } from './footer.styles.jsx';

const Footer = ({ currentPath }) => (
    <FooterContainer className={currentPath === '/' ? 'hidden' : null}>
        <FooterString>
            Created by {}
            <a href='https://github.com/Saverio683' target='_blank' rel='noreferrer'>
                Saverio Randazzo
            </a> 
            {} © {} 
            {new Date().getFullYear()}
        </FooterString>
    </FooterContainer>
);
//empty braces are used to add a space between characters

export default Footer;