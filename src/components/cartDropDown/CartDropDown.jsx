import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import CustomButton from './../customButton/CustomButton'; 
import CartItem from './../cartItem/CartItem';
import { toggleCartHidden } from './../../redux/cart/cartAction';

import { createStructuredSelector } from 'reselect';
import { selectCartItems } from './../../redux/cart/cartSelector';
import './cart-drop-down.scss'; 

 const CartDropDown = ({ cartItems, history, dispatch}) => (
        <div className='cart-dropdown'>
            <div className='cart-items'>
            {
                cartItems.length?
                cartItems.map( (cartItem) => <CartItem key={cartItem.id} item={cartItem} /> ):
                ( <div className='empty-message'> Your cart is empty </div> )
            }
            </div>
            <CustomButton onClick={ () => { history.push('/checkout'); dispatch(toggleCartHidden())} }>
             GO TO CHECKOUT </CustomButton>
        </div> 
 );
const mapStateToProps = createStructuredSelector(
    {
        cartItems: selectCartItems
    }
)

export default withRouter(connect(mapStateToProps) (CartDropDown));