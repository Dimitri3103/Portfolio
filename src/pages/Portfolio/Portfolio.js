import { Card, CardActionArea, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Grow, IconButton, Tab, Tabs, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import ImageGallery from '../../components/Gallery/ImageGallery';
import './Portfolio.css';
import { useTranslation } from "react-i18next";
import GitHub from '@material-ui/icons/GitHub';
import CloseIcon from '@material-ui/icons/Close';

const Portfolio = () => {

    const { t } = useTranslation()

    var projs = t('projects', { returnObjects: true });

    const [tabValue, setTabValue] = useState(t('all'))
    const [projectDialog, setProjectDialog] = useState(false)

    return (
        <Grid container spacing={1} className='section pb_45 pt_45'>
            {/* Title */}
            <Grid item className='section_title mb_20'>
                <span></span>
                <h6 className='section_title_text'>{t('achievements')}</h6>
            </Grid>

            {/* Tabs */}
            <Grid item xs={12}>
                <Tabs value={tabValue}
                    indicatorColor='primary'
                    className='customTabs'
                    onChange={(event, newValue) => setTabValue(newValue)}>
                    <Tab
                        label={t('all')}
                        value={t('all')}
                        className={tabValue === t('all') ? "customTabs_item active" : "customTabs_item"}
                    />
                    {[...new Set(projs.map(item => item.tag))].map(((tag, index) => (<Tab label={tag}
                        value={tag}
                        key={index}
                        className={tabValue === tag ? "customTabs_item active" : "customTabs_item"} />)))}

                </Tabs>
            </Grid>

            {/* Projects */}
            <Grid item xs={12}>
                <Grid container spacing={3}>
                    {projs &&
                        projs.length > 0 &&
                        projs.map((proj, index) => {
                            return (
                                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                    {tabValue === proj.tag || tabValue === t('all') ? (
                                        <Grow in timeout={1000}>
                                            <Card className='customCard' onClick={() => setProjectDialog(proj)}>
                                                <CardActionArea>
                                                    <CardMedia className='customCard_image' image={proj.images[0]} title={proj.title} />
                                                    <CardContent>
                                                        <Typography variant={'body2'} className='customCard_title'>{proj.title}</Typography>
                                                        <Typography variant='caption' className='customCard_caption'>{proj.caption}</Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </Grow>

                                    ) : null}

                                </Grid>
                            )
                        })}
                </Grid>
            </Grid>

            <Dialog
                open={projectDialog}
                onClose={() => setProjectDialog(false)}
                className="projectDialog"
                maxWidth={"lg"}
                fullWidth>
                <DialogTitle>
                    {projectDialog.title}
                    <IconButton onClick={() => setProjectDialog(false)} style={{
                        position: "absolute",
                        right: 8,
                        top: 8,
                        padding: 0,
                        margin: 0,
                        color: "#ffc500",
                        "&:hover": { background: "transparent" },
                    }}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <img src={projectDialog.image} alt="" className='projectDialog_image' />
                <DialogContent style={{ height: "80vh" }}>
                    <Typography component={'span'} variant='body2' className='projectDialog_description'>
                        {projectDialog.images && (
                            <ImageGallery images={projectDialog.images} />
                        )}
                        {projectDialog.description}
                    </Typography>
                </DialogContent>
                <DialogActions className='projectDialog_actions'>
                    {projectDialog?.links?.map((link, index) => (
                        <a href={link.link}
                            target='_blank'
                            rel="noreferrer"
                            className='projectDialog_icon'
                            key={index}>
                            <GitHub />
                        </a>
                    ))}
                </DialogActions>
            </Dialog>
        </Grid>
    )
}

export default Portfolio
