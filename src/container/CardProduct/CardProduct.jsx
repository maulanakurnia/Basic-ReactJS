import React, { Component } from 'react';

class CardProduct extends Component {
    state = {
    // state memiliki kemampuan ketika nilai state berubah, 
    // maka akan merender ulang nilai yang ada pada method render
        order: 4
    }

    handleCounterChange = (newValue) => { // handleCounterChange Menerima nilai yang telah dilempar
        this.props.onCounterChange(newValue);
    }

    handlePlus = () => { // () => merupakan arrow function
        // console.log('plus', this);
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order); // handleCounterChange mengangkap nilai order
        });
    }
    // handleMinus(){ // (){} merupakan function umum
    handleMinus = () =>{
        // console.log('minus', this);
        if(this.state.order > 0){
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order);
            });
        }
    }
    render(){
        return(
            <div className="card">
                <div className="img-tumb-card">
                    <img src="https://s3-ap-southeast-1.amazonaws.com/etanee-images/product/AU_0809_parting10.jpg" alt=""/>
                </div>
                <p className="product-tile">
                    Ayam 0.8-0.9 Kg [1 Ekor - Potong 10 Bagian]
                </p>
                <p className="product-price">
                    Rp 35,000
                </p>
                <div className="counter">
                    <button className="minus" onClick={this.handleMinus}>-</button>
                    <input type="text" value={this.state.order}/>
                    <button className="plus" onClick={this.handlePlus}>+</button>
                </div>
            </div>
        );
    }
}

export default CardProduct;