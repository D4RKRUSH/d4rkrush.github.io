var copyButton = document.getElementById('copyButton');
copyButton.addEventListener('contextmenu', function(event) { // contextmenu esemény
  event.preventDefault(); // letiltjuk a jobb klikket
  var copyText = "Ez a szöveg kerül a vágólapra";
  var copyNotification = document.getElementById('copyNotification');
  
  navigator.clipboard.writeText(copyText).then(function() {
    copyNotification.classList.add('active');
  }, function() {
    console.log('Hiba történt a szöveg másolásakor!');
  });
});

var copyNotification = document.getElementById('copyNotification');
copyNotification.addEventListener('click', function() {
  copyNotification.classList.remove('active');
});

// <button id="copyButton">Másolás</button> <div id="copyNotification">A szöveg másolva a vágólapra!</div> # profile -> index.html rész 