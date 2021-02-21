import React from 'react';
import { connect } from 'react-redux';
import CustomButton from './../customButton/CustomButton'; 
import CartItem from './../cartItem/CartItem';
import './cart-drop-down.scss';

 const CartDropDown = ({ cartItems }) => (
        <div className='cart-dropdown'>
            <div className='cart-items'>
            {
                cartItems.map( (cartItem) => <CartItem key={cartItem.id} item={cartItem} /> )
            }
            </div>
            <CustomButton>GO TO CHECKOUT </CustomButton>
        </div> 
 );
const mapStateToProps = ({ cart: { cartItems } }) =>(
    {
        cartItems
    }
)

export default connect(mapStateToProps) (CartDropDown);