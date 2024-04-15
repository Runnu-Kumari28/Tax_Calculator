// input field validation
function parseNumber(input) {
  console.log(`in parseNumber: ${JSON.stringify(input)}`);
  
  const inputValue = input.value.trim();
  console.log(`in parseNumber: ${inputValue}`);
  const parsedValue = parseInt(inputValue);
  
  console.log(`${parsedValue}`);
  
  if (isNaN(parsedValue) || parsedValue < 0) {
    console.log(`inside isNaN check`);
     // Display error message using tooltip
     var tooltip = new bootstrap.Tooltip(input, {
      title: "Please enter positive numbers only.",
      placement: "right",
      trigger: "manual"
    });
    tooltip.show();
    input.classList.add("is-invalid");
  }
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


          // function to calculate Tax //
function calculateTax(age, income, extraIncome, deductions) {
  // Calculate overall income after deductions
  const overallIncome = income + extraIncome - deductions;

  // tax rate based on age_group
  let taxRate, finalIncome;
  if (age < 40) {
      taxRate = 0.3;
  } else if (age >= 40 && age < 60) {
      taxRate = 0.4;
  } else {
      taxRate = 0.1;
  }

  // tax amount
  let tax = 0;
  if (overallIncome > 8) {
      tax = taxRate * (overallIncome - 8);
      finalIncome = overallIncome - tax;
  }
  return finalIncome;
}

  //populated calculated tax in the modal-body
  // document.getElementsByClassName("modal-body").innerhtml = tax;  

});


function submitForm(){
  console.log("in submitForm");
  let myModal = new bootstrap.Modal(document.getElementById('dataModel'), {});
  myModal.show();
}

