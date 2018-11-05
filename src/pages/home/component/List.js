import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ListItem, ListInfo, LoadMore } from '../style'
import { actionCreators } from '../store'

class List extends Component {
    render() {
        const { getMoreList, articlePage, list } = this.props
        return (
            <div>
                {
                    list.map((item) => {
                        return (
                            <ListItem key={item.get('id')}>
                                <img
                                    className="pic"
                                    src={item.get('imgUrl')}
                                    alt=""
                                />
                                <ListInfo>
                                    <h3 className="title">{item.get('title')}</h3>
                                    <p className="desc">{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                        )
                    })
                }
                <LoadMore onClick={() => getMoreList(articlePage)}>加载更多</LoadMore>
            </div>
        )
    }
}

const mapState = (state) => ({
    list: state.get('home').get('articleList'),
    articlePage: state.get('home').get('articlePage'),
})
const mapDispatch = (dispatch) => ({
    getMoreList(articlePage) {
        dispatch(actionCreators.getMoreList(articlePage))
    }
})

export default connect(mapState, mapDispatch)(List);