import React from "react";
// import Cart from "./Cart";

class CartItem extends React.Component{
    

    // testing(){
    //     const promise = new Promise((resolve,reject) => {
    //         setTimeout(() => {
    //             resolve('done');
    //         }, 5000);
    //     })

    //     promise.then(() => {
    //         this.setState({qty:this.state.qty+10});
    //         this.setState({qty:this.state.qty+10});
    //         this.setState({qty:this.state.qty+10});

    //         //In Promise setState acts like a synchronous call
    //         console.log('state',this.state);
    //     });
    // }

    increaseQuantity = () => {
        this.setState((prevState) => {
            return{
                qty:prevState.qty + 1
            }
        }, () => {
            // console.log(this.state);
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
        }, () => {
            // console.log(this.state);
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
        console.log('this.props',this.props);
        const{price, title, qty} = this.props.item;
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