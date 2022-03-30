import React, { Component } from 'react';
import {Paper} from '@material-ui/core';

class Status extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( 
            <div>
                <Paper className='statusbar__status'>

                </Paper>
            </div>
        );
    }
}
 
export default Status;