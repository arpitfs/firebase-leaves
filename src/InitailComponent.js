import Home from './Home'
import './App.css';
import { Route, Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import MaterialForm from './MaterialForm'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import View from './View'
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    Link: {
        align: "right"
    },
}));


function InitialComponent() {
    const classes = useStyles();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    const currentDate = new Date();
    return (
        <div>
            <AppBar position="static">
                <Toolbar style={{ align: "right" }}>
                    {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton> */}
                    {/* <Link to="/" style={{ color: "white", textDecoration: "none" }}> */}
                    {/* <Typography variant="h6" onClick={{}} className={classes.title}>
                            Vacation Tracking
                    </Typography> */}
                    <div>
                        <Link style={{ color: "white", textDecoration: "none", fontSize:"20px" }} to="/">Vacation Tracking</Link>
                    </div>
                    {/* </Link> */}
                    <div style={{float:"right", marginLeft:"1150px"}}>
                        <Link style={{ color: "white", textDecoration: "none", marginRight: "10px" }} to="/ApplyLeave">Apply Leave</Link>
                        <Link style={{ color: "white", textDecoration: "none" }} to="/View">View Leaves</Link>
                    </div>
                </Toolbar>
            </AppBar>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
            }}>
                <h1 style={{ color: "#00896b" }}>
                    {monthNames[currentDate.getMonth()]} {(new Date().getFullYear())} Holiday Tracker 🌴
                </h1>
            </div>
            <Route path="/" component={Home} exact />
            <Route path="/ApplyLeave" component={MaterialForm} exact />
            <Route path="/View" component={View} exact />
        </div>
    );
}

export default InitialComponent;
