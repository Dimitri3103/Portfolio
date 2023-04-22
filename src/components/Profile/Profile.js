import { Typography } from '@material-ui/core'
import React from 'react'
import './Profile.css'
import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/Timeline'
import CustomButton from '../Button/Button'
import resumeData from '../../utils/resumeData'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import GetAppIcon from '@material-ui/icons/GetApp';
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineItem from '@material-ui/lab/TimelineItem'
import MyCV from '../../assets/CV/CV_Simon_Dimitri_NGOUTOUGA_2023.pdf'
import { useTranslation } from "react-i18next";

const CustomTimelineItem = ({ title, text, link }) => (
    <TimelineItem>
        <CustomTimelineSeparator />
        <TimelineContent className="timeline_content">
            {link ? (
                <Typography className="timelineItem_text">
                    <span>{title} :</span>{" "}
                    <a href={link} target="_blank" rel="noreferrer">{text}</a>
                </Typography>
            ) : (
                <Typography className="timelineItem_text">
                    <span>{title} :</span> {text}
                </Typography>)}
        </TimelineContent>
    </TimelineItem>
);

const Profile = () => {
    const { t } = useTranslation()
    return (
        <div className="profile container_shadow">
            <div className="profile_name">
                <Typography className="name">{resumeData.name}</Typography>
                <Typography className="title">{t('job')}</Typography>
            </div>
            <figure className="profile_image">
                <img src={require('../../assets/Images/profileImage.jpg')} alt="" />
            </figure>
            <div className="profile_information">
                <CustomTimeline icon={<PersonOutlineOutlinedIcon />}>
                    <CustomTimelineItem title={t('name')} text={resumeData.name} />
                    <CustomTimelineItem title={t('date_of_birth')} text={t('birthday')} />
                    <CustomTimelineItem title="Email" text={resumeData.email} />
                </CustomTimeline>
                <div className="button_container">
                    <CustomButton icon={<GetAppIcon />}>
                        <a href={MyCV} download="CV_Simon_Dimitri_NGOUTOUGA_2023.pdf" >
                            <span className='btn_text'>{t('download_cv')}</span>
                        </a>
                    </CustomButton>
                </div>
            </div>
        </div>
    )
}

export default Profile
