// basic tax constants
const TAX_BRACKETS = {
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
		{'threshold': 187440, 'rate': 0.31},
		{'threshold': 260520, 'rate': 0.35},
		{'threshold': 542160, 'rate': 0.47},
		{'threshold': 698280, 'rate': 0.50}],
	2024:[{'threshold':    0, 'rate': 0.10},
		{'threshold':  84120, 'rate': 0.14},
		{'threshold': 120720, 'rate': 0.20},
		{'threshold': 193800, 'rate': 0.31},
		{'threshold': 269280, 'rate': 0.35},
		{'threshold': 560280, 'rate': 0.47},
		{'threshold': 721560, 'rate': 0.50}],
	2025:[{'threshold':    0, 'rate': 0.10},
		{'threshold':  84120, 'rate': 0.14},
		{'threshold': 120720, 'rate': 0.20},
		{'threshold': 193800, 'rate': 0.31},
		{'threshold': 269280, 'rate': 0.35},
		{'threshold': 560280, 'rate': 0.47},
		{'threshold': 721560, 'rate': 0.50}],
		}; // in each element: from income [NIS] of 'threshold' and above (until next threshold), tax is charged at 'rate'.

// tax credit constants
const TAX_CREDIT_VALUE = {
	2018:216, 
	2019:218,
	2020:219,
	2021:218,
	2022:223,
	2023:235,
	2024:242,
	2025:242,
	}; // NIS per month
const MONTHS_IN_YEAR = 12;

// charitable donations constants
const MIN_ELIGIBLE_DONATION = {
	2018:180,
	2019:190,
	2020:190,
	2021:190,
	2022:190,
	2023:200,
	2024:207,
	2025:207,
	}; // NIS. Total charitable donations must exceed this amount to be eligible for relief
const MAX_CHARITY_PROPORTION_OF_GROSS = 0.3; // only charitable contributions under 30% of annual income are eligible
const CHARITY_RELIEF_RATE = 0.35;

// pension-related constants
const HACHNASA_MEZAKA = {
	2018:104400,
	2019:105600,
	2020:105600,
	2021:104400,
	2022:106800,
	2023:112800,
	2024:116400,
	2025:116400,
	};// NIS
const MAX_PENSION_CONTRIBUTIONS_RATE = 0.07 // 7% of insured income
const PENSION_RELIEF_RATE = 0.35 // get income tax reduction of 35% of contributions

const TAX_CREDITS_RESIDENT = 2.25;
const TAX_CREDITS_WOMAN = 0.5;

const taxCreditsChildrenPre2022 = {
  0:  {'mother': 1.5, 'father': 1.5},  // Birth year
  1:  {'mother': 2.5, 'father': 2.5},  // Turning 1
  2:  {'mother': 2.5, 'father': 2.5},  // Turning 2
  3:  {'mother': 2.5, 'father': 1.5},  // Turning 3
  4:  {'mother': 2.5, 'father': 0},    // Turning 4
  5:  {'mother': 2.5, 'father': 0},    // Turning 5
  6:  {'mother': 1,   'father': 0},    // Turning 6
  7:  {'mother': 1,   'father': 0},    // Turning 7
  8:  {'mother': 1,   'father': 0},    // Turning 8
  9:  {'mother': 1,   'father': 0},    // Turning 9
  10: {'mother': 1,   'father': 0},    // Turning 10
  11: {'mother': 1,   'father': 0},    // Turning 11
  12: {'mother': 1,   'father': 0},    // Turning 12
  13: {'mother': 1,   'father': 0},    // Turning 13
  14: {'mother': 1,   'father': 0},    // Turning 14
  15: {'mother': 1,   'father': 0},    // Turning 15
  16: {'mother': 1,   'father': 0},    // Turning 16
  17: {'mother': 1,   'father': 0},    // Turning 17
  18: {'mother': 0.5, 'father': 0}     // Turning 18
};

const taxCreditsChildren2022to2023 = {
  0:  {'mother': 1.5, 'father': 1.5},  // Birth year
  1:  {'mother': 2.5, 'father': 2.5},  // Turning 1
  2:  {'mother': 2.5, 'father': 2.5},  // Turning 2
  3:  {'mother': 2.5, 'father': 2.5},  // Turning 3
  4:  {'mother': 2.5, 'father': 2.5},  // Turning 4
  5:  {'mother': 2.5, 'father': 2.5},  // Turning 5
  6:  {'mother': 2,   'father': 1},    // Turning 6
  7:  {'mother': 2,   'father': 1},    // Turning 7
  8:  {'mother': 2,   'father': 1},    // Turning 8
  9:  {'mother': 2,   'father': 1},    // Turning 9
  10: {'mother': 2,   'father': 1},    // Turning 10
  11: {'mother': 2,   'father': 1},    // Turning 11
  12: {'mother': 2,   'father': 1},    // Turning 12
  13: {'mother': 1,   'father': 0},    // Turning 13
  14: {'mother': 1,   'father': 0},    // Turning 14
  15: {'mother': 1,   'father': 0},    // Turning 15
  16: {'mother': 1,   'father': 0},    // Turning 16
  17: {'mother': 1,   'father': 0},    // Turning 17
  18: {'mother': 0.5, 'father': 0}     // Turning 18
};

