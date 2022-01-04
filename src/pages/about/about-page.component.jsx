import { useState, Fragment } from 'react';
import Skill from '../../components/skill/skill.component';

import { aboutPageData } from '../../assets/datas';

import { PageContainer, Wrapper, DownloadButton, Paragraph, SecondTitle, SkillSContainer } from './about-page.styles.jsx';
import { Title } from '../../app/app.styles';

const AboutPage = () => {
    const { skillsData, aboutMe } = aboutPageData;
    
    const [cache, setCache] = useState(new Array(skillsData.length).fill(false));

    const onToggleFunc = n =>  
        setCache(prevCache => prevCache.map((val, i) => i !== n ? val : !val));

    return ( 
        <Fragment>
            <PageContainer>
                <Wrapper>
                    <Title>ABOUT ME</Title>
                    <DownloadButton><a href='cv.pdf' download>DOWNLOAD RESUME</a></DownloadButton>
                </Wrapper>        
                {
                    aboutMe.map((p, i) => (
                        <Paragraph key={i}>{p}</Paragraph>
                    ))
                }
                <SecondTitle>My skills</SecondTitle>
                <SkillSContainer> 
                    {
                        skillsData.map((skill, i) => (
                            <Skill 
                                isToggled={cache[i]} 
                                skillName={skill.name} 
                                onClickFunc={() => (onToggleFunc(i))}
                                icons={skill.icons}
                                key={i}                         
                            />
                        ))
                    }
                </SkillSContainer>
            </PageContainer>
        </Fragment>
    )
}

export default AboutPage; 