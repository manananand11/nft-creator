import { CameraAlt, ColorLens, Language, MusicNote, PanTool, SportsEsports, TagFaces, Webhook } from '@mui/icons-material';
import { Grid, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import { makeStyles, styled } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles({
    container: {
        marginBottom: "20px!important"
    },
    heading: {
        marginTop: "40px!important",
        marginBottom: "20px!important"
    },
    grid: {
        width: "60%!important"
    },
    text: {
        color: "#9c9c9c",
        marginLeft: "10px!important",

    },
    item: {
        display: "flex",
        alignItems: "center",

        marginBottom: "10px!important"
    },
    icon: {
        color: "#898989!important"
    }
});

function Items() {
    const classes = useStyles()



    const handleItemClick = (event) => {
        console.log(event)
    }
    return (
        <div className={classes.container}>
            <Typography variant='h6' className={classes.heading}>
                Item Category
            </Typography>
            <Grid container spacing={2} className={classes.grid}>
                <Grid item xs={4}>

                    <div className={classes.item} onClick={handleItemClick}>
                        <ColorLens color="disabled" className={classes.icon} />
                        <Typography variant="caption" className={classes.text}>
                            Art
                        </Typography>
                    </div>
                    <div className={classes.item}>
                        <ColorLens color="disabled" className={classes.icon} />
                        <Typography variant="caption" className={classes.text}>
                            NSFW
                        </Typography>
                    </div>
                    <div className={classes.item}>
                        <ColorLens color="disabled" className={classes.icon} />
                        <Typography variant="caption" className={classes.text}>
                            DeFi
                        </Typography>
                    </div>
                    <div className={classes.item}>
                        <CameraAlt color="disabled" className={classes.icon} />
                        <Typography variant="caption" className={classes.text}>
                            Photography
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className={classes.item}>
                        <MusicNote color="disabled" className={classes.icon} />
                        <Typography variant="caption" className={classes.text}>
                            Music
                        </Typography>
                    </div>
                    <div className={classes.item}>
                        <TagFaces color="disabled" className={classes.icon} />
                        <Typography variant="caption" className={classes.text}>
                            Memes
                        </Typography>
                    </div>
                    <div className={classes.item}>
                        <Language color="disabled" className={classes.icon} />
                        <Typography variant="caption" className={classes.text}>
                            Domain
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className={classes.item}>
                        <SportsEsports color="disabled" className={classes.icon} />
                        <Typography variant="caption" className={classes.text}>
                            Games
                        </Typography>
                    </div>
                    <div className={classes.item}>
                        <PanTool color="disabled" className={classes.icon} />
                        <Typography variant="caption" className={classes.text}>
                            Punks
                        </Typography>
                    </div>
                    <div className={classes.item}>
                        <Webhook color="disabled" className={classes.icon} />
                        <Typography variant="caption" className={classes.text}>
                            Metaverses
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Items
