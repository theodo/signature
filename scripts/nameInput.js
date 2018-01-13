var name = 'Benoît Charles-Lavauzelle';
var nameInput = $('#nameInput');
var signatureName = $('#signatureName');

var localStorageName = localStorage.getItem('signatureName');
if (null !== localStorageName) {
  name = localStorageName;
  nameInput.val(name);
}
signatureName.text(name);
nameInput.val(name);

nameInput.on('input', function() {
  var name = nameInput.val();
  signatureName.text(name);
  localStorage.setItem('signatureName', name);
});
