When the user highlights a text in your article, a Popup is coming up with a Twitter and Mail button and the user can share the highlighted text

I took the idea from Guardian 
A live example:
http://www.theguardian.com/world/2015/feb/13/france-dominic-strauss-kahn-prostitutes-pimping-trial-lille


There is a bit.ly link shortener feature.

Hide links pressing ESC button


   <script type=”text/javascript” src=”https://raw.githubusercontent.com/Asterixx/ShareText/master/ShareText.js”> </script>




   There are only three functions
   

       ST.ShareText(articleID,popupID,hideTime,limit)
       ST.twitter(via,longurl)
       ST.mail(this,additionalText)



   The first one.

       ST.ShareText(articleID,popupID,hideTime,limit)

articleID -Required  Define the article id you want to use
popupID - Required Define the id of your links
hideTime - Optional Define the time before the popup disappears (5000 = 5seconds)
limit - Optional How many times the popup will show up (if you leave it empty, it has no limit)


    ST.Twitter(via,longurl);


both not required;

 With “via" parameter, you declare your twitter account name so that it is placed in the end of the tweet. You can also write "via @accoungName”
    longurl : true or false You say if you want your article Url to become short with bit.ly service.

If the entire text plus the via plus the link are more than 140 chars(exactly the chars Twitter allows), the selected text will be autocratically cut down in order to fit.



      ST.mail(this,additionalText)

this : Required
 additionalText : You write a string that you’d like to be at the end of your email

    e.g. ST.mail(this,”This mail was sent from example.com”);

e.g.



//////The popup ///////////////////

<div id=”mypopup”  class=”content”>

<div class=”inner_content”>Esc</div>


  <a href=’#’ onclick=’ST.twitter(“via @asterismano”,true)’ >
   <img src=”img/twitter.svg” alt=”twitter”
 width=”26” height=”26” border=”0” />
 </a>

 <a href=”#” onclick=’ST.mail(this,”This mail was sent  from www.example.com”)’>
   <img src=”img/at.png” alt=”mail”
 width=”26” height=”26” border=”0” />
 </a>

</div>



<div id=”myArticle”>

<span>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor eros nisl, eu interdum diam varius ut. Suspendisse non ligula enim. Mauris id sem rutrum sapien pellentesque porttitor vel sit amet dolor. Sed porta bibendum ante, et cursus nulla ornare ut. Cras libero enim, luctus vitae fermentum vitae, commodo quis dolor. Etiam lacus neque, imperdiet quis nunc vel, commodo viverra eros. Ut venenatis ligula dictum, tincidunt velit volutpat, porttitor felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin vitae nunc turpis.

</span>

</div>


<script type=”text/javascript”>
ST.ShareText(‘myArticle’,’mypopup’,3000);

</script>
s

.content{

     display: none;
     position: absolute;
     top: 2%;
     left: 2%;
     width: 8%;
     height: 1.6%;
     padding: 15px;
/*      border: 3px solid black;
*/    
/* background-color: rgba(0, 0, 0, 0.2);*/

     z-index:1002;
     overflow: auto;
}
.inner_content{
 position: absolute;
 top: 1%;
 left: 1%;
 color : white;
 font-size: 8;
}



</pre>

          Note that the display is set to none;


    Place the function at the bottom
