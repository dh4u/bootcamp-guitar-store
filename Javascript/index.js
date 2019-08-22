// abandoned
function showHideDetails(){
    console.log("hide details is " + $( "#hideDetails" ).is(':visible'));
    console.log("show details is " + $( "#showDetails" ).is(':visible'));
    
    //$( "#content1" ).toggle();
    $( "#showDetails" ).hide();
    $( "#hideDetails" ).show();
    
    
    console.log("hide details is " + $( "#hideDetails" ).is(':visible'));
    console.log("show details is " + $( "#showDetails" ).is(':visible'));
}