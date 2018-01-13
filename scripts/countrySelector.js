var countrySelector = $('#countrySelector');

var country = 'France';
var localStorageCountry = localStorage.getItem('country');
if (null !== localStorageCountry ) {
  country = localStorageCountry;
}
countrySelector.find(`[value=${country}]`).attr('selected', true);
updateSignature(country);

countrySelector.change(function() {
  country = countrySelector.find(':selected').val();
  localStorage.setItem("country", country);

  updateSignature(country);
});

function updateSignature(country) {
  var ukAddress = $('#ukAddress');
  var frenchAddress = $('#frenchAddress');
  var logo = $('#logo');
  var frTel = $('#signatureFrTelGroup');
  var ukTel = $('#signatureUkTelGroup');

  if(country == 'UK') {
    ukAddress.removeClass('hidden');
    frenchAddress.addClass('hidden');
    logo.attr('href', 'https://www.theodo.co.uk');
    //reorder tels
    ukTel.insertBefore(frTel);
  } else {
    ukAddress.addClass('hidden');
    frenchAddress.removeClass('hidden');
    logo.attr('href', 'https://www.theodo.fr');
    //reorder tels
    frTel.insertBefore(ukTel);
  }
}
