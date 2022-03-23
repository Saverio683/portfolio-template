import { Fragment } from 'react';

import { Wrapper, Title, Info } from './project-description.styles.jsx';

const ProjectDescription = ({ name, technologies, description, githubRepo }) => {

    return ( 
        <Fragment>
            <Wrapper>
                <Title>PROJECT NAME: </Title>
                <Info>
                    {name}
                </Info>
            </Wrapper>
            <Wrapper>
                <Title>TECHNOLOGIES USED: </Title>
                <Info>
                    {technologies}
                </Info>
            </Wrapper>
            <Wrapper>
                <Title className='clickable'>
                    <a href={`${githubRepo}`} rel='noreferrer' target='_blank'>GITHUB REPO</a>
                </Title>
            </Wrapper>            
            <Wrapper>
                <Title>DESCRIPTION: </Title>
                <Info>
                    {description}
                </Info>
            </Wrapper>
        </Fragment>
    )
}

export default ProjectDescription;