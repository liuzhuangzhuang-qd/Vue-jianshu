import axios from 'axios'
import * as actionType from './actionTypes'

const changeHomeData = (result) => ({
    type: actionType.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    picList: result.picList,
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