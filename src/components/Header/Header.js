import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import TelegramIcon from '@material-ui/icons/Telegram';
import LanguageIcon from '@material-ui/icons/Language';
import resumeData from '../../utils/resumeData';
import CustomButton from '../Button/Button';
import './Header.css';
import { withRouter } from '../../utils/withRouter';
import { useTranslation } from "react-i18next";
import i18next from 'i18next';
import cookies from 'js-cookie';

const Header = (props) => {
    const pathName = props?.location?.pathname
    const { t } = useTranslation()
    const languages = [
        { code: "fr", name: "Français", country_code: "fr" },
        { code: "en", name: "English", country_code: "gb" }
    ]
    const currentLanguageCode = cookies.get('i18next') || 'fr'
    // const currentLanguage = languages.find(l => l.code === currentLanguageCode)


    return (
        <Navbar expand="lg" sticky='top' className='header'>
            {/* Home Link */}
            <Nav.Link as={NavLink} to="/" className="header_navlink">
                <Navbar.Brand className="header_home">
                    <HomeRoundedIcon />
                </Navbar.Brand>
            </Nav.Link>

            <Navbar.Toggle />

            <Navbar.Collapse>
                <Nav className="header_left">
                    {/* Resume Link */}
                    <Nav.Link
                        as={NavLink}
                        to="/"
                        className={pathName === "/" ? "header_link_active" : "header_link"}>
                        CV
                    </Nav.Link>

                    {/* Portfolio Link */}
                    <Nav.Link
                        as={NavLink}
                        to="/portfolio"
                        className={pathName === "/portfolio" ? "header_link_active" : "header_link"}>
                        {t('projects_header')}
                    </Nav.Link>

                    {/* Certifications Link */}
                    <Nav.Link
                        as={NavLink}
                        to="/certifications"
                        className={pathName === "/certifications" ? "header_link_active" : "header_link"}>
                        Certifications
                    </Nav.Link>
                </Nav>

                <div className='header_right'>
                    {Object.keys(resumeData.socials).map((key) => (
                        <a href={resumeData.socials[key].link} target="_blank" rel="noreferrer" key={key}>
                            {resumeData.socials[key].icon}</a>))}

                    <CustomButton icon={<TelegramIcon />} >
                        <span className='btn_text'>{t('hire_me')}</span>
                    </CustomButton>
                </div>
                <div className='d-flex justify-content-end'>
                    <div className="dropdown">
                        <button className="btn btn-link dropdown-toggle btn_laguage"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <LanguageIcon />
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            {languages.map(({ code, name, country_code }) => (
                                <li key={country_code}>
                                    <button className="dropdown-item"
                                        onClick={() => i18next.changeLanguage(code)}
                                        disabled={code === currentLanguageCode}>
                                        <span className={`flag-icon flag-icon-${country_code} mx-2`}
                                            style={{ opacity: code === currentLanguageCode ? 0.5 : 1 }}></span>
                                        {name}
                                    </button>
                                </li>))}

                        </ul>
                    </div>
                </div>
            </Navbar.Collapse>


        </Navbar >
    )
}

export default withRouter(Header)
