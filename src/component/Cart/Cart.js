import React from 'react';
import './Cart.css'


const Cart = (props) => {
    const cart = props.cart;
    

    // const totalPrice =  cart.reduce((total, prd) => total + prd.price, 0)

    let total = 0
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];

        total = total + product.price
        
    }

    let Shipping = 0;
    if (total > 35) {
        Shipping = 0
    }
    else if (total > 15) {
        Shipping = 4.99
    }
    else if (total > 0) {
        Shipping = 12.99
    }
    


    const tax =( total / 10).toFixed(2)
     
     const GrandTotal = (total + Shipping + Number(tax)).toFixed(2)
 
     const formatNumber = num => {
         const precision = num.toFixed(2)
         return Number(precision);
     }




    return (
        <div className='carti'>
           <h3>Order Summary</h3>
           <p>  Item's Ordered:  {cart.length}</p>
           <p>Product Prize : {formatNumber(total)}</p>
           <p><small>Shipping Cost : ${Shipping}</small></p>
            
           <p><small>Taxt + Vat : {tax}</small></p>
           <p>Total Prize : {GrandTotal}</p>
        </div>
    );
};

export default Cart;