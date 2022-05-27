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
    this.db = firebase.firestore();
    
    }

    componentDidMount(){
        this.db
            .collection('products')
            .onSnapshot((snapshot) => {
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

        // products[index].qty += 1;
        // this.setState({
        //     products
        // })

        const docRef = this.db.collection('products').doc(products[index].id);

        // console.log(docRef);

        docRef
            .update({
                qty: products[index].qty + 1
            })
            .then(() => {
                console.log("Increased Successfully");
            })
            .catch((error) => {
                console.log('Error', error);
            })
    }

    handleDecreaseQuantity = (item) => {
        const { products } = this.state;
        const index = products.indexOf(item);

        // if(products[index].qty > 0){
        //     products[index].qty -= 1;
        // }
        // else{
        //     return;
        // }
        
        // this.setState({
        //     products:products
        // })

        const docRef = this.db.collection('products').doc(products[index].id);

        // console.log(docRef);

        if(products[index].qty > 0){
            docRef
            .update({
                qty: products[index].qty - 1
            })
            .then(() => {
                console.log("Decreased Successfully");
            })
            .catch((error) => {
                console.log('Error', error);
            })
        }
        else{
            return;
        }

        

    }

    handleDeleteQuantity = (id) => {
        const { products } = this.state;

        // const filteredItems = products.filter((singleProduct) => singleProduct.id!=id);
        // this.setState({
        //     products:filteredItems
        // })
        const docRef = this.db.collection('products').doc(id);

        console.log(docRef);

        docRef
            .delete()
            .then(() => {
                console.log("Deleted Successfully");
            })
            .catch((error) => {
                console.log('Error', error);
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

    addProduct = () => {
        this.db
            .collection('products')
            .add({
                img:'',
                price:1000,
                qty:4,
                title:'Washing Machine'
            })
            .then((docRef) => {
                console.log("The product has been added: ",docRef); //docRef will point to that document
            })
            .catch((error) => {
                console.log('Error: ', error);
            })
    }

  render(){
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        {/* <button onClick={this.addProduct} style={{padding:20, fontSize:15}}>Add a Product</button> */}
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
