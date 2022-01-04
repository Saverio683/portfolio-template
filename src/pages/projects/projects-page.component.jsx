import { useState, useEffect, Fragment } from 'react';

import Project from '../../components/project/project.component';

import { projectsPageData } from '../../assets/datas';

import ProjectDescription from '../../components/project-description/project-description.component';

import 
    { PageContainer, Introduction, ProjectsContainer, ProjectsPreview, DescriptionContainer, InitialSpan } 
from './projects-page.styles.jsx';
import { Title } from '../../app/app.styles';

const ProjectsPage = () => {
    const { introduction, projectsData } = projectsPageData;

    const [projectData, setProjectData] = useState([]);
    const [clickMemo, setClickMemo] = useState(null);
    const [hoverMemo, setHoverMemo] = useState(null);

    useEffect(() => {
        const cache = [];
        projectsData.map(project => cache.push(project));
        setProjectData(cache);
    }, []);
    
    return (
        <Fragment>
            <PageContainer>
                <Title>MY PROJECTS</Title>
                {
                    introduction.map((x, i) => (
                        <Introduction key={i}>{x}</Introduction>
                    ))
                }
                <ProjectsContainer>
                    <ProjectsPreview>
                        {
                            projectsData.map((project, i) => (
                                <Project 
                                    image={project.image} 
                                    projectName={project.name}
                                    onClickFunc={() => setClickMemo(i)}
                                    onOverFunc={() => setHoverMemo(i)}
                                    onLeaveFunc={() => setHoverMemo(null)}
                                    key={i}
                                />
                            ))
                        }
                    </ProjectsPreview>
                    <DescriptionContainer>
                        {
                            hoverMemo || hoverMemo === 0 ?
                                <ProjectDescription 
                                    name={projectData[hoverMemo].name} 
                                    technologies={projectData[hoverMemo].technologies}   
                                    description={projectData[hoverMemo].description}                    
                                />
                            :
                            clickMemo || clickMemo === 0 ? 
                                <ProjectDescription 
                                    name={projectData[clickMemo].name} 
                                    technologies={projectData[clickMemo].technologies}   
                                    description={projectData[clickMemo].description}                    
                                />
                            :
                                <InitialSpan>Click on a project to see the description</InitialSpan>
                        }                    
                    </DescriptionContainer>
                </ProjectsContainer>
            </PageContainer>
        </Fragment>
    )
}

export default ProjectsPage;