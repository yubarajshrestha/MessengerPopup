var body = document.getElementsByTagName('body');
var messengerButton = document.getElementById("messengerButton");
var messengerEmail = messengerButton.getAttribute('href');
var messengerPage = messengerButton.getAttribute('data-messengerPage');

//injecting elements into the DOM
document.body.innerHTML += '<div id="fb-root"></div><div id="messengerWrapper" class="messengerHidden"><div class="messengerTitleBar"><a href="'+messengerPage+'" target="_blank">Message Us</a><div class="messengerFloat"><a href="'+messengerEmail+'" class="mail-link">Email</a><a id="messengerClose" onclick="toggleVisibility();">×</a></div></div><div class="fb-page" data-href="'+messengerPage+'" data-tabs="messages" data-width="500" data-height="400" data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="false"></div></div>';

//running the Facebook SDK
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//toggling the visibility of the chat widget
function toggleVisibility(){
  event.preventDefault();
  document.getElementById('messengerWrapper').classList.toggle('messengerHidden');
}