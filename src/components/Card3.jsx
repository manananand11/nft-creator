import { LocalOffer, Tag } from '@mui/icons-material';
import { Button, Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import { makeStyles, styled } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles({
    
    card: {
        borderRadius: "20px!important",
        width: "70%",
        border: "2px dashed #e0e0e0!important",
        padding: "35px 30px",
        textAlign: "center"
        // '&:after': {
        //     paddingBottom: "100%",
        //   }
    },
    center: {
        justifyContent: "center!important",
    },
    text:{
        color:"grey!important",
    }
});
const CustomButton = styled(Button)(({
    fontSize:"small!important",
    padding:"5px 10px 5px!important",
    borderRadius:"20px!important",
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
}));
function Card3(props) {
    const classes = useStyles()
    return (
        <div>
          
            <Card variant="outlined" className={classes.card}>
                <CardActionArea>
                    <CardContent>
                        <Typography variant='body' className={classes.text}>
                           {props.icon}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className={classes.center}>
                    <CustomButton >
                        Choose File
                    </CustomButton>
                </CardActions>
            </Card>
        </div>
    )
}

export default Card3
