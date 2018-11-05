import { fromJS } from 'immutable'
import * as actionType from './actionTypes'

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    picList: []
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionType.CHANGE_HOME_DATA:
            console.log('>>>',action)
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                picList: fromJS(action.picList),
            })
        default:
            return state;
    }
}