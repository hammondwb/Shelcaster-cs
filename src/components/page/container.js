import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import './page.css'

//React Player
import ReactPlayer from 'react-player'

//List
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';

//List Nesting
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import { Dashboard } from '@material-ui/icons';
import PersonIcon from '@material-ui/icons/Person';
import VideocamIcon from '@material-ui/icons/Videocam';

//Components
import Playlist from '../player/playlist';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    inline: {
        display: 'inline',
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));



export default function MainContainer(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const baseUrl = props.baseUrl;
    console.log('base url', baseUrl);
    const handleClick = () => {
    setOpen(!open);
    };
    return (
        <div>
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="xl" style={{backgroundColor: '#000', height: '100vh'}}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={3} className="sidePanel">
                        <List
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                            subheader={
                                <ListSubheader component="div" id="nested-list-subheader">
                                    <img style={{maxWidth: '100%', backgroundColor: '#000'}} src="https://shelcaster.tv/images/styles/logo_2v2-horizintal.png" />
                                </ListSubheader>
                            }
                            className={classes.root}
                            >
                            <ListItem button>
                                <ListItemIcon>
                                <Dashboard />
                                </ListItemIcon>
                                <ListItemText primary="Dashboard" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                <PersonIcon />
                                </ListItemIcon>
                                <ListItemText primary="My Account" />
                            </ListItem>
                            <ListItem button onClick={handleClick}>
                                <ListItemIcon>
                                <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary="Inbox" />
                                {open ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon>
                                    <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary="Starred" />
                                </ListItem>
                                </List>
                            </Collapse>
                            <ListItem button>
                                <ListItemIcon>
                                    <VideocamIcon />
                                </ListItemIcon>
                                <ListItemText primary="Broadcast" />
                            </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={12} sm={6} md={9}>
                            <Grid className="header" item xs={12}>
                                Featuring LatterHouse Decor
                            </Grid>
                            <Grid container className="playerContainer">
                                <Grid item xs={12} md={8}>
                                    <ReactPlayer controls url='https://shelcastertv.s3.us-east-2.amazonaws.com/latterhousedecor/latterhouse-decor-promo.mp4' width='100%' />
                                </Grid>
                                <Grid item xs={12} md={4} className="playListContainer">
                                    <Playlist />
                                    {/* <List className={classes.root} style={{maxHeight: '360px', overflowY: 'auto'}}>
                                        <ListItem alignItems="flex-start">
                                            <ListItemAvatar>
                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                            </ListItemAvatar>
                                            <ListItemText
                                            primary="LatterHouse Introduction"
                                            secondary={
                                                <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    className={classes.inline}
                                                    color="textPrimary"
                                                >
                                                    Shalonda Waggoner
                                                </Typography>
                                                {" — Fighting domestic violence with design and decor..."}
                                                </React.Fragment>
                                            }
                                            />
                                        </ListItem>
                                        <Divider variant="inset" component="li" />
                                        <ListItem alignItems="flex-start">
                                            <ListItemAvatar>
                                            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                            </ListItemAvatar>
                                            <ListItemText
                                            primary="Summer BBQ"
                                            secondary={
                                                <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    className={classes.inline}
                                                    color="textPrimary"
                                                >
                                                    to Scott, Alex, Jennifer
                                                </Typography>
                                                {" — Wish I could come, but I'm out of town this…"}
                                                </React.Fragment>
                                            }
                                            />
                                        </ListItem>
                                        <Divider variant="inset" component="li" />
                                        <ListItem alignItems="flex-start">
                                            
                                            <ListItemAvatar>
                                            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                                            </ListItemAvatar>
                                            <ListItemText
                                            primary="Oui Oui"
                                            secondary={
                                                <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    className={classes.inline}
                                                    color="textPrimary"
                                                >
                                                    Sandra Adams
                                                </Typography>
                                                {' — Do you have Paris recommendations? Have you ever…'}
                                                </React.Fragment>
                                            }
                                            />
                                        </ListItem>
                                        <Divider variant="inset" component="li" />
                                        <ListItem alignItems="flex-start">
                                            
                                            <ListItemAvatar>
                                            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                                            </ListItemAvatar>
                                            <ListItemText
                                            primary="Oui Oui"
                                            secondary={
                                                <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    className={classes.inline}
                                                    color="textPrimary"
                                                >
                                                    Sandra Adams
                                                </Typography>
                                                {' — Do you have Paris recommendations? Have you ever…'}
                                                </React.Fragment>
                                            }
                                            />
                                        </ListItem>
                                        <Divider variant="inset" component="li" />
                                        <ListItem alignItems="flex-start">
                                            
                                            <ListItemAvatar>
                                            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                                            </ListItemAvatar>
                                            <ListItemText
                                            primary="Oui Oui"
                                            secondary={
                                                <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    className={classes.inline}
                                                    color="textPrimary"
                                                >
                                                    Sandra Adams
                                                </Typography>
                                                {' — Do you have Paris recommendations? Have you ever…'}
                                                </React.Fragment>
                                            }
                                            />
                                        </ListItem>
                                        <Divider variant="inset" component="li" />
                                        <ListItem alignItems="flex-start">
                                            
                                            <ListItemAvatar>
                                            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                                            </ListItemAvatar>
                                            <ListItemText
                                            primary="Oui Oui"
                                            secondary={
                                                <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    className={classes.inline}
                                                    color="textPrimary"
                                                >
                                                    Sandra Adams
                                                </Typography>
                                                {' — Do you have Paris recommendations? Have you ever…'}
                                                </React.Fragment>
                                            }
                                            />
                                        </ListItem>
                                    </List> */}
                                </Grid>
                                <Grid className="trackInfo" item xs={12}>
                                    LatterHouse Decor Introduction Video featuring Shalonda Waggoner, Founder/President
                                </Grid>
                                <Grid className="spliderGridContainer" item xs={12} style={{maxHeight: '400px', overFlowY: 'auto'}}>
                                    <Grid className="splideGrid" item xs={12}>
                                        <h3>Continue Watching</h3>
                                        <Splide
                                            options={ {
                                                type: 'loop',
                                                width  : '100%',
                                                gap    : '1rem',
                                                perPage: 4,
                                                autoWidth: true,
                                                perMove: 1,
                                                fixedHeight: '8rem',
                                            } }
                                            >
                                            <SplideSlide>
                                                <img className="tileImg" src="https://shelcaster.tv/images/thumb-woa.jpg" alt="World of Acappella"/>
                                            </SplideSlide>
                                            <SplideSlide>
                                                <img className="tileImg" src="https://shelcaster.tv/images/thumb-blacktivity.jpg" alt="Blacktivity"/>
                                            </SplideSlide>
                                            <SplideSlide>
                                                <img className="tileImg" src="https://shelcaster.tv/images/thumb-cocbn.jpg" alt="COCBN"/>
                                            </SplideSlide> 
                                            <SplideSlide>
                                                <img className="tileImg" src="https://shelcaster.tv/images/thumb-gospel-light.jpg" alt="Image 2"/>
                                            </SplideSlide>
                                            <SplideSlide>
                                                <img className="tileImg" src="https://shelcaster.tv/images/thumb-woa.jpg" alt="World of Acappella"/>
                                            </SplideSlide>
                                            <SplideSlide>
                                                <img className="tileImg" src="https://shelcaster.tv/images/thumb-blacktivity.jpg" alt="Blacktivity"/>
                                            </SplideSlide>
                                            <SplideSlide>
                                                <img className="tileImg" src="https://shelcaster.tv/images/thumb-cocbn.jpg" alt="COCBN"/>
                                            </SplideSlide> 
                                            <SplideSlide>
                                                <img className="tileImg" src="https://shelcaster.tv/images/thumb-gospel-light.jpg" alt="Image 2"/>
                                            </SplideSlide>  
                                        </Splide>
                                    </Grid>
                                    <Grid className="splideGrid" item xs={12}>
                                        <h3>New Additions</h3>
                                        <Splide
                                            options={ {
                                                type: 'loop',
                                                width  : '100%',
                                                gap    : '1rem',
                                                perPage: 4,
                                                autoWidth: true,
                                                perMove: 1,
                                                fixedHeight: '8rem',
                                            } }
                                            >
                                            <SplideSlide>
                                                <img className="tileImg" src="https://shelcaster.tv/images/thumb-woa.jpg" alt="World of Acappella"/>
                                            </SplideSlide>
                                            <SplideSlide>
                                                <img className="tileImg" src="https://shelcaster.tv/images/thumb-blacktivity.jpg" alt="Blacktivity"/>
                                            </SplideSlide>
                                            <SplideSlide>
                                                <img className="tileImg" src="https://shelcaster.tv/images/thumb-cocbn.jpg" alt="COCBN"/>
                                            </SplideSlide> 
                                            <SplideSlide>
                                                <img className="tileImg" src="https://shelcaster.tv/images/thumb-gospel-light.jpg" alt="Image 2"/>
                                            </SplideSlide>  
                                        </Splide>
                                    </Grid>
                                    <Grid className="splideGrid" item xs={12}>
                                        <h3>Faith Base</h3>
                                        <Splide
                                            options={ {
                                                type: 'loop',
                                                width  : '100%',
                                                gap    : '1rem',
                                                perPage: 4,
                                                autoWidth: true,
                                                perMove: 1,
                                                fixedHeight: '8rem',
                                            } }
                                            >
                                            <SplideSlide>
                                                <img className="tileImg" src="https://shelcaster.tv/images/thumb-woa.jpg" alt="World of Acappella"/>
                                            </SplideSlide>
                                            <SplideSlide>
                                                <img className="tileImg" src="https://shelcaster.tv/images/thumb-blacktivity.jpg" alt="Blacktivity"/>
                                            </SplideSlide>
                                            <SplideSlide>
                                                <img className="tileImg" src="https://shelcaster.tv/images/thumb-cocbn.jpg" alt="COCBN"/>
                                            </SplideSlide> 
                                            <SplideSlide>
                                                <img className="tileImg" src="https://shelcaster.tv/images/thumb-gospel-light.jpg" alt="Image 2"/>
                                            </SplideSlide>  
                                        </Splide>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </React.Fragment>
        </div>
    );
}