(function (document, window, undefined) {

  'use strict';
  var messengerButton = document.getElementById("messengerButton");
  var messengerEmail = messengerButton.getAttribute('href');
  var messengerPage = 'https://www.facebook.com/' + messengerButton.getAttribute('data-messengerPage');
  var messengerPopout = 'https://m.me/' + messengerButton.getAttribute('data-messengerPage');

  function toggleVisibility(){
    document.getElementById('messengerWrapper').classList.toggle('messengerHidden');
  }

  function OpenInNewTab() {
    event.preventDefault();
    var screenwidth = screen.width-500;
    window.open(messengerPopout, '_blank',"toolbar=no,scrollbars=yes,resizable=yes,width=500,height=800,left="+screenwidth);
  }

  messengerButton.addEventListener('click', function (event) {
      event.preventDefault();
      toggleVisibility();
      if ( !document.getElementById('fb-root') ){
        var fbRoot = document.createElement('div');
        fbRoot.setAttribute('id', 'fb-root');
        document.body.appendChild(fbRoot);

        //running the Facebook SDK
        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
      }
  }, false);

  var messengerWrapper = document.createElement('div');
  messengerWrapper.setAttribute('id', 'messengerWrapper');
  messengerWrapper.setAttribute('class', 'messengerHidden');
  messengerWrapper.innerHTML = '<div class="messengerTitleBar"><div id="messengerFloat--left"></div><div id="messengerFloat--right"><a href="'+messengerEmail+'" ><svg class="messengericon" fill="none" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>messenger-email</title><rect x="3" y="5" width="18" height="14"/><polyline points="21 5 12 13 3 5"/></svg></i></a></div></div><div class="fb-page" data-href="'+messengerPage+'" data-tabs="messages" data-width="500" data-height="400" data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="false"></div>';
  document.body.appendChild(messengerWrapper);

  var messengerTitleLeft = document.getElementById("messengerFloat--left");
  var messengerTitleRight = document.getElementById("messengerFloat--right");

  var messengerPopoutLink = document.createElement('a');
  messengerPopoutLink.setAttribute('id', 'messengerTitle');
  messengerPopoutLink.setAttribute('href', messengerPopout);
  messengerPopoutLink.onclick = function() {OpenInNewTab();};
  messengerPopoutLink.innerHTML = 'Message Us';
  messengerTitleLeft.appendChild(messengerPopoutLink);

  var messengerPopoutLink = document.createElement('a');
  messengerPopoutLink.setAttribute('id', 'messengerPopoutLink');
  messengerPopoutLink.setAttribute('href', messengerPopout);
  messengerPopoutLink.onclick = function() {OpenInNewTab();};
  messengerPopoutLink.innerHTML = '<svg class="messengericon" fill="none" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>messenger-external</title><polyline points="19 15 19 19 5 19 5 5 9 5"/><polyline points="13 5 19 5 19 11"/><line x1="18" y1="6" x2="11" y2="13"/></svg>';
  messengerTitleRight.appendChild(messengerPopoutLink);

  var messengerClose = document.createElement('a');
  messengerClose.setAttribute('id', 'messengerClose');
  messengerClose.onclick = function() {toggleVisibility();};
  messengerClose.innerHTML = '<svg class="messengericon" fill="none" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>messenger-close</title><line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/></svg>';
  messengerTitleRight.appendChild(messengerClose);

})(document, window);
