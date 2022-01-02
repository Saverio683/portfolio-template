import { useEffect } from 'react';
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }) => {
    const { pathname } = useLocation();
    //this component makes sure that every time you browse through the pages you are brought to the top of the page

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);

    return children;
}

export default ScrollToTop;