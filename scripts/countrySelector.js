var countrySelector = $('#countrySelector');

var country = 'France';
var localStorageCountry = localStorage.getItem('country');
if (null !== localStorageCountry ) {
  country = localStorageCountry;
}
countrySelector.find(`[value=${country}]`).attr('selected', true);

countrySelector.change(function() {
  country = countrySelector.find(':selected').val();
  localStorage.setItem("country", country);

  var ukAddress = document.getElementById('ukAddress');
  var frenchAddress = document.getElementById('frenchAddress');
  var logo = document.getElementById('logo');
  var frTel = document.getElementById('signatureFrTelGroup');
  var ukTel = document.getElementById('signatureUkTelGroup');

  if(country == 'UK') {
    ukAddress.style.display = 'initial';
    frenchAddress.style.display = 'none';
    logo.href = 'https://www.theodo.co.uk';
    //reorder tels
    ukTel.parentNode.insertBefore(frTel, ukTel.nextSibling);
  } else {
    ukAddress.style.display = 'none';
    frenchAddress.style.display = 'initial';
    logo.href = 'https://www.theodo.fr';
    //reorder tels
    frTel.parentNode.insertBefore(ukTel, frTel.nextSibling);
  }
});
