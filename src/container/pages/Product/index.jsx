import React, { Component, Fragment } from 'react';
import './Product.css'
import CardProduct from './CardProduct';

class Product extends Component {
    state = {  
        order: 4
    }

    handleOnChange = (newVal) => {
        this.setState({
            order: newVal
        })
    }

    render() { 
        return (  
            <Fragment>
                <p>Halaman Product</p>
                <hr/>
                <div className="header">
                    <div className="logo">
                        <img src="static/icon/img_logo_etanee_white.svg" alt=""/>
                    </div>
                    <div className="troley">
                        <img src="static/icon/ic_cart_white.svg" alt=""/>
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>    
                <CardProduct onCounterChange={(value)=> this.handleOnChange(value)}/>
            </Fragment>
        );
    }
}
 
export default Product;