import * as actionType from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    focused: false,
});

export default (state = defaultState, action) => {
    if (action.type === actionType.SEARCH_FOCUS) {
        return state.set('focused', true)
        // return{
        //     focused: true,
        // }
    }
    if (action.type === actionType.SEARCH_BLUR ) {
        return state.set('focused', false)
        // return{
        //     focused: false,
        // }
    }
    return state
}