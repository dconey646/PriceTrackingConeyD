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
        console.log($('#amazonRadioButton').prop("checked"));
        console.log($('#ebayRadioButton').prop("checked"));
        console.log($('#expansysRadioButton').prop("checked"));
        if(!$('#amazonRadioButton').prop("checked" )&&
           !$('#ebayRadioButton').prop("checked") &&
           !$('#expansysRadioButton').prop("checked")) {
            $('#noButtonSelectedErrorText').css({'display' : 'inline', 'visibility': 'visible' });
        }
        else {
            localStorage.setItem("amazonAPISearch", $('#amazonRadioButton').prop("checked"));
            localStorage.setItem("ebayAPISearch", $('#ebayRadioButton').prop("checked"));
            localStorage.setItem("expansysAPISearch", $('#expansysRadioButton').prop("checked"));
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
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