const taxCreditsChildren2024onwards = {
  0:  {'mother': 2.5, 'father': 2.5},  // Birth year
  1:  {'mother': 4.5, 'father': 4.5},  // Turning 1
  2:  {'mother': 4.5, 'father': 4.5},  // Turning 2
  3:  {'mother': 3.5, 'father': 3.5},  // Turning 3
  4:  {'mother': 2.5, 'father': 2.5},  // Turning 4
  5:  {'mother': 2.5, 'father': 2.5},  // Turning 5
  6:  {'mother': 2,   'father': 1},    // Turning 6
  7:  {'mother': 2,   'father': 1},    // Turning 7
  8:  {'mother': 2,   'father': 1},    // Turning 8
  9:  {'mother': 2,   'father': 1},    // Turning 9
  10: {'mother': 2,   'father': 1},    // Turning 10
  11: {'mother': 2,   'father': 1},    // Turning 11
  12: {'mother': 2,   'father': 1},    // Turning 12
  13: {'mother': 2,   'father': 1},    // Turning 13
  14: {'mother': 2,   'father': 1},    // Turning 14
  15: {'mother': 2,   'father': 1},    // Turning 15
  16: {'mother': 2,   'father': 1},    // Turning 16
  17: {'mother': 2,   'father': 1},    // Turning 17
  18: {'mother': 0.5, 'father': 0}     // Turning 18
};

const sumElements = collection => [...collection].reduce((sum, item) => sum + (parseFloat(item.value) || 0), 0);

const calculateTaxCreditsFromEvent = (eventYear, eventMonth, taxYear, creditsPerMonth) => {
  // eventMonth: Jan = 1, Feb = 2, ..., Dec = 12
  credits = 0;
  monthsSinceEvent = (taxYear - eventYear) * 12 - eventMonth + 1; // in January of this tax year, months since the event happened (0 if it happened in January of this tax year)
	// iterate over the months of the year, and add up the credits
	for (let month = 0; month < MONTHS_IN_YEAR; month++) {
		if (monthsSinceEvent + month >= 0) {
			// look up in the table how many points to add for this month
			i = 0;
			while ((i < creditsPerMonth.length) && (monthsSinceEvent + month >= creditsPerMonth[i].monthsSinceEvent)) {
				creditsThisBracket = creditsPerMonth[i].credits;
        i++;
			}
			credits += creditsThisBracket;
		}
	}
	return credits / MONTHS_IN_YEAR;
}

const calculateChildTaxCredits = (childBirthYear, taxYear, isChildBenefitReceiver) => {
  if (childBirthYear == null || taxYear == null) {
    return null;
  }
  birthday = taxYear - childBirthYear;
  if (birthday < 0 || birthday > 18) {
    return 0;
  }
  if (taxYear < 2022) {
    taxCreditsChildren = taxCreditsChildrenPre2022[birthday];
  }
  else if (taxYear < 2024) {
    taxCreditsChildren = taxCreditsChildren2022to2023[birthday];
  }
  else {
    taxCreditsChildren = taxCreditsChildren2024onwards[birthday];
  }
  if (isChildBenefitReceiver) {
    return taxCreditsChildren['mother'];
  }
  else {
    return taxCreditsChildren['father'];
  }
}


const calculateAliyaTaxCredits = (yearOfAliya, monthOfAliya, taxYear) => {
  if (yearOfAliya == null || monthOfAliya == null || taxYear == null) {
    return null;
}
  /* old style aliya credits: 
  first 18 months: 3 points
  next 12 months: 2 points
  next 12 months: 1 point
  */
  creditsPerMonthPre2022 = [
    {'monthsSinceEvent':  0, 'credits': 3}, 
    {'monthsSinceEvent': 18, 'credits': 2}, 
    {'monthsSinceEvent': 30, 'credits': 1}, 
    {'monthsSinceEvent': 42, 'credits': 0},
  ]
  /* new style aliya credits:
  first 12 months: 1 point
  next 18 months: 3 points
  next 12 months: 2 points
  next 12 months: 1 point
  */
  creditsPerMonthFrom2022 = [
    {'monthsSinceEvent':  0, 'credits': 1}, 
    {'monthsSinceEvent': 12, 'credits': 3}, 
    {'monthsSinceEvent': 30, 'credits': 2}, 
    {'monthsSinceEvent': 42, 'credits': 1}, 
    {'monthsSinceEvent': 54, 'credits': 0},
  ]
	if (yearOfAliya < 2022) {
    return calculateTaxCreditsFromEvent(yearOfAliya, monthOfAliya, taxYear, creditsPerMonthPre2022);
	} else {
    return calculateTaxCreditsFromEvent(yearOfAliya, monthOfAliya, taxYear, creditsPerMonthFrom2022);
	}
}

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

