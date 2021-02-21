import React from 'react';
import CustomButton from './../customButton/CustomButton';
import './cart-drop-down.scss';

 const CartDropDown = () => (
        <div className='cart-dropdown'>
            <div className='cart-items'></div>
            <CustomButton>GO TO CHECKOUT </CustomButton>
        </div> 
 ) 

export default CartDropDown;