// https://calculator.swiftutors.com/average-collection-period-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const averageCollectionPeriodRadio = document.getElementById('averageCollectionPeriodRadio');
const daysRadio = document.getElementById('daysRadio');
const averageAccountsReceivableRadio = document.getElementById('averageAccountsReceivableRadio');
const netCreditSalesRadio = document.getElementById('netCreditSalesRadio');

let averageCollectionPeriod;
let days = v1;
let averageAccountsReceivable = v2;
let netCreditSales = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

averageCollectionPeriodRadio.addEventListener('click', function() {
  variable1.textContent = 'Days';
  variable2.textContent = 'Average Accounts Receivable';
  variable3.textContent = 'Net Credit Sales';
  days = v1;
  averageAccountsReceivable = v2;
  netCreditSales = v3;
});

daysRadio.addEventListener('click', function() {
  variable1.textContent = 'Average Collection Period';
  variable2.textContent = 'Average Accounts Receivable';
  variable3.textContent = 'Net Credit Sales';
  averageCollectionPeriod = v1;
  averageAccountsReceivable = v2;
  netCreditSales = v3;
});

averageAccountsReceivableRadio.addEventListener('click', function() {
  variable1.textContent = 'Average Collection Period';
  variable2.textContent = 'Days';
  variable3.textContent = 'Net Credit Sales';
  averageCollectionPeriod = v1;
  days = v2;
  netCreditSales = v3;
});

netCreditSalesRadio.addEventListener('click', function() {
  variable1.textContent = 'Average Collection Period';
  variable2.textContent = 'Days';
  variable3.textContent = 'Average Accounts Receivable';
  averageCollectionPeriod = v1;
  days = v2;
  averageAccountsReceivable = v3;
});

btn.addEventListener('click', function() {
  
  if(averageCollectionPeriodRadio.checked)
    result.textContent = `Average Collection Period = ${computeAverageCollectionPeriod().toFixed(2)} Days`;

  else if(daysRadio.checked)
    result.textContent = `Days = ${computeDays().toFixed(0)}`;

  else if(averageAccountsReceivableRadio.checked)
    result.textContent = `Average Accounts Receivable = ${computeAverageAccountsReceivable().toFixed(2)}`;

  else if(netCreditSalesRadio.checked)
    result.textContent = `Net Credit Sales = ${computeNetCreditSales().toFixed(2)}`;
})

// calculation

function computeAverageCollectionPeriod() {
  return (Number(days.value) * Number(averageAccountsReceivable.value)) / Number(netCreditSales.value);
}

function computeDays() {
  return (Number(averageCollectionPeriod.value) * Number(netCreditSales.value)) / Number(averageAccountsReceivable.value);
}

function computeAverageAccountsReceivable() {
  return (Number(averageCollectionPeriod.value) * Number(netCreditSales.value)) / Number(days.value);
}

function computeNetCreditSales() {
  return (Number(days.value) * Number(averageAccountsReceivable.value)) / Number(averageCollectionPeriod.value);
}