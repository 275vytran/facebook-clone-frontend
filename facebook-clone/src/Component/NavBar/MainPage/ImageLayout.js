import { Avatar } from '@material-ui/core';
import React, { Component } from 'react';
import "./MainPage.css";

class ImageLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( 
            <div className='imageLayout__container'>
                <div className='imageLayout__imglay'>
                    <Avatar className='imageLayout__img' src={this.props.image}/>
                </div>

                <div className='imageLayout__text'>
                    {this.props.text}
                </div>
            </div>
         );
    }
}
 
export default ImageLayout;