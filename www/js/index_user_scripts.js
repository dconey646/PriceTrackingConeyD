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
     
        /* button  #submitItemChoice */
    $(document).on("click", "#submitItemChoice", function(evt)
    {
        
        if($('#itemInput').val() === ""){
            alert("Please enter a value into the search box!");
        } else {
            localStorage.setItem('searchTerm', $('#itemInput').val());
            $('#goToVerifyProcess').trigger('click');
        }
    });
    
        /* button  #itemVerificationButton */
    $(document).on("click", "#itemSubmitButton", function(evt)
    {
        /* your code goes here */ 
        $('#goToSubmitPricePage').trigger('click');
    });
    
    $(document).on("pageinit", '#itemVerifyProcess', function(){
         alert(localStorage.getItem('searchTerm'));
    });   
    
        /* button  #submitFirstStageProcessButton */
    $(document).on("click", "#submitFirstStageProcessButton", function(evt)
    {
        if(!$('#amazonCheckbox').prop("checked" )&&
           !$('#ebayCheckbox').prop("checked") &&
           !$('#expansysCheckbox').prop("checked")) {
            $('#noButtonSelectedErrorText').css({'display' : 'inline', 'visibility': 'visible' });
        }
        else {
            localStorage.setItem("amazonAPISearch", $('#amazonCheckbox').prop("checked"));
            localStorage.setItem("ebayAPISearch", $('#ebayCheckbox').prop("checked"));
            localStorage.setItem("expansysAPISearch", $('#expansysCheckbox').prop("checked"));
            $('#goToChoicePage').trigger('click');
        }
    });
        
    /* button  #submitPriceButton */
    $(document).on("click", "#submitPriceButton", function(evt)
    {
        localStorage.setItem('priceValue', $('#priceInput').val());
        $('#goToThankYouPage').trigger('click');
    });
    
        /* button  #mainMenuButton */
    $(document).on("click", "#mainMenuButton", function(evt)
    {
        $("#backToMainMenuFromLastPage").trigger('click');
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
