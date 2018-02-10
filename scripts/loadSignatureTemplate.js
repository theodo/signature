$.holdReady(true);
$('#theodo-signature').load('signatureTemplates/theodo-signature.html', function() {
  $('#bam-signature').load('signatureTemplates/bam-signature.html', function() {
    $.holdReady(false);
  });
});

$('#theodo-signature-choice').click(function() {
  $('#theodo-signature').addClass('chosen-signature');
  $('#theodo-signature').show();

  $('#bam-signature').removeClass('chosen-signature');
  $('#bam-signature').hide();

  $('#mail-form').hide();
  $('#UK-tel-form').show();
  $('#MA-tel-form').show();
  $('#country-form').show();
});

$('#bam-signature-choice').click(function() {
  $('#theodo-signature').removeClass('chosen-signature');
  $('#theodo-signature').hide();

  $('#bam-signature').addClass('chosen-signature');
  $('#bam-signature').show();

  $('#mail-form').show();
  $('#UK-tel-form').hide();
  $('#MA-tel-form').hide();
  $('#country-form').hide();
});

$('#theodo-signature-choice').click();
