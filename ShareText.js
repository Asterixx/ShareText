ST = {
   limit:0,
	ShareText:function (popupID,limit,hideTime) {
   el = function(s){
      return document.getElementById(s);
   }
      // IF ESC pressed shut the popup down
      document.onkeydown = function(evt) {
          evt = evt || window.event;
          if (evt.keyCode == 27) {
            el(popupID).style.display = "none";
    }
};
      
       
   	 text = window.getSelection(); 
   
       //IF THERE IS selected text, and the limit User set is bigger than the number the function has already run
       // or if limit is set to 'unlimited'. Then run:
   	if (limit > ST.limit ||  limit === 'noLimit'){  
         if(text.toString() != ""){   
         //The default hideTime     
            if (!hideTime){
               hideTime = '1500';
            }
   		

   		//Shows the hidden popup 
   		el(popupID).style.display = "block";
   		
         //TIME BEFORE popup WILL DESAPEAR
         setTimeout(function(){
            el(popupID).style.display = "none"; 
         }, hideTime);

         ST.limit++ //counts the number that the function has run
			
	    
}
   	else{
   			
   			return false;
   		}

}},
 
	twitter:function (via) {	
      if(!via){
         via = "";
      }
         var share = 'https://twitter.com/home?status='+text + " " +via;
         window.open (share,"mywindow","menubar=1,resizable=1,width=350,height=250");
         //Hides the "popup" after poping up the window
       //  function hideAfterClick() {    
       // el(popupID).style.display = "none";
   },
	

   mail:function(d,additionalText){
      //Checks if additionalText is empty
      if (!additionalText){
         additionalText = "";
      }
      d.href = 'mailto:mailto@someone.com?body='+text + '%0A%0A' +additionalText;

   }



}
