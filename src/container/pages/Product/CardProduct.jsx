import React, { Component, Fragment } from 'react';
import Counter from './Counter';

class CardProduct extends Component {
    render() { 
        return (  
            <Fragment>
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="static/images/colonel_ori_pack10.jpg" alt="product_img"/>
                </div>
                <p className="product-title">Daging Ayam Berbumbu Rasa Original plus tepung crispy [1 Carton - 10 pack]</p>
                <p className="product-price">Rp 34.000,00</p>
                <Counter/>
            </div>
        </Fragment>
        );
    }
}
 
export default CardProduct;