import React, { Component } from 'react';
import Post from './Post';
import "./PostContainer.css";

class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: []
        }
    }

    getData=()=>{  //calling rest api from our backend
        let json=[
            {
                "post_ID": 1,
                "user_id": "123456",
                "user_img": "",
                "user_name": "Vy Tran",
                "description": "Love it!", 
                "post_img": "",
                "like": 25
            }
        ]

        this.setState({data : json});
    }

    componentDidMount(){
        this.getData();
    }
    
    render() { 
        return (
            <div>
                {
                    this.state.data.map( (item)=>(
                        <Post object={item}/>
                    ))
                }
            </div>
        );
    }
}
 
export default PostContainer;