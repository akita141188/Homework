import React from 'react';

const ProductItem = ({ product }) => {
    return (
        <>
            <div className="product-item card text-center">
                <a href="#"><img src={product.image} alt={product.name} /></a>
                <h4><a href="#">{product.name}</a></h4>
                <p>Giá Bán: <span>{product.price}</span></p>
            </div>
        </>

    );
};

export default ProductItem;