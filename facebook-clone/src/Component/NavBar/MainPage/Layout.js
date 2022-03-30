import React, { Component } from 'react';
import "./MainPage.css";
import Grid from '@material-ui/core/Grid';
import LeftSide from './LeftSidePanel/LeftSide';
import StatusBar from './StatusBar/StatusBar';
import UploadSection from './UploadSection/UploadSection';
import PostContainer from './PostContainer/PostContainer';
import RightSide from './RightSidePanel/RightSide';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( 
            <div className='mainpage__container'>
                <Grid container>
                    <Grid item xs={3}>
                        <LeftSide/>
                    </Grid>

                    <Grid item xs={6} className='middleContainer'>
                        <StatusBar/>
                        <UploadSection/>
                        <PostContainer/>
                    </Grid>

                    <Grid item xs={3}>
                        <RightSide/>
                    </Grid>
                </Grid>
            </div> 
        );
    }
}
 
export default Layout;