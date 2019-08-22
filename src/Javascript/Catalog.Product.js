import React from 'react'; 
import {addToCart, initializeCart, showTotalModal} from './Cart.helper';
import {initializeInventory} from './inventory';
import {showProductDetails} from './Catalog.Product.helper';
import Button from 'react-bootstrap/Button'

class Catalog extends React.Component{
    componentDidMount(){
        initializeInventory(); 
        showProductDetails(this.props.match.params.slug); 
        initializeCart();
    }

    render(){
        return(
            <div className="container" id="product">
                <h2 id="longName">&nbsp;</h2>
                <hr />
                <div className="container row">
                    <div className="col">
                        <img id="image" src="" width="300" alt="" /><br />
                        <h4 id="price">&nbsp;</h4>
                        <Button id="addToCart" className="btn btn-primary" style={{color: 'white'}}>Add to Cart &raquo;</Button>
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