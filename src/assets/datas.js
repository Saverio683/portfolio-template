//ABOUT PAGE IMPORTS
import skill from './icons/circle.svg';

//PROJECTS PAGE IMPORTS
import image from './images/image.svg';

//CONTACT PAGE IMPORTS
import account from './icons/account.svg';

export const aboutPageData = {
    //each array of aboutMeis equivalent to a paragraph
    aboutMe: [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus ultrices dignissim elit tristique ornare tellus odio. 
        Iaculis in nisi, amet euismod mattis faucibus. 
        Mattis in diam sed pellentesque porta. 
        Maecenas tempor, sed in aliquam nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Tellus ultrices dignissim elit tristique ornare tellus odio. Iaculis in nisi, amet euismod mattis faucibus. 
        Mattis in diam sed pellentesque porta. Maecenas tempor, sed in aliquam nisl.        
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Tellus ultrices dignissim elit tristique ornare tellus odio. 
        Iaculis in nisi, amet euismod mattis faucibus. Mattis in diam sed pellentesque porta. 
        Maecenas tempor, sed in aliquam nisl.`,

        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus ultrices dignissim elit tristique ornare tellus odio. 
        Iaculis in nisi, amet euismod mattis faucibus. 
        Mattis in diam sed pellentesque porta. 
        Maecenas tempor, sed in aliquam nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Tellus ultrices dignissim elit tristique ornare tellus odio. Iaculis in nisi, amet euismod mattis faucibus. 
        Mattis in diam sed pellentesque porta.`
    ],
    skillsData: [
        {
            name: 'Category 1',
            icons: [[skill, 'skill'], [skill, 'skill'], [skill, 'skill'], [skill, 'skill']]
        },
        {
            name: 'Category 2',
            icons: [[skill, 'skill'], [skill, 'skill'], [skill, 'skill'], [skill, 'skill']]
        },
        {
            name: 'Category 3',
            icons: [[skill, 'skill'], [skill, 'skill'], [skill, 'skill'], [skill, 'skill']]
        },
        {
            name: 'Category 4',
            icons: [[skill, 'skill'], [skill, 'skill'], [skill, 'skill'], [skill, 'skill']]
        }
    ]
}

export const projectsPageData = {
    introduction: [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Tellus ultrices dignissim elit tristique ornare tellus odio. 
        Iaculis in nisi, amet euismod mattis faucibus. 
        Mattis in diam sed pellentesque porte. `
    ],

    projectsData: [
        {
            name: 'Project 1',
            image: image,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Mattis in diam sed pellentesque porta. 
            Maecenas tempor, sed in aliquam nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Tellus ultrices dignissim elit tristique ornare tellus odio. 
            Iaculis in nisi, amet euismod mattis faucibus. 
            Mattis in diam sed pellentesque porta. 
            Maecenas tempor, sed in aliquam nisl.`,
            technologies: `HTML, CSS`
        },
        {
            name: 'Project 2',
            image: image,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Tellus ultrices dignissim elit tristique ornare tellus odio. 
            Iaculis in nisi, amet euismod mattis faucibus. 
            Mattis in diam sed pellentesque porta. 
            Maecenas tempor, sed in aliquam nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Tellus ultrices dignissim elit tristique ornare tellus odio. 
            Iaculis in nisi, amet euismod mattis faucibus. 
            Mattis in diam sed pellentesque porta. 
            Maecenas tempor, sed in aliquam nisl.`,
            technologies: `HTML, CSS`
        },        
        {
            name: 'Project 3',
            image: image,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Tellus ultrices dignissim elit tristique ornare tellus odio. 
            Iaculis in nisi, amet euismod mattis faucibus. 
            Mattis in diam sed pellentesque porta.`,
            technologies: `HTML, CSS`
        },
        {
            name: 'Project 4',
            image: image,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Tellus ultrices dignissim elit tristique ornare tellus odio. 
            Iaculis in nisi, amet euismod mattis faucibus. 
            Mattis in diam sed pellentesque porta. 
            Maecenas tempor, sed in aliquam nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Tellus ultrices dignissim elit tristique ornare tellus odio. 
            Iaculis in nisi, amet euismod mattis faucibus. 
            Mattis in diam sed pellentesque porta. 
            Maecenas tempor, sed in aliquam nisl. 
            Maecenas tempor, sed in aliquam nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Tellus ultrices dignissim elit tristique ornare tellus odio. 
            Iaculis in nisi, amet euismod mattis faucibus. 
            Mattis in diam sed pellentesque porta. 
            Maecenas tempor, sed in aliquam nisl.`,
            technologies: `HTML, CSS`
        }        
    ]
}

export const contactPageData = {
    profileIcons: [[account, '/'], [account, '/'], [account, '/']]
}