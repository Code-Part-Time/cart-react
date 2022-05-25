import './App.css';
import Cart from './Cart';
import Navbar from './Navbar';
import React from 'react';

class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
        products: [
            {
                price : 999,
                title : 'Mobile Phone',
                qty : 2,
                img : 'https://images.unsplash.com/photo-1567581935884-3349723552ca?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774',
                id : 1
            },
            {
                price : 19999,
                title : 'Laptop',
                qty : 1,
                img : 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871',
                id : 2
            },
            {
                price : 9999,
                title : 'Camera',
                qty : 3,
                img : 'https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870',
                id : 3
            },
            {
                price : 99,
                title : 'Watch',
                qty : 4,
                img : 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870',
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

getCartCount = () => {
    const { products } = this.state;
    let count = 0;

    products.forEach((product) => {
        count += product.qty;
    })

    return count;
}

getCartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;

    products.map((product) => {
        cartTotal = cartTotal + (product.price * product.qty)
    })

    return cartTotal;
}

  render(){
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <Cart
          products={products}
          increaseQuantity={this.handleIncreaseQuantity}
          decreaseQuantity={this.handleDecreaseQuantity}
          deleteQuantity={this.handleDeleteQuantity}
        />
        <div style={{fontSize : 20, padding : 20}}>
                TOTAL : {this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
