import React, { Component } from 'react';
import { TopicWrapper, TopicItem } from '../style'

class Topic extends Component {
    render() {
        return (
            <TopicWrapper>
                <TopicItem>
                    <img
                        className='topic-pic'
                         src="//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
                        alt=""
                    />
                    社会热点
                </TopicItem>
            </TopicWrapper>
        )
    }
}

export default Topic;