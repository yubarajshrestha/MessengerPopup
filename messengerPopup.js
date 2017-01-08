var body = document.getElementsByTagName('body');
var messengerButton = document.getElementById("messengerButton");
var messengerEmail = messengerButton.getAttribute('href');
var messengerPage = 'https://www.facebook.com/' + messengerButton.getAttribute('data-messengerPage');
var messengerPopout = 'https://m.me/' + messengerButton.getAttribute('data-messengerPage');
//injecting elements into the DOM
document.body.innerHTML += '<div id="fb-root"></div><div id="messengerWrapper" class="messengerHidden"><div class="messengerTitleBar"><div class="messengerFloat--left"><a href="'+messengerPopout+'" target="_blank" onclick="OpenInNewTab()"><span class="messengerlineheight">Message Us</span></a></div><div class="messengerFloat--right"><a href="'+messengerEmail+'" ><i class="messengericon messengericon-email"></i></a><a href="'+messengerPopout+'" target="_blank" onclick="OpenInNewTab()"><i class="messengericon messengericon-popout"></i></a><a id="messengerClose" onclick="toggleVisibility();"><i class="messengericon messengericon-close"></i></a></div></div><div class="fb-page" data-href="'+messengerPage+'" data-tabs="messages" data-width="500" data-height="400" data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="false"></div></div>';

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

//popping out the chat widget
function OpenInNewTab() {
  event.preventDefault();
  var screenwidth = screen.width-500;
  window.open(messengerPopout, '_blank',"toolbar=no,scrollbars=yes,resizable=yes,width=500,height=800,left="+screenwidth);
}
