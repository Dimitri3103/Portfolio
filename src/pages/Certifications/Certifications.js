import { Card, CardActionArea, CardContent, CardMedia, Dialog, DialogContent, DialogTitle, Grid, Grow, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import ImageGallery from '../../components/Gallery/ImageGallery'
import resumeData from '../../utils/resumeData'
import './Certifications.css'
import '../Portfolio/Portfolio.css'
import { useTranslation } from "react-i18next";

const Certifications = () => {

    const { t } = useTranslation()
    const [certificationDialog, setCertificationDialog] = useState(false)
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
                    {resumeData.certifications.map((certification) => (

                        <Grid item xs={12} sm={6} md={4} lg={3} key={certification.key}>
                            <Grow in timeout={1000}>
                                <Card className='customCard' onClick={() => setCertificationDialog(certification)}>
                                    <CardActionArea>
                                        <CardMedia className='customCard_image' image={certification.images[0]} title={certification.title} />
                                        <CardContent>
                                            <Typography variant={'body2'} className='customCard_title'>{certification.title}</Typography>
                                            <Typography variant='caption' className='customCard_caption'>{certification.caption}</Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grow>
                        </Grid>

                    ))
                    }
                </Grid>
            </Grid>


            <Dialog
                open={certificationDialog}
                onClose={() => setCertificationDialog(false)}
                className="certificationDialog"
                maxWidth={"lg"}
                fullWidth>
                <DialogTitle onClose={() => setCertificationDialog(false)}>{certificationDialog.title}</DialogTitle>
                <img src={certificationDialog.image} alt="" className='certificationDialog_image' />
                <DialogContent style={{ height: "80vh" }}>
                    <Typography variant='body2' className='certificationDialog_description'>
                        {certificationDialog.images && (
                            <ImageGallery images={certificationDialog.images} />
                        )}
                        {certificationDialog.description}
                    </Typography>
                </DialogContent>
            </Dialog>

        </Grid>
    )
}

export default Certifications
