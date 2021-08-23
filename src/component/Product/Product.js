import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const { img, name, seller, price, stock } = props.zike
    return (
        <div className='product'>
            <div className="">

                <img src={img} alt="" />
            </div>
            <div className="">
                <h4 className='product-name'>{name}</h4>
                <br />
                <p><small>by : {seller}</small></p>
                <p>${price}</p>
                <br />
                <p><small>Only {stock} available in the Stock- oder soon</small></p>
                <button className='main-btn' onClick={ () => props.handleAddProduct(  props.zike) }> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
                
            </div>

        </div>
    );
};

export default Product;