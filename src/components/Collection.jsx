import { HelpOutlineOutlined } from '@mui/icons-material'
import { Button, TextField, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import Card3 from './Card3'

const useStyles = makeStyles({
    space: {
        marginTop: "20px!important",

        fontWeight: "700!important"

    },
    text: {
        color: "grey!important",
        fontWeight: "400!important"
    },
    center: {
        textAlign: "center",
        margin: "20px"
    },
    button: {
        // margin: "20px!important"
        border: "2px solid rgba(25, 118, 210, 0.5)!important",
        fontWeight: "700!important",
        borderRadius: "10em!important",
    },
    buttongrad: {
        fontSize: "small!important",
        padding: "5px 50px!important",
        borderRadius: "20px!important",
        color: "white!important",
        background: "rgb(55,81,118)",
        background: "linear-gradient(0deg, rgba(55,81,118,1) 0%, rgba(29,117,171,1) 46%, rgba(4,153,224,1) 100%)",
        '&:hover': {
            color: "#158fce",
            backgroundColor: "white",
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: "white",
            color: "#158fce",
        },
    },
    unlockdiv: {
        display: "flex",
        alignItems: "center",
        marginTop: "50px",
        justifyContent: "space-between"
    },
    buttonsmall:{
        color: "grey!important",
        fontWeight: "500!important",
        fontSize:"12px!important"
    }

})

export default function Collection() {
    const classes = useStyles()
    return (
        <div>
            <Typography variant="subtitle2" className={classes.space}>
                Choose Collection
            </Typography>
            <Card3 />

            <Typography variant="subtitle2" className={classes.space}>
                Title
            </Typography>
            <TextField fullWidth id="standard-basic" placeholder="e.g. Redeemable T-Shirt with logo" variant="standard" />
            <Typography variant="subtitle2" className={classes.space}>
                Description <span className={classes.text}>(optional)</span>
            </Typography>

            <TextField fullWidth id="standard-basic" placeholder="e.g. After purchasing you will be able to get the real T-shirt" variant="standard" />
            <Typography style={{ display: 'block' }} variant="caption" className={classes.text}>
                With preserved line-breaks
            </Typography>
            <Typography variant="subtitle2" className={classes.space}>
                Royalties
            </Typography>
            <TextField fullWidth id="standard-basic" placeholder="e.g. 10%" variant="standard" />
            <Typography style={{ display: 'block' }} variant="caption" className={classes.text}>
                Suggested: 0%, 10% ,20%, 30%
            </Typography>
            <div className={classes.center}>
                <Button className={classes.button} variant="outlined">HIDE ADVANCED SETTINGS</Button>
            </div>
            <Typography variant="subtitle2" className={classes.space}>
                Properties<span className={classes.text}>(optional)</span>
            </Typography>
            <TextField id="standard-basic" placeholder="e.g. size" variant="standard" />
            <TextField id="standard-basic" placeholder="e.g. M" variant="standard" />

            <Typography variant="subtitle2" className={classes.space}>
                Alternative text for NFT<span className={classes.text}>(optional)</span>
            </Typography>
            <TextField fullWidth id="standard-basic" placeholder="Image description in details(do not start with word image)" variant="standard" />
            <Typography style={{ display: 'block' }} variant="caption" className={classes.text}>
                Text that will be used in VoiceOver for people with disabilities
            </Typography>
            <div className={classes.unlockdiv}>
                <Button className={classes.buttongrad} variant="outlined">Create Item</Button>
                <Button className={classes.buttonsmall} size="small">Unsaved Changes <HelpOutlineOutlined/></Button>
            </div>
        </div>
    )
}
