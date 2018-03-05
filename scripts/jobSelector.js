$(document).ready(function() {
  var jobs = {
    "Tech": [
      "Developer",
      "Architect developer",
    ],
    "UX": [
      "UX designer",
      "Head of UX",
    ],
    "GT & Agile Coach": [
      "Business developer & Agile coach",
      "Chief Growth Officer & Agile coach",
    ],
    "Ops": [
      "Operations assistant",
      "Operations and finance & Agile coach",
    ],
    "Sales": [
      "Project Director", "Directeur Projet",
      "Directeur commercial", "Head of Sales", "Chief Sales Officer",
    ],
    "CTO": [
      "Deputy CTO",
      "Chief Technology Officer",
      "Chief Technology Officer - Cofounder",
    ],
    "CEO": [
      "CEO",
      "CEO - Cofounder",
      "Cofounder",
    ]
  };

  var jobSelector = $('#jobSelector');
  var signatureJob = $('.signatureJob');

  function initJob() {
    // add job options
    for(jobGroup in jobs) {
      let jobGroupOptions = `<optgroup label='${jobGroup}'>`;
      for (var i=0; i<jobs[jobGroup].length; i++) {
        var job = jobs[jobGroup][i];
        jobGroupOptions += `<option value="${jobGroup}${i}">${job}</option>`;
      }
      jobGroupOptions += "</optgroup>"
      jobSelector.append(jobGroupOptions);
    }

    // get job from localStorage
    var localStorageJob = localStorage.getItem("signatureJob");
    if(localStorageJob !== null) {
      var jobGroup = localStorageJob.substr(0, localStorageJob.length - 1);
      var jobIndex = localStorageJob.substr(localStorageJob.length - 1, localStorageJob.length);
    }

    // update selector and signature
    jobSelector.find(`[value=${jobGroup}${jobIndex}]`).attr('selected', true);
    signatureJob.each(function() {
      $(this).text(job);
    });
  }
  initJob();

  jobSelector.change(function() {
    var jobChoice = jobSelector.find(':selected');
    signatureJob.each(function() {
      $(this).text(jobChoice.text());
    });
    localStorage.setItem("signatureJob", jobChoice.val());
  });
});
