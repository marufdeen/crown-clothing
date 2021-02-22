import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { auth } from './../../firebase/firebaseUtils';
import CartIcon from './../cartIcon/CartIcon';
import CartDropDown from './../cartDropDown/CartDropDown';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cartSelector';
import {selectCurrentUser} from '../../redux/user/userSelector';
import './header.scss';

 const Header = ({ currentUser, hidden }) =>  { 
    return (
        <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
        <Link to='/' className='option'>HOME</Link>
        <Link to='/shop' className='option'>SHOP</Link>
        {
        currentUser?
        <div className='option' onClick={ () => auth.signOut() }>SIGN OUT</div>: 
        <Link to='/signin' className='option'> SIGN IN </Link>
        }
        <CartIcon />
        </div>
        {  hidden? null:   <CartDropDown />  }
        </div>
    )
}
const mapStateToProps = createStructuredSelector({ 
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
export default connect(mapStateToProps) (Header);
 