import React from 'react'
import {Typography,AppBar} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';
import VideoPlayer from './components/VideoPlayer';
import Notification from './components/Notification';
import Options from './components/Options';
import './style.css';
const useStyles=makeStyles((theme)=>({
    appBar:{
        display: 'flex',
        flexDirection: 'row',
        background: 'linear-gradient(10deg,yellow,white,white,yellow)',
        justifyContent: 'center',
        alignItems:'center',
        fontSize: '30px',
        border: '1px solid' ,
        width: '400px',
        margin:'auto',
        },
    wrapper:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
    
}));
const App = () => {
    const classes=useStyles();
    return (
       <div className={classes.wrapper}>
           <AppBar className={classes.appBar}position="static" color="inherit">
               <Typography variant="h2" align="center">
                   E-charcha
               </Typography>
           </AppBar>
           <VideoPlayer/>
           <Options>
               <Notification/>
           </Options>
       </div>
    )
}
export default App
