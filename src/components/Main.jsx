import { LocalOffer } from '@mui/icons-material'
import { Card, Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Collection from './Collection'
import Footer from './Footer'
import Items from './Items'
import Price from './Price'

const useStyles = makeStyles({
    heading: {
        fontWeight: "bold!important",
        marginTop: "40px!important"
    },
    text: {
        color: "grey!important",
    },
    space: {
        marginTop: "20px!important",
        marginBottom: "20px!important"
    }
})

function Main() {
    const classes = useStyles()
    return (
        <div>
            <Typography variant="h4" component="h2" className={classes.heading}>
                Create your Collection
            </Typography>

            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Card1
                        uploadName="Upload File"
                        content=" JPG,PNG,GIF,WEBP,MP4 or MP3 , Max 100mb. 
         (620 x 620 recommended)"
                    />
                    <Card1
                        uploadName="Upload Cover"
                        content=" JPG,PNG,GIF,WEBP,MP4 or MP3 , Max 100mb. 
         "
                    />
                    <Typography variant="caption" className={classes.text}>
                        Please add cover image to your media file
                    </Typography>

                    <Items />

                    <Typography variant="subtitle2" className={classes.space}>
                        Enter price to allow users to instantly purchase your NFT
                    </Typography>
                    <Card3
                        icon={<LocalOffer />}
                    />
                    <Price />
                    <Collection />

                </Grid>
                <Grid item xs={6}>
                    <Card2
                        uploadName="Preview"
                        content=" Upload File to preview your brand new NFT"
                    />

                </Grid>
            </Grid>
            
        </div>
    )
}

export default Main
