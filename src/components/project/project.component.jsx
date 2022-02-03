import { ProjectCard, ProjectImage, ProjectName } from './project.styles.jsx';

const Project = ({ image, projectName, onClickFunc, onOverFunc, onLeaveFunc }) => (
    <ProjectCard
        onClick={onClickFunc}
        onMouseOver={onOverFunc}
        onMouseLeave={onLeaveFunc}
    >
        <ProjectImage src={image} width='80%' height='auto' alt='projectimage' className='img-p'/>
        <ProjectName>{projectName.toUpperCase()}</ProjectName>
    </ProjectCard>  
)

export default Project;