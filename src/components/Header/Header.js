import React from "react";
import './Header.css'
import { Img } from '../Styled';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Sign_Out } from '../../actions/userActions'

const Header = (props) =>  {
    const { isAuth, dispatch } = props;
    const signOut = () => {
        Sign_Out(isAuth.token, dispatch)
    }
    const generateMenu = (isAuth) => {
        if(isAuth.token){
            return (
                <>
                    <Link to={'/profile'}> Profile </Link>
                    <Link to={'/'}> Home </Link>
                    <Link to={'/'} onClick={signOut}> Sign Out </Link>
                </>
            )
        } else {
            return (
                <>
                    <Link to={'/login'}> Sign In </Link>
                    <Link to={'/'}> Home </Link>
                    <Link to={'/registration'}> Sign Up </Link>
                </>
            )
        }
    }
    return (
        <header>
            <nav>
                { generateMenu(isAuth) }
            </nav>
            <div className='openBone'>
                <Img src={'/images/loading/open-menu-bone.png'}/>
            </div>
        </header>
    )
}
const mapStateToProps= (isAuth) => {
    return isAuth;
}
export default connect(mapStateToProps)(Header);