import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_lxlCGJMilqpNpfnJCTKZTPSG00k79L3tIF';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return ( 
        <StripeCheckout label = 'Pay Now'
        name = 'Crown-Clothing'
        billingAddress shippingAddress image = ''
        description = { `your total is $${price}` }
        amount = { priceForStripe }
        panelLabel = 'Pay Now'
        token = { onToken }
        stripeKey = { publishableKey }
        />

    )
}

export default StripeCheckoutButton;