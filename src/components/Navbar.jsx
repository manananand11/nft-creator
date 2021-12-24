import { alpha, AppBar, Avatar, Button, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';
import { ArrowDownward, ArrowDownwardSharp, ArrowDropDown, Keyboard, KeyboardArrowDown, NotificationAdd, Notifications, NotificationsNoneOutlined, Search } from '@mui/icons-material';
import logo from '../img/logo.png'

const useStyles = makeStyles({
    app: {
        borderBottom: "2px solid #e6e6e6",
        boxShadow: "none!important",
        backgroundColor:"white!important"
    },
    nav: {
        backgroundColor: "white",
        color: "grey",
        display: "flex",
        justifyContent: "space-between"
    },
    search: {
        backgroundColor: "#e6e6e6",
        display: "flex",
        alignItems: "center",
        '&:hover': {
            backgroundColor: alpha("#000000", 0.25),
        },
        borderRadius: "10em",
        padding: "10px",
        width: "20%"
    },
    input: {
        marginLeft: "10px",
        overflow: "visible"
    },
    icons: {
        display: "flex",

    },


})
const ColorButton = styled(Button)(({
    color: "grey",
    backgroundColor: "white",
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
const AlertButton = styled(Button)(({
    borderRadius: "50%",
    minWidth:"50!important",
    padding: "0!important",
    color: "grey",
    backgroundColor: "white",
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
const NotifButton = styled(Button)(({

    borderRadius: "10em",
    border: "2px solid rgba(25, 118, 210, 0.5)",
    color: "#158fce",
    backgroundColor: "white",
    '&:hover': {
        color: "grey",
        backgroundColor: "white",
        border: "2px solid rgba(25, 118, 210, 1)",
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: "white",
        color: "#158fce",
    },
}));


export default function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const classes = useStyles()
    return (
        <AppBar className={classes.app} position='static'>
            <Toolbar className={classes.nav}>


                <img src={logo} alt="" />

                <div className={classes.search}>
                    <Search />
                    <InputBase
                        placeholder='Search items, collections, creators'
                        className={classes.input}
                    />
                </div>
                <div className={classes.buttons}>
                    <ColorButton
                        color="secondary"
                        className={classes.link}
                        size="medium">
                        Explore
                    </ColorButton>
                    <ColorButton
                        color="secondary"
                        className={classes.link}
                        size="medium">
                        My items
                    </ColorButton>
                    <ColorButton
                        color="secondary"
                        className={classes.link}
                        size="medium">
                        Following
                    </ColorButton>
                    <ColorButton
                        color="secondary"
                        className={classes.link}
                        size="medium">
                        Activity
                    </ColorButton>
                    <ColorButton
                        color="secondary"
                        className={classes.link}
                        size="medium">
                        How it Works
                    </ColorButton>
                    <ColorButton
                        id="basic-button"
                        aria-controls="basic-menu"
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        Community
                        <KeyboardArrowDown />
                    </ColorButton>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem >Profile</MenuItem>
                        <MenuItem >My account</MenuItem>
                        <MenuItem >Logout</MenuItem>
                    </Menu>
                </div>
                <div className={classes.icons}>
                    <AlertButton variant="outlined"><NotificationsNoneOutlined /></AlertButton>
                    <NotifButton variant="outlined">0 Token</NotifButton>
                    <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
                </div>
            </Toolbar>
        </AppBar>
    )
}
