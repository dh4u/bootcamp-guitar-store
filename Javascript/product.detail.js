function getProductDetails(item_id){
    //console.log('item_id is ' + item_id);
    let items = JSON.parse(sessionStorage.getItem("inventoryItems"))
        ;
    
    return items[item_id];
}

// populate the various parts of the page with data from the item in the inventoryArray in sessionStorage
function showProductDetails(item_id){
    //console.log('item_id is ' + item_id);
    let item = getProductDetails(item_id)
        ;
    
    //console.log(item);
    $( "#longName" ).html(item.longName);
    $( "#price" ).html(item.price);
    $( "#shortName" ).html( "About this " + item.shortName + ":");
    $( "#description" ).html(item.description);
    $( "#image" ).attr("src", item.image);
    $( "#image" ).attr("alt", item.longName);
    
    //addToCart function
    $( "#addToCart" ).attr("onClick", `addToCart(${item_id}, ${item.price.replace("$", "").replace(",", "")}, 1); showTotalModal();`);
    
    //console.log("done");
}