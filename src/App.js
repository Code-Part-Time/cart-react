import './App.css';
import Cart from './Cart';
import Navbar from './Navbar';
import React from 'react';
import firebase from "firebase/compat/app";

class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
        products: [],
        loading: true
        }
    }

    componentDidMount(){
        firebase
            .firestore()
            .collection('products')
            .get()
            .then((snapshot) => {
                console.log(snapshot);

                snapshot.docs.map((doc) => {
                    console.log(doc.data());
                })

                const products = snapshot.docs.map((doc) => {
                    const data = doc.data();

                    data['id'] = doc.id;

                    return data;
                })

                this.setState({
                    products : products,
                    loading: false
                })
            })
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
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <Cart
          products={products}
          increaseQuantity={this.handleIncreaseQuantity}
          decreaseQuantity={this.handleDecreaseQuantity}
          deleteQuantity={this.handleDeleteQuantity}
        />
        {loading && <h1>Loading Products ...</h1>}
        <div style={{fontSize : 20, padding : 20}}>
                TOTAL : {this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
