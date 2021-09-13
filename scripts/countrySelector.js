$(document).ready(function () {
  var countrySelector = $('#countrySelector');

  var country = 'France';
  var localStorageCountry = localStorage.getItem('country');
  if (null !== localStorageCountry) {
    country = localStorageCountry;
  }
  countrySelector.find(`[value=${country}]`).attr('selected', true);
  updateSignature(country);

  countrySelector.change(function () {
    country = countrySelector.find(':selected').val();
    localStorage.setItem("country", country);

    updateSignature(country);
  });

  function updateSignature(country) {
    var ukAddress = $('#ukAddress');
    var frenchParisAddress = $('#frenchParisAddress');
    var frenchLyonAddress = $('#frenchLyonAddress');
    var usAddress = $('#usAddress');
    var logo = $('#logo');
    var frTel = $('#signatureFrTelGroup');
    var ukTel = $('#signatureUkTelGroup');
    var usTel = $('#signatureUsTelGroup');

    if (country == 'UK') {
      ukAddress.removeClass('hidden');
      frenchParisAddress.addClass('hidden');
      frenchLyonAddress.addClass('hidden');
      usAddress.addClass('hidden');
      logo.attr('href', 'https://www.theodo.co.uk');
      //reorder tels
      ukTel.insertBefore($("[id$=TelGroup]").first());
    } else if (country == 'US') {
      ukAddress.addClass('hidden');
      frenchParisAddress.addClass('hidden');
      frenchLyonAddress.addClass('hidden');
      usAddress.removeClass('hidden');
      logo.attr('href', 'https://www.theodo.com/');
      //reorder tels
      usTel.insertBefore($("[id$=TelGroup]").first());
    } else if (country == 'FR-Lyon') {
      ukAddress.addClass('hidden');
      frenchParisAddress.addClass('hidden');
      frenchLyonAddress.removeClass('hidden');
      usAddress.addClass('hidden');
      logo.attr('href', 'https://www.theodo.fr');
      //reorder tels
      frTel.insertBefore($("[id$=TelGroup]").first());
    } else {
      ukAddress.addClass('hidden');
      frenchParisAddress.removeClass('hidden');
      frenchLyonAddress.addClass('hidden');
      usAddress.addClass('hidden');
      logo.attr('href', 'https://www.theodo.fr');
      //reorder tels
      frTel.insertBefore($("[id$=TelGroup]").first());
    }
  }
});
