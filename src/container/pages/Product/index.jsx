import React, { Component, Fragment } from 'react';
import './Product.css'
import CardProduct from './CardProduct';
import {RootContext} from '../../Home'
class Product extends Component {
    render() { 
        return (  
            <RootContext.Consumer>
                {
                    val => {
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
                                        <div className="count">{val.state.totalOrder}</div>
                                    </div>
                                </div>    
                                <CardProduct/>
                            </Fragment>
                        )
                    }
                }
            </RootContext.Consumer>
        );
    }
}

export default Product;