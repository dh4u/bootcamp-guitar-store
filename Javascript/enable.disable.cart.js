// show / hide the enabled / disabled cart links based on cart status
$(document).ready(function(){
    let cartItems = getCartItems();

    if( cartItems.length ){
        $( "#cartLinkEnabled" ).show();
        $( "#cartLinkDisabled" ).hide();
    }else{
        $( "#cartLinkEnabled" ).hide();
        $( "#cartLinkDisabled" ).show();
    }
});