import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper
} from "./style";

const Header = (props) => {
    return(
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
                        in={props.focused}
                        timeout={300}
                        classNames='slide'
                    >
                        <NavSearch
                            className={ props.focused ? 'focused' : '' }
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}
                        ></NavSearch>
                    </CSSTransition>
                    <i className={ props.focused ? 'focused iconfont' : 'iconfont' }>&#xe64d;</i>
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

// class Header extends  Component {
//     constructor(props) {
//         super(props);
//         // this.handleInputFocus = this.handleInputFocus.bind(this)
//         // this.handleInputBlur = this.handleInputBlur.bind(this)
//     }
//     render () {
//         return (
//             <HeaderWrapper>
//                 <Logo href='/'/>
//                 <Nav>
//                     <NavItem className='left active'>首页</NavItem>
//                     <NavItem className='left'>下载APP</NavItem>
//                     <NavItem className='right'>登录</NavItem>
//                     <NavItem className='right'>
//                         <i className='iconfont'>&#xe636;</i>
//                     </NavItem>
//                     <SearchWrapper>
//                         <CSSTransition
//                             in={this.props.focused}
//                             timeout={300}
//                             classNames='slide'
//                         >
//                             <NavSearch
//                                 className={ this.props.focused ? 'focused' : '' }
//                                 onFocus={this.props.handleInputFocus}
//                                 onBlur={this.props.handleInputBlur}
//                             ></NavSearch>
//                         </CSSTransition>
//                         <i className={ this.props.focused ? 'focused iconfont' : 'iconfont' }>&#xe64d;</i>
//                     </SearchWrapper>
//                 </Nav>
//                 <Addition>
//                     <Button className='writting'>
//                         <i className='iconfont'>&#xe604;</i>
//                         写文章
//                     </Button>
//                     <Button className='reg'>注册</Button>
//                 </Addition>
//             </HeaderWrapper>
//         )
//     }
// }

const mapStateToProps = (state) => {
    return{
        focused: state.header.focused,
    }
}
const mapDispathToProps = (dispatch) => {
    return{
        handleInputFocus() {
            const action = {
                type: 'search_focus'
            }
            dispatch(action)
        },
        handleInputBlur() {
            const action = {
                type: 'search_blur'
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);