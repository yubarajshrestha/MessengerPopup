MessengerPopup
-------

## Introduction

If you'd live to allow your site's visitors to contact you via Facebook Messenger without leaving your site, then you've come to the right place. Facebook only allows Messenger to be embedded via the Facebook Page plugin. This project is a wrapper for the Facebook Page plugin that styles it as a live-chat popup.

### Demo

https://nathangathright.github.io/MessengerPopup/

### Limitations

There's one severe limitation to this method: Visitors can only send one message. Any back-and-forth conversation must take place in a Facebook-owned app or website. If this is a deal-breaker, just direct people to [m.me/YOURBRANDPAGEHERE](http://m.me/nathangathrightcom). There's also an issue with mobile Safari that's unfixable. When a user selects an input field in Safari on iOS, Safari zooms the website until the text is sized to at least 16px. Facebook's chat widget font-size is only 14px.

### Features

This project gracefully falls back to a `mailto:` link if the visitor's browser doesn't support javascript. It's also mobile-first and doesn't load Facebook's javascript until the user clicks on the button. I've added a loading spinner to the background in case Facebook's SDK takes a white to load. If the visitor has an adblocker that blocks Facebook's SDK, then the spinner will continue to spin indefinitely, but the visitor will still have access to the email and m.me links.

### Instructions

Include the CSS in the `<head>`:
```html
<link rel="stylesheet" type="text/css" href="path/to/messengerPopup.min.css">
```

Add a link to your HTML specifying your Facebook Page name in the data-attribute and adding an email as a fallback.
```html
<a id="messengerButton" href="mailto:YOUREMAILHERE@GMAIL.COM" data-messengerPage="YOURBRANDPAGEHERE" onclick="toggleVisibility();">Message Us</a>
```

Then, before your closing `<body>` tag add:

```html
<script src="path/to/messengerPopup.js"></script>
```

### License

Copyright © 2016 Nathan Gathright
Licensed under the MIT license.
