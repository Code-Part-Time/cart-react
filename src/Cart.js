import React from "react";
import CartItem from "./CartItem";

const Cart = (props) => {

    const { products } = props;
    const{ increaseQuantity, decreaseQuantity, deleteQuantity} = props;
    return (
        <div className="cart">
            {products.map((product) => {
                return( 
                <CartItem 
                    item={product} 
                    key={product.id} 
                    increaseQuantity={props.increaseQuantity}
                    decreaseQuantity={props.decreaseQuantity}
                    deleteQuantity={props.deleteQuantity}
                />); 
            })}
        </div>
    );
}



export default Cart;