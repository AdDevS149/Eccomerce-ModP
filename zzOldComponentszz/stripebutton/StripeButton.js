import React, { useEffect, useState } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { useDispatch, useSelector} from 'react-redux';
import { orderCreate } from '../action/orderAction';
import { useNavigate } from 'react-router-dom';


const StripeCheckoutButton = ({price}) =>{


    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51KHr16JxAtkGL6VJBamEnZ8D0SJdvxRW5N5Y64yHCUR9AIxcPraSxJYluz4PGManDbkPaA6UqMx3EWC2zGw1gCxo002KBczFEz';
    const [token, setToken] = useState(null);

     const onToken =  (token) =>{
        setToken(token)
        console.log(token);
        // alert("payment success");
     }

     
     const cart = useSelector(state => state.cart);
     const { cartItems} = cart;
     const dispatch = useDispatch();
const navigate = useNavigate()
     

    //  const generateOrder = () =>{
    //      dispatch(orderCreate({...cart, orderItems: cart.cartItems}))
    //  }
 

     useEffect(()=>{
        const stripeRequest = async () =>{
            try {
            const {data} = await axios.post('/api/payment', {tokenId: token.id, amount: priceForStripe});
            //console.log(data);
            if (data.success === true){
                dispatch(orderCreate({...cart, orderItems: cart.cartItems}))
                navigate('/success');
            }
            //alert("payment success");
            } catch (error) {
                console.log(error)
               // alert("payment fail");
            }
        };

        token && stripeRequest();
     },[token, cart, dispatch, navigate, priceForStripe]);
    return (
        <StripeCheckout
        label='Pay Now'
        name='MOD^P Ltd.'
        //image='https://pixabay.com/vectors/blank-profile-picture-mystery-man-973460'
        currency="USD"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishablekey }

      />
    );

}

export default StripeCheckoutButton;

// 4242 4242 4242 4242