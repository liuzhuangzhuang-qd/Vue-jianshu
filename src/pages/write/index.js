import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Write extends PureComponent {
    render() {
        const { loginStatus } = this.props
        console.log('122222>>>>>>', loginStatus)
        if(loginStatus) {
            return (
                <div>写文章</div>
            )
        } else {
            return(
                <Redirect to='/login' />
            )
        }

    }
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login'])

})
const mapDispatch = (dispatch) => ({
})

export default connect(mapState, mapDispatch)(Write);