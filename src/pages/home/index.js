import React, { Component } from 'react';
import { List, Recommend, Topic, Writer } from './component/index'
import {
    HomeWrapper,
    HomeWrapperLeft,
    HomeWrapperRight,
} from  './style'

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeWrapperLeft>
                    <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4526/73a226693f83ee2920d31207c881b7c6eeb46761.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                    <Topic />
                    <List />
                </HomeWrapperLeft>
                <HomeWrapperRight>
                    <Recommend />
                    <Writer />
                </HomeWrapperRight>
            </HomeWrapper>
        )
    }
}

export default Home;