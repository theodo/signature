$(document).ready(function() {
  var mail = 'baptistem@bam.tech';
  var mailInput = $('#mailInput');
  var signatureMail = $('.signatureMail');

  var localStorageMail = localStorage.getItem('signatureMail');
  if (null !== localStorageMail) {
    mail = localStorageMail;
    mailInput.val(mail);
  }
  signatureMail.each(function() {
    $(this).text(mail);
    $(this).attr('href', 'mailto:'+mail);
  });
  mailInput.val(mail);

  mailInput.on('input', function() {
    var mail = mailInput.val();
    signatureMail.each(function() {
      $(this).text(mail);
      $(this).attr('href', 'mailto:'+mail);
    });
    localStorage.setItem('signatureMail', mail);
  });
});
