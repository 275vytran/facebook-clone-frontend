import React, { Component } from 'react';
import "./UploadSection.css";
import {Avatar, Paper} from '@material-ui/core';
import catpaw from "../../../../images/catspaw.png";
import live from "../../../../images/video.png"; 
import image from "../../../../images/image.png";
import feeling from "../../../../images/feelings.png";

class UploadSection extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( 
            <div>
                <Paper className='upload__container'>
                    <div className='upload__top'>
                        <div>
                            <Avatar className='upload__img' src={catpaw}/>
                        </div>

                        <div>
                            <input className='upload__box' placeholder="What's is on your mind, Vy?" type="text"/>
                        </div>

                    </div>

                    <div className='upload__bottom'>
                        <div className='upload__tabs'>
                            <img src={live} width="35px"></img>
                            <div className='upload__text'>Live video</div>
                        </div>
                            
                        <div className='upload__tabs'>
                            <img src={image} width="35px"></img>
                            <div className='upload__text'>Photo/video</div>
                        </div>

                        <div className='upload__tabs'>
                            <img src={feeling} width="35px"></img>
                            <div className='upload__text'>Feeling/activity</div>
                        </div>
                    </div>
                </Paper>
            </div>
        );
    }
}
 
export default UploadSection;