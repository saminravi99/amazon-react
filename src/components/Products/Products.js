import React from 'react';
import './Products.css';


const Products = (props) => {
    const {id, img, name, price, ratings, seller, handleClick} = props;
    return (
        <div className="col">
            
                
                    <div className="card">
                        <div className="d-flex justify-content-center p-2" >
                            <img  src={img} className="w-100 rounded product-img card-img-top" alt={name}/>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">{name}</h4>
                            <h5 className="mb-4 card-text">Price: $ {price}</h5>
                            <h6 className="card-text">Seller: {seller}</h6>
                            <h6 className="card-text">Rating: {ratings} Stars</h6>
                        </div>
                        <button onClick={() => handleClick(id)} className="add-to-cart">Add to Cart <i className="fa-solid fa-cart-plus ms-2"></i></button>

                    </div>
                
            
        </div>
    );
};

export default Products;