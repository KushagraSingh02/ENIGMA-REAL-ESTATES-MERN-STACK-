import React, { Component } from 'react'
import './Cart.css'
import cartSample from './cartSample.jpg';
import house from './house.jpg';


export default class Cart extends Component {
    constructor() {
        super();
    }


    render() {


        return (
            <div className="cart_body">
                <h2 className="cart_head">CART</h2>
                <div className="cart">
                    <table>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="cart-info">
                                        <img className="sampleimg" src={cartSample} alt="imgage" />
                                        <div>
                                            <p>3bhk</p>
                                            <small>Price: 800/-</small>
                                            <button>Remove</button>
                                        </div>

                                    </div>
                                </td>
                                <td><input type="number" value="1" /></td>
                                <td>800/-</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="cart-info">
                                        <img className="sampleimg" src={house} alt="imgage" />
                                        <div>
                                            <p>3bhk</p>
                                            <small>Price: 800/-</small>
                                            <button>Remove</button>
                                        </div>

                                    </div>
                                </td>
                                <td><input type="number" value="1" /></td>
                                <td>800/-</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="cart-info">
                                        <img className="sampleimg" src={cartSample} alt="imgage" />
                                        <div>
                                            <p>3bhk</p>
                                            <small>Price: 800/-</small>
                                            <button>Remove</button>
                                        </div>

                                    </div>
                                </td>
                                <td><input type="number" value="1" /></td>
                                <td>800/-</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="cart-info">
                                        <img className="sampleimg" src={house} alt="imgage" />
                                        <div>
                                            <p>3bhk</p>
                                            <small>Price: 800/-</small>
                                            <button>Remove</button>
                                        </div>

                                    </div>
                                </td>
                                <td><input type="number" value="1" /></td>
                                <td>800/-</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="cart-info">
                                        <img className="sampleimg" src={cartSample} alt="imgage" />
                                        <div>
                                            <p>3bhk</p>
                                            <small>Price: 800/-</small>
                                            <button>Remove</button>
                                        </div>

                                    </div>
                                </td>
                                <td><input type="number" value="1" /></td>
                                <td>800/-</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="cart-info">
                                        <img className="sampleimg" src={house} alt="imgage" />
                                        <div>
                                            <p>3bhk</p>
                                            <small>Price: 800/-</small>
                                            <button>Remove</button>
                                        </div>

                                    </div>
                                </td>
                                <td><input type="number" value="1" /></td>
                                <td>800/-</td>
                            </tr>
                        </tbody>
                    </table>
                
                <div className="cart_totalPrice">
                    <table>
                        <tr>
                            <td>Subtotal</td>
                            <td>200/-</td>
                        </tr>
                        <tr>
                            <td>Tax</td>
                            <td>35/-</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>235/-</td>
                        </tr>
                        <tr>
                        <button>Proceed to pay</button>
                        </tr>
                    </table>
                    
                </div>
            </div>
            </div>
            
        )
    }
}

