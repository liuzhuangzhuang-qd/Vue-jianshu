import axios from 'axios'
import { fromJS } from 'immutable'
import * as actionType from './actionTypes'

const changeList = (data) => ({
    type: actionType.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
})
export const searchFocus = () => ({
    type: actionType.SEARCH_FOCUS,
});
export const searchBlur = () => ({
    type: actionType.SEARCH_BLUR,
})
export const getList = () => {
    return(dispatch) => {
        // axios.get('https://www.jianshu.com/trending_search').then(() => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data
            dispatch(changeList(data.data))
        }).catch(() => {

        })
    }
}
export const mouseEnter = () => ({
    type: actionType.MOUSE_ENTER,
})
export const mouseLeave = () => ({
    type: actionType.MOUSE_LEAVE,
})
export const handelChangePage = (newPage) => ({
    type: actionType.HANDEL_CHANGE_PAGE,
    newPage
})

