import React from 'react';
import "./Product.css"

const Product = (props) => {

    const { name, img, price, seller, ratings } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='Product-name'>{name}</p>
                <p> Price: ${price}</p>
                <p>Seller: {seller}</p>
                <p>Ratings: {ratings} stars</p>
            </div>
            <button onClick={() => props.addToCart(props.product)} className='btn-cart'>Add to cart</button>
        </div>
    );
};

export default Product;