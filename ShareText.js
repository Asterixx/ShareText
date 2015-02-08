ST = { 
   limit:0,
  ShareText:function (articleID,popupID,hideTime,limit) {
   el = function(s){
      return document.getElementById(s);
   }
   display= function (d) {
     el(popupID).style.display = d;
   }

    if (!hideTime){
               hideTime = '5000'; }   
    if (!limit) {
      limit = 'noLimit'
    };
//hide on ESC
 document.onkeydown = function(evt) {
          evt = evt || window.event;
          if (evt.keyCode == 27) {
            display('none');
    }
};



   el(articleID).addEventListener('mouseup',function(e){

   X =e.pageX;
   Y =e.pageY;

     
      // IF ESC pressed shut the popup down

      // window.onload = load;
     text = window.getSelection(); 

     if(el(popupID)){
      el(popupID).addEventListener('click',function(){
        display('none');
    });
     
   };
     
      

       //IF THERE IS selected text, and the limit User set is bigger than the number the function has already run
       // or if limit is set to 'unlimited'. Then run:
    if (limit > ST.limit ||  limit === 'noLimit'){  

         if(text.toString() != ""){   
          el(popupID).style.left = 20 + X;
          el(popupID).style.top = Y;

           display('block');
      
          
        //Counts down the time before popup hides
          function countDown(r){
            if(!r){r = hideTime}
            time = setTimeout(function(){        
            display('none');
            }, r);
       }

       countDown();
      //////////////////////
      el(popupID).addEventListener('mouseover',function (e) {
       
          clearTimeout(time);
          display('block')
       
      }) // onmousever
      el(popupID).addEventListener('mouseleave',function () {
        countDown(1500);
      
      }) // onmouseleave reduce hiding time
 
         ST.limit++ //counts the number that the function has run       
         
}//if text to string
;}
    else{
        
        return false;
      }
      
     

 }//addevent listener Basic funtion
 )},
 
  twitter: function(via, longurl) {
    if (!via) {
        via = "";
    }
   //IF URL IS TRUE
   ///////////////START//////////
    if (longurl) {

    longurl = window.location.href
    
    var xmlhttp = new XMLHttpRequest();
    var Requesturl = "http://api.bit.ly/v3/shorten?login=asterismano&apiKey=R_468802d212884c16b8f091902f09591a&longUrl="+longurl+"&format=json";

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            
            // JSON.parse(xmlhttp.responseText);
            object = JSON.parse(xmlhttp.responseText);
            //convert
            
            ShortUrl =  object.data.url;
        }
    }
    xmlhttp.open("GET", Requesturl, false);
    xmlhttp.send();
} else {
       ShortUrl = "";
    }
       ///////////////end//////////

  //Slicing Function
  ///////////////START//////////
    TextLength = String(text);
    sum = TextLength+via+ShortUrl;

    all = sum.length
   if (all > 140){
    mustcut =  133 - all;
  
    SlicedText = TextLength.slice(0,mustcut)

   }else{SlicedText = text;}
  
    ///////////////END//////////
     ////What to share:
    var share = 'https://twitter.com/home?status="'+ SlicedText+".." +'"'+" "+via+" "+ShortUrl;//4
    window.open(share, "mywindow", "menubar=1,resizable=1,width=350,height=250");
 




},
  

   mail:function(d,additionalText){
      //Checks if additionalText is empty
      if (!additionalText){
         additionalText = "";
      }
      d.href = 'mailto:mailto@someone.com?body='+text + '%0A%0A' +additionalText;

   },

}
