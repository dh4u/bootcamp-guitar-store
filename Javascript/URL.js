// get the item_id from the URL
var item_id = location.search.split('item_id=')[1] ? parseInt(location.search.split('item_id=')[1]) : -1;
//console.log(item_id);

// if item_id = -1 or item_id is NaN send them back to the index page
if( item_id == -1 || Number.isNaN(item_id) ){
    window.open("index.html");   
}