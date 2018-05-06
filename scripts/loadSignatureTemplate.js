// Load all signatures before anything else
$.holdReady(true);
var loadPromises = []
for(var key of Object.keys(config)) {
  var startup = config[key];
  var templateId = key + "-template";
  $('#signature-renderer').append(`<div id="${templateId}" style="display: none;"></div>`);
  var loadPromise = new Promise(function(resolve, reject) {
    $(`#${templateId}`).load(startup.signatureTemplate, resolve);
  });
  loadPromises.push(loadPromise);
}
Promise.all(loadPromises).then(function() {$.holdReady(false);});



// Add Startup choice
for(var key of Object.keys(config)) {
  var startup = config[key];
  $('#m33-startup-choice').append(`<div id="${key}-choice">
    <img src="${startup.logo}"/>
  </div>`);
}



// Add click listeners on each choice
for(var key of Object.keys(config)) {
  var startup = config[key];
  $(`#${key}-choice`).click(startupChoice(key));
}

function startupChoice(key) {
  return function() {
    for(var s of Object.keys(config)) {
      var templateId = s + "-template";
      if(s === key) {
        $(`#${templateId}`).addClass('chosen-signature');
        $(`#${templateId}`).show();
      } else {
        $(`#${templateId}`).removeClass('chosen-signature');
        $(`#${templateId}`).hide();
      }
    }

    if(config[key].form.mail) {
      $('#mail-form').show();
    } else {
      $('#mail-form').hide();
    }

    if(config[key].form.country) {
      $('#UK-tel-form').show();
      $('#MA-tel-form').show();
      $('#country-form').show();
    } else {
      $('#UK-tel-form').hide();
      $('#MA-tel-form').hide();
      $('#country-form').hide();
    }

    displayWetherSignatureIsUpToDate(key);
    localStorage.setItem("signatureChoice", key);
  }
}

function displayWetherSignatureIsUpToDate(key) {
  var signatureUpdateTime = config[key].lastUpdate;
  var userUpdateTime = localStorage.getItem(`${key.toLowerCase()}LastUpdate`);

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



// Render last used signature
var signatureChoice = localStorage.getItem("signatureChoice");
$(`#${signatureChoice}-choice`).click();
