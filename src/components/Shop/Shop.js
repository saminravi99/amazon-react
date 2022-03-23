import React from 'react';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        fetch("products.json")
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.log(error));
    }, []);

    console.log(products);

    const allProducts = products.map(product => {
          return  (
              <Products
                    key={product.id}
                    {...product}
              ></Products>
          )
    });


    return (
        <div className="mx-auto row shop">
             <div className=" col-10 shop-container">
                <div className="container mx-auto my-2 row row-cols-1 row-cols-md-3 g-5">
                    {allProducts} 
                </div>
            </div>
            <div className="col-2 cart-container">
                <h4>Cart</h4>
            </div>
        </div>
    );
};

export default Shop;