import React from "react";

class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            price : 999,
            title : 'Mobile Phone',
            qty : 2,
            img : ''
        }
    }

    increaseQuantity = () => {
        this.setState((prevState) => {
            return{
                qty:prevState.qty + 1
            }
        })
    }
    decreaseQuantity = () => {
        this.setState((prevState) => {
            if(prevState.qty !==0){
               return{
                qty:prevState.qty - 1
               } 
            }else{
                return prevState.qty;
            }
        })
    }
    deleteQuantity = () => {
        this.setState((prevState) => {
            return{
                qty:prevState.qty = 0
            }
        })
    }

    render(){
        const{price, title, qty} = this.state;
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
                  onClick={this.increaseQuantity}
                />
                <img
                  alt="decrease"
                  className="action-icons"
                  src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                  onClick={this.decreaseQuantity}
                />
                <img
                  alt="delete"
                  className="action-icons"
                  src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                  onClick={this.deleteQuantity}
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