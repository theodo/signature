$(document).ready(function() {
  var frTelInput = $('#frTelInput');
  var ukTelInput = $('#ukTelInput');
  var maTelInput = $('#maTelInput');
  var usTelInput = $('#usTelInput');

  var signatureFrTel = $('.signatureFrTel');
  var signatureUkTel = $('.signatureUkTel');
  var signatureMaTel = $('#signatureMaTel');
  var signatureUsTel = $('#signatureUsTel');

  var signatureFrTelGroup = $('#signatureFrTelGroup');
  var signatureUkTelGroup = $('#signatureUkTelGroup');
  var signatureMaTelGroup = $('#signatureMaTelGroup');
  var signatureUsTelGroup = $('#signatureUsTelGroup');

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

    var usTelValue = '';
    var localStorageUsTel = localStorage.getItem('signatureUsTel');
    if (null !== localStorageUsTel) {
      usTelValue = localStorageUsTel;
    }
    usTelInput.val(usTelValue);
    updateTelephone('signatureUsTel', usTelInput, signatureUsTelGroup, signatureUsTel, true, '1');

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
  usTelInput.on('input', function() {
    updateTelephone('signatureUsTel', usTelInput, signatureUsTelGroup, signatureUsTel, false, '1');
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
    signatureNode.each(function() {
      $(this).attr("href", `tel:+${internationalCode}${telNoSpace}`)
      $(this).text(`M +${internationalCode} ${telephoneToUse}`);
    });
    if (telNoSpace.length > 0) {
      signatureGroupNode.removeClass('hidden');
    } else {
      signatureGroupNode.addClass('hidden');
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
    if (!signatureFrTelGroup.hasClass('hidden')) {
      countryNodes.push(signatureFrTelGroup.find('.country'));
    }
    if (!signatureUkTelGroup.hasClass('hidden')) {
      countryNodes.push(signatureUkTelGroup.find('.country'));
    }
    if (!signatureMaTelGroup.hasClass('hidden')) {
      countryNodes.push(signatureMaTelGroup.find('.country'));
    }

    $("#theodo-signature .country").addClass('hidden');
    if (countryNodes.length > 1) {
      for (var c in countryNodes) {
        countryNodes[c].removeClass('hidden');
      }
    }
  }
});
