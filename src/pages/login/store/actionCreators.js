import axios from 'axios';
import * as actionTypes from './actionTypes';

const changeLogin = () => ({
    type: actionTypes.CHANGE_LOGIN,
    value: true
})
export const logout = () => ({
    type: actionTypes.LOGOUT,
    value: false
})

export const login = (accout, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?accout=' + accout + '&password' + password).then((res) => {
            const result = res.data.data
            if(result) {
                dispatch(changeLogin())
            } else {
                alert('登录失败')
            }
            console.log(res.data.data)
        })
    }
}
