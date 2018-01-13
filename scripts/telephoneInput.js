var frTelInput = $('#frTelInput');
var ukTelInput = $('#ukTelInput');
var maTelInput = $('#maTelInput');

var signatureFrTel = $('#signatureFrTel');
var signatureUkTel = $('#signatureUkTel');
var signatureMaTel = $('#signatureMaTel');

var signatureFrTelGroup = $('#signatureFrTelGroup');
var signatureUkTelGroup = $('#signatureUkTelGroup');
var signatureMaTelGroup = $('#signatureMaTelGroup');

function initTelephones() {
  var frTelValue = '6 12 34 56 78';
  var localStorageFrTel = localStorage.getItem('signatureFrTel');
  if (null !== localStorageFrTel) {
    frTelValue = localStorageFrTel;
  }
  frTelInput.val(frTelValue);
  updateTelephone('signatureFrTel', frTelInput, signatureFrTelGroup, signatureFrTel, true, '33');

  var ukTelValue = '';
  var localStorageUkTel = localStorage.getItem('signatureUkTel');
  if (null !== localStorageUkTel) {
    ukTelValue = localStorageUkTel;
  }
  ukTelInput.val(ukTelValue);
  updateTelephone('signatureUkTel', ukTelInput, signatureUkTelGroup, signatureUkTel, false, '44');

  var maTelValue = '';
  var localStorageMaTel = localStorage.getItem('signatureMaTel');
  if (null !== localStorageMaTel) {
    maTelValue = localStorageMaTel;
  }
  maTelInput.val(maTelValue);
  updateTelephone('signatureMaTel', maTelInput, signatureMaTelGroup, signatureMaTel, true, '212');

  displayOrHideCountries();
}
initTelephones();

frTelInput.on('input', function() {
  updateTelephone('signatureFrTel', frTelInput, signatureFrTelGroup, signatureFrTel, true, '33');
  displayOrHideCountries();
});
maTelInput.on('input', function() {
  updateTelephone('signatureMaTel', maTelInput, signatureMaTelGroup, signatureMaTel, true, '212');
  displayOrHideCountries();
});
ukTelInput.on('input', function() {
  updateTelephone('signatureUkTel', ukTelInput, signatureUkTelGroup, signatureUkTel, false, '44');
  displayOrHideCountries();
});

function updateTelephone(localStorageKey, inputNode, signatureGroupNode, signatureNode, withFormatting, internationalCode) {
  var inputValue = inputNode.val();
  var telNoSpace = inputValue.replace(/\D/g, '');
  localStorage.setItem(localStorageKey, telNoSpace);

  var telephoneToUse = inputValue;
  if (withFormatting) {
    var telephoneToUse = formatTel(telNoSpace);
  }

  inputNode.val(telephoneToUse);
  signatureNode.attr("href", `tel:+${internationalCode}${telNoSpace}`);
  signatureNode.text(`+${internationalCode} ${telephoneToUse}`);
  if (telNoSpace.length > 0) {
    signatureGroupNode.show();
  } else {
    signatureGroupNode.hide();
  }
}

function formatTel(telNoSpace) {
  var formattedInput = '';
  for(var i = 0; i<telNoSpace.length; i++) {
    if((i % 2) === 1) {
      formattedInput += ' ';
    }
    formattedInput += telNoSpace.charAt(i);
  }
  return formattedInput;
}

function displayOrHideCountries() {
  var countryNodes = [];
  if (signatureFrTelGroup.css('display') !== 'none') {
    countryNodes.push(signatureFrTelGroup.find('.country'));
  }
  if (signatureUkTelGroup.css('display') !== 'none') {
    countryNodes.push(signatureUkTelGroup.find('.country'));
  }
  if (signatureMaTelGroup.css('display') !== 'none') {
    countryNodes.push(signatureMaTelGroup.find('.country'));
  }

  $("#signature .country").hide();
  if (countryNodes.length > 1) {
    for (var c in countryNodes) {
      countryNodes[c].css('display', 'initial');
    }
  }
}
