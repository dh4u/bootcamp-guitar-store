import React from 'react';
import Accordion from './Accordion.js'
import {buildCart, buildCheckout, checkOut, completePurchase, emptyCart, enableDiscount, getBillingOptions, getCartItems, getShippingOptions, initializeCart, updateQuantity, updateShipping} from './Cart.helper.js';
import {initializeInventory} from './inventory.js';
import $ from 'jquery'; 
require('../CSS/Cart.css');

class Cart extends React.Component{

    componentDidMount(){
        initializeInventory(); 
        initializeCart(); 
        buildCart();

        //if there is a hash we are very likely on the cart page (otherwise the URL is being manipulated)
        let hash = window.location.hash
            ,fold = 0
            ;

        if( hash !== undefined ){
            //console.log('folding');
            //console.log(hash);
            switch (hash){

                case "#cart" :
                    fold = 0;
                break;
                case "#checkout" :
                    fold = 1;
                break;
                case "#shipping" :
                    fold = 2;
                break;
                case "#creditCard" :
                    fold = 3;
                break;
                default:
                    fold = 0;
                break;

            }
            $( "#accordion" ).accordion( {heightStyle: "content", active: fold}  );

            localStorage.getItem("choseShippingFlag") !== 0 ? $( "#shippingDiv" ).show() : $( "#shippingDiv" ).hide();
            
            if( getCartItems().length > 0 ){
                if( localStorage.getItem("discount") !==  0 ){
                    $( "#noDiscountDiv" ).hide();       
                }else{
                    $( "#noDiscountDiv" ).show(); 
                }   
            }else{
                $( "#noDiscountDiv" ).hide();  
            }
        }
    }
    
    render(){
        const theCart = buildCart();
        //updateSummaryTotals();
        //console.log("buildCart");
        //console.log(buildCart);
        //let theCart = "";

        return(
            <div className="container">
                <Accordion>
                    <h3>Shopping Cart</h3>
                    <div id="cartFold">
                        <section className="shopping-cart dark">
                            <div className="container">
                                <div className="block-heading">
                                <h2>Shopping Cart</h2>
                                    <div id="underHeading">
                                    <p>The stage is set.</p>
                                    <p>Now plug in...</p>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="row">
                                        <div className="col-md-12 col-lg-8">
                                            <div className="items" id="cartItems">
                                                <div dangerouslySetInnerHTML={{__html: theCart}}></div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-4">
                                            <div className="summary">
                                                <h3>Summary</h3>
                                                <div className="summary-item"><span className="text">Subtotal</span><span className="price" id="cartTotal">$0</span></div>
                                                <div className="summary-item" id="discountDiv"><span className="text">Discount</span><span className="price" id="discount">$0</span></div>
                                                <div className="summary-item"><span className="text">Tax</span><span className="price" id="tax">$0</span></div>
                                                <div className="summary-item" id="shippingDiv"><span className="text">Shipping</span><span className="price" id="shipping">$0.00</span></div>
                                                <div className="summary-item"><span className="text">Total</span><span className="price" id="grandTotal">$0</span></div>
                                                <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => checkOut()} id="checkoutButton">Checkout</button>
                                                <div></div>
                                                <div></div>

                                                <div className="summary-item" id="noDiscountDiv">
                                                    <h3>Got a discount code?</h3>
                                                    <em style={{textAlign: 'center'}}>Hint: anything will do</em>
                                                    <span className="text">Discount Code</span>
                                                    <span className="price"><input type="text" size="4" placeholder="1234" /></span><br />
                                                    <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => enableDiscount()}>Apply Discount</button>
                                                </div>
                                                <div>&nbsp;</div>
                                                <div>&nbsp;</div>

                                                <div className="summary-item" id="emptyCartDiv">
                                                    <h3>Changed Your Mind?</h3>
                                                    <button type="button" className="btn btn-primary btn-lg btn-block btn-danger" onClick={() => emptyCart('true')}>Empty Cart</button>
                                                </div>

