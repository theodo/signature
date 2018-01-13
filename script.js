

function changeCountry(fromLocalStorage) {
  var country;
  if (fromLocalStorage) {
    if (null != localStorage.getItem('country')) {
      country = localStorage.getItem('country');
    } else {
      country = "France";
    }
    document.querySelector('select[name=country]').value = country;
  } else {
    var e = document.querySelector('select[name=country]');
    country = e.options[e.selectedIndex].value;
  }

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
  localStorage.setItem("country", country);
}

// init values
changeCountry(true);
