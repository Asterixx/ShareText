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




See the index.html file for the example
