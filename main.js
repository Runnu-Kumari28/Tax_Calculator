// input field validation
function parseNumber(input) 
{
  const inputValue = input.value.trim();
  const parsedValue = parseInt(inputValue);
  
  if (isNaN(parsedValue) || parsedValue < 0) 
  {
     // Display error message using tooltip
     var tooltip = new bootstrap.Tooltip
     (input, 
      {
      title: "Please enter positive numbers only.",
      placement: "right",
      trigger: "manual"
      }
    );
    tooltip.show();
    input.classList.add("is-invalid");
  } else 
  {
    // Input is valid, reset error message and styling
    var tooltip = bootstrap.Tooltip.getInstance(input);
    if (tooltip) {
      tooltip.dispose(); 
    }
    input.classList.remove("is-invalid");
  }
}

// initialise tooltip
document.addEventListener("DOMContentLoaded", function() {
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});});

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
      tax = taxRate * (grossIncome - deductions - 800000);
      const finalIncome = grossIncome - tax;
      return finalIncome; 
  } else {
    return grossIncome;
  }
}

function submitForm()
{ 
  const forms = document.querySelectorAll('.needs-validation');
  let isValid = true;

  Array.from(forms).forEach(form => {
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      isValid = false;
    }
  });

  if (!isValid) return;
  
  const grossAnnualIncome = parseInt(document.getElementById('gross_annual_income').value);
  const extraIncome = parseInt(document.getElementById('extra_income').value);
  const ageGroup = parseInt(document.getElementById('age_group').value);
  const applicableDeductions = parseInt(document.getElementById('applicable_deductions').value);
  
  const income = calculateTax(ageGroup, grossAnnualIncome, extraIncome, applicableDeductions);

  if (!isNaN(income)) {
    // Display tax in modal body
    const taxParagraph = document.getElementById('tax-info');
    taxParagraph.textContent = "Final-Income after Tax deduction: Rs " + income;

    let myModal = new bootstrap.Modal(document.getElementById('dataModel'), {});
    myModal.show();
  } 
}
