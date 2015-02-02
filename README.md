# ShareText
When the user highlights a text in your article, a Popup is coming up with a Twitter and Mail button. The user can share the text is highlighted.

It is a 1,8kb library.


We ‘re starting by embeding the JS file

    <script type=”text/javascript” src=”ShareText.js”> </script>



    There are only three methods

    ST.ShareText(popupID,limit,hideTime)
    ST.twitter(via)
    ST.mail(this,additionalText)

Lets start with the first one.


    ST.ShareText(popupID,limit,hideTime)

The popupID is there where you declare which id your popup is or your div with the sharing buttons.


    e.g. ST.ShareText(“myPopup”,4)    - Required

Note that the function above, you  have to execute it with “onmouseup" so that it gets triggered when the mouse click is out.

like here:

    <div id=”myArticle” onmouseup=”ST.ShareText(‘myPopup’,3);">


Now the limit paremeter.

You can set, how many times the popup will show up when the user hightlights the text.

You can also set it to 'noLimit' if you want it always to popup.

e.g.


    ST.ShareText(“myPopup”,4); or
    ST.ShareText(“myPopup”,”noLimit”); 
    - Required


The hideTime parameter is the time before Popup desapears.

If you leave it empty, it is 1500(1,5sec) by default.

And if you press the Escape button, it desapears.

e.g.

    ST.ShareText(“myPopup”,10,”2000”); - Optional



    ST.Twitter(via);

In “via" parameter, you declare your twitter account name so that it is placed in the end of the tweet. You can also write "via @accoungName"

e.g.

    <a href=’#’ onclick=’ST.twitter(“via @asteris_astro”)' > Share on Twitter</a>
     - not Required




The ST.mail() method , takes two parameters.

    this  -Required

    additionalText - optional

additionalText , is the text that can go at the end of the body mail.

It can’t contain html code. But a message.

e.g.


    <a href=”#” onclick='ST.mail(this,”This mail was sent from tumblr.com”)'> Email </a>

Like i said it is optional.




Let’s now see the HTML and Css

You have to know that the Popup is not the best one. I am not so good in CSS so if some of you make another better one, let me know!
HTML

    <div id=”light” class=”popup">
          <div class=”inner_content”>Esc</div>

        The Tweet button

    <a href=’#’ onclick=’ST.twitter(“via @asteris_astro”)' >
    <img src=”img/twitter.svg” alt=”twitter” width=”26” height=”26” border=”0” />
     </a>

        The Mail button

    <a href=”#” onclick=’ST.mail(this,”www.myWebSite.com”)'>
    <img src=”img/mail.svg” alt=”mail”
    width=”26” height=”26” border=”0” /> </a>
    </div>

CSS

    Note that the display is set to none; (just in case you make your own style)

    .popup {
    display: none;
    position: absolute;
    top: 2%;
    left: 2%;
    width: 7%;
    height: 1.6%;
    padding: 16px;
    border: 3px solid black;
    background-color: rgba(0, 0, 0, 0.7);
    z-index:1002;
    overflow: auto;
    }
    .inner_content{
    position: absolute;
    top: 1%;
    left: 1%;
    color : white;
    font-size: 8;}
