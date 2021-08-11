function CheckForm(){
var count=0;
if(firstName)
{
count=count+1;
}

if(email)
{
count=count+1;
}

if(phone)
{
count=count+1;
}

if(amount)
{
count=count+1;
}

if(cc-name)
{
count=count+1;
}

alert(count);

}






function Submit(){

    		var digits = '0123456789'; 
    var referenceId = ''; 
    for (var i = 0; i < 6; i++ ) { 
        referenceId += digits[Math.floor(Math.random() * 10)]; 
    } 
    		 
    		alert("Thanks a lot. Your reference id is "+ referenceId);
    	}


function validate(evt) {
  var theEvent = evt || window.event;

  // Handle paste
  if (theEvent.type === 'paste') {
      key = event.clipboardData.getData('text/plain');
  }
   else {
  // Handle key press
      var key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode(key);
  }
  var regex = /[0-9]/;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}