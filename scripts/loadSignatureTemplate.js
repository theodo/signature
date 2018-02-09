$('#theodo-signature').load('signatureTemplates/theodo-signature.html');
$('#bam-signature').load('signatureTemplates/bam-signature.html');

$('#theodo-signature-choice').click(function() {
  $('#theodo-signature').addClass('chosen-signature');
  $('#theodo-signature').show();

  $('#bam-signature').removeClass('chosen-signature');
  $('#bam-signature').hide();

  $('#UK-tel-form').show();
  $('#MA-tel-form').show();
  $('#country-form').show();
});

$('#bam-signature-choice').click(function() {
  $('#theodo-signature').removeClass('chosen-signature');
  $('#theodo-signature').hide();

  $('#bam-signature').addClass('chosen-signature');
  $('#bam-signature').show();

  $('#UK-tel-form').hide();
  $('#MA-tel-form').hide();
  $('#country-form').hide();
});

$('#theodo-signature-choice').click();
