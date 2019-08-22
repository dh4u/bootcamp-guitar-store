import React from 'react'; 
import {addToCart, showTotalModal} from './Cart.helper';

window.showTotalModal = showTotalModal;
window.addToCart = addToCart;

function buildCatalog(){
    let inventoryItems = JSON.parse(localStorage.getItem("inventoryItems"))
        ,i = 0
        ,catalog = ""
        ;
    //console.log(inventoryItems);
    
    if( inventoryItems.length ){
        for ( i = 0; i < inventoryItems.length; i++  ){
            //get the image
            let image = require("../" + inventoryItems[i].image );

            if( i % 3 === 0){
                catalog += '<!-- start inventory item' + i + '--><div class="row">';      
            }

            catalog += '<div class="col-md-4"> <h2>' + inventoryItems[i].shortName + '</h2>';
            catalog += '<a href="/Catalog/' + inventoryItems[i].index + '"><img src=' + image + ' class="img-responsive img-thumbnail shadow p-3 mb-5 bg-white rounded" alt="' + inventoryItems[i].longName + '" style={marginBottom: .25rem !important} /></a>';
            catalog += '<h4>' + inventoryItems[i].price + '</h4>';
            catalog += '<p><a class="btn btn-primary" href="/Catalog/' + i + '" role="button">View details &raquo;</a>&nbsp;';
            catalog += '<a class="btn btn-primary" role="button" onclick="addToCart(' + i + ', ' + inventoryItems[i].price.replace("$", "").replace(",", "") + ', 1); showTotalModal();" style="color: white;">Add to Cart &raquo;</a></p></div>';
               
            if( i % 3 === 2){
                catalog += '</div><hr /><!--end inventory item ' + i + '-->'; 
            }
        }   
    }
    return(catalog)
    //console.log(catalog);
}

class Catalog extends React.Component{

    render(){
        
        let displayCatalog = buildCatalog();
        
        return(
            <div dangerouslySetInnerHTML={{__html: displayCatalog}}></div>
        )
    }
}
export default Catalog;