import React from 'react'
import { Button } from '@material-ui/core'
import './Button.css'

const CustomButton = ({ children, icon }) => {
    return (
        <Button className='custom_btn'
            endIcon={icon ? <div className='btn_icon_container'>{icon}</div> : null}>
            {children}
        </Button>
    )
}

export default CustomButton
