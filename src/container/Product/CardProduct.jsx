import React, { Component, Fragment } from 'react';

class CardProduct extends Component {
    state = {  
        order: 4
    }

    handleCounterChange = (newVal) => {
        this.props.onCounterChange(newVal);
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, ()=> {
            this.handleCounterChange(this.state.order);
        })
    }
    
    handleMinus = () => {
        if(this.state.order > 0){
            this.setState({
                order: this.state.order - 1
            }, ()=> {
                this.handleCounterChange(this.state.order);
            })
        }
    }
    inputChangedHandler = (e) => {
        return e.target.value;
    }

    render() { 
        return (  
            <Fragment>
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="http://s3-ap-southeast-1.amazonaws.com/etanee-images/product/colonel_ori_pack10.jpg" alt="product_img"/>
                </div>
                <p className="product-title">Daging Ayam Berbumbu Rasa Original plus tepung crispy [1 Carton - 10 pack]</p>
                <p className="product-price">Rp 34.000,00</p>
                <div className="counter">
                    <button className="minus" onClick={this.handleMinus}>-</button>
                    <input className="input-count" type="text" value={this.state.order} onChange={(e)=> this.inputChangedHandler(e)}/>
                    <button className="plus" onClick={this.handlePlus}>+</button>
                </div>
            </div>
        </Fragment>
        );
    }
}
 
export default CardProduct;