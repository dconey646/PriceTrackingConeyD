/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
        /* button  #historyButton */
    $(document).on("click", "#historyButton", function(evt)
    {
        /* your code goes here */ 
    });
    
        /* button  #settingsButton */
    $(document).on("click", "#settingsButton", function(evt)
    {
        /* your code goes here */ 
    });
    
        /* button  #submitFirstStageProcessButton */
    $(document).on("click", "#submitFirstStageProcessButton", function(evt)
    {
        console.log($('#amazonCheckbox').prop("checked"));
        console.log($('#ebayCheckbox').prop("checked"));
        console.log($('#expansysCheckbox').prop("checked"));
        if(!$('#amazonCheckbox').prop("checked" )&&
           !$('#ebayCheckbox').prop("checked") &&
           !$('#expansysCheckbox').prop("checked")) {
            $('#noButtonSelectedErrorText').css({'display' : 'inline', 'visibility': 'visible' });
        }
        else {
            localStorage.setItem("amazonAPISearch", $('#amazonCheckbox').prop("checked"));
            localStorage.setItem("ebayAPISearch", $('#ebayCheckbox').prop("checked"));
            localStorage.setItem("expansysAPISearch", $('#expansysCheckbox').prop("checked"));
            activate_subpage('#itemChoosingPage');
        }
    });
    
        /* button  #startButton */
    $(document).on("click", "#startButton", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#startPriceTrackProcess"); 
    });
     
        /* button  #submitItemChoice */
    $(document).on("click", "#submitItemChoice", function(evt)
    {
        alert("Amazon: " + localStorage.getItem("amazonAPISearch"));
        alert("Ebay: " + localStorage.getItem("ebayAPISearch"));
        alert("Expansys: " + localStorage.getItem("expansysAPISearch"));
        
        if($('#itemInput').val() === ""){
            alert("Please enter a value into the search box!");
        } else {
            localStorage.setItem('searchTerm', $('#itemInput').val());
            activate_subpage('#itemVerificationPage');
        }
    });
    
        /* button  #itemVerificationButton */
    $(document).on("click", "#itemVerificationButton", function(evt)
    {
        /* your code goes here */ 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
