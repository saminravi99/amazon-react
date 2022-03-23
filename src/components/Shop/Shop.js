import React from 'react';
import Cart from '../Cart/Cart';
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

    const handleClick = (id) => {
        console.log("clicked on " + id);
    }

    // console.log(products);

    const allProducts = products.map(product => {
          return  (
              <Products
                    key={product.id}
                    {...product}
                    handleClick={handleClick}
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
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Shop;