// Load all signatures before anything else
$.holdReady(true);
var loadPromises = []
for(var key of Object.keys(config)) {
  var rendererId = config[key].rendererId;
  $('#signature-renderer').append(`<div id="${rendererId}" style="display: none;"></div>`);
  var loadPromise = new Promise(function(resolve, reject) {
    $(`#${rendererId}`).load(config[key].signatureTemplate, resolve);
  });
  loadPromises.push(loadPromise);
}
Promise.all(loadPromises).then(function() {$.holdReady(false);});












var theodoSignatureUpdateTime = new Date('4/3/2018'); //Month/Day/Year
var bamSignatureUpdateTime = new Date('4/22/2018'); //Month/Day/Year

function displayWetherSignatureIsUpToDate(key) {
  var signatureUpdateTime, userUpdateTime, parentNode;

  if(key === 'bam') {
    signatureUpdateTime = bamSignatureUpdateTime;
    if(localStorage.getItem('bamLastUpdate')) {
      userUpdateTime = localStorage.getItem('bamLastUpdate');
      parentNode = 'bamSignatureChoice';
    }
  }
  if(key === 'theodo') {
    signatureUpdateTime = theodoSignatureUpdateTime;
    if(localStorage.getItem('theodoLastUpdate')) {
      userUpdateTime = localStorage.getItem('theodoLastUpdate');
      parentNode = 'theodoSignatureChoice';
    }
  }

  $('#lastUpdate').text(signatureUpdateTime.toLocaleDateString());
  $("#upToDate").hide();
  $("#notUpToDate").hide();
  if(userUpdateTime && userUpdateTime > signatureUpdateTime) {
    $("#upToDate").show();
  }
  if(userUpdateTime && userUpdateTime < signatureUpdateTime) {
    $("#notUpToDate").show();
  }
}

$('#theodo-signature-choice').click(function() {
  $('#theodo-signature').addClass('chosen-signature');
  $('#theodo-signature').show();

  $('#bam-signature').removeClass('chosen-signature');
  $('#bam-signature').hide();

  $('#mail-form').hide();
  $('#UK-tel-form').show();
  $('#MA-tel-form').show();
  $('#country-form').show();
  displayWetherSignatureIsUpToDate('theodo');
  localStorage.setItem("signatureChoice", "Theodo");
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
  displayWetherSignatureIsUpToDate('bam');
  localStorage.setItem("signatureChoice", "BAM");
});

var signatureChoice = localStorage.getItem("signatureChoice");
if(signatureChoice === "BAM") {
  $('#bam-signature-choice').click();
} else {
  $('#theodo-signature-choice').click();
}