function updateAliyaTaxCredits() {
  // Calculate the tax credits based on the aliyaYear, aliyaMonth, and the current year
  aliyaTaxCredits = calculateAliyaTaxCredits(aliyaYear, aliyaMonth, year);
  // Update the HTML element with the name 'aliyaTaxCredits' with the calculated value
  document.getElementById("aliyaTaxCredits").innerHTML = aliyaTaxCredits == null ? null : aliyaTaxCredits.toFixed(2);
  updateTotalTaxCredits();
}

function updateResidentTaxCredits() {
	// Update the HTML element with the name 'residentTaxCredits' with the calculated value
	document.getElementById("residentTaxCredits").innerHTML = residentTaxCredits;
	updateTotalTaxCredits();
}

function updateGenderTaxCredits() {
	// Update the HTML element with the name 'residentTaxCredits' with the calculated value
	document.getElementById("genderTaxCredits").innerHTML = genderTaxCredits == null ? null : genderTaxCredits.toFixed(2);
	updateTotalTaxCredits();
}
function updateOtherTaxCredits() {
	// Update the HTML element with the name 'residentTaxCredits' with the calculated value
	document.getElementById("otherTaxCredits").innerHTML = otherTaxCredits == 0 ? null : otherTaxCredits.toFixed(2);
	updateTotalTaxCredits();
}
function updateChildTaxCredits() {
  // Calculate the tax credits based on the childBirthYear, and the current year
  childTaxCredits = calculateChildTaxCredits(childBirthYear, year, isChildBenefitReceiver);
  // Update the HTML element with the name 'childTaxCredits' with the calculated value
  document.getElementById("childTaxCredits").innerHTML = childTaxCredits == null ? null : childTaxCredits.toFixed(2);
  updateTotalTaxCredits();
}
function updateTotalTaxCredits() {
	// Update the HTML element with the name 'totalTaxCredits' with the calculated value
	totalTaxCredits = residentTaxCredits + genderTaxCredits + aliyaTaxCredits + childTaxCredits + otherTaxCredits;
	document.getElementById("totalTaxCredits").innerHTML = totalTaxCredits.toFixed(2);
}


document.getElementById("year").addEventListener("change", function(e) {
	year = parseInt(this.value);
	updateAliyaTaxCredits();
  updateChildTaxCredits();
}, false)
document.getElementById("aliyaYear").addEventListener("change", function(e) {
  	aliyaYear = this.value == '' ? null : parseInt(this.value);
	updateAliyaTaxCredits();
}, false)
document.getElementById("aliyaMonth").addEventListener("change", function(e) {
	aliyaMonth = this.value == '' ? null : parseInt(this.value);
	updateAliyaTaxCredits();
}, false)
document.getElementById("resident").addEventListener("change", function(e) {
	residentTaxCredits = this.checked ? TAX_CREDITS_RESIDENT : null;
	updateResidentTaxCredits();
}, false)
document.getElementById("woman").addEventListener("change", function(e) {
	genderTaxCredits = this.checked ? TAX_CREDITS_WOMAN : null;
	updateGenderTaxCredits();
}, false)
document.getElementById("taxCreditsSingle").addEventListener("keyup", function(e) {
	otherTaxCredits = parseFloat(this.value) || 0;
	updateOtherTaxCredits();
}, false)
document.getElementById("taxCreditsSingle").addEventListener("mouseup", function(e) {
	otherTaxCredits = parseFloat(this.value) || 0;
	updateOtherTaxCredits();
}, false)
document.getElementsByClassName('yearOfBirth').addEventListener("change", function(e) {
  childBirthYear = this.value == '' ? null : parseInt(this.value);
  updateChildTaxCredits();
}, false)

var aliyaYear = null;
var aliyaMonth = null;
var aliyaTaxCredits = null;
var residentTaxCredits = TAX_CREDITS_RESIDENT;
var genderTaxCredits = null;
var childTaxCredits = null;
var otherTaxCredits = 0;
var totalTaxCredits = TAX_CREDITS_RESIDENT;

// Initial update when the page loads
updateResidentTaxCredits();
updateTotalTaxCredits();

document.getElementById("minEligibleDonation").innerHTML = MIN_ELIGIBLE_DONATION[year];
document.getElementById("maxCharityProportionOfGross").innerHTML = 100*MAX_CHARITY_PROPORTION_OF_GROSS;

document.querySelector('#annual-tax').onsubmit = (event) => {
    event.preventDefault();

    // load numbers from the form and add up similar elements
    const gross = sumElements(document.getElementsByClassName('gross'));
    const taxPaid = sumElements(document.getElementsByClassName('taxPaid'));
    const employeePension = sumElements(document.getElementsByClassName('employeePension'));
    //const insuredIncome = sumElements(document.getElementsByClassName('insuredIncome'));
    const donations = sumElements(document.getElementsByClassName('donation'));

    // derived variables
    const taxCreditsRelief = MONTHS_IN_YEAR * totalTaxCredits * TAX_CREDIT_VALUE[year];
    const charitableDonationsRelief = calculateCharitableDonationsRelief(donations, gross);
    const pensionRelief = calculatePensionRelief(employeePension, gross); // use gross instead of actual insured income (field 244), to make calculator simpler

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
