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

    handleIncreaseQuantity = (item) => {
        const { products } = this.state;
        const index = products.indexOf(item);

        products[index].qty += 1;
        this.setState({
            products
        })
    }

    handleDecreaseQuantity = (item) => {
        const { products } = this.state;
        const index = products.indexOf(item);

        if(products[index].qty > 0){
            products[index].qty -= 1;
        }
        else{
            return;
        }
        
        this.setState({
            products:products
        })
    }

    handleDeleteQuantity = (id) => {
        const { products } = this.state;

        const filteredItems = products.filter((singleProduct) => singleProduct.id!=id);
        this.setState({
            products:filteredItems
        })
    }
    
    render(){
        const { products } = this.state;
        return (
          <div className="cart">
              {products.map((product) => {
                  return( 
                    <CartItem 
                        item={product} 
                        key={product.id} 
                        increaseQuantity={this.handleIncreaseQuantity}
                        decreaseQuantity={this.handleDecreaseQuantity}
                        deleteQuantity={this.handleDeleteQuantity}
                    />); 
              })}
          </div>
          
        );
    }
}


export default Cart;