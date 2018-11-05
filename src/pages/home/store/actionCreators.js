import axios from 'axios';
import { fromJS } from 'immutable';
import * as actionType from './actionTypes';

const changeHomeData = (result) => ({
    type: actionType.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    picList: result.picList,
})
const addMoreList = (list, articlePage) => ({
    type: actionType.ADD_MORE_LIST,
    list: fromJS(list),
    articlePage: articlePage + 1,
})

export const getHomeInfo = () => {
    return(dispatch) => {
        axios.get('/api/HomeList.json').then((res) => {
            const result = res.data.data
            const action = changeHomeData(result)
            dispatch(action)
        })
    }
}
export const getMoreList = (articlePage) => {
    return(dispatch) => {
        axios.get( '/api/HomeMoreList.json?=' + articlePage ).then((res) => {
            const result = res.data.data
            const action = addMoreList(result, articlePage)
            dispatch(action)
        })
    }
}
export const toggleTopShow = (show) => ({
    type: actionType.TOGGLE_TOP_SHOW,
    showScroll: show,
})
