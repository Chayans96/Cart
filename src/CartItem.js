import React from "react";

//creating class component 
class CartItem extends React.Component{
    //for a class component to behave like react component we have to give it a method 
    //and that method should return some jsx to display something in dom 
    // constructor(){
    //     super();
    //     this.state = {
    //         price: 999,
    //         title: "Phone",
    //         qty:1,
    //         img:''
    //     }
    // }

    increaseQty = () => {
        this.setState((prevState => {
            return {
                qty: prevState.qty + 1
            }
        }))
        // console.log("this.state", this.state);
    }
    decreaseQty = () => {
        this.setState((prevState) => {
            if( prevState.qty > 1){
                return{
                    qty: prevState.qty - 1
                }
            }
                else{
                    return{
                        qty: 0
                    }
                }
            return {
                
            }
        });
    
        // console.log("this.state", this.state);
    }
    deleteQty = () => {
        this.setState((prevState => {
            return {
                qty: 0
            }
        }))
        // console.log("this.state", this.state);
    }

    render(){
        //object destructuring
        const {price, title, qty} = this.props.product;
        
        return(
        <div className="cart-item">
            <div className="left-block">
                <img alt="" src=""/>
            </div>
            <div className="right-block">
                <div>{title}</div>
                <div>Rs {price}</div>
                <div>Qty: {qty}</div>
                <div className="cart-item-actions">
                    {/* buttons */}
                    <img 
                        className="action-icons" 
                        alt="increase" 
                        src="https://cdn-icons-png.flaticon.com/512/3024/3024515.png" 
                        onClick = {() => {this.props.onIncreaseQuantity(this.props.product)}}
                    />
                    <img 
                        className="action-icons" 
                        alt="decrease" 
                        src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png" 
                        onClick={this.decreaseQty}
                    />
                    <img 
                        className="action-icons" 
                        alt="delete" 
                        src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" 
                        onClick={this.deleteQty}
                    />
                </div>
            </div>
        </div>
        )
    }
}

//exporting 

export default CartItem;