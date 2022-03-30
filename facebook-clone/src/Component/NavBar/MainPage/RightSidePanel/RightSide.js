import React, { Component } from 'react';
import "./RightSide.css";
import ImageLayout from '../ImageLayout';

class RightSide extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data : []
        }
    }

    getData=()=>{
        let jsondata = [
            {
                "image": "",
                "text": "Vy Tran"
            },           
        ];

        this.setState({data : jsondata});
    }

    componentDidMount() {
        this.getData();
    }
    
    render() { 
        return ( 
            <div className='rightside__container'>
                <div className='rightside__header'>
                    Contacts
                </div>

                <div className='rightside__content'>
                    {
                        this.state.data.map( (item) => (
                            <ImageLayout image={item.image} text={item.text}/>
                        ))
                    }
                </div>                                  
            </div>
        );
    }
}
 
export default RightSide;