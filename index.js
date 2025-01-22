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

const TAX_CREDITS_CHILDREN_PRE_2022 = {
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

const TAX_CREDITS_CHILDREN_2022_2023 = {
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

const TAX_CREDITS_CHILDREN_2024_ONWARDS = {
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
  if (childBirthYear == null || taxYear == null || isChildBenefitReceiver == null) {
    return null;
  }
  birthday = taxYear - childBirthYear;
  if (birthday < 0 || birthday > 18) {
    return 0;
  }
  if (taxYear < 2022) {
    taxCreditsChildren = TAX_CREDITS_CHILDREN_PRE_2022[birthday];
  }
  else if (taxYear < 2024) {
    taxCreditsChildren = TAX_CREDITS_CHILDREN_2022_2023[birthday];
  }
  else {
    taxCreditsChildren = TAX_CREDITS_CHILDREN_2024_ONWARDS[birthday];
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

const calculateArmyTaxCredits = (armyService, yearOfRelease, monthOfRelease, taxYear, isFemale, isNationalService) => {
  if (yearOfRelease == null || monthOfRelease == null || taxYear == null) {
    return null;
  }
  if (armyService == 'under12months') {
    return 0;
  }
  var nofCredits = 1;
  if ((armyService == '24months') || 
      (armyService == '23months' && !isNationalService) || 
      (armyService == '22months' && !isNationalService && isFemale)) {
    nofCredits = 2
  }
  creditsPerMonth = [
    {'monthsSinceEvent':  0, 'credits': 0}, // tax credits start month after the month of release from regular service
    {'monthsSinceEvent':  1, 'credits': nofCredits}, 
    {'monthsSinceEvent': 37, 'credits': 0}, 
  ]
  return calculateTaxCreditsFromEvent(yearOfRelease, monthOfRelease, taxYear, creditsPerMonth);
}

const calculateDegreeTaxCredits = (graduationYear, degree, taxYear) => {
  if (graduationYear == null) {
    return null;
  }
  [
    "bachelors", // 1pt in year after graduation year, or following year. 2023 onwards: 1pt each of 3 years after graduation year
    "masters", // 0.5pt in year after graduation year, or following year. 2023 onwards: 0.5pt each of 2 years after graduation year
    "phd", // 0.5pt in year after graduation year, or following year. 2023 onwards: 0.5pt each of 2 years after graduation year
    "medicine", // 1pt in year after graduation year, or following year; then 0.5pt the next year. 2023 onwards: 1pt each of 3 years after graduation year, then 0.5pt the next two years.
    "dentistry", // as medicine
    "vocational", // 1pt in year after graduation year, or following year. 2019 onwards: 1pt each of 3 years after graduation year
    "teaching" // 1pt in year after graduation year, or following year
    // cannot receive both teaching/vocational _and_ bachelors/masters/phd credits
  ]
  taxCreditsDegreeOld = {
    0: {'bachelors': 0, 'masters': 0, 'phd': 0, 'medicine': 0, 'dentistry': 0, 'vocational': 0, 'teaching': 0},
    1: {'bachelors': 1, 'masters': 0.5, 'phd': 0.5, 'medicine': 1, 'dentistry': 1, 'vocational': 1, 'teaching': 1},
    2: {'bachelors': 0, 'masters': 0, 'phd': 0, 'medicine': 0.5, 'dentistry': 0.5, 'vocational': 0, 'teaching': 0},
  }
  taxCreditsDegreeNew = {
    0: {'bachelors': 0, 'masters': 0, 'phd': 0, 'medicine': 0, 'dentistry': 0, 'vocational': 0, 'teaching': 0},
    1: {'bachelors': 1, 'masters': 0.5, 'phd': 0.5, 'medicine': 1, 'dentistry': 1, 'vocational': 1, 'teaching': 1},
    2: {'bachelors': 1, 'masters': 0.5, 'phd': 0.5, 'medicine': 1, 'dentistry': 1, 'vocational': 1, 'teaching': 0},
    3: {'bachelors': 1, 'masters': 0, 'phd': 0, 'medicine': 1, 'dentistry': 1, 'vocational': 1, 'teaching': 0},
    4: {'bachelors': 0, 'masters': 0, 'phd': 0, 'medicine': 0.5, 'dentistry': 0.5, 'vocational': 0, 'teaching': 0},
    5: {'bachelors': 0, 'masters': 0, 'phd': 0, 'medicine': 0.5, 'dentistry': 0.5, 'vocational': 0, 'teaching': 0},
  }
  // Old calculation
  yearsSinceGraduation = taxYear - graduationYear
  if (graduationYear < 2023 || 
      graduationYear < 2019 && degree == 'vocational' ||
      degree == 'teaching') {
        if (yearsSinceGraduation in taxCreditsDegreeOld) {
          return taxCreditsDegreeOld[yearsSinceGraduation][degree];
        } else {return 0;}
      }
  else { // New calculation
    if (yearsSinceGraduation in taxCreditsDegreeNew) {
      return taxCreditsDegreeNew[yearsSinceGraduation][degree];
    } else {return 0;}
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

const showHideAdvancedTaxCreditOptions = () => {
  const table = document.getElementById('tax_credits_table');
  const showAdvancedOptions = document.getElementById('advanced_tax_credits_options').checked

  for (let elem of table.getElementsByClassName('advancedTaxCredits')) {
        elem.style.display = showAdvancedOptions ? '' : 'none';
    }
  
  // reset all the input fields so tax calculation shows only the value from the simple fields after a hide/show
  for (let elem of table.getElementsByClassName('advancedTaxCreditsInput')) {
        elem.value = '';
  }
  // update the relevant variables so that they won't contribute to the tax calculation
  armyReleaseYear = null;
  armyReleaseMonth = null;
  graduationYearDegree1 = null;
  graduationYearDegree2 = null;
  otherTaxCredits = 0;
  updateTaxCredits();
};

const addRow = (tableId, maxRows = 10) => {
    const table = document.getElementById(tableId);
    if (table.rows.length <= maxRows) {
      const rowToAdd = table.rows[table.rows.length - 1];
      const newRow = table.insertRow(-1)
      newRow.innerHTML = table.rows[table.rows.length - 2].innerHTML
      newRow.querySelectorAll('input').forEach((input) => {
          current_input_id_parts = input.id.split('-')
          input.id = current_input_id_parts[0] + '-' + (parseInt(current_input_id_parts[1]) + 1).toString()
      })
    }
};

const removeRow = tableId => {
    let table = document.getElementById(tableId);
    if (table.rows.length > 2) {
        table.deleteRow(-1);
    }
};

const addChildRow = (maxRows = 12) => {
  let table = document.getElementById("tax_credits_table");
  let childrenRows = document.getElementsByClassName("singleChildRow");
  if (childrenRows.length < maxRows) {
      rowToAdd = childrenRows[childrenRows.length - 1];
      const newRow = table.insertRow(rowToAdd.rowIndex + 1);
      newRow.className = "singleChildRow";
      newRow.innerHTML = rowToAdd.innerHTML;
      document.getElementById("childrenTitleCol").rowSpan += 1;

      // Update the `id` attribute of the year of birth
      const yearOfBirth = newRow.getElementsByClassName('yearOfBirth')[0];
      yearOfBirth.id = `yearOfBirthChild${childrenRows.length}`; // Unique ID for the year of birth input
      // add the event listener for the new row
      yearOfBirth.addEventListener("change", function(e) {
        updateTaxCredits();
      }, false)

      // Update the `name` attributes of radio buttons in the new row
      const radioButtons = newRow.querySelectorAll('input[type="radio"]');
      radioButtons.forEach((radio) => {
          radio.name = `benefitsRecipientChild${childrenRows.length}`; // Unique name
          radio.id = `${radio.value}Child${childrenRows.length}`; // Unique ID for the radio button

          // Add event listener to the radio buttons
          radio.addEventListener("change", function(e) {
            updateTaxCredits();
          }, false)
      });
      // Set the default child benefits recipient to be the same as previous row
      // note: childrenRows has now dynamically increased in length. Take the second-to-last row: (childrenRows.length - 2)
      const radioButtonsLastRow = childrenRows[childrenRows.length - 2].querySelectorAll('input[type="radio"]');

      radioButtons[0].checked = radioButtonsLastRow[0].checked;
      radioButtons[1].checked = radioButtonsLastRow[1].checked;


      // Update the corresponding labels to match the new IDs
      const labels = newRow.querySelectorAll('label');
      labels.forEach((label, index) => {
          const radio = radioButtons[index];
          label.htmlFor = radio.id;
      });

      // Delete the output tax credits for the new child (not yet calculated, since the child's birth year is not yet entered)
      newRow.getElementsByClassName('childTaxCredits')[0].innerHTML = null;

      
      document.getElementById('yearOfBirthChild1').addEventListener("change", function(e) {
        updateTaxCredits();
      }, false)
      document.getElementById('motherChild1').addEventListener("change", function(e) {
        updateTaxCredits();
      }, false)
      // setDefaultChildBenefitsRecipient(document.getElementById("woman").checked)
  }
};

const removeChildRow = () => {
  let table = document.getElementById("tax_credits_table");
  let childrenRows = document.getElementsByClassName("singleChildRow");
  if (childrenRows.length > 1) {
    rowToDelete = childrenRows[childrenRows.length - 1];
      table.deleteRow(rowToDelete.rowIndex);
      document.getElementById("childrenTitleCol").rowSpan -= 1;
      updateTaxCredits();
  }
};

function saveFieldsToUrl() {
  const urlParams = new URLSearchParams();
  
  // always add the year, even if default value, since the default is changed each year
  urlParams.set('year', document.getElementById('year').value);
  // Collect all input fields and iterate over them
  document.querySelectorAll('input, select').forEach((input) => {
    // Add input's value to URL parameters using its id as the key
    if (input.id == '' || input.className == 'toggle') {
      return; // skip elements without an id, or that are just folding section toggles
    }
    if (input.type === 'radio') {
      if (input.checked) {
        urlParams.set(input.id, 'true');
      }
    } // add checkbox values if they are not the default value 
    else if (input.type === 'checkbox' && input.checked !== input.defaultChecked) {
        urlParams.set(input.id, input.checked.toString());
    }
    else if ((input.type == 'text' || input.type == 'number') && input.value !== '') {
      urlParams.set(input.id, input.value);
    }
    // exclude dropdowns that have default value
    else if (input.tagName == 'SELECT' && input.value !== input.querySelector('option[selected]').value) {
      urlParams.set(input.id, input.value);
    }
  });
  // Add the number of rows for children, salary, and donations if any have been added
  childrenRows = document.getElementsByClassName("singleChildRow").length;
  salaryRows = document.getElementsByClassName("salaryIncome").length;
  donationRows = document.getElementsByClassName("donation").length;
  if (childrenRows > 1) {
    urlParams.set('childrenRows', childrenRows);
  }
  if (salaryRows > 1) {
    urlParams.set('salaryRows', salaryRows);
  }
  if (donationRows > 1) {
    urlParams.set('donationRows', donationRows);
  }
  // Return the URL string
  const url = `${window.location.origin}${window.location.pathname}?${urlParams.toString()}`
  navigator.clipboard.writeText(url);
}

function regenerateFieldsFromUrl() {
  const urlParams = new URLSearchParams(window.location.search)
  if (urlParams.size == 0) {
    return;
  }
  if (urlParams.get('advanced_tax_credits_options') == 'true') {
    document.getElementById('advanced_tax_credits_options').checked = true
    showHideAdvancedTaxCreditOptions()
  }
  for (let i = 1; i < urlParams.get('childrenRows'); i++) {
    addChildRow();
  }
  for (let i = 1; i < urlParams.get('salaryRows'); i++) {
    addRow('salary_pension');
  }
  for (let i = 1; i < urlParams.get('donationRows'); i++) {
    addRow('donations');
  }

  // Do the same process as when generating the URL, but in reverse
  // Collect all input fields and iterate over them
  document.querySelectorAll('input, select').forEach((input) => {
    // Add input's value to URL parameters using its id as the key
    if (input.id == '' || !urlParams.has(input.id)) {
      return; // skip elements without an id or that are not mentioned in the URL query string
    }
    if (input.className == 'toggle' || input.id == 'advanced_tax_credits_options') {
      return; // skip the folding sections inputs and the advanced tax credits checkbox (already handled above)
    }
    if (input.type === 'radio' || input.type === 'checkbox') {
      input.checked = urlParams.get(input.id) == 'true';
      
    }
    else if (input.type == 'text' || input.type == 'number' || input.tagName == 'SELECT') {
      input.value = urlParams.get(input.id);
    }
  });
}


function setDefaultChildBenefitsRecipient(isMother) {
  // Since, in most cases, the mother is the child benefit receiver, we will check the relevant radio button (mother / father)
  // for each child, to save the user time.
  // Only do this in cases where birth year not yet entered (which implies they intentionally filled in the line about the child)
  var motherElements = document.getElementsByClassName('mother')
  var fatherElements = document.getElementsByClassName('father')
  var childBirthYearElements = document.getElementsByClassName('yearOfBirth')
  for (let i = 0; i < motherElements.length; i++) {
    if (childBirthYearElements[i].value == '') {
      motherElements[i].checked = isMother;
      fatherElements[i].checked = !isMother;
    }
  }
}

function updateTaxCredits() {
  // Calculate the aliya tax credits based on the aliyaYear, aliyaMonth, and the current year
  var aliyaTaxCredits = calculateAliyaTaxCredits(aliyaYear, aliyaMonth, year);

  // Calculate the army service tax credits
  var armyTaxCredits = calculateArmyTaxCredits(armyService, armyReleaseYear, armyReleaseMonth, year, genderTaxCredits > 0, isNationalService)

  // calculate the degree tax credits
  var degreeTaxCredits1 = calculateDegreeTaxCredits(graduationYearDegree1, degree1, year);
  var degreeTaxCredits2 = calculateDegreeTaxCredits(graduationYearDegree2, degree2, year);
  
  // Calculate the child tax credits
  // gather all the elements that are needed to calculate the child tax credits (each is an array of length: number of children)
  var childBirthYearElements = document.getElementsByClassName('yearOfBirth')
  var motherElements = document.getElementsByClassName('mother')
  var fatherElements = document.getElementsByClassName('father')
  var childTaxCreditsElements = document.getElementsByClassName("childTaxCredits")
  // loop through the arrays and calculate the child tax credits for each child
  var totalChildTaxCredits = 0;
  for (let i = 0; i < childTaxCreditsElements.length; i++) {
    var childBirthYear = childBirthYearElements[i].value == '' ? null : parseInt(childBirthYearElements[i].value);
    if (motherElements[i].checked) {
      isChildBenefitReceiver = true;
    } else if (fatherElements[i].checked) {
      isChildBenefitReceiver = false;
    } else {
      isChildBenefitReceiver = null;
    }
    var childTaxCredits = calculateChildTaxCredits(childBirthYear, year, isChildBenefitReceiver);
    totalChildTaxCredits += childTaxCredits;
    // Update the HTML element in the tax credits table so that user can see the number of credits calculated for each child
    childTaxCreditsElements[i].innerHTML = childTaxCredits == null ? null : childTaxCredits.toFixed(2);
  };

  totalTaxCredits = residentTaxCredits + genderTaxCredits + aliyaTaxCredits + armyTaxCredits + totalChildTaxCredits + 
                    degreeTaxCredits1 + degreeTaxCredits2 + otherTaxCredits;

  // Update the HTML elements in the tax credits table so that user can see the number of credits calculated per type and the total
  document.getElementById("aliyaTaxCredits").innerHTML = aliyaTaxCredits == null ? null : aliyaTaxCredits.toFixed(2);
  document.getElementById("armyTaxCredits").innerHTML = armyTaxCredits == null ? null : armyTaxCredits.toFixed(2);
	document.getElementById("residentTaxCredits").innerHTML = residentTaxCredits;
	document.getElementById("genderTaxCredits").innerHTML = genderTaxCredits == null ? null : genderTaxCredits.toFixed(2);
  document.getElementById("degree1TaxCredits").innerHTML = degreeTaxCredits1 == null ? null : degreeTaxCredits1.toFixed(2);
  document.getElementById("degree2TaxCredits").innerHTML = degreeTaxCredits2 == null ? null : degreeTaxCredits2.toFixed(2);
  document.getElementById("otherTaxCredits").innerHTML = otherTaxCredits == 0 ? null : otherTaxCredits.toFixed(2);
  document.getElementById("totalTaxCredits").innerHTML = totalTaxCredits.toFixed(2);
}


document.getElementById("year").addEventListener("change", function(e) {
	year = parseInt(this.value);
  document.getElementById("minEligibleDonation").innerHTML = MIN_ELIGIBLE_DONATION[year];
	updateTaxCredits();
}, false)
document.getElementById("aliyaYear").addEventListener("change", function(e) {
  	aliyaYear = parseInt(this.value) || null;
    updateTaxCredits();
}, false)
document.getElementById("aliyaMonth").addEventListener("change", function(e) {
	aliyaMonth = parseInt(this.value) || null;
	updateTaxCredits();
}, false)
document.getElementById("armyReleaseYear").addEventListener("change", function(e) {
  armyReleaseYear = parseInt(this.value) || null;
  updateTaxCredits();
}, false)
document.getElementById("armyReleaseMonth").addEventListener("change", function(e) {
  armyReleaseMonth = parseInt(this.value) || null;
  updateTaxCredits();
}, false)
document.getElementById("armyService").addEventListener("change", function(e) {
  armyService = this.value;
  updateTaxCredits();
}, false)
document.getElementById("sherutLeumi").addEventListener("change", function(e) {
  isNationalService = this.checked;
  updateTaxCredits();
}, false)
document.getElementById("resident").addEventListener("change", function(e) {
	residentTaxCredits = this.checked ? TAX_CREDITS_RESIDENT : null;
	updateTaxCredits();
}, false)
document.getElementById("woman").addEventListener("change", function(e) {
	genderTaxCredits = this.checked ? TAX_CREDITS_WOMAN : null;
  setDefaultChildBenefitsRecipient(this.checked)
	updateTaxCredits();
}, false)
document.getElementById("taxCreditsSingle").addEventListener("keyup", function(e) {
	otherTaxCredits = parseFloat(this.value) || 0;
	updateTaxCredits();
}, false)
document.getElementById("taxCreditsSingle").addEventListener("mouseup", function(e) {
	otherTaxCredits = parseFloat(this.value) || 0;
	updateTaxCredits();
}, false)
document.getElementById('yearOfBirthChild1').addEventListener("change", function(e) {
  updateTaxCredits();
}, false)
document.getElementById('motherChild1').addEventListener("change", function(e) {
  updateTaxCredits();
}, false)
document.getElementById('fatherChild1').addEventListener("change", function(e) {
  updateTaxCredits();
}, false)
document.getElementById('graduationYearDegree1').addEventListener("change", function(e) {
  graduationYearDegree1 = parseInt(this.value) || null;
  updateTaxCredits();
}, false)
document.getElementById('graduationYearDegree2').addEventListener("change", function(e) {
  graduationYearDegree2 = parseInt(this.value) || null;
  updateTaxCredits();
}, false)
document.getElementById('degree1').addEventListener("change", function(e) {
  degree1 = this.value;
  updateTaxCredits();
}, false)
document.getElementById('degree2').addEventListener("change", function(e) {
  degree2 = this.value;
  updateTaxCredits();
}, false)
document.getElementById('saveToUrl').addEventListener("click", function () {
  let text = document.getElementById("copyToClipboardText");
  text.classList.remove("hide");
  setTimeout(function () {
    text.classList.add("fade-in");
    setTimeout(function () {
      text.classList.remove("fade-in");
      setTimeout(function () {
        text.classList.add("hide");
      }, 1000);
    }, 2000);
  });
  saveFieldsToUrl();
});

// Initial update when the page loads
setDefaultChildBenefitsRecipient(false);
regenerateFieldsFromUrl();

var year = parseInt(document.getElementById("year").value)

// general
var residentTaxCredits = document.getElementById('resident').checked ? TAX_CREDITS_RESIDENT : null;
var genderTaxCredits = document.getElementById('woman').checked ? TAX_CREDITS_WOMAN : null;
var otherTaxCredits = parseFloat(document.getElementById("taxCreditsSingle").value) || 0;
var totalTaxCredits = null;
// aliya
var aliyaYear = parseInt(document.getElementById("aliyaYear").value) || null;
var aliyaMonth = parseInt(document.getElementById("aliyaMonth").value) || null;
// army
var armyReleaseYear = parseInt(document.getElementById("armyReleaseYear").value) || null;
var armyReleaseMonth = parseInt(document.getElementById("armyReleaseMonth").value) || null;
var armyService = document.getElementById('armyService').value;
var isNationalService = document.getElementById("sherutLeumi").checked;
// degree
var graduationYearDegree1 = parseInt(document.getElementById('graduationYearDegree1').value) || null;
var graduationYearDegree2 = parseInt(document.getElementById('graduationYearDegree2').value) || null;
var degree1 = document.getElementById('degree1').value;
var degree2 = document.getElementById('degree2').value;


// Initial update when the page loads
updateTaxCredits();
const urlParams = new URLSearchParams(window.location.search)
allRequiredFieldsHaveValues = Array.from(document.querySelectorAll('input[required]')).every(input => input.value.trim() !== '')

// reloading the page with URL parameters: trigger the tax refund calculation, scroll to result, and show the "how is this calculated" table
if ((new URLSearchParams(window.location.search)).size > 0 && allRequiredFieldsHaveValues) {
  updateTaxRefund();
  document.getElementById("estimated_tax_refund").scrollIntoView();
  document.getElementById("how-is-this-calculated").checked = true;
}

document.getElementById("minEligibleDonation").innerHTML = MIN_ELIGIBLE_DONATION[year];
document.getElementById("maxCharityProportionOfGross").innerHTML = 100*MAX_CHARITY_PROPORTION_OF_GROSS;

function updateTaxRefund() {
    // load numbers from the form and add up similar elements
    const salaryIncome = sumElements(document.getElementsByClassName('salaryIncome'));
    const niBenefitsIncome = sumElements(document.getElementsByClassName('niBenefitsIncome'));
    const gross = salaryIncome + niBenefitsIncome;
    const taxPaid = sumElements(document.getElementsByClassName('taxPaid'));
    const employeePension = sumElements(document.getElementsByClassName('employeePension'));
    //const insuredIncome = sumElements(document.getElementsByClassName('insuredIncome'));
    const donations = sumElements(document.getElementsByClassName('donation'));

    // derived variables
    const taxCreditsRelief = MONTHS_IN_YEAR * totalTaxCredits * TAX_CREDIT_VALUE[year];
    const charitableDonationsRelief = calculateCharitableDonationsRelief(donations, gross);
    const pensionRelief = calculatePensionRelief(employeePension, gross); // use gross instead of actual insured income (field 244), to make calculator simpler

    const taxOwed = calculateTaxBrackets(gross);
    const finalTaxDue = Math.max(taxOwed - taxCreditsRelief - charitableDonationsRelief - pensionRelief, 0);
    const refund = taxPaid - finalTaxDue;

    // give the "interest and inflation" cell and the "Taxman owes you" cell an ellipsis until the inflation API call returns a value
    document.getElementById('interestInflationAmount').innerHTML = "..."
    document.getElementById('refundWithInterestInflation').innerHTML = "..."
    document.getElementById("inflationUrlCell").style.display = "none";

    // fil in the income components in the "how is this calculated" table
    document.getElementById('totalCharitableDonations').innerHTML = donations.toFixed(2);
    document.getElementById('totalEmployeePensionDeposits').innerHTML = employeePension.toFixed(2);
    document.getElementById('totalSalaryIncome').innerHTML = salaryIncome.toFixed(2);
    document.getElementById('totalNiBenefitsIncome').innerHTML = niBenefitsIncome.toFixed(2);

    // fill in the tax calculation components in the "how is this calculated" table
    document.getElementById('taxBrackets').innerHTML = Math.round(taxOwed).toLocaleString('en-US');
    document.getElementById('taxCreditsRelief').innerHTML = Math.round(-taxCreditsRelief).toLocaleString('en-US');
    document.getElementById('charitableDonationsRelief').innerHTML = Math.round(-charitableDonationsRelief).toLocaleString('en-US');
    document.getElementById('pensionRelief').innerHTML = Math.round(-pensionRelief).toLocaleString('en-US');
    document.getElementById('finalTaxDue').innerHTML = Math.round(finalTaxDue).toLocaleString('en-US');
    document.getElementById('finalTaxPaid').innerHTML = Math.round(-taxPaid).toLocaleString('en-US');
    document.getElementById('balanceDue').innerHTML = Math.round(-refund).toLocaleString('en-US');

    // fill in the components in the "Estimated Tax Refund" table
    document.getElementById('refund').innerHTML = Math.round(Math.abs(refund)).toLocaleString('en-US'); 
    document.getElementById("overpaid").innerHTML = (refund < 0) ? "Underpaid tax:" : "Overpaid tax:"
    document.getElementById("XowesY").innerHTML = (refund < 0) ? "You owe taxman:" : "Taxman owes you:"
    document.getElementById("refundCell").style.backgroundColor = (refund < 0) ? "#d68794" : "#8accab"

    const today = new Date();
    const startDate = new Date(year + 1, 0, 1); // Start of the next tax year
    var refundWithInterestInflation = refund;

    // Get the interest rate and inflation rate for the current year
    if (today > startDate) {
      // only calculate interest and inflation if we are past the tax year
      const MILLISECONDS_IN_DAY = 1000 * 60 * 60 * 24;
      const DAYS_IN_YEAR = 365;
      const INTEREST_RATE = 0.04; // 4% annual SIMPLE interest
    
      const daysPassed = Math.floor((today - startDate) / MILLISECONDS_IN_DAY);
      const interest = (refund * INTEREST_RATE * daysPassed) / DAYS_IN_YEAR; // simple interest, not compound interest. Verified by reverse engineering past refund amounts

      // Get the interest rate and inflation rate for the current year
      const inflationApiUrl = `https://israeltaxcalculator.pythonanywhere.com/?value=${(refund + interest).toFixed(2)}&start_date=${startDate.toISOString().slice(0, 10)}&end_date=${today.toISOString().slice(0, 10)}`;
      
      // Use proxy to bypass CORS restrictions (CBS API filters requests from other origins)
      fetch(inflationApiUrl).then(response => {
          if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
          }
          return response.json();
        })
        .then(data => {
          refundWithInterestInflation = data.answer.to_value;
          document.getElementById('interestInflationAmount').innerHTML = Math.round(Math.abs(refundWithInterestInflation - refund)).toLocaleString('en-US');
          document.getElementById('refundWithInterestInflation').innerHTML = Math.round(Math.abs(refundWithInterestInflation)).toLocaleString('en-US');
          document.getElementById("interestInflation").innerHTML = "Interest and inflation:"
        })
        .catch(error => {
          console.log("Unable to calculate inflation. Error details:", error.message);
          // couldn't fetch inflation data, so just show the interest
          refundWithInterestInflation = refund + interest;
          document.getElementById('interestInflationAmount').innerHTML = Math.round(Math.abs(refundWithInterestInflation - refund)).toLocaleString('en-US');
          document.getElementById('refundWithInterestInflation').innerHTML = Math.round(Math.abs(refundWithInterestInflation)).toLocaleString('en-US');
          document.getElementById("interestInflation").innerHTML = "Interest:"
          document.getElementById("inflationUrlCell").style.display = "";
          document.getElementById('inflationUrl').href = inflationApiUrl;
        });
    }
    else {
      for (let elem of document.getElementsByClassName('show-if-today-after-tax-year')) {
        elem.style.display = 'none';
      }
      document.getElementById('interestInflationAmount').innerHTML = "0";
      document.getElementById('refundWithInterestInflation').innerHTML = Math.round(Math.abs(refund)).toLocaleString('en-US');
    }
  };

document.querySelector('#annual-tax').onsubmit = (event) => {
  event.preventDefault();
  updateTaxRefund();
  document.getElementById("estimated_tax_refund").scrollIntoView();
  return false;
};

document.getElementById('add_employer').onclick = () => addRow("salary_pension");
document.getElementById('rmv_employer').onclick = () => removeRow("salary_pension");
document.getElementById('add_institution').onclick = () => addRow("donations");
document.getElementById('rmv_institution').onclick = () => removeRow('donations');
document.getElementById('add_child').onclick = () => addChildRow();
document.getElementById('rmv_child').onclick = () => removeChildRow();
