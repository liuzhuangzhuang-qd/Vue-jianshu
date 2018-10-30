import * as actionType from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionType.SEARCH_FOCUS:
            return state.set('focused', true);
        case actionType.SEARCH_BLUR:
            return state.set('focused', false);
        case actionType.CHANGE_LIST :
            return state.merge({
                list: action.data,
                totalPage: action.totalPage,
            })
            // return state.set('list', action.data).set('totalPage',action.totalPage );
        case actionType.MOUSE_ENTER:
            return state.set('mouseIn', true);
        case actionType.MOUSE_LEAVE:
            return state.set('mouseIn', false);
        case actionType.HANDEL_CHANGE_PAGE:
            return state.set('page', action.newPage);
        default:
            return state;
    }
    // if (action.type === actionType.SEARCH_FOCUS) {
    //     return state.set('focused', true)
    //     // return{
    //     //     focused: true,
    //     // }
    // }
    // if (action.type === actionType.SEARCH_BLUR ) {
    //     return state.set('focused', false)
    // }
    // if (action.type === actionType.CHANGE_LIST ) {
    //     return state.set('list', action.data)
    // }
    // return state
}