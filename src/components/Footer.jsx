import { ClassNames } from '@emotion/react'
import { ArrowForward, Facebook, LinkedIn, Twitter } from '@mui/icons-material'
import { alpha, Button, Grid, InputAdornment, InputBase, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { color } from '@mui/system'
import React from 'react'

const useStyles = makeStyles({
    grid: {
        marginTop: "10rem",
        backgroundColor: "#0d8ccd",
        '&:before':{

        }
    },
    container: {
        padding: "40px",
        paddingLeft: "80px"
    },
    heading: {
        letterSpacing: "2px!important",
        color: "white",
        marginTop: "20px!important"
    },
    icons: {
        width: "50%",
        display: "flex",
        justifyContent: "space-between",
        color: "white"
    },
    button: {
        color: "white!important",
        fontWeight: "400!important",
        fontSize: "10px!important",
        marginTop: "10px!important"
    },
    buttons: {
        display: "flex",
        flexDirection: "column",
        alignItems: "baseline"
    },
    email: {
        marginTop: "20px",
        color: "white!IMPORTANT",

        display: "flex",
        alignItems: "center",


        width: "70%"

    },
    input: {
        marginRight: "20px",
        borderRadius: "10px!important",
        padding: "5px 15px",
        backgroundColor: "#47a8d9",
        color: "white!important"
    },
    button2: {
        borderRadius: "10px!important",
        padding: "8px 40px!important",
        backgroundColor: "white!important",
        color: "#349cd2!important"
    },
    input2:{
        marginRight: "20px",
        borderRadius: "10px!important",
        padding: "10px 15px",
        
        width:"70%",
        backgroundColor: "#47a8d9",
        color: "white!important"
    },
    button3:{
        borderRadius: "10px!important",
        padding: "14px 40px!important",
        backgroundColor: "white!important",
        color: "#349cd2!important"
    }
})

export default function Footer() {
    const classes = useStyles()
    return (
        <div>
            <Grid container className={classes.grid}>
                <Grid item md={6} xs={12}>
                    <div className={classes.container}>
                        <Typography variant="subtitle2" className={classes.heading} >
                            Follow us
                        </Typography>
                        <div className={classes.icons}>
                            <Facebook />
                            <LinkedIn />
                            <Twitter />
                            <Twitter />
                        </div>

                        <Grid container>
                            <Grid item xs={4}>
                                <Typography variant="subtitle2" className={classes.heading} >
                                    Quick Links
                                </Typography>
                                <div className={classes.buttons}>
                                    <Button size="small" className={classes.button}>
                                        Explore
                                    </Button>
                                    <Button size="small" className={classes.button}>
                                        How it works
                                    </Button>
                                    <Button size="small" className={classes.button}>
                                        Support
                                    </Button>
                                    <Button size="small" className={classes.button}>
                                        Become a Partner
                                    </Button>
                                </div>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="subtitle2" className={classes.heading} >
                                    Community

                                </Typography>
                                <div className={classes.buttons}>
                                    <Button size="small" className={classes.button}>
                                        RARI Token
                                    </Button>
                                    <Button size="small" className={classes.button}>
                                        Discussion
                                    </Button>
                                    <Button size="small" className={classes.button}>
                                        Voting
                                    </Button>
                                    <Button size="small" className={classes.button}>
                                        Suggest Feature
                                    </Button>
                                </div>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="subtitle2" className={classes.heading} >
                                    <div>&nbsp;</div>
                                </Typography>
                                <div className={classes.buttons}>
                                    <Button size="small" className={classes.button}>
                                        RARI Token
                                    </Button>
                                    <Button size="small" className={classes.button}>
                                        Discussion
                                    </Button>
                                    <Button size="small" className={classes.button}>
                                        Voting
                                    </Button>
                                    <Button size="small" className={classes.button}>
                                        Suggest Feature
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>

                    </div>
                </Grid>
                <Grid item md={6} xs={12}>
                    <div className={classes.container}>
                        <Typography variant="subtitle2" className={classes.heading} >
                            Stay in the loop
                        </Typography>
                        <Typography style={{ display: 'block' }} variant="caption" className={classes.heading} >
                            join our mailing list to stay in the loop with our newest feature releases, nft drops, and our tips and tricks for navigating fungy.
                        </Typography>
                        <div className={classes.email}>
                            <InputBase
                                placeholder='Your Email Address'
                                className={classes.input}
                            />
                            <Button className={classes.button2} variant="contained">Sign up</Button>
                        </div>
                        <Typography variant="subtitle2" className={classes.heading} >
                            Keep in Touch
                        </Typography>
                        <div className={classes.email}>
                            <InputBase
                                placeholder='Your Name'
                                className={classes.input}
                            />
                            <InputBase
                                placeholder='Email'
                                className={classes.input}
                            />

                        </div>
                        <div className={classes.email}>
                            <InputBase
                                placeholder='Leave your message'
                                className={classes.input2}
                            />
                            <Button className={classes.button3} variant="contained">Send <ArrowForward/></Button>
                        </div>
                    </div>

                </Grid>
            </Grid>
        </div>
    )
}
