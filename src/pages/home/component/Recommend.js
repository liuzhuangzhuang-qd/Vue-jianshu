import React, { Component } from 'react';
import { connect } from 'react-redux'
import { RecommendWrapper, RecommendItem } from '../style'

class Recommend extends Component {
    render() {
        const { list } = this.props
        return (
            <RecommendWrapper>
                {
                    list.map((item) => {
                        return <RecommendItem key={item.get('id')} Url={item.get('imgUrl')}/>
                    })
                }
            </RecommendWrapper>
        )
    }
}

const mapStater = (stater) => {
    return{
        list: stater.get('home').get('picList')
    }
}

export default connect(mapStater, null)(Recommend);