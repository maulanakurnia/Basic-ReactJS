import React, { Component, Fragment } from 'react';
import './Product.css';
import CardProduct from './CardProduct';
import { GlobalConsumer } from '../../../context';
class Product extends Component {
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
                        <div className="count">{this.props.state.totalOrder}</div>
                    </div>
                </div>    
                <CardProduct/>
            </Fragment>
        );
    }
}

export default GlobalConsumer(Product);