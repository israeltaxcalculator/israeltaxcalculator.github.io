// basic tax constants
const TAX_BRACKETS = [{'threshold': 74880, 'rate': 0.10},
    {'threshold': 107400, 'rate': 0.14},
    {'threshold': 172320, 'rate': 0.20},
    {'threshold': 239520, 'rate': 0.31},
    {'threshold': 498360, 'rate': 0.35},
    {'threshold': 641880, 'rate': 0.47},
    {'threshold': Number.MAX_SAFE_INTEGER, 'rate': 0.50}];

// tax credit constants
const TAX_CREDIT_VALUE = 216; // NIS

// charitable donations constants
const MIN_ELIGIBLE_DONATION = 190; // NIS. Total charitable donations must exceed 190NIS to be eligible for relief
const MAX_CHARITY_PROPORTION_OF_GROSS = 0.3; // only charitable contributions under 30% of annual income are eligible
const CHARITY_RELIEF_RATE = 0.35;

// pension-related constants
const HACHNASA_MEZAKA = 104400 // NIS
const MAX_PENSION_CONTRIBUTIONS_RATE = 0.07 // 7% of insured income
const PENSION_RELIEF_RATE = 0.35 // get income tax reduction of 35% of contributions

const sumElements = collection => [...collection].reduce((sum, item) => sum + (parseFloat(item.value) || 0), 0);

const calculateTaxBrackets = gross => {
    const bins = [];
    let remainder = gross;
    let currentBin = 0;
    let isWithinBin = false;

    while (!isWithinBin) {
        const amountToAddToBin = remainder >= TAX_BRACKETS[currentBin].threshold ? TAX_BRACKETS[currentBin].threshold : isWithinBin = TAX_BRACKETS[currentBin].threshold - remainder;
        bins.push({amount: amountToAddToBin, rate: TAX_BRACKETS[currentBin].rate});
        remainder -= amountToAddToBin;
        currentBin++;
    }

    return bins.reduce((tax, bin) => tax + (bin.amount * bin.rate), 0);
};

const calculateCharitableDonationsRelief = (donations, gross) => donations >= MIN_ELIGIBLE_DONATION ? CHARITY_RELIEF_RATE * Math.min(donations, MAX_CHARITY_PROPORTION_OF_GROSS * gross) : 0;

const calculatePensionRelief = (contributions, insuredIncome) => {
    const maxEligibleContributions = MAX_PENSION_CONTRIBUTIONS_RATE * Math.min(HACHNASA_MEZAKA, insuredIncome);
    return PENSION_RELIEF_RATE * Math.min(contributions, maxEligibleContributions);
}

const showHideTable = (check, tableId) => {
    if (document.getElementById(check).checked) {
        return document.getElementById(tableId).style.display = '';
    }

    const table = document.getElementById(tableId);
    table.style.display = 'none';

    for (let elem of table.getElementsByClassName('taxCredits')) {
        elem.value = "";
    }
};

const addRow = (tableId, maxRows = 10) => {
    const table = document.getElementById(tableId);
    if (table.rows.length <= maxRows) {
        table.insertRow(-1).innerHTML = table.rows[1].innerHTML
    }
};

const removeRow = tableId => {
    let table = document.getElementById(tableId);
    if (table.rows.length > 2) {
        table.deleteRow(-1);
    }
};


document.querySelector('#annual-tax').onsubmit = (event) => {
    event.preventDefault();

    // load numbers from the form and add up similar elements
    const gross = sumElements(document.getElementsByClassName('gross'));
    const taxPaid = sumElements(document.getElementsByClassName('taxPaid'));
    const employeePension = sumElements(document.getElementsByClassName('employeePension'));
    const insuredIncome = sumElements(document.getElementsByClassName('insuredIncome'));
    const taxCredits = sumElements(document.getElementsByClassName('taxCredits'));
    const donations = sumElements(document.getElementsByClassName('donation'));

    // derived variables
    const taxCreditsRelief = taxCredits * TAX_CREDIT_VALUE;
    const charitableDonationsRelief = calculateCharitableDonationsRelief(donations, gross);
    const pensionRelief = calculatePensionRelief(employeePension, insuredIncome);

    document.getElementById('taxCreditsRelief').innerHTML = taxCreditsRelief.toFixed(2);
    document.getElementById('charitableDonationsRelief').innerHTML = charitableDonationsRelief.toFixed(2);
    document.getElementById('pensionRelief').innerHTML = pensionRelief.toFixed(2);
    document.getElementById('finalTaxPaid').innerHTML = taxPaid.toFixed(2);

    const taxOwed = calculateTaxBrackets(gross, TAX_BRACKETS);
    document.getElementById('taxBrackets').innerHTML = taxOwed.toFixed(2);
    const finalTaxDue = Math.max(taxOwed - taxCreditsRelief - charitableDonationsRelief - pensionRelief, 0);
    document.getElementById('finalTaxDue').innerHTML = finalTaxDue.toFixed(2);
    const refund = taxPaid - taxOwed;
    document.getElementById('refund').innerHTML = refund.toFixed(2);

    return false;
};


/*        document.getElementById('tax_credits_table').addEventListener('input', function (event) {
        if (event.target.className == 'taxCredits') {
        document.getElementById('totalTaxCredits').innerHTML = sumElements(document.getElementsByClassName('taxCredits')).toFixed(2)
    }

}, false);*/


document.getElementById('add_employer').onclick = () => addRow("salary_pension");
document.getElementById('rmv_employer').onclick = () => removeRow("salary_pension");
document.getElementById('add_institution').onclick = () => addRow("donations");
document.getElementById('rmv_institution').onclick = () => removeRow('donations');