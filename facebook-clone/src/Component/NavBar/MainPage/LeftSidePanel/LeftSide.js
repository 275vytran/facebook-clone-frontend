import React, { Component } from 'react';
import ImageLayout from '../ImageLayout';
import "./LeftSide.css";
import covid from "../../../../images/covid.png";
import friends from "../../../../images/groups.png";
import memories from "../../../../images/memories.png";
import catpaw from "../../../../images/catspaw.png";
import messengerkid from "../../../../images/messengerkids.png";
import adcenter from "../../../../images/ads.png";
import admanager from "../../../../images/admanager.png";
import blood from "../../../../images/blood.png";
import business from "../../../../images/business.png";
import messenger from "../../../../images/messenger.png";
import fbgroup from "../../../../images/fbgroup.png";
import market from "../../../../images/marketplace.png";
import favorite from "../../../../images/favorite.png";
import event from "../../../../images/event.png";



class LeftSide extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data : []
        }
    }

    getData=()=>{
        let jsondata = [
            {
                "image": catpaw,
                "text": "Vy Tran"
            },
            {
                "image": covid,
                "text": "COVID-19 Information Center"
            },
            {
                "image": friends,
                "text": "Friends"
            },
            {
                "image": fbgroup,
                "text": "Groups"
            },
            {
                "image": market,
                "text": "Marketplace"
            },
            {
                "image": favorite,
                "text": "Favorites"
            },
            {
                "image": memories,
                "text": "Memories"
            },
            {
                "image": messenger,
                "text": "Messenger"
            },
            {
                "image": messengerkid,
                "text": "Messenger Kids"
            },
            {
                "image": adcenter,
                "text": "Ad Centre"
            },
            {
                "image": blood,
                "text": "Blood Donation"
            },
            {
                "image": business,
                "text": "Business Manager"
            },
            {
                "image": event,
                "text": "Events"
            },
            {
                "image": admanager,
                "text": "Ads Manager"
            },
        ];

        this.setState({data : jsondata});
    }
    
    componentDidMount() {
        this.getData();
    }

    render() { 
        return ( 
            <div>
                {
                    this.state.data.map( (item) => (
                        <ImageLayout image={item.image} text={item.text}/>
                    ))
                }
            </div>
        );
    }
}
 
export default LeftSide;