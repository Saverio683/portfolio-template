import { useEffect } from 'react';
import Typed from "typed.js";

import { PageContainer, SpanContainer, BigTypedSpan, LittleTypedSpan } from './home.styles';

const HomePage = () => {

    useEffect(() => {
        const options = {
            strings: ['Hello,'],
            typeSpeed: 60,
            showCursor: false,
            startDelay: 100   
        }
        const options1 = {
            strings: [
            "I'm Saverio Randazzo",  
            "I'm a web developer"
            ],
            typeSpeed: 50,
            backSpeed: 40,
            startDelay: 1500,
            showCursor: false,
            loop: true
        };

        let typed = new Typed('#typed', options);
        let typed1 = new Typed('#typed1', options1);  

        return () => {
            typed = null;
            typed1 = null;
            //when you go to another page, the 'typed' strings are 'eliminated' 
            //this is to prevent memory leaks
        }
    }, []);

    return (
        <PageContainer>
            <SpanContainer>
                <BigTypedSpan id='typed'/>
                <LittleTypedSpan id='typed1'/>
            </SpanContainer>
        </PageContainer>
    )
}

export default HomePage;