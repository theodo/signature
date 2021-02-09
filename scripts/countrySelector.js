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
    var frenchAddress = $('#frenchAddress');
    var lyonAddress = $('#lyonAddress');
    var usAddress = $('#usAddress');
    var logo = $('#logo');
    var frTel = $('#signatureFrTelGroup');
    var ukTel = $('#signatureUkTelGroup');
    var usTel = $('#signatureUsTelGroup');

    if (country == 'UK') {
      ukAddress.removeClass('hidden');
      frenchAddress.addClass('hidden');
      lyonAddress.addClass('hidden');
      usAddress.addClass('hidden');
      logo.attr('href', 'https://www.theodo.co.uk');
      //reorder tels
      ukTel.insertBefore($("[id$=TelGroup]").first());
    } else if (country == 'US') {
      ukAddress.addClass('hidden');
      frenchAddress.addClass('hidden');
      lyonAddress.addClass('hidden');
      usAddress.removeClass('hidden');
      logo.attr('href', 'https://www.theodo.com/');
      //reorder tels
      usTel.insertBefore($("[id$=TelGroup]").first());
    } else {
      ukAddress.addClass('hidden');
      usAddress.addClass('hidden');
      if (country == 'Lyon') {
        frenchAddress.addClass('hidden');
        lyonAddress.removeClass('hidden');
      } else {
        frenchAddress.removeClass('hidden');
        lyonAddress.addClass('hidden');
      }
      logo.attr('href', 'https://www.theodo.fr');
      //reorder tels
      frTel.insertBefore($("[id$=TelGroup]").first());
    }
  }
});
