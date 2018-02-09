$(document).ready(function() {
  var jobs = [
    "Developer",
    "Architect developer",
    "Deputy CTO",
    "Chief Technology Officer - CTO",
    "Business developer & Agile coach",
    "Project Director",
    "Operations assistant",
    "Operations and finance & Agile coach",
    "Chief Sales Officer",
    "Chief Growth Officer & Agile coach",
    "CEO",
    "Cofounder",
  ];

  var jobSelector = $('#jobSelector');
  var signatureJob = $('.signatureJob');

  function initJob() {
    // add job options
    for (var i=0; i<jobs.length; i++) {
      var job = jobs[i];
      var option = `<option value="${i}">${job}</option>`;
      jobSelector.append(option);
    }

    // get job from localStorage
    var jobIndex = jobs.length - 1; // last index
    var job = jobs[jobIndex]; // = cofounder;

    var localStorageJob = localStorage.getItem("signatureJob");
    var localStorageJobIndex = $.inArray(localStorageJob, jobs);
    if (null !== localStorageJob &&  localStorageJobIndex > -1) {
      jobIndex = localStorageJobIndex;
      job = localStorageJob;
    }

    // update selector and signature
    jobSelector.find(`[value=${jobIndex}]`).attr('selected', true);
    signatureJob.each(function() {
      $(this).text(job);
    });
  }
  initJob();

  jobSelector.change(function() {
    var job = jobSelector.find(':selected').text();
    signatureJob.each(function() {
      $(this).text(job);
    });
    localStorage.setItem("signatureJob", job);
  });
});