                                            </div>

                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </section>    
                    </div>
                    <h3 onClick={() => buildCheckout()}>Checkout{/*   */}</h3>
                    <div id="cbeckoutFold">
                        <section className="shopping-cart dark">
                            <div className="container">
                                <div className="block-heading">
                                <h2>Checkout</h2>
                                    <p>House lights are going down.</p>
                                    <p>Almost time to rock...</p>
                                </div>
                                <div className="content">
                                    <div className="row">
                                        <div className="col-md-12 col-lg-8">
                                            <div className="items" id="checkoutItems"></div>
                                        </div>
                                        <div className="col-md-12 col-lg-4">
                                            <div className="summary">
                                                <h3>Summary</h3>
                                                <div className="summary-item"><span className="text">Subtotal</span><span className="price" id="checkoutCartTotal">$0</span></div>
                                                <div className="summary-item" id="checkoutDiscountDiv"><span className="text">Discount</span><span className="price" id="checkoutDiscount">$0</span></div>
                                                <div className="summary-item"><span className="text">Tax</span><span className="price" id="checkoutTax">$0</span></div>
                                                <div className="summary-item" id="checkoutShippingDiv"><span className="text">Shipping</span><span className="price" id="checkoutShipping">$0</span></div>
                                                <div className="summary-item"><span className="text">Total</span><span className="price" id="checkoutGrandTotal">$0</span></div>
                                                <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => getShippingOptions()}>On to Shipping</button>
                                                <div></div>
                                                <div></div>

                                            </div>

                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </section>  
                    </div>
                    <h3 onClick={() => getShippingOptions()}>Shipping {/* <!--Disable until something is in the cart?--> */}</h3>
                    <div id="shippingFold">
                        <form>
                            <div className="container-fluid">
                                <h1>Contact Information and Delivery Method</h1>

                                <div><h2>Contact Information</h2><hr /></div>
                                <div className="form-group">
                                    <div><label htmlFor="fname">First Name</label></div>
                                    <div><input type="text" className="form-control" name="fname" id="fname" placeholder="First Name" /></div>
                                </div>
                                <div className="form-group">
                                    <div><label htmlFor="lname">Last Name</label></div>
                                    <div><input type="text" className="form-control" name="lname" id="lname" placeholder="Last Name" /></div>
                                </div>
                                <div><h4>Address</h4><hr /></div>
                                <div className="form-group">
                                    <div><label htmlFor="addr1">Address</label></div>
                                    <div><input type="text" className="form-control" name="addr1" id="addr1" placeholder="Address" /></div>
                                </div>
                                <div className="form-group">
                                    <div><label htmlFor="addr2">Apt / Unit</label></div>
                                    <div><input type="text" className="form-control" name="addr2" id="addr2" placeholder="Apt / Unit" /></div>
                                </div>
                                <div className="form-group">
                                    <div><label htmlFor="city">City</label></div>
                                    <div><input type="text" className="form-control" name="city" id="city" placeholder="City" /></div>
                                </div>
                                <div className="form-group">
                                    <div><label htmlFor="state">State</label></div>
                                    <div>
                                        <select className="form-control">
                                            <option value="">Please Choose</option>
                                            <option value="AL">Alabama</option>
                                            <option value="AK">Alaska</option>
                                            <option value="AZ">Arizona</option>
                                            <option value="AR">Arkansas</option>
                                            <option value="CA">California</option>
                                            <option value="CO">Colorado</option>
                                            <option value="CT">Connecticut</option>
                                            <option value="DE">Delaware</option>
                                            <option value="DC">District Of Columbia</option>
                                            <option value="FL">Florida</option>
                                            <option value="GA">Georgia</option>
                                            <option value="HI">Hawaii</option>
                                            <option value="ID">Idaho</option>
                                            <option value="IL">Illinois</option>
                                            <option value="IN">Indiana</option>
                                            <option value="IA">Iowa</option>
                                            <option value="KS">Kansas</option>
                                            <option value="KY">Kentucky</option>
                                            <option value="LA">Louisiana</option>
                                            <option value="ME">Maine</option>
                                            <option value="MD">Maryland</option>
                                            <option value="MA">Massachusetts</option>
                                            <option value="MI">Michigan</option>
                                            <option value="MN">Minnesota</option>
                                            <option value="MS">Mississippi</option>
                                            <option value="MO">Missouri</option>
                                            <option value="MT">Montana</option>
                                            <option value="NE">Nebraska</option>
                                            <option value="NV">Nevada</option>
                                            <option value="NH">New Hampshire</option>
                                            <option value="NJ">New Jersey</option>
                                            <option value="NM">New Mexico</option>
                                            <option value="NY">New York</option>
                                            <option value="NC">North Carolina</option>
                                            <option value="ND">North Dakota</option>
                                            <option value="OH">Ohio</option>
                                            <option value="OK">Oklahoma</option>
                                            <option value="OR">Oregon</option>
                                            <option value="PA">Pennsylvania</option>
                                            <option value="RI">Rhode Island</option>
                                            <option value="SC">South Carolina</option>
                                            <option value="SD">South Dakota</option>
                                            <option value="TN">Tennessee</option>
                                            <option value="TX">Texas</option>
                                            <option value="UT">Utah</option>
                                            <option value="VT">Vermont</option>
                                            <option value="VA">Virginia</option>
                                            <option value="WA">Washington</option>
                                            <option value="WV">West Virginia</option>
                                            <option value="WI">Wisconsin</option>
                                            <option value="WY">Wyoming</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div><label htmlFor="zip">Zip</label></div>
                                    <div><input type="text" className="form-control" name="zip" id="zip" placeholder="Zip" /></div>
                                </div>
                                <div><h4>Phone</h4><hr /></div>
                                <div className="form-group">
                                    <div><label htmlFor="phone">Phone</label></div>
                                    <div><input type="tel" className="form-control" name="phone" id="phone" placeholder="Phone" /></div>
                                </div>
                                <div><h2>Delivery Method</h2><hr /></div>
                                <div className="form-group">
                                    
                                    <div className="row">
                                        <div className="col-2">
                                            <div><label>Delivery Method</label></div>
                                        </div> 
                                        <div className="col-1"></div>
                                        <div className="col-1">
                                            <span className="price" >Cost</span>
                                        </div>   
                                    </div>
                                    <div className="row" style={{marginTop: '-10 px'}}>
                                        <div className="col-4"><hr /></div>
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col-2">
                                            <label htmlFor="pickup"><input type="radio" value="pickup" name="deliveryMethod" id="pickup" onClick={() => updateShipping(0)} />&nbsp;&nbsp;Pickup</label>
                                        </div>
                                        <div className="col-1"></div>
                                        <div className="col-1">
                                            <span className="price" >$FREE</span>
                                        </div>
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col-2">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Delivery 
                                        </div>     
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col-1"></div>
                                        <div className="col-2">
                                            <label htmlFor="dhl"><input type="radio" value="dhl" name="deliveryMethod" id="dhl" onClick={() => updateShipping(10)} />&nbsp;&nbsp;DHL</label>
                                        </div>
                                        <div className="col-2">$10</div>
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col-1"></div>
                                        <div className="col-2">
                                            <label htmlFor="fedex"><input type="radio" value="fedex" name="deliveryMethod" id="fedex" onClick={() => updateShipping(15)} />&nbsp;&nbsp;FedEx</label>
                                        </div>
                                        <div className="col-2">$15</div>
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col-1"></div>
                                        <div className="col-2">
                                            <label htmlFor="ups"><input type="radio" value="ups" name="deliveryMethod" id="ups" onClick={() => updateShipping(20)} />&nbsp;&nbsp;UPS</label>
                                        </div>
                                        <div className="col-2">$20</div>
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col-1"></div>
                                        <div className="col-2">       
                                            <label htmlFor="usps"><input type="radio" value="usps" name="deliveryMethod" id="usps" onClick={() => updateShipping(25)} />&nbsp;&nbsp;USPS</label>
                                        </div>
                                        <div className="col-2">$25</div>
                                    </div>
                                </div>
                                <div>
                                    <div><label htmlFor="submit"></label></div>
                                    <div><button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => getBillingOptions()}>On to Billing</button></div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <h3>Billing{/* <!--Disable until shipping is done?--> */}</h3>
                    <div id="creditCardFold">
                        <div className="container-fluid">
                            <h1>Billing Information</h1>

                            {/* <!--<div><h2>Billing Information</h2><hr /></div>--> */}
                            <div className="form-group">
                                <div><label htmlFor="nameOnCard">Name on Card</label></div>
                                <div><input type="text" className="form-control" name="nameOnCard" id="nameOnCard" placeholder="Name on Card" /></div>
                            </div>
                            <div className="form-group">
                                <div><label htmlFor="cardNumber">Card Number</label></div>
                                <div><input type="text" className="form-control" name="cardNumber" id="cardNumber" placeholder="XXXX XXXX XXXX XXXX" /></div>
                            </div>
                            <div className="form-group">
                                <div><label>Expiration</label></div>
                                <div className="row">
                                    <div className="col-3">
                                        <div><label htmlFor="expirationMonth">Month</label></div>
                                        <div>
                                            <select name="expirationMonth">
                                                <option value="1">01 - January</option>
                                                <option value="2">02 - February</option>
                                                <option value="3">03 - March</option>
                                                <option value="4">04 - April</option>
                                                <option value="5">05 - May</option>
                                                <option value="6">06 - June</option>
                                                <option value="7">07 - July</option>
                                                <option value="8">08 - August</option>
                                                <option value="9">09 - September</option>
                                                <option value="10">10 - October</option>
                                                <option value="11">11 - November</option>
                                                <option value="12">12 - December</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div><label htmlFor="expirationYear">Year</label></div>
                                        <div>
                                            <select name="expirationYear">
                                                <option value="2019">2019</option>
                                                <option value="2020">2020</option>
                                                <option value="2021">2021</option>
                                                <option value="2022">2022</option>
                                                <option value="2023">2023</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div><button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => completePurchase()}>Complete Purchase</button></div>
                        </div>
                    </div>
                </Accordion>
            </div> /* <!-- /container --> */
        )
    }
}

export default Cart;