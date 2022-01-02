import { useState } from 'react';
import { useNavigate } from 'react-router';

import { HeaderContainer, Element, MenuIcon }  from './header.styles.jsx';
import menuIco from '../../assets/icons/menu.svg';

const headerElements = [
    {
        displayName: 'HOME',
        path: '/'
    },
    {
        displayName: 'ABOUT',
        path: '/about'
    },
    {
        displayName: 'PROJECTS',
        path: '/projects'
    },
    {
        displayName: 'CONTACT',
        path: '/contact'
    }
];

const Header = ({ currentPath }) => {
    const navigate = useNavigate();

    const [isClicked, setClick] = useState(false);

    return (
        <HeaderContainer>
            {
                headerElements.map(el => (
                    <Element 
                        className={`
                            element
                            ${ currentPath === el.path ? 'selected ' : null }
                            ${ !isClicked ? 'hidden' : null }
                        `} // 'element' is the default className that all elements have. If you click one, it will also get the className 'selected'. 
                           //'hidden' is added by default on the mobile view
                        key={el.displayName}
                        onClick={() => {
                            navigate(el.path, { replace: true });
                            setClick(false); //this causes the navbar to close after you click on the mobile view
                        }}
                    >
                        {el.displayName}
                    </Element>
                ))                
            }     
            <MenuIcon src={menuIco} alt='menu'
                onClick={() => setClick(prevState => !prevState)}
                //if you click the icon, the header elements will no longer have the className 'hidden'
            />                
        </HeaderContainer>
    )
}

export default Header;