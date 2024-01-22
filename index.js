// basic tax constants
const TAX_BRACKETS = {
	2016:[{'threshold':    0, 'rate': 0.10},
		{'threshold':  62640, 'rate': 0.14},
		{'threshold': 107040, 'rate': 0.21},
		{'threshold': 166320, 'rate': 0.31},
		{'threshold': 237600, 'rate': 0.34},
		{'threshold': 496920, 'rate': 0.48},
		{'threshold': 803520, 'rate': 0.50}],
	2017:[{'threshold':    0, 'rate': 0.10},
		{'threshold':  74640, 'rate': 0.14},
		{'threshold': 107040, 'rate': 0.20},
		{'threshold': 171840, 'rate': 0.31},
		{'threshold': 238800, 'rate': 0.35},
		{'threshold': 496920, 'rate': 0.47},
		{'threshold': 640000, 'rate': 0.50}],
	2018:[{'threshold':    0, 'rate': 0.10},
		{'threshold':  74880, 'rate': 0.14},
		{'threshold': 107400, 'rate': 0.20},
		{'threshold': 172320, 'rate': 0.31},
		{'threshold': 239520, 'rate': 0.35},
		{'threshold': 498360, 'rate': 0.47},
		{'threshold': 641880, 'rate': 0.50}],
	2019:[{'threshold':    0, 'rate': 0.10},
		{'threshold':  75720, 'rate': 0.14},
		{'threshold': 108600, 'rate': 0.20},
		{'threshold': 174360, 'rate': 0.31},
		{'threshold': 242400, 'rate': 0.35},
		{'threshold': 504360, 'rate': 0.47},
		{'threshold': 649560, 'rate': 0.50}],
	2020:[{'threshold':    0, 'rate': 0.10},
		{'threshold':  75960, 'rate': 0.14},
		{'threshold': 108960, 'rate': 0.20},
		{'threshold': 174960, 'rate': 0.31},
		{'threshold': 243120, 'rate': 0.35},
		{'threshold': 505920, 'rate': 0.47},
		{'threshold': 651600, 'rate': 0.50}],
	2021:[{'threshold':    0, 'rate': 0.10},
		{'threshold':  75480, 'rate': 0.14},
		{'threshold': 108360, 'rate': 0.20},
		{'threshold': 173880, 'rate': 0.31},
		{'threshold': 241680, 'rate': 0.35},
		{'threshold': 502920, 'rate': 0.47},
		{'threshold': 647640, 'rate': 0.50}],
	2022:[{'threshold':    0, 'rate': 0.10},
		{'threshold':  77400, 'rate': 0.14},
		{'threshold': 110880, 'rate': 0.20},
		{'threshold': 178080, 'rate': 0.31},
		{'threshold': 247440, 'rate': 0.35},
		{'threshold': 514920, 'rate': 0.47},
		{'threshold': 663240, 'rate': 0.50}],
	2023:[{'threshold':    0, 'rate': 0.10},
		{'threshold':  81480, 'rate': 0.14},
		{'threshold': 116760, 'rate': 0.20},
		{'threshold': 187441, 'rate': 0.31},
		{'threshold': 260520, 'rate': 0.35},
		{'threshold': 542160, 'rate': 0.47},
		{'threshold': 698280, 'rate': 0.50}]};
	// single element: from income [NIS] of 'threshold' and above (until next threshold), tax is charged at 'rate'.

// tax credit constants
const TAX_CREDIT_VALUE = {
	2016:216,
	2017:215, 
	2018:216, 
	2019:218,
	2020:219,
	2021:218,
	2022:235,
	2023:235}; // NIS per month
const MONTHS_IN_YEAR = 12;

// charitable donations constants
const MIN_ELIGIBLE_DONATION = {
	2016:180,
	2017:180,
	2018:180,
	2019:190,
	2020:190,
	2021:190,
	2022:190,
	2023:200}; // NIS. Total charitable donations must exceed this amount to be eligible for relief
const MAX_CHARITY_PROPORTION_OF_GROSS = 0.3; // only charitable contributions under 30% of annual income are eligible
const CHARITY_RELIEF_RATE = 0.35;

// pension-related constants
const HACHNASA_MEZAKA = {
	2016:104400,
	2017:103200,
	2018:104400,
	2019:105600,
	2020:105600,
	2021:104400,
	2022:106800,
	2023:112800};// NIS
const MAX_PENSION_CONTRIBUTIONS_RATE = 0.07 // 7% of insured income
const PENSION_RELIEF_RATE = 0.35 // get income tax reduction of 35% of contributions

const sumElements = collection => [...collection].reduce((sum, item) => sum + (parseFloat(item.value) || 0), 0);

const calculateTaxBrackets = gross => {
    let BRACKETS = TAX_BRACKETS[year];
	let i = 1;
    let tax = 0;
	while ((i < BRACKETS.length) && (gross >= BRACKETS[i].threshold)) {
        tax += BRACKETS[i - 1].rate * (BRACKETS[i].threshold - BRACKETS[i - 1].threshold);
        i++;
    }
    tax += BRACKETS[i - 1].rate * (gross - BRACKETS[i - 1].threshold);
    return tax;
};

const calculateCharitableDonationsRelief = (donations, gross) => donations >= MIN_ELIGIBLE_DONATION[year] ? CHARITY_RELIEF_RATE * Math.min(donations, MAX_CHARITY_PROPORTION_OF_GROSS * gross) : 0;

const calculatePensionRelief = (contributions, insuredIncome) => {
    const maxEligibleContributions = MAX_PENSION_CONTRIBUTIONS_RATE * Math.min(HACHNASA_MEZAKA[year], insuredIncome);
    return PENSION_RELIEF_RATE * Math.min(contributions, maxEligibleContributions);
}

const monthlyAnnualToggle = () => {
    const table = document.getElementById('tax_credits_table');
	const inputByMonth = document.getElementById('input_by_month').checked

	for (let elem of table.getElementsByClassName('monthly')) {
        elem.style.display = inputByMonth ? '' : 'none';
    }
	table.rows.annual.style.display = inputByMonth ? 'none' : '';
	
    for (let elem of table.getElementsByTagName('input')) {
        elem.value = '';
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


var year = parseInt(document.getElementById("year").value)
document.getElementById("year").addEventListener("change", function(e) {year = parseInt(this.value)}, false)

document.getElementById("minEligibleDonation").innerHTML = MIN_ELIGIBLE_DONATION[year];
document.getElementById("maxCharityProportionOfGross").innerHTML = 100*MAX_CHARITY_PROPORTION_OF_GROSS;

document.querySelector('#annual-tax').onsubmit = (event) => {
    event.preventDefault();

    // load numbers from the form and add up similar elements
    const gross = sumElements(document.getElementsByClassName('gross'));
    const taxPaid = sumElements(document.getElementsByClassName('taxPaid'));
    const employeePension = sumElements(document.getElementsByClassName('employeePension'));
    const insuredIncome = sumElements(document.getElementsByClassName('insuredIncome'));
    const taxCredits = sumElements(document.getElementsByClassName('taxCreditsMonthly')) + 
								MONTHS_IN_YEAR*(parseFloat(document.getElementById('taxCreditsSingle').value) || 0);
    const donations = sumElements(document.getElementsByClassName('donation'));

    // derived variables
    const taxCreditsRelief = taxCredits * TAX_CREDIT_VALUE[year];
    const charitableDonationsRelief = calculateCharitableDonationsRelief(donations, gross);
    const pensionRelief = calculatePensionRelief(employeePension, insuredIncome);

    document.getElementById('taxCreditsRelief').innerHTML = taxCreditsRelief.toFixed(2);
    document.getElementById('charitableDonationsRelief').innerHTML = charitableDonationsRelief.toFixed(2);
    document.getElementById('pensionRelief').innerHTML = pensionRelief.toFixed(2);
    document.getElementById('finalTaxPaid').innerHTML = taxPaid.toFixed(2);

    const taxOwed = calculateTaxBrackets(gross);
    document.getElementById('taxBrackets').innerHTML = taxOwed.toFixed(2);
    const finalTaxDue = Math.max(taxOwed - taxCreditsRelief - charitableDonationsRelief - pensionRelief, 0);
    document.getElementById('finalTaxDue').innerHTML = finalTaxDue.toFixed(2);
    const refund = taxPaid - finalTaxDue;
	document.getElementById('refund').innerHTML = Math.abs(refund).toFixed(2);
    document.getElementById("XowesY").innerHTML = (refund < 0) ? "You owe taxman:" : "Taxman owes you:"
    document.getElementById("refundCell").style.backgroundColor = (refund < 0) ? "#d68794" : "#8accab"
	
	document.getElementById("subtotals").scrollIntoView();
	
    return false;
};


document.getElementById('add_employer').onclick = () => addRow("salary_pension");
document.getElementById('rmv_employer').onclick = () => removeRow("salary_pension");
document.getElementById('add_institution').onclick = () => addRow("donations");
document.getElementById('rmv_institution').onclick = () => removeRow('donations');
