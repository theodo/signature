$(document).ready(function() {
  var name = 'Benoît Charles-Lavauzelle';
  var nameInput = $('#nameInput');
  var signatureName = $('.signatureName');

  var localStorageName = localStorage.getItem('signatureName');
  if (null !== localStorageName) {
    name = localStorageName;
    nameInput.val(name);
  }
  signatureName.each(function() {
    $(this).text(name);
  });
  nameInput.val(name);

  nameInput.on('input', function() {
    var name = nameInput.val();
    signatureName.each(function() {
      $(this).text(name);
    });
    localStorage.setItem('signatureName', name);
  });
});
