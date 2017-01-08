MessengerPopup
-------

[1]: <http://nathangathright.com/messengerPopup/>

_add a Facebook Messenger widget to your site_

### Demo

https://nathangath.github.io/MessengerPopup/

###Instructions

Just add a link to the css file in your `<head>`:
```html
<link rel="stylesheet" type="text/css" href="path/to/messengerPopup.min.css">
```

Add a link to your HTML specifying your Facebook Page name in the data-attribute and adding an email as a fallback.
```html
<a id="messengerButton" href="mailto:YOUREMAILHERE@GMAIL.COM" data-messengerPage="YOURBRANDPAGEHERE" onclick="toggleVisibility();">Message Us</a>
```

Then, before your closing ```<body>``` tag add:

```html
<script src="path/to/messengerPopup.js"></script>
```

### License

Copyright © 2016 Nathan Gathright
Licensed under the MIT license.
