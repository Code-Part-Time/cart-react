import React from "react";
// import Cart from "./Cart";

class CartItem extends React.Component{
  render(){
      console.log('this.props',this.props);
      const{price, title, qty, id} = this.props.item;
      const{ item, increaseQuantity, decreaseQuantity, deleteQuantity} = this.props;
      return (
        <div className="cart-item">
          <div className="left-block">
            <img
              alt="picmobile"
              style={styles.image}
              src="https://cdn-icons-png.flaticon.com/512/186/186239.png"
            />
          </div>
          <div className="right-block">
            <div style={{ fontSize: 25 }}>{title}</div>
            <div style={{ color: "#777" }}>Rs {price}</div>
            <div style={{ color: "#777" }}>Qty : {qty}</div>
            <div className="cart-item-actions">
              <img
                alt="increase"
                className="action-icons"
                src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                onClick={ () => increaseQuantity(item)}
              />
              <img
                alt="decrease"
                className="action-icons"
                src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                onClick={ () => decreaseQuantity(item)}
              />
              <img
                alt="delete"
                className="action-icons"
                src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                onClick={ () => deleteQuantity(id)}
              />
            </div>
            {/* {Butttons} */}
          </div>
        </div>
      );
  }
}

const styles = {
  image : {
      height : 140,
      width : 140,
      borderRadius : 4,
      background : '#ccc'
  }
}

export default CartItem;