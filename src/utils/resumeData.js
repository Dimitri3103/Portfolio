import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const resumeData = {
    name: "Simon Dimitri NGOUTOUGA",
    email: "ndimitri.ngoutouga1@gmail.com",
    address: "Oyom Abang, Yaoundé",
    phone: "+237 697 30 05 15",

    socials: {
        Facebook: {
            link: "https://www.facebook.com/Simon.Dimitri.N",
            text: "My Facebook",
            icon: <FacebookIcon />
        },

        Twitter: {
            link: "https://twitter.com/",
            text: "My Twitter",
            icon: <TwitterIcon />
        },

        Linkedin: {
            link: "https://www.linkedin.com/in/simon-dimitri-ngoutouga-42372330/",
            text: "My Linkedin",
            icon: <LinkedInIcon />
        },

        GitHub: {
            link: "https://github.com/Dimitri3103",
            text: "My GitHub",
            icon: <GitHubIcon />
        }
    }
}

export default resumeData;