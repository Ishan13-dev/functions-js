const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;

const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;

const minIncomeForCar = 30000;
const minCreditScoreForCar = 650;

function getLoanMessage(annualIncome, creditScore) {
  // Logical AND (&&): Both conditions must be true for the block to run.
  // We check the highest tier (Duplex) first. If an applicant qualifies here, 
  // the function immediately returns this string and skips the remaining checks.
  if (creditScore >= minCreditScoreForDuplex && annualIncome >= minIncomeForDuplex) {
    return "You qualify for a duplex, condo, and car loan.";
  } 
  // If the Duplex check failed, it checks the Condo requirements next.
  else if (annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo) {
    return "You qualify for a condo and car loan.";
  } 
  // If the Condo check also failed, it checks the Car loan requirements.
  else if (annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCar) {
    return "You qualify for a car loan.";
  } 
  // Fallback: Runs if none of the above income + credit score pairs were met.
  else {
    return "You don't qualify for any loans.";
  }
}

// Step 1: Create the 4 variables and store the returned string from each function call.

// 85000 >= 60000 (true) AND 850 >= 700 (true) -> Matches Duplex tier
const duplexLoanMsg = getLoanMessage(85000, 850);

// 65000 >= 60000 (true), BUT 690 >= 700 (false) -> Fails Duplex, matches Condo tier
const condoLoanMsg = getLoanMessage(65000, 690);

// 45000 >= 45000 (true), BUT 660 >= 680 (false) -> Fails Condo, matches Car tier
const carLoanMsg = getLoanMessage(45000, 660);

// 25000 and 550 fail all three tiers -> Falls into the 'else' block
const noLoanMsg = getLoanMessage(25000, 550);

// Step 2: Log each variable to the console.
console.log(duplexLoanMsg); // Outputs: "You qualify for a duplex, condo, and car loan."
console.log(condoLoanMsg);  // Outputs: "You qualify for a condo and car loan."
console.log(carLoanMsg);    // Outputs: "You qualify for a car loan."
console.log(noLoanMsg);     // Outputs: "You don't qualify for any loans."
