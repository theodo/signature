$('#gotItButton').click(function() {
  $('#warning').fadeOut();
});

function setSignatureUpdateTime() {
  var id = $(".chosen-signature").attr("id");
  var key;
  if(id === 'theodo-signature') {
    key = 'theodoLastUpdate';
  }
  if(id === 'bam-signature') {
    key = 'bamLastUpdate';
  }
  localStorage.setItem(key, Date.now());
}

$('#tutorial input.copySignature').click(function() {
  $('#theodo-signature .hidden').remove();
  selectContent('chosen-signature');
  this.style.color = 'green';
  setSignatureUpdateTime();
});

$('#tutorial input.copySignatureCode').click(function() {
  $('#theodo-signature .hidden').remove();
  // display signature's code
  var code = $('.chosen-signature').html();
  code = code.replace(/&/g, '&amp;');
  code = code.replace(/</g, '&lt;');
  code = code.replace(/>/g, '&gt;');
  if($('.signatureCode').length == 0) {
    $('body').append("<pre><code class='signatureCode'></code></pre>");
  }
  $('.signatureCode').html(code);
  selectContent('signatureCode');
  $('.signatureCode')[0].style.display = 'none';
  this.style.color = 'green';
  setSignatureUpdateTime();
});

function selectContent(className) {
  var el = document.getElementsByClassName(className)[0];
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
