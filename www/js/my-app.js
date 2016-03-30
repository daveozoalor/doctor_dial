//initialize app
var myApp = new Framework7({
	 // Default title for modals
    modalTitle: 'My App',
	// Hide and show indicator during ajax requests
    onAjaxStart: function (xhr) {
        myApp.showIndicator();
    },
    onAjaxComplete: function (xhr) {
        myApp.hideIndicator();
    },
    animateNavBackIcon: true
    
});

//If we need to use custom DOM 
var $$ = Dom7;

//add view
var mainView = myApp.addView('.view-main',{
	//because we wat to use dynamic navbar
	//dynamicNavbar: true	
});

//calendar
var calendarDefault = myApp.calendar({
    input: '#calendar-default',
});  

myApp.onPageInit('about', function(e){
	//Do something for page
	
});

$$('.form-to-json').on('click', function(){
  var formData = myApp.formToJSON('#my-form');
  alert(JSON.stringify(formData));
}); 


myApp.onPageInit('message_view', function(e){
	//Do something for page
		var myMessagebar = app.messagebar('.messagebar', {
   			 maxHeight: 300
		});  
});



var pickerDescribe = myApp.picker({
    input: '#picker-describe',
    rotateEffect: true,
    cols: [
        {
            textAlign: 'left',
            values: ('Super Lex Amazing Bat Iron Rocket Lex Cool Beautiful Wonderful Raining Happy Amazing Funny Cool Hot').split(' ')
        },
        {
            values: ('Man Luthor Woman Boy Girl Person Cutie Babe Raccoon').split(' ')
        },
    ]
});    