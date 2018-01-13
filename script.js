

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



function displayCode() {
  var code = document.getElementById("signature").innerHTML;
  code = code.replace(/&/g, '&amp;');
  code = code.replace(/</g, '&lt;');
  code = code.replace(/>/g, '&gt;');
  document.getElementById("signatureCode").innerHTML = code;
}

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

// init values
changeCountry(true);
