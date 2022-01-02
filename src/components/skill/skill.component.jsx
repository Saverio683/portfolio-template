import { SkilsContainer, Preview, Arrow, SkillName, IconsWrapper, IconContainer, Icon, IconName } from './skill.styles';
import arrow from '../../assets/icons/arrow.png';

const Skill = ({ isToggled, skillName, onClickFunc, icons }) => (
    <SkilsContainer
        className={`${isToggled ? 'toggled' : null }`}
    >
        <Preview>
            <Arrow src={arrow} alt='arrow' 
                className={`${isToggled ? 'toggled' : null }`} 
                onClick={onClickFunc}
            />
            <SkillName>{skillName}</SkillName>
        </Preview>
        <IconsWrapper className={`${isToggled ? 'visible' : null }`}>
            {
                icons.map((icon, i) => (
                    <IconContainer key={i}>
                        <Icon src={icon[0]} alt='icon' />
                        <IconName>{icon[1]}</IconName>
                    </IconContainer>
                ))
            }
        </IconsWrapper>
    </SkilsContainer>
)

export default Skill;