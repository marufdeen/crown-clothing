import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

 const StripeButton = ({ price }) => {
   const priceForStripe = price * 100;
   const publisheableKey = 'pk_test_51IOAuUJE6vjxDEZ31MxOtZsUSfcAnn05FRlNRqhbs4F0RwFANlxUDRrbn7WvdmjuwrhIuuZs7NpYtYKganRoU5WB00CxdCG5TP';
    const onToken = (token) => {
        console.log(token);
        alert('Payment Successful');
    }
   return(
    <StripeCheckout
    label='Pay Now'
    name='CROWN CLOTHING LTD'
    billingAddress
    shippingAddress
    image='https://svgshare.com/i/CUz.svg'
    description={`Your total is $${price}`}
    amount={priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publisheableKey}
     />
   )
}
export default StripeButton;