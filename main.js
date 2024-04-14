// input field validation
function parseNumber(input) {
  console.log(`${input}`);
  
  const trimmedValue = input.value.trim();
  const parsedValue = parseInt(trimmedValue);
  
  console.log(`${parsedValue}`);
  
  if (!isNaN(parsedValue)) {
    input.value = parsedValue;
  } else {
    // Display error message using tooltip
    var bootstrapTooltip = new bootstrap.Tooltip(input, {
      title: "Please enter numbers only.",
      placement: "right",
      trigger: "manual"
    });
    bootstrapTooltip.show();
    input.value = '';
  }
  console.log(`check input validation`);
}


// initialise tooltip
document.addEventListener("DOMContentLoaded", function() {
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});


//onsubmit form validation
(() => {
  'use strict' 
  const forms = document.querySelectorAll('.needs-validation')
  
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
  console.log(`check onsubmit`);
})()  
});
