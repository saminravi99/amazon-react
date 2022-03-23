import React from 'react';
import { addToDb} from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = React.useState([]);

    const [cart, setCart] = React.useState([]);

    React.useEffect(() => {
        fetch("products.json")
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.log(error));
    }, []);

    const handleClick = (id) => {
        const newCart = [...cart, products.find(product => product.id === id)];
        setCart(newCart);
        addToDb (id);
    }

    const clearCart = (id) => {
        setCart([]);
        // removeFromDb(id.id);
    }

    const confirmOrder = () => {
        alert("Thank you for your order!");
        setCart([]);
    }


    // console.log(cart);

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
             <div className=" col-9 shop-container">
                <div className="container mx-auto my-4 row row-cols-1 row-cols-md-3 g-3">
                    {allProducts} 
                </div>
            </div>
            <div className="col-3 cart-container">
                <Cart
                {...products}
                cart={cart}
                clearCart={clearCart}
                confirmOrder={confirmOrder}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;