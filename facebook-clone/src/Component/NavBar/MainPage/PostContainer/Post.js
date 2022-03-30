import React, { Component } from 'react';
import "./PostContainer.css";
import {Avatar, Paper} from '@material-ui/core';
import like from "../../../../images/like.png";
import likebutton from "../../../../images/likebutton.png";
import comment from "../../../../images/comment.png";
import share from "../../../../images/share.png";

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    isImageAvailable=(data)=>{
        return data == "" ? false : true;
    }
    
    render() { 
        return ( 
            <div>
                <Paper className='post__container'>
                    <div className='post__header'>
                        <div className='post__header_img'>
                            <Avatar src={this.props.object.user_img} className='post_img'/>
                        </div>

                        <div className='post__header__text'>
                            {this.props.object.user_name}
                        </div>
                    </div>

                    <div className='post__description'>
                        {this.props.object.description}
                    </div>

                    <div className='post__image'>
                        {
                            this.isImageAvailable(this.props.object.post_img) ? <img src={this.props.object.post_img} width="600px"></img> : <span></span>
                        }
                        
                    </div>

                    <div className='post__likeCountContainer'>
                        <div className='post__like'>
                            <img className='post__img' src={like}/>
                        </div>

                        <div className='post__likecount'>
                            {this.props.object.like}
                        </div>
                    </div>

                    <div className='post__likeShare'>
                        <div className='post__tab'>
                            <div className='post__tabfirst'>
                                <img className='post__tabimg' src={likebutton}/>
                            </div>

                            <div className='post__tabtext'>
                                Like
                            </div>
                        </div>

                        <div className='post__tab'>
                            <div className='post__tabfirst'>
                                <img className='post__tabimg' src={comment}/>
                            </div>

                            <div className='post__tabtext'>
                                Comment
                            </div>
                        </div>

                        <div className='post__tab'>
                            <div className='post__tabfirst'>
                                <img className='post__tabimg' src={share}/>
                            </div>

                            <div className='post__tabtext'>
                                Share
                            </div>
                        </div>                       
                    </div>

                    <div className='upload__comment'>
                            <div>
                                <Avatar className='upload__img' src={this.props.object.user_img}/>
                            </div>

                            <div>
                                <input className='upload__box' placeholder="Write a comment..." type="text"/>
                            </div>
                    </div>

                </Paper>
            </div>
        );
    }
}
 
export default Post;