
document.getElementById('calculate').addEventListener('click', function () {
  const amount = parseFloat(document.getElementById('amount').value);
  const years = parseInt(document.getElementById('years').value);
  const rate = parseFloat(document.getElementById('rate').value) / 100 / 12;
  const taxes = parseFloat(document.getElementById('taxes').value) / 12;
  const insurance = parseFloat(document.getElementById('insurance').value) / 12;

  const months = years * 12;
  const monthlyPI = (amount * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
  const totalMonthly = monthlyPI + taxes + insurance;

  document.getElementById('monthly-payment').textContent = `AED ${totalMonthly.toFixed(2)}`;
  document.getElementById('principal-interest').textContent = `AED ${monthlyPI.toFixed(2)}`;
  document.getElementById('taxes-payment').textContent = `AED ${taxes.toFixed(2)}`;
  document.getElementById('insurance-payment').textContent = `AED ${insurance.toFixed(2)}`;

  const totalPrincipal = amount;
  const totalInterest = monthlyPI * months - amount;
  const totalCost = totalPrincipal + totalInterest + taxes * months + insurance * months;

  document.getElementById('total-principal').textContent = `AED ${totalPrincipal.toFixed(2)}`;
  document.getElementById('total-interest').textContent = `AED ${totalInterest.toFixed(2)}`;
  document.getElementById('total-cost').textContent = `AED ${totalCost.toFixed(2)}`;
});
