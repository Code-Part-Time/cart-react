import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component{

    constructor(){
        super();
        this.state = {
            products: [
                {
                    price : 999,
                    title : 'Mobile Phone',
                    qty : 2,
                    img : '',
                    id : 1
                },
                {
                    price : 19999,
                    title : 'Laptop',
                    qty : 1,
                    img : '',
                    id : 2
                },
                {
                    price : 9999,
                    title : 'Camera',
                    qty : 3,
                    img : '',
                    id : 3
                },
                {
                    price : 99,
                    title : 'Watch',
                    qty : 4,
                    img : '',
                    id : 4
                }
            ]
            
        }
    }
    
    render(){
        const { products } = this.state;
        return (
          <div className="cart">
              {products.map((product) => {
                  return <CartItem item={product} key={product.id}/> 
              })}
          </div>
          
        );
    }
}


export default Cart;