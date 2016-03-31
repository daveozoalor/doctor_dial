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
	domCache: true //enable inline pages
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

  var myDataRef = new Firebase('https://distdial.firebaseio.com/');
      $$('#submit').click(function () {
       
          var name = $$('#nameInput').val();
          var text = $$('#messageInput').val();
          myDataRef.push({name: name, text: text});
          $$('#messageInput').val('');
        
      });
      myDataRef.on('child_added', function(snapshot) {
        var message = snapshot.val();
        displayChatMessage(message.name, message.text);
      });
      function displayChatMessage(name, text) {
        $$('<div/>').text(text).prepend($$('<em/>').text(name+': ')).appendTo($$('#messagesDiv'));
        $$('#messagesDiv')[0].scrollTop = $$('#messagesDiv')[0].scrollHeight;
       // alert("ello!");
      };