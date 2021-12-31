import { Box, Button, Card, CardActionArea, CardActions, CardContent, Input, Typography } from '@mui/material'
import { makeStyles, styled } from '@mui/styles'
import React, { useEffect, useState } from 'react'

const useStyles = makeStyles({
    heading: {
        marginTop: "40px!important",
        marginBottom: "20px!important"
    },
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
    text: {
        color: "grey!important",
    },
    uploadButton: {
        fontSize: "small!important",
        padding: "5px 10px 5px!important",
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
    }
});
const CustomButton = styled(Button)(({
    fontSize: "small!important",
    padding: "5px 10px 5px!important",
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
}));
function Card1(props) {
    const classes = useStyles()
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        if (selectedImage) {
            setImageUrl(URL.createObjectURL(selectedImage));
            props.setImgUrl(URL.createObjectURL(selectedImage));
        }
    }, [selectedImage]);
    return (
        <div>
            <Typography variant='h6' className={classes.heading}>
                {props.uploadName}
            </Typography>
            <Card variant="outlined" className={classes.card}>
                <CardActionArea>
                    <CardContent>
                        <Typography variant='body' className={classes.text}>
                            {props.content}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className={classes.center}>

                    <Input
                        accept="image/*"
                        type="file"
                        id="select-image"
                        style={{ display: 'none' }}
                        onChange={e => setSelectedImage(e.target.files[0])}
                    />
                    <label htmlFor="select-image">
                        <Button variant="contained" color="primary" component="span" className={classes.uploadButton}>
                            Choose File
                        </Button>
                    </label>
                    {imageUrl && selectedImage && props.cover && (
                        <Box mt={2} textAlign="center">
                            <div>Image Preview:</div>
                            <img src={imageUrl} alt={selectedImage.name} height="100px" />
                        </Box>
                    )}
                </CardActions>

            </Card>
        </div>
    )
}

export default Card1
