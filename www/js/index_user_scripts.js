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
    
    
        /* button  #startButton */
    
     
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
            $('#goToVerifyProcess').trigger('click');
            /*activate_page('#itemVerifyProcess');*/
            /*$(document).loadContent("#itemVerifyPage",false,false,"fade");*/
            /*$.mobile.changePage($("#itemVerifyPage"));*/
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
            $('#goToChoicePage').trigger('click');
            /*activate_page('#itemChoicePage');*/
        }
    });
    
        /* button  #submitPriceButton */
    $(document).on("click", "#submitPriceButton", function(evt)
    {
        /* your code goes here */ 
        $('#goToThankYouPage').trigger('click');
    });
    
}
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
