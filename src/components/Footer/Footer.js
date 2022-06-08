import React from 'react'
import './Footer.css'
import { Typography } from '@material-ui/core'
import resumeData from '../../utils/resumeData'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='foote_left'>
                <Typography className='foote_name'>
                    {resumeData.name}
                </Typography>
            </div>
            <div className='footer_right'>
                <Typography className='footer_copyright'>
                    © Designed And Developed by {" "}
                    <a href='/' target="_blank">
                        Simon Dimitri NGOUTOUGA
                    </a>
                    <br />
                    Clone idea from{" "}
                    <a href='https://themeforest.net/user/tavonline' target="_blank" rel="noreferrer">
                        Travonline
                    </a>

                </Typography>
            </div>
        </div>
    )
}

export default Footer

