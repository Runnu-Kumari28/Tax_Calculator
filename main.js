// input field validation
function parseNumber(input){
  const form = document.getElementById('taxCalculator');
  form.classList.remove("was-validated"); // To remove bootstrap existing form validation

  const inputValue = input.value.trim();
  if (isNaN(inputValue) || parseInt(inputValue) < 0){
     // Display error message using tooltip
    const tooltip = new bootstrap.Tooltip(input, {
      title: "Please enter positive numbers only.",
      placement: "right",
      trigger: "manual"
    });
    tooltip.show();
    input.classList.add("is-invalid");
  } else {
    // Input is valid, reset error message and styling
    const tooltip = bootstrap.Tooltip.getInstance(input);
    if (tooltip) {
      tooltip.dispose(); 
    }
    input.classList.remove("is-invalid");
  }
}

// initialise tooltip
document.addEventListener("DOMContentLoaded", function() {
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  });
});

function calculateTax(age, income, extraIncome, deductions) {
  const grossIncome = income + extraIncome;
  // tax rate based on age_group
  let taxRate;
  if (age < 40) {
      taxRate = 0.3;
  } else if (age >= 40 && age < 60) {
      taxRate = 0.4;
  } else if(age > 60){
      taxRate = 0.1;
  }

  // tax amount
  let tax = 0;
  if (grossIncome > 800000) {
      tax = taxRate * (grossIncome - (deductions + 800000));
      const finalIncome = grossIncome - tax;
      return finalIncome; 
  } else {
    return grossIncome;
  }
}

function submitForm(){
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form => {
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return
    }
  });
  
  const grossAnnualIncome = parseFloat(document.getElementById('gross_annual_income').value);
  const extraIncome = parseFloat(document.getElementById('extra_income').value);
  const ageGroup = parseFloat(document.getElementById('age_group').value);
  const applicableDeductions = parseFloat(document.getElementById('applicable_deductions').value);
  
  const income = calculateTax(ageGroup, grossAnnualIncome, extraIncome, applicableDeductions);

  if (!isNaN(income)) {
    // Display tax in modal body
    const taxParagraph = document.getElementById('tax-info');
    taxParagraph.textContent = "After tax deductions your overall income will be : Rs " + income.toLocaleString('en-IN');
    let myModal = new bootstrap.Modal(document.getElementById('dataModel'), {});
    myModal.show();
  } 
}
