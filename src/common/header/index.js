import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionType, actionCreators } from './store/index'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
} from "./style";

// const getListArea = (show) => {
//     if (show) {
//         return (
//             <SearchInfo>
//                 <SearchInfoTitle>
//                     热门搜索
//                     <SearchInfoSwitch>
//                         换一批
//                     </SearchInfoSwitch>
//                 </SearchInfoTitle>
//                 <SearchInfoList>
//                     <SearchInfoItem>1111</SearchInfoItem>
//                     <SearchInfoItem>222</SearchInfoItem>
//                     <SearchInfoItem>333</SearchInfoItem>
//                     <SearchInfoItem>jiaoyui</SearchInfoItem>
//                     <SearchInfoItem>5666</SearchInfoItem>
//                     <SearchInfoItem>aha</SearchInfoItem>
//                     <SearchInfoItem>nicaia a1111 </SearchInfoItem>
//                     <SearchInfoItem>66</SearchInfoItem>
//                 </SearchInfoList>
//             </SearchInfo>
//         )
//     } else {
//         return null
//     }
// }
// const Header = (props) => {
//     return(
//         <HeaderWrapper>
//             <Logo href='/'/>
//             <Nav>
//                 <NavItem className='left active'>首页</NavItem>
//                 <NavItem className='left'>下载APP</NavItem>
//                 <NavItem className='right'>登录</NavItem>
//                 <NavItem className='right'>
//                     <i className='iconfont'>&#xe636;</i>
//                 </NavItem>
//                 <SearchWrapper>
//                     <CSSTransition
//                         in={props.focused}
//                         timeout={300}
//                         classNames='slide'
//                     >
//                         <NavSearch
//                             className={ props.focused ? 'focused' : '' }
//                             onFocus={props.handleInputFocus}
//                             onBlur={props.handleInputBlur}
//                         ></NavSearch>
//                     </CSSTransition>
//                     <i className={ props.focused ? 'focused iconfont' : 'iconfont' }>&#xe64d;</i>
//                     {getListArea(props.focused )}
//                 </SearchWrapper>
//             </Nav>
//             <Addition>
//                 <Button className='writting'>
//                     <i className='iconfont'>&#xe604;</i>
//                     写文章
//                 </Button>
//                 <Button className='reg'>注册</Button>
//             </Addition>
//         </HeaderWrapper>
//     )
// }

class Header extends  Component {
    getListArea() {
        const { totalPage, focused, list, page, handelMouseEnter, handelMouseLeave, mouseIn, handelChangePage } = this.props;
        const newList = list.toJS();
        const pageList = [];
        let spinIcon;
        if (newList.length) {
            for (let i = ((page - 1) * 10);i < (page * 10); i++) {
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handelMouseEnter}
                    onMouseLeave={handelMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => handelChangePage(page, totalPage, spinIcon)}>
                            <i ref={(icon) => {spinIcon = icon}} className='iconfont spin'>&#xe758;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null
        }
    }
    render () {
        const { focused, handleInputFocus, handleInputBlur, list } = this.props
        return (
            <HeaderWrapper>
                <Logo href='/'/>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载APP</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>
                        <i className='iconfont'>&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={300}
                            classNames='slide'
                        >
                            <NavSearch
                                className={ focused ? 'focused' : '' }
                                onFocus={() => {handleInputFocus(list)}}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={ this.props.focused ? 'focused iconfont zoom' : 'iconfont zoom' }>&#xe64d;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writting'>
                        <i className='iconfont'>&#xe604;</i>
                        写文章
                    </Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        focused: state.get('header').get('focused'),
        // list: state.get('header').get( 'list')
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn'])
    }
}
const mapDispathToProps = (dispatch) => {
    return{
        handleInputFocus(list) {
            if (list.size === 0) {
                dispatch(actionCreators.getList())
            }
            // const action = {
            //     type: 'search_focus'
            // }
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur())
        },
        handelMouseEnter() {
            dispatch(actionCreators.mouseEnter())
        },
        handelMouseLeave() {
            dispatch(actionCreators.mouseLeave())
        },
        handelChangePage(page, totalPage, spin) {
            console.log('>>>>>',spin.style.transform)
            let originAngle = spin.style.transform
            if ((originAngle == 'rotate(0deg)') || (originAngle == '')) {
                spin.style.transform = 'rotate(360deg)'
                console.log('1111>>>>>',spin.style.transform)
            } else {
                spin.style.transform = 'rotate(0deg)'
            }
            if (page < totalPage) {
                const newPage = page + 1;
                dispatch(actionCreators.handelChangePage(newPage))
            } else {
                const newPage = 1;
                dispatch(actionCreators.handelChangePage(newPage))
            }
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);