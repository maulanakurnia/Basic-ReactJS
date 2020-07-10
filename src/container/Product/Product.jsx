import React, { Component, Fragment } from 'react';
import './Product.css';
import CardProduct from '../CardProduct/CardProduct';

class Product extends Component {
    state = {
    // state memiliki kemampuan ketika nilai state berubah, 
    // maka akan merender ulang nilai yang ada pada method render
        order: 4
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        });
    }

    render(){
        return(
            <Fragment>
                <p>Halaman Product</p>
                <hr/>
                <div className="header">
                    <div className="logo">
                        <img src="https://etanee.id/img/content/img_logo_etanee_white.svg" alt=""/>
                    </div>
                    <div className="troley">
                        <img src="https://etanee.id/img/icon/ic_cart.svg" alt=""/>
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
            <CardProduct onCounterChange={(value)=> this.handleCounterChange(value)}/> {/* onCounterChange Merupakan props, dan penamaannya bebas, 
                                                                                        bisa onCounterPlus, onChange etc */}
            </Fragment>
        );
    }
}

export default Product;