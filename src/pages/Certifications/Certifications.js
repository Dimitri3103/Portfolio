import { Card, CardActionArea, CardContent, CardMedia, Dialog, DialogContent, DialogTitle, Grid, Grow, IconButton, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import ImageGallery from '../../components/Gallery/ImageGallery'
import './Certifications.css'
import '../Portfolio/Portfolio.css'
import { useTranslation } from "react-i18next";
import CloseIcon from '@material-ui/icons/Close';

const Certifications = () => {

    const { t } = useTranslation()
    const [certificationDialog, setCertificationDialog] = useState(false)
    var certifs = t('certifications', { returnObjects: true });
    return (
        <Grid container spacing={1} className='section pb_45 pt_45'>
            {/* Title */}
            <Grid item className='section_title mb_20'>
                <span></span>
                <h6 className='section_title_text'>{t('certifs')}</h6>
            </Grid>

            {/* Certfications */}
            <Grid item xs={12}>
                <Grid container spacing={3}>
                    {certifs &&
                        certifs.length > 0 &&
                        certifs.map((certif, index) => {
                            return (
                                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                    <Grow in timeout={1000}>
                                        <Card className='customCard' onClick={() => setCertificationDialog(certif)}>
                                            <CardActionArea>
                                                <CardMedia className='customCard_image' image={certif.images[0]} title={certif.title} />
                                                <CardContent>
                                                    <Typography variant={'body2'} className='customCard_title'>{certif.title}</Typography>
                                                    <Typography variant='caption' className='customCard_caption'>{certif.caption}</Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grow>
                                </Grid>
                            )
                        })}
                </Grid>
            </Grid>


            <Dialog
                open={certificationDialog}
                onClose={() => setCertificationDialog(false)}
                className="certificationDialog"
                maxWidth={"lg"}
                fullWidth>
                <DialogTitle>
                    {certificationDialog.title}
                    <IconButton onClick={() => setCertificationDialog(false)} style={{
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
                <img src={certificationDialog.image} alt="" className='certificationDialog_image' />
                <DialogContent>
                    {certificationDialog.images && (
                        <ImageGallery images={certificationDialog.images} />
                    )}
                    <Typography component={'span'} variant='body2' className='certificationDialog_description'>
                        {certificationDialog.description}
                    </Typography>
                </DialogContent>
            </Dialog>

        </Grid>
    )
}

export default Certifications
