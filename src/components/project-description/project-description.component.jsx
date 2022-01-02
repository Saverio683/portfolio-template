import { Fragment } from 'react';

import { Wrapper, Title, Info } from './project-description.styles.jsx';

const ProjectDescription = ({ name, technologies, description }) => {

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
                <Title>DESCRIPTION: </Title>
                <Info>
                    {description}
                </Info>
            </Wrapper>
        </Fragment>
    )
}

export default ProjectDescription;