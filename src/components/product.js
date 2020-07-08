import React from 'react';
import './Product.css';

const Product = (props) =>{
    return (
        <div className="product">
            <section className="product-section">
            <h3>{props.ID}</h3>
            <h4 className="product-title">{props.Title}</h4>
            <img src={props.Thumbnailurl}></img>
            </section>
        </div>
    )
}

export default Product;