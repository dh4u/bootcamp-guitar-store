import React from 'react'; 
import {addToCart, initializeCart, showTotalModal} from './shopping.cart';
import {initializeInventory} from './inventory';
import {showProductDetails} from './product.details';

class Catalog extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        initializeInventory(); 
        showProductDetails(this.props.match.params.slug); 
        initializeCart();
    }

    render(){
        return(
            <div className="container" id="product">
                <h2 id="longName"></h2>
                <hr />
                <div className="container row">
                    <div className="col">
                        <img id="image" src="" width="300" /><br />
                        <h4 id="price"></h4>
                        <a id="addToCart" className="btn btn-primary" role="button" onClick={addToCart(item_id, document.getElementById('price').value, 1).bind(this)} style={{color: 'white'}}>Add to Cart &raquo;</a>
                    </div>
                    <div className="col">
                        <h4 id="shortName">About This ...</h4>
                        <hr />
                        <div id="description"></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Catalog;