import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, Recommend, Topic, Writer } from './component/index';
import { actionCreators } from './store/index'
import {
    HomeWrapper,
    HomeWrapperLeft,
    HomeWrapperRight,
    BackTop,
} from  './style'

class Home extends Component {
    handleScrollTop() {
        window.scrollTo(0, 0)
    }
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
                <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>
            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.changeHomeData()
    }
}

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        // axios.get('/api/HomeList.json').then((res) => {
        //     const result = res.data.data
        //     const action = {
        //         type: 'change_home_data',
        //         topicList: result.topicList,
        //         articleList: result.articleList,
        //         picList: result.picList,
        //     }
        //     dispatch(action)
        // })
        dispatch(actionCreators.getHomeInfo())
    }
})

export default connect(null, mapDispatch)(Home);