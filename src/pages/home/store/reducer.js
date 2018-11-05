import { fromJS } from 'immutable'
import * as actionType from './actionTypes'

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    picList: [],
    articlePage: 1,
    showScroll: false,
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionType.CHANGE_HOME_DATA:
            // console.log('>>>',action)
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                picList: fromJS(action.picList),
            });
        case actionType.ADD_MORE_LIST:
            // console.log('>>>',action.list)
            return state.merge({
                articleList: state.get('articleList').concat(action.list),
                articlePage: action.articlePage,
            });
        case actionType.TOGGLE_TOP_SHOW:
            // console.log('>>>',action.list)
            return state.set('showScroll', action.showScroll)
        default:
            return state;
    }
}