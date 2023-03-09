import React from "react";
import CartItem from "./CartItem";
    class Cart extends React.Component{
       

        handleIncreaseQuantity = (product) => {
            
            //getting all the products form the state
            const {products} = this.state;
            
            // getting indexx of product which needs to be changed 
            const index = products.indexOf(product)

            products[index].qty += 1;

            //updating value of state
            this.setState({
                products:products
            })

        }
        constructor(){
            super();
            this.state = {
                    products: [
                        {
                            title:"Watch",
                            price:150,
                            qty:1,
                            id:1

                        },
                        {
                            title:"Phone",
                            price:1500,
                            qty:1,
                            id:2

                        },
                        {
                            title:"Charger",
                            price:90,
                            qty:1,
                            id:3
                        }]
                    }
        }

        render(){
            const {products} = this.state;
            return(
                <div className="cart">
                    {products.map((product) => {
                        return 
                        <CartItem 
                        product={product}
                        onIncreaseQuantity= {this.handleIncreaseQuantity}
                        />                        
                    })}
                </div>
            )
        }
    }

    export default Cart;