import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import './Product.css'
import CardProduct from './CardProduct';

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
                        <div className="count">{this.props.order}</div>
                    </div>
                </div>    
                <CardProduct/>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        order: state.totalOrder
    }
}
 
export default connect(mapStateToProps)(Product);