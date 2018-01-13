$('#tutorial input.copySignature').click(function() {
  selectContent('signature');
  this.style.color = 'green';
});
$('#tutorial input.copySignatureCode').click(function() {
  // display signature's code
  var code = document.getElementById("signature").innerHTML;
  code = code.replace(/&/g, '&amp;');
  code = code.replace(/</g, '&lt;');
  code = code.replace(/>/g, '&gt;');
  $('body').append("<pre><code id='signatureCode'></code></pre>");
  document.getElementById("signatureCode").innerHTML = code;
  selectContent('signatureCode');
  document.getElementById('signatureCode').style.display = 'none';
  this.style.color = 'green';
});

function selectContent(elId) {
  var el = document.getElementById(elId);
  var body = document.body, range, sel;
  if (document.createRange && window.getSelection) {
    range = document.createRange();
    sel = window.getSelection();
    sel.removeAllRanges();
    try {
      range.selectNodeContents(el);
    } catch (e) {
      range.selectNode(el);
    }
    sel.addRange(range);
    document.execCommand("copy");
  } else if (body.createTextRange) {
    range = body.createTextRange();
    range.moveToElementText(el);
    range.select();
    range.execCommand("Copy");
  }
}
