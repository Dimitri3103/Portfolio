import React from 'react'
import './Resume.css'
import { Grid, Paper, TextField, Typography } from '@material-ui/core'
import resumeData from '../../utils/resumeData'
import CustomTimeline, { CustomTimelineSeparator } from '../../components/Timeline/Timeline'
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineDot from '@material-ui/lab/TimelineDot';
import CustomButton from '../../components/Button/Button'
import { useTranslation } from "react-i18next";

const Resume = () => {
    const { t } = useTranslation()
    var exps = t('experiences', { returnObjects: true });
    var educs = t('educations', { returnObjects: true });
    var skills = t('skills_list', { returnObjects: true });
    return (
        <>
            {/* About Me */}
            <Grid container className='section pb_45 pt_45'>
                <Grid item className='section_title mb_30'>
                    <span></span>
                    <h6 className='section_title_text'>{t('about_me')}</h6>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='body2' className='aboutme_text'>{t('about')}</Typography>
                </Grid>
            </Grid>

            {/* Education and Experiences */}
            <Grid container className='section pb_45'>
                <Grid item className='section_title mb_30'>
                    <span></span>
                    <h6 className='section_title_text'>{t('professional_academic')}</h6>
                </Grid>
                <Grid item xs={12}>
                    <Grid container className='resume_timeline'>
                        {/* Experiences*/}
                        <Grid item sm={12} md={6}>
                            <CustomTimeline title={t('professional')} icon={<WorkIcon />}>
                                {exps &&
                                    exps.length > 0 &&
                                    exps.map((exp, index) => {
                                        return (
                                            <TimelineItem key={index}>
                                                <CustomTimelineSeparator />
                                                <TimelineContent className='timeline_content'>
                                                    <Typography className="timeline_title">{exp.title}</Typography>
                                                    <Typography variant='caption' className="timeline_date">{exp.date}</Typography>
                                                    <Typography variant='body2' className="timeline_description">{exp.description}</Typography>
                                                </TimelineContent>
                                            </TimelineItem>
                                        )
                                    })}
                            </CustomTimeline>
                        </Grid>
                        {/* Education */}
                        <Grid item sm={12} md={6}>
                            <CustomTimeline title={t('academic')} icon={<SchoolIcon />}>
                                {educs &&
                                    educs.length > 0 &&
                                    educs.map((educ, index) => {
                                        return (
                                            <TimelineItem key={index}>
                                                <CustomTimelineSeparator />
                                                <TimelineContent className='timeline_content'>
                                                    <Typography className="timeline_title">{educ.title}</Typography>
                                                    <Typography variant='caption' className="timeline_date">{educ.date}</Typography>
                                                    <Typography variant='body2' className="timeline_description">{educ.description}</Typography>
                                                </TimelineContent>
                                            </TimelineItem>
                                        )
                                    })}
                            </CustomTimeline>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            {/* Skills */}
            <Grid container className='section graybg pb_45 p_50'>
                <Grid item className='section_title mb_30'>
                    <span></span>
                    <h6 className='section_title_text'>{t('skills')}</h6>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justifyContent="space-between" spacing={3}>
                        {skills &&
                            skills.length > 0 &&
                            skills.map((skill, index) => {
                                return (
                                    <Grid item xs={12} sm={6} md={3} key={index}>
                                        <Paper elevation={0} className='skill'>
                                            <Typography variant='h6' className='skill_title'>
                                                {skill.title}
                                            </Typography>
                                            {skill.description.map((element, index) => (
                                                <Typography
                                                    variant='body2'
                                                    className='skill_description'
                                                    key={index}
                                                >
                                                    <TimelineDot variant='outlined' className='timeline_dot' />
                                                    {element}
                                                </Typography>
                                            ))}
                                        </Paper>
                                    </Grid>
                                )
                            })}
                    </Grid>
                </Grid>

            </Grid>

            {/* Contact */}
            <Grid container spacing={6} className='section pt_45'>
                {/* Contact Form */}
                <Grid item xs={12} lg={7}>
                    <Grid container>
                        <Grid item className='section_title mb_30'>
                            <span></span>
                            <h6 className='section_title_text'>{t('contact_form')}</h6>
                        </Grid>


                        <Grid item xs={12}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth name='name' label={t('name')} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth name='email' label='E-mail' />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth name='message' label='Message' multiline rows={4} />
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomButton><span className='btn_text'>{t('submit')}</span></CustomButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                {/* Contact Information */}
                <Grid item xs={12} lg={5}>
                    <Grid container>
                        <Grid item className='section_title mb_30'>
                            <span></span>
                            <h6 className='section_title_text'>{t('contact_infos')}</h6>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={12} >
                                    <Typography className='contactInfo_item'>
                                        <span>E-mail : </span>{resumeData.email}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container className='contactInfos_socialsContainer'>
                                {Object.keys(resumeData.socials).map((key, index) => (
                                    <Grid item className='contactInfo_social' key={index}>
                                        <a href={resumeData.socials[key].link} target="_blank" rel="noreferrer">
                                            {resumeData.socials[key].icon}
                                        </a>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid >

        </>
    )
}

export default Resume
