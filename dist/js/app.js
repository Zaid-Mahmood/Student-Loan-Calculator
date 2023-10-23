jQuery(document).ready(function ($) {

  
  function addCommas(value) {
    return isNaN(removeCommas(value))
      ? "$0"
      : "$" +
          removeCommas(value)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  function removeCommas(value) {
    return parseFloat(value.toString().replace(/,/g, "").replace("$", ""));
  }

  function natozero(value) {
    return value == "N/A" ? 0 : value;
  }

  function getYourMonthlyPaymetRepaye(
    incomeAutomaticallyManually,
    incomeSpouseAutomaticallyManually,
    automaticTaxableIncome,
    TaxableIncome,
    automaticTaxableIncomespouse,
    TaxableIncomespouse,
    current_year,
    first_year,
    startEarningCreditTowards,
    resulttable2,
    proportionOfDebtBelongingToYou
  ) {
    var monthlyPaymentRepaye;
    var monthlyPaymentRepayeResAll;
    var monthlyPaymentRepayeRes;
    var TaxableIncomeRes;
    var incomeSpouseAutomaticallyManuallyRes;
    if (!incomeAutomaticallyManually) {
      TaxableIncomeRes = automaticTaxableIncome;
    } else {
      TaxableIncomeRes = TaxableIncome;
    }
    if (!incomeSpouseAutomaticallyManually) {
      incomeSpouseAutomaticallyManuallyRes = automaticTaxableIncomespouse;
    } else {
      incomeSpouseAutomaticallyManuallyRes = TaxableIncomespouse;
    }
    monthlyPaymentRepayeRes =
      Math.pow(1.03, current_year - first_year) * resulttable2;

    monthlyPaymentRepayeResAll =
      proportionOfDebtBelongingToYou *
      (((TaxableIncomeRes +
        incomeSpouseAutomaticallyManuallyRes -
        monthlyPaymentRepayeRes) *
        0.1) /
        12);
    if (current_year - startEarningCreditTowards >= 25) {
      monthlyPaymentRepaye = "";
    } else if (monthlyPaymentRepayeResAll <= 0) {
      monthlyPaymentRepaye = 0;
    } else {
      monthlyPaymentRepaye = monthlyPaymentRepayeResAll;
    }

    return monthlyPaymentRepaye;
  }
  function getYourMonthlyPaymetRepaye10(
    incomeAutomaticallyManually,
    incomeSpouseAutomaticallyManually,
    automaticTaxableIncome,
    TaxableIncome,
    automaticTaxableIncomespouse,
    TaxableIncomespouse,
    current_year,
    first_year,
    startEarningCreditTowards,
    resulttable2,
    proportionOfDebtBelongingToYou,
    prevValue
  ) {
    var monthlyPaymentRepaye;
    var monthlyPaymentRepayeResAll;
    var monthlyPaymentRepayeRes;
    var TaxableIncomeRes;
    var incomeSpouseAutomaticallyManuallyRes;
    if (!incomeAutomaticallyManually) {
      TaxableIncomeRes = automaticTaxableIncome;
    } else {
      TaxableIncomeRes = TaxableIncome;
    }
    if (!incomeSpouseAutomaticallyManually) {
      incomeSpouseAutomaticallyManuallyRes = automaticTaxableIncomespouse;
    } else {
      incomeSpouseAutomaticallyManuallyRes = TaxableIncomespouse;
    }
    monthlyPaymentRepayeRes =
      Math.pow(1.03, current_year - first_year) * resulttable2;

    monthlyPaymentRepayeResAll =
      proportionOfDebtBelongingToYou *
      (((Math.pow(1.03, current_year - first_year - 9) *
        (TaxableIncomeRes + incomeSpouseAutomaticallyManuallyRes) -
        monthlyPaymentRepayeRes) *
        0.1) /
        12);
    if (current_year - startEarningCreditTowards >= 25) {
      monthlyPaymentRepaye = "";
    } else if (prevValue == "" || prevValue == 0) {
      monthlyPaymentRepaye = "";
    } else if (monthlyPaymentRepayeResAll <= 0) {
      monthlyPaymentRepaye = 0;
    } else {
      monthlyPaymentRepaye = monthlyPaymentRepayeResAll;
    }

    return monthlyPaymentRepaye;
  }
  function getSpouseMonthlyPaymetRepaye(
    incomeAutomaticallyManually,
    incomeSpouseAutomaticallyManually,
    automaticTaxableIncome,
    TaxableIncome,
    automaticTaxableIncomespouse,
    TaxableIncomespouse,
    current_year,
    first_year,
    startEarningCreditTowards,
    resulttable2,
    proportionOfDebtBelongingToSpouse
  ) {
    var monthlyPaymentRepayeSpouse;
    var monthlyPaymentRepayeSpouseResAll;
    var monthlyPaymentRepayeRes;
    var TaxableIncomeRes;
    var incomeSpouseAutomaticallyManuallyRes;
    if (!incomeAutomaticallyManually) {
      TaxableIncomeRes = automaticTaxableIncome;
    } else {
      TaxableIncomeRes = TaxableIncome;
    }
    if (!incomeSpouseAutomaticallyManually) {
      incomeSpouseAutomaticallyManuallyRes = automaticTaxableIncomespouse;
    } else {
      incomeSpouseAutomaticallyManuallyRes = TaxableIncomespouse;
    }
    monthlyPaymentRepayeRes =
      Math.pow(1.03, current_year - first_year) * resulttable2;

    monthlyPaymentRepayeSpouseResAll =
      proportionOfDebtBelongingToSpouse *
      (((TaxableIncomeRes +
        incomeSpouseAutomaticallyManuallyRes -
        monthlyPaymentRepayeRes) *
        0.1) /
        12);
    if (current_year - startEarningCreditTowards >= 25) {
      monthlyPaymentRepayeSpouse = "";
    } else if (monthlyPaymentRepayeSpouseResAll <= 0) {
      monthlyPaymentRepayeSpouse = 0;
    } else {
      monthlyPaymentRepayeSpouse = monthlyPaymentRepayeSpouseResAll;
    }
    return monthlyPaymentRepayeSpouse;
  }
  function getSpouseMonthlyPaymetRepaye10(
    incomeAutomaticallyManually,
    incomeSpouseAutomaticallyManually,
    automaticTaxableIncome,
    TaxableIncome,
    automaticTaxableIncomespouse,
    TaxableIncomespouse,
    current_year,
    first_year,
    startEarningCreditTowards,
    resulttable2,
    proportionOfDebtBelongingToSpouse,
    prevValue
  ) {
    var monthlyPaymentRepayeSpouse;
    var monthlyPaymentRepayeSpouseResAll;
    var monthlyPaymentRepayeRes;
    var TaxableIncomeRes;
    var incomeSpouseAutomaticallyManuallyRes;
    if (!incomeAutomaticallyManually) {
      TaxableIncomeRes = automaticTaxableIncome;
    } else {
      TaxableIncomeRes = TaxableIncome;
    }
    if (!incomeSpouseAutomaticallyManually) {
      incomeSpouseAutomaticallyManuallyRes = automaticTaxableIncomespouse;
    } else {
      incomeSpouseAutomaticallyManuallyRes = TaxableIncomespouse;
    }
    monthlyPaymentRepayeRes =
      Math.pow(1.03, current_year - first_year) * resulttable2;

    monthlyPaymentRepayeSpouseResAll =
      proportionOfDebtBelongingToSpouse *
      (((Math.pow(1.03, current_year - first_year - 9) *
        (TaxableIncomeRes + incomeSpouseAutomaticallyManuallyRes) -
        monthlyPaymentRepayeRes) *
        0.1) /
        12);
    if (current_year - startEarningCreditTowards >= 25) {
      monthlyPaymentRepayeSpouse = "";
    } else if (prevValue == "" || prevValue == 0) {
      monthlyPaymentRepayeSpouse = "";
    } else if (monthlyPaymentRepayeSpouseResAll <= 0) {
      monthlyPaymentRepayeSpouse = 0;
    } else {
      monthlyPaymentRepayeSpouse = monthlyPaymentRepayeSpouseResAll;
    }
    return monthlyPaymentRepayeSpouse;
  }
  function getMonthlyPaye(
    incomeAutomaticallyManually,
    incomeSpouseAutomaticallyManually,
    automaticTaxableIncome,
    TaxableIncome,
    automaticTaxableIncomespouse,
    TaxableIncomespouse,
    current_year,
    first_year,
    resulttable2,
    proportionOfDebtBelongingToYou,
    legallyMarried,
    fillingSeparately,
    monthlyPaymentStandart,
    borrowFederalStudentLoansBefore,
    startEarningCreditTowards
  ) {
    var Paye;
    var TaxableIncomeRes;
    var incomeSpouseAutomaticallyManuallyRes;
    if (!incomeAutomaticallyManually) {
      TaxableIncomeRes = automaticTaxableIncome;
    } else {
      TaxableIncomeRes = TaxableIncome;
    }
    if (!incomeSpouseAutomaticallyManually) {
      incomeSpouseAutomaticallyManuallyRes = automaticTaxableIncomespouse;
    } else {
      incomeSpouseAutomaticallyManuallyRes = TaxableIncomespouse;
    }
    if (borrowFederalStudentLoansBefore) {
      return "N/A";
    }
    if (current_year - startEarningCreditTowards >= 20) {
      return "";
    }
    var PayeResRes = Math.pow(1.03, current_year - first_year) * resulttable2;
    var PayeRes1 =
      (proportionOfDebtBelongingToYou *
        (TaxableIncomeRes + incomeSpouseAutomaticallyManuallyRes - PayeResRes) *
        0.1) /
      12;
    var PayeRes2 = ((TaxableIncomeRes - PayeResRes) * 0.1) / 12;

    if (borrowFederalStudentLoansBefore) {
      Paye = "Not eligible";
    } else if (
      getYourMonthlyPaymetRepaye(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome,
        TaxableIncome,
        automaticTaxableIncomespouse,
        TaxableIncomespouse,
        current_year,
        first_year,
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToYou
      ) == 0
    ) {
      Paye = 0;
    } else if (
      (legallyMarried &&
        !fillingSeparately &&
        monthlyPaymentStandart <= PayeRes1) ||
      (!legallyMarried && monthlyPaymentStandart <= PayeRes2) ||
      (legallyMarried &&
        fillingSeparately &&
        monthlyPaymentStandart <= PayeRes2)
    ) {
      Paye = monthlyPaymentStandart;
    } else if (legallyMarried && fillingSeparately) {
      Paye = PayeRes2;
    } else {
      Paye = PayeRes1;
    }

    if (Paye < 0) {
      Paye = 0;
    }
    return Paye;
  }
  function getMonthlyPaye10(
    incomeAutomaticallyManually,
    incomeSpouseAutomaticallyManually,
    automaticTaxableIncome,
    TaxableIncome,
    automaticTaxableIncomespouse,
    TaxableIncomespouse,
    current_year,
    first_year,
    resulttable2,
    proportionOfDebtBelongingToYou,
    legallyMarried,
    fillingSeparately,
    monthlyPaymentStandart,
    borrowFederalStudentLoansBefore,
    startEarningCreditTowards,
    prevValue
  ) {
    if (borrowFederalStudentLoansBefore) {
      return "N/A";
    }
    if (current_year - startEarningCreditTowards >= 20) {
      return "";
    }
    var Paye;
    var TaxableIncomeRes;
    var incomeSpouseAutomaticallyManuallyRes;
    if (!incomeAutomaticallyManually) {
      TaxableIncomeRes = automaticTaxableIncome;
    } else {
      TaxableIncomeRes = TaxableIncome;
    }
    if (!incomeSpouseAutomaticallyManually) {
      incomeSpouseAutomaticallyManuallyRes = automaticTaxableIncomespouse;
    } else {
      incomeSpouseAutomaticallyManuallyRes = TaxableIncomespouse;
    }

    var PayeResRes = Math.pow(1.03, current_year - first_year) * resulttable2;
    var PayeRes1 =
      (proportionOfDebtBelongingToYou *
        (Math.pow(1.03, current_year - first_year - 9) *
          (TaxableIncomeRes + incomeSpouseAutomaticallyManuallyRes) -
          PayeResRes) *
        0.1) /
      12;
    var PayeRes2 =
      ((Math.pow(1.03, current_year - first_year - 9) * TaxableIncomeRes -
        PayeResRes) *
        0.1) /
      12;

    if (borrowFederalStudentLoansBefore) {
      Paye = "Not eligible";
    } else if (
      getYourMonthlyPaymetRepaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome,
        TaxableIncome,
        automaticTaxableIncomespouse,
        TaxableIncomespouse,
        current_year,
        first_year,
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToYou
      ) == 0
    ) {
      Paye = 0;
    } else if (
      (legallyMarried &&
        !fillingSeparately &&
        monthlyPaymentStandart <= PayeRes1) ||
      (!legallyMarried && monthlyPaymentStandart <= PayeRes2) ||
      (legallyMarried &&
        fillingSeparately &&
        monthlyPaymentStandart <= PayeRes2)
    ) {
      Paye = monthlyPaymentStandart;
    } else if (prevValue == "" || prevValue == 0) {
      Paye = 0;
    } else if (legallyMarried && fillingSeparately) {
      Paye = PayeRes2;
    } else {
      Paye = PayeRes1;
    }

    if (Paye < 0) {
      Paye = 0;
    }
    return Paye;
  }
  function getOldIbr(
    incomeAutomaticallyManually,
    incomeSpouseAutomaticallyManually,
    automaticTaxableIncome,
    TaxableIncome,
    automaticTaxableIncomespouse,
    TaxableIncomespouse,
    current_year,
    first_year,
    resulttable2,
    proportionOfDebtBelongingToYou,
    legallyMarried,
    fillingSeparately,
    monthlyPaymentStandart,
    borrowFederalStudentLoansBefore,
    startEarningCreditTowards
  ) {
    var Paye;
    var TaxableIncomeRes;
    var incomeSpouseAutomaticallyManuallyRes;
    if (!incomeAutomaticallyManually) {
      TaxableIncomeRes = automaticTaxableIncome;
    } else {
      TaxableIncomeRes = TaxableIncome;
    }
    if (!incomeSpouseAutomaticallyManually) {
      incomeSpouseAutomaticallyManuallyRes = automaticTaxableIncomespouse;
    } else {
      incomeSpouseAutomaticallyManuallyRes = TaxableIncomespouse;
    }

    var PayeResRes = Math.pow(1.03, current_year - first_year) * resulttable2;
    var PayeRes1 =
      (proportionOfDebtBelongingToYou *
        (TaxableIncomeRes + incomeSpouseAutomaticallyManuallyRes - PayeResRes) *
        0.15) /
      12;
    var PayeRes2 = ((TaxableIncomeRes - PayeResRes) * 0.15) / 12;

    if (
      getYourMonthlyPaymetRepaye(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome,
        TaxableIncome,
        automaticTaxableIncomespouse,
        TaxableIncomespouse,
        current_year,
        first_year,
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToYou
      ) == 0
    ) {
      Paye = 0;
    } else if (
      (legallyMarried &&
        !fillingSeparately &&
        monthlyPaymentStandart <= PayeRes1) ||
      (!legallyMarried && monthlyPaymentStandart <= PayeRes2) ||
      (legallyMarried &&
        fillingSeparately &&
        monthlyPaymentStandart <= PayeRes2)
    ) {
      Paye = monthlyPaymentStandart;
    } else if (legallyMarried && fillingSeparately) {
      Paye = PayeRes2;
    } else {
      Paye = PayeRes1;
    }

    if (Paye < 0) {
      Paye = 0;
    }
    return Paye;
  }
  function getOldIbr10(
    incomeAutomaticallyManually,
    incomeSpouseAutomaticallyManually,
    automaticTaxableIncome,
    TaxableIncome,
    automaticTaxableIncomespouse,
    TaxableIncomespouse,
    current_year,
    first_year,
    resulttable2,
    proportionOfDebtBelongingToYou,
    legallyMarried,
    fillingSeparately,
    monthlyPaymentStandart,
    borrowFederalStudentLoansBefore,
    startEarningCreditTowards,
    prevValue
  ) {
    var Paye;
    var TaxableIncomeRes;
    var incomeSpouseAutomaticallyManuallyRes;
    if (!incomeAutomaticallyManually) {
      TaxableIncomeRes = automaticTaxableIncome;
    } else {
      TaxableIncomeRes = TaxableIncome;
    }
    if (!incomeSpouseAutomaticallyManually) {
      incomeSpouseAutomaticallyManuallyRes = automaticTaxableIncomespouse;
    } else {
      incomeSpouseAutomaticallyManuallyRes = TaxableIncomespouse;
    }

    var PayeResRes = Math.pow(1.03, current_year - first_year) * resulttable2;
    var PayeRes1 =
      (proportionOfDebtBelongingToYou *
        (Math.pow(1.03, current_year - first_year - 9) *
          (TaxableIncomeRes + incomeSpouseAutomaticallyManuallyRes) -
          PayeResRes) *
        0.15) /
      12;
    var PayeRes2 =
      ((Math.pow(1.03, current_year - first_year - 9) * TaxableIncomeRes -
        PayeResRes) *
        0.15) /
      12;

    if (
      getYourMonthlyPaymetRepaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome,
        TaxableIncome,
        automaticTaxableIncomespouse,
        TaxableIncomespouse,
        current_year,
        first_year,
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToYou
      ) == 0
    ) {
      Paye = 0;
    } else if (
      (legallyMarried &&
        !fillingSeparately &&
        monthlyPaymentStandart <= PayeRes1) ||
      (!legallyMarried && monthlyPaymentStandart <= PayeRes2) ||
      (legallyMarried &&
        fillingSeparately &&
        monthlyPaymentStandart <= PayeRes2)
    ) {
      Paye = monthlyPaymentStandart;
    } else if (prevValue == "" || prevValue == 0) {
      Paye = "";
    } else if (legallyMarried && fillingSeparately) {
      Paye = PayeRes2;
    } else {
      Paye = PayeRes1;
    }

    if (Paye < 0) {
      Paye = 0;
    }
    return Paye;
  }
  function getRefinancing(
    year,
    current_year,
    assumptionAutomaticallyManually,
    refinancingInterestRateManual,
    termLengthManual,
    income
  ) {
    var result = "";
    var rate = assumptionAutomaticallyManually
      ? refinancingInterestRateManual / 100
      : 0.04;
    var term = assumptionAutomaticallyManually ? termLengthManual : 10;

    if (
      (year - current_year >= 10 && !assumptionAutomaticallyManually) ||
      (year - current_year >= termLengthManual &&
        assumptionAutomaticallyManually)
    ) {
      result = "";
    } else {
      //income*((rate/12*((1+rate/12)^(12*(term))))/((1+rate/12)^(12*(term))-1))
      result =
        (income * ((rate / 12) * Math.pow(1 + rate / 12, 12 * term))) /
        (Math.pow(1 + rate / 12, 12 * term) - 1);
    }
    return result;
  }
  function getOldIbroverTime(IbrOverTimePrev, oldibryearPrev, ibrfirsttable) {
    if (
      IbrOverTimePrev === "" ||
      oldibryearPrev === "" ||
      ibrfirsttable === ""
    ) {
      return "";
    }
    var res = IbrOverTimePrev - ibrfirsttable * 12 + oldibryearPrev;
    if (res < 0) {
      res = 0;
    }
    return res;
  }
  function getOldIbryear(
    IbrOverTimePrev,
    federalStudentDebt,
    averageInterestRateOfAllDebt
  ) {
    if (IbrOverTimePrev === "") {
      return "";
    }
    if (IbrOverTimePrev > federalStudentDebt) {
      return federalStudentDebt * averageInterestRateOfAllDebt;
    } else {
      return IbrOverTimePrev * averageInterestRateOfAllDebt;
    }
  }
  function getPayeoverTime(
    curentYear,
    startEarningCreditTowards,
    borrowFederalStudentLoansBefore,
    PayeOvertimePrev,
    Paye1stTable,
    PayeYearPrev
  ) {
    if (curentYear - startEarningCreditTowards > 20) {
      return "";
    }
    if (borrowFederalStudentLoansBefore) {
      return "N/A";
    }
    var res = PayeOvertimePrev - Paye1stTable * 12 + PayeYearPrev;
    if (res < 0) {
      res = 0;
    }
    return res;
  }
  function getPayeyear(
    curentYear,
    startEarningCreditTowards,
    borrowFederalStudentLoansBefore,
    payeOvertime,
    federalStudentDebt,
    averageInterestRateOfAllDebt
  ) {
    if (curentYear - startEarningCreditTowards > 20) {
      return "";
    }
    if (borrowFederalStudentLoansBefore) {
      return "N/A";
    }
    if (payeOvertime === "") {
      return "";
    }
    if (payeOvertime > federalStudentDebt) {
      return federalStudentDebt * averageInterestRateOfAllDebt;
    } else {
      return payeOvertime * averageInterestRateOfAllDebt;
    }
  }
  function getStandartoverTime(
    standartOvertimePrev,
    standart1stTable,
    standartYearPrev
  ) {
    var res = standartOvertimePrev - standart1stTable * 12 + standartYearPrev;
    if (res < 0) {
      res = 0;
    }
    return res;
  }
  function getRepayeoverTime(
    RePayeOvertimePrev,
    RePaye1stTable,
    RePayeYearPrev,
    current_year,
    startEarningCreditTowards
  ) {
    var res = RePayeOvertimePrev - RePaye1stTable * 12 + RePayeYearPrev;

    if (res < 0) {
      res = 0;
    }
    if (current_year - startEarningCreditTowards > 25) {
      res = "";
    }
    return res;
  }
  function getRepayeyear(
    payeOvertime,
    federalStudentDebt,
    averageInterestRateOfAllDebt,
    RePaye1stTable,
    StandartPayment
  ) {
    if (RePaye1stTable < 1) {
      return 0;
    }
    var fpart = payeOvertime * averageInterestRateOfAllDebt;

    var spart =
      (Math.min(StandartPayment, payeOvertime * averageInterestRateOfAllDebt) -
        RePaye1stTable * 12) /
      2;

    if (payeOvertime > federalStudentDebt) {
      fpart = federalStudentDebt * averageInterestRateOfAllDebt;
    }
    if (spart < 0) {
      spart = 0;
    }
    return fpart - spart;
  }
  function getRepayeyearSpouse(
    payeOvertime,
    federalStudentDebt,
    averageInterestRateOfAllDebt,
    RePaye1stTable,
    StandartPayment
  ) {
    if (RePaye1stTable < 1) {
      return 0;
    }
    var fpart = payeOvertime * averageInterestRateOfAllDebt;

    var spart =
      (Math.min(StandartPayment, payeOvertime * averageInterestRateOfAllDebt) -
        RePaye1stTable * 12) /
      2;

    if (payeOvertime > federalStudentDebt) {
      fpart = federalStudentDebt * averageInterestRateOfAllDebt;
    }
    if (spart < 0) {
      spart = 0;
    }
    return fpart - spart;
  }
  function getYearlyRefinancing(
    assumptionAutomaticallyManually,
    refinancingInterestRateManual,
    balanceRefinancing
  ) {
    var rate = assumptionAutomaticallyManually
      ? refinancingInterestRateManual / 100
      : 0.04;

    return balanceRefinancing * rate;
  }
  function getBalanceRefinancing(
    prevBalanceRefin,
    balanceRefin1stTable,
    yearlyregfin
  ) {
    var res = prevBalanceRefin - balanceRefin1stTable * 12 + yearlyregfin;
    if (res < 0) {
      res = 0;
    }
    return res;
  }
  function getPresentValue(
    Val1sttable,
    val2ndtable,
    maxyears,
    curryear,
    firsryear,
    startEarningCreditTowards,
    annualRateOfReturnCanGetOnYourInvestments,
    estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
  ) {
    if (Val1sttable == 0) {
      return 0;
    }
    var part1 =
      (Val1sttable * 12) /
      Math.pow(
        1 + parseFloat(annualRateOfReturnCanGetOnYourInvestments),
        curryear - firsryear
      );

    var part2 =
      val2ndtable * estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate;

    if (curryear + 1 - startEarningCreditTowards != maxyears) {
      part2 = 0;
    }

    var part3 = Math.pow(
      1 + parseFloat(annualRateOfReturnCanGetOnYourInvestments),
      parseFloat(curryear - firsryear) + 1
    );

    return part1 + part2 / part3;
  }

  function calculate() {
    console.log(new Date().getMilliseconds());

    //settings
    if (1 === 1) {
      $("#federalStudentDebt").val(
        addCommas(
          $("#federalStudentDebt").val() ? $("#federalStudentDebt").val() : ""
        )
      );
      $("#listSmallerOfYourPriorYearAGI").val(
        addCommas(
          $("#listSmallerOfYourPriorYearAGI").val()
            ? $("#listSmallerOfYourPriorYearAGI").val()
            : ""
        )
      );
      $("#TaxableIncome1").val(
        addCommas($("#TaxableIncome1").val() ? $("#TaxableIncome1").val() : "")
      );
      $("#TaxableIncome2").val(
        addCommas($("#TaxableIncome2").val() ? $("#TaxableIncome2").val() : "")
      );
      $("#TaxableIncome3").val(
        addCommas($("#TaxableIncome3").val() ? $("#TaxableIncome3").val() : "")
      );
      $("#TaxableIncome4").val(
        addCommas($("#TaxableIncome4").val() ? $("#TaxableIncome4").val() : "")
      );
      $("#TaxableIncome5").val(
        addCommas($("#TaxableIncome5").val() ? $("#TaxableIncome5").val() : "")
      );
      $("#TaxableIncome6").val(
        addCommas($("#TaxableIncome6").val() ? $("#TaxableIncome6").val() : "")
      );
      $("#TaxableIncome7").val(
        addCommas($("#TaxableIncome7").val() ? $("#TaxableIncome7").val() : "")
      );
      $("#TaxableIncome8").val(
        addCommas($("#TaxableIncome8").val() ? $("#TaxableIncome8").val() : "")
      );
      $("#TaxableIncome9").val(
        addCommas($("#TaxableIncome9").val() ? $("#TaxableIncome9").val() : "")
      );

      $("#federalStudentDebtDoesYourSpouseOwe").val(
        addCommas(
          $("#federalStudentDebtDoesYourSpouseOwe").val()
            ? $("#federalStudentDebtDoesYourSpouseOwe").val()
            : ""
        )
      );
      $("#listSmallerOfYourSpousesPrior").val(
        addCommas(
          $("#listSmallerOfYourSpousesPrior").val()
            ? $("#listSmallerOfYourSpousesPrior").val()
            : ""
        )
      );

      $("#TaxableIncomeSpouse1").val(
        addCommas(
          $("#TaxableIncomeSpouse1").val()
            ? $("#TaxableIncomeSpouse1").val()
            : ""
        )
      );
      $("#TaxableIncomeSpouse2").val(
        addCommas(
          $("#TaxableIncomeSpouse2").val()
            ? $("#TaxableIncomeSpouse2").val()
            : ""
        )
      );
      $("#TaxableIncomespouse3").val(
        addCommas(
          $("#TaxableIncomespouse3").val()
            ? $("#TaxableIncomespouse3").val()
            : ""
        )
      );
      $("#TaxableIncomespouse4").val(
        addCommas(
          $("#TaxableIncomespouse4").val()
            ? $("#TaxableIncomespouse4").val()
            : ""
        )
      );
      $("#TaxableIncomespouse5").val(
        addCommas(
          $("#TaxableIncomespouse5").val()
            ? $("#TaxableIncomespouse5").val()
            : ""
        )
      );
      $("#TaxableIncomespouse6").val(
        addCommas(
          $("#TaxableIncomespouse6").val()
            ? $("#TaxableIncomespouse6").val()
            : ""
        )
      );
      $("#TaxableIncomespouse7").val(
        addCommas(
          $("#TaxableIncomespouse7").val()
            ? $("#TaxableIncomespouse7").val()
            : ""
        )
      );
      $("#TaxableIncomespouse8").val(
        addCommas(
          $("#TaxableIncomespouse8").val()
            ? $("#TaxableIncomespouse8").val()
            : ""
        )
      );
      $("#TaxableIncomespouse9").val(
        addCommas(
          $("#TaxableIncomespouse9").val()
            ? $("#TaxableIncomespouse9").val()
            : ""
        )
      );

      var federalStudentDebt = removeCommas($("#federalStudentDebt").val());
      var listSmallerOfYourPriorYearAGI = removeCommas(
        $("#listSmallerOfYourPriorYearAGI").val()
      );

      var TaxableIncome = [
        removeCommas($("#TaxableIncome1").val()),
        removeCommas($("#TaxableIncome2").val()),
        removeCommas($("#TaxableIncome3").val()),
        removeCommas($("#TaxableIncome4").val()),
        removeCommas($("#TaxableIncome5").val()),
        removeCommas($("#TaxableIncome6").val()),
        removeCommas($("#TaxableIncome7").val()),
        removeCommas($("#TaxableIncome8").val()),
        removeCommas($("#TaxableIncome9").val()),
      ];

      var TaxableIncomespouse = [
        removeCommas($("#TaxableIncomespouse1").val()),
        removeCommas($("#TaxableIncomespouse2").val()),
        removeCommas($("#TaxableIncomespouse3").val()),
        removeCommas($("#TaxableIncomespouse4").val()),
        removeCommas($("#TaxableIncomespouse5").val()),
        removeCommas($("#TaxableIncomespouse6").val()),
        removeCommas($("#TaxableIncomespouse7").val()),
        removeCommas($("#TaxableIncomespouse8").val()),
        removeCommas($("#TaxableIncomespouse9").val()),
      ];

      var fillingSeparately =
        $(
          "input[name=fillingSeparately].material-radio__input:checked"
        ).val() == "yes"
          ? true
          : false;
      var legallyMarried =
        $("input[name=legallyMarried].material-radio__input:checked").val() ==
        "yes"
          ? true
          : false;

      var federalStudentDebtDoesYourSpouseOwe = legallyMarried
        ? removeCommas($("#federalStudentDebtDoesYourSpouseOwe").val())
        : 0;
      var listSmallerOfYourSpousesPrior = legallyMarried
        ? removeCommas($("#listSmallerOfYourSpousesPrior").val())
        : 0;

      var averageInterestRateOfAllDebt =
        $("#averageInterestRateOfAllDebt").val() * 0.01;
      var annualRateOfReturnCanGetOnYourInvestments =
        $("#annualRateOfReturnCanGetOnYourInvestments").val() * 0.01;
      var estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate =
        $(
          "#estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate"
        ).val() * 0.01;
      var familySize = $("#familySize").val();
      var startEarningCreditTowards = $("#startEarningCreditTowards").val();
      var refinancingInterestRateManual = $(
        "#refinancingInterestRateManual"
      ).val();
      var termLengthManual = $("#termLengthManual").val();

      var incomeAutomaticallyManually =
        $(
          "input[name=incomeAutomaticallyManually].material-radio__input:checked"
        ).val() == "yes"
          ? true
          : false;
      var incomeSpouseAutomaticallyManually =
        $(
          "input[name=incomeSpouseAutomaticallyManually].material-radio__input:checked"
        ).val() == "yes"
          ? true
          : false;
      var borrowFederalStudentLoansBefore =
        $(
          "input[name=borrowFederalStudentLoansBefore].material-radio__input:checked"
        ).val() == "yes"
          ? true
          : false;
      var assumptionAutomaticallyManually =
        $(
          "input[name=assumptionAutomaticallyManually].material-radio__input:checked"
        ).val() == "yes"
          ? true
          : false;

      var nonProfitOrGovernmentEmployerFullTime =
        $(
          "input[name=nonProfitOrGovernmentEmployerFullTime].material-radio__input:checked"
        ).val() == "yes"
          ? true
          : false;

      if (nonProfitOrGovernmentEmployerFullTime) {
        $(".nonProfitOrGovernmentEmployerFullTime").show();
      } else {
        $(".nonProfitOrGovernmentEmployerFullTime").hide();
      }

      if (assumptionAutomaticallyManually) {
        $(".hide-assumption-automatically-manually").show();
      } else {
        $(".hide-assumption-automatically-manually").hide();
      }
      if (incomeAutomaticallyManually) {
        $(".hide-income-automatically-manually").show();
      } else {
        $(".hide-income-automatically-manually").hide();
      }

      if (incomeSpouseAutomaticallyManually) {
        $(".hide-income-automatically-manually-spouse").show();
      } else {
        $(".hide-income-automatically-manually-spouse").hide();
      }

      if (legallyMarried) {
        $(".hide-married:not(.hidden)").show();
      } else {
        $(".hide-married").hide();
      }

      var table1 = [
        //2020 values:
        // 12760,12760,17240,21720,26200,30680,35160,39640,44120,48600,53080,57560,62040,66520,71000,75480
        //2021 values:
        12880, 12880, 17420, 21960, 26500, 31040, 35580, 40120, 44660, 49200,
        53740, 58280, 62820, 67360, 71900, 76440,
      ];
      var table2 = [
        //2020 values:

        // 19140,19140,25860,32580,39300,46020,52740,59460,66180,72900,79620,86340,93060,99780,106500,113220

        //2021 values:
        19320, 19320, 26130, 32940, 39750, 46560, 53370, 60180, 66990, 73800,
        80610, 87420, 94230, 101040, 107850, 114660,
      ];

      var resulttable1 = table1[familySize];
      var resulttable2 = table2[familySize];

      var proportionOfDebtBelongingToYou;
      var proportionOfDebtBelongingToSpouse;
      if (legallyMarried) {
        proportionOfDebtBelongingToYou =
          federalStudentDebt /
          (federalStudentDebt + federalStudentDebtDoesYourSpouseOwe);
        proportionOfDebtBelongingToSpouse = 1 - proportionOfDebtBelongingToYou;
      } else {
        proportionOfDebtBelongingToYou = 1;
        proportionOfDebtBelongingToSpouse = 0;
      }

      var automaticTaxableIncome = [listSmallerOfYourPriorYearAGI * 1.03];
      automaticTaxableIncome.push(automaticTaxableIncome[0] * 1.03);
      automaticTaxableIncome.push(automaticTaxableIncome[1] * 1.03);
      automaticTaxableIncome.push(automaticTaxableIncome[2] * 1.03);
      automaticTaxableIncome.push(automaticTaxableIncome[3] * 1.03);
      automaticTaxableIncome.push(automaticTaxableIncome[4] * 1.03);
      automaticTaxableIncome.push(automaticTaxableIncome[5] * 1.03);
      automaticTaxableIncome.push(automaticTaxableIncome[6] * 1.03);
      automaticTaxableIncome.push(automaticTaxableIncome[7] * 1.03);
      automaticTaxableIncome.push(automaticTaxableIncome[8] * 1.03);

      var automaticTaxableIncomespouse = [listSmallerOfYourSpousesPrior * 1.03];
      automaticTaxableIncomespouse.push(automaticTaxableIncomespouse[0] * 1.03);
      automaticTaxableIncomespouse.push(automaticTaxableIncomespouse[1] * 1.03);
      automaticTaxableIncomespouse.push(automaticTaxableIncomespouse[2] * 1.03);
      automaticTaxableIncomespouse.push(automaticTaxableIncomespouse[3] * 1.03);
      automaticTaxableIncomespouse.push(automaticTaxableIncomespouse[4] * 1.03);
      automaticTaxableIncomespouse.push(automaticTaxableIncomespouse[5] * 1.03);
      automaticTaxableIncomespouse.push(automaticTaxableIncomespouse[6] * 1.03);
      automaticTaxableIncomespouse.push(automaticTaxableIncomespouse[7] * 1.03);
      automaticTaxableIncomespouse.push(automaticTaxableIncomespouse[8] * 1.03);

      if (!legallyMarried) {
        automaticTaxableIncomespouse = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        TaxableIncomespouse = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      }

      var monthlyPaymentRepayeCurrentYear;
      monthlyPaymentRepayeCurrentYear =
        (proportionOfDebtBelongingToYou *
          (listSmallerOfYourPriorYearAGI +
            listSmallerOfYourSpousesPrior -
            resulttable2) *
          0.1) /
        12;

      if (monthlyPaymentRepayeCurrentYear <= 0) {
        monthlyPaymentRepayeCurrentYear = 0;
      }

      var monthlyPaymentRepayeCurrentYearText = addCommas(
        Math.round(monthlyPaymentRepayeCurrentYear).toString()
      );

      jQuery("#monthlyPaymentRepaye2020").text(
        monthlyPaymentRepayeCurrentYearText
      );

      var spouseRepaye2020;
      var spouseRepaye2020Res =
        (proportionOfDebtBelongingToSpouse *
          (listSmallerOfYourPriorYearAGI +
            listSmallerOfYourSpousesPrior -
            resulttable2) *
          0.1) /
        12;
      if (spouseRepaye2020Res <= 0) {
        spouseRepaye2020 = 0;
      } else {
        spouseRepaye2020 = spouseRepaye2020Res;
      }

      var spouseRepaye2020Text = addCommas(
        Math.round(spouseRepaye2020).toString()
      );
      jQuery("#spouseRepaye2020").text(spouseRepaye2020Text);

      var monthlyPaymentStandartPow = 1 + averageInterestRateOfAllDebt / 12;
      var monthlyPaymentStandart =
        (federalStudentDebt *
          ((averageInterestRateOfAllDebt / 12) *
            Math.pow(monthlyPaymentStandartPow, 120))) /
        (Math.pow(monthlyPaymentStandartPow, 120) - 1);
      var monthlyPaymentStandartText = addCommas(
        Math.round(monthlyPaymentStandart).toString()
      );

      jQuery("#monthlyPaymentStandart2020").text(monthlyPaymentStandartText);
      jQuery("#monthlyPaymentStandart2021").text(monthlyPaymentStandartText);
      jQuery("#monthlyPaymentStandart2022").text(monthlyPaymentStandartText);
      jQuery("#monthlyPaymentStandart2023").text(monthlyPaymentStandartText);
      jQuery("#monthlyPaymentStandart2024").text(monthlyPaymentStandartText);
      jQuery("#monthlyPaymentStandart2025").text(monthlyPaymentStandartText);
      jQuery("#monthlyPaymentStandart2026").text(monthlyPaymentStandartText);
      jQuery("#monthlyPaymentStandart2027").text(monthlyPaymentStandartText);
      jQuery("#monthlyPaymentStandart2028").text(monthlyPaymentStandartText);
      jQuery("#monthlyPaymentStandart2029").text(monthlyPaymentStandartText);

      var spouseStandart;
      var spouseStandart2020Pow = 1 + averageInterestRateOfAllDebt / 12;
      if (legallyMarried) {
        spouseStandart =
          (federalStudentDebtDoesYourSpouseOwe *
            ((averageInterestRateOfAllDebt / 12) *
              Math.pow(spouseStandart2020Pow, 120))) /
          (Math.pow(spouseStandart2020Pow, 120) - 1);
      } else {
        spouseStandart = 0;
      }

      var spouseStandart2020Text = addCommas(
        Math.round(spouseStandart).toString()
      );
      jQuery("#spouseStandart2020").text(spouseStandart2020Text);
      jQuery("#spouseStandart2021").text(spouseStandart2020Text);
      jQuery("#spouseStandart2022").text(spouseStandart2020Text);
      jQuery("#spouseStandart2023").text(spouseStandart2020Text);
      jQuery("#spouseStandart2024").text(spouseStandart2020Text);
      jQuery("#spouseStandart2025").text(spouseStandart2020Text);
      jQuery("#spouseStandart2026").text(spouseStandart2020Text);
      jQuery("#spouseStandart2027").text(spouseStandart2020Text);
      jQuery("#spouseStandart2028").text(spouseStandart2020Text);
      jQuery("#spouseStandart2029").text(spouseStandart2020Text);

      var Years = [new Date().getFullYear()];
      Years.push(Years[0] + 1);
      Years.push(Years[1] + 1);
      Years.push(Years[2] + 1);
      Years.push(Years[3] + 1);
      Years.push(Years[4] + 1);
      Years.push(Years[5] + 1);
      Years.push(Years[6] + 1);
      Years.push(Years[7] + 1);
      Years.push(Years[8] + 1);
      Years.push(Years[9] + 1);
      Years.push(Years[10] + 1);
      Years.push(Years[11] + 1);
      Years.push(Years[12] + 1);
      Years.push(Years[13] + 1);
      Years.push(Years[14] + 1);
      Years.push(Years[15] + 1);
      Years.push(Years[16] + 1);
      Years.push(Years[17] + 1);
      Years.push(Years[18] + 1);
      Years.push(Years[19] + 1);
      Years.push(Years[20] + 1);
      Years.push(Years[21] + 1);
      Years.push(Years[22] + 1);
      Years.push(Years[23] + 1);
      Years.push(Years[24] + 1);
      Years.push(Years[25] + 1);

      jQuery(".currentlyYear1").text(Years[0]);
      jQuery(".currentlyYear2").text(Years[1]);
      jQuery(".currentlyYear3").text(Years[2]);
      jQuery(".currentlyYear4").text(Years[3]);
      jQuery(".currentlyYear5").text(Years[4]);
      jQuery(".currentlyYear6").text(Years[5]);
      jQuery(".currentlyYear7").text(Years[6]);
      jQuery(".currentlyYear8").text(Years[7]);
      jQuery(".currentlyYear9").text(Years[8]);
      jQuery(".currentlyYear10").text(Years[9]);
      jQuery(".currentlyYear11").text(Years[10]);
      jQuery(".currentlyYear12").text(Years[11]);
      jQuery(".currentlyYear13").text(Years[12]);
      jQuery(".currentlyYear14").text(Years[13]);
      jQuery(".currentlyYear15").text(Years[14]);
      jQuery(".currentlyYear16").text(Years[15]);
      jQuery(".currentlyYear17").text(Years[16]);
      jQuery(".currentlyYear18").text(Years[17]);
      jQuery(".currentlyYear19").text(Years[18]);
      jQuery(".currentlyYear20").text(Years[19]);
      jQuery(".currentlyYear21").text(Years[20]);
      jQuery(".currentlyYear22").text(Years[21]);
      jQuery(".currentlyYear23").text(Years[22]);
      jQuery(".currentlyYear24").text(Years[23]);
      jQuery(".currentlyYear25").text(Years[24]);
      jQuery(".currentlyYear26").text(Years[25]);
      jQuery("#totalYears").text(
        Math.min(
          10 - (new Date().getFullYear() - startEarningCreditTowards),
          10
        )
      );
    }

    /**** 1st table*****/

    //your repaye
    if (1 === 1) {
      var monthlyPaymentRepaye2021 = getYourMonthlyPaymetRepaye(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[0],
        TaxableIncome[0],
        automaticTaxableIncomespouse[0],
        TaxableIncomespouse[0],
        Years[1],
        Years[0],
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToYou
      );
      var monthlyPaymentRepaye2021Text = addCommas(
        Math.round(monthlyPaymentRepaye2021).toString()
      );
      jQuery("#monthlyPaymentRepaye2021").text(monthlyPaymentRepaye2021Text);

      var monthlyPaymentRepaye2022 = getYourMonthlyPaymetRepaye(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[1],
        TaxableIncome[1],
        automaticTaxableIncomespouse[1],
        TaxableIncomespouse[1],
        Years[2],
        Years[0],
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToYou
      );
      var monthlyPaymentRepaye2022Text = addCommas(
        Math.round(monthlyPaymentRepaye2022).toString()
      );
      jQuery("#monthlyPaymentRepaye2022").text(monthlyPaymentRepaye2022Text);

      var monthlyPaymentRepaye2023 = getYourMonthlyPaymetRepaye(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[2],
        TaxableIncome[2],
        automaticTaxableIncomespouse[2],
        TaxableIncomespouse[2],
        Years[3],
        Years[0],
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToYou
      );
      var monthlyPaymentRepaye2023Text = addCommas(
        Math.round(monthlyPaymentRepaye2023).toString()
      );
      jQuery("#monthlyPaymentRepaye2023").text(monthlyPaymentRepaye2023Text);

      var monthlyPaymentRepaye2024 = getYourMonthlyPaymetRepaye(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[3],
        TaxableIncome[3],
        automaticTaxableIncomespouse[3],
        TaxableIncomespouse[3],
        Years[4],
        Years[0],
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToYou
      );
      var monthlyPaymentRepaye2024Text = addCommas(
        Math.round(monthlyPaymentRepaye2024).toString()
      );
      jQuery("#monthlyPaymentRepaye2024").text(monthlyPaymentRepaye2024Text);

      var monthlyPaymentRepaye2025 = getYourMonthlyPaymetRepaye(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[4],
        TaxableIncome[4],
        automaticTaxableIncomespouse[4],
        TaxableIncomespouse[4],
        Years[5],
        Years[0],
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToYou
      );
      var monthlyPaymentRepaye2025Text = addCommas(
        Math.round(monthlyPaymentRepaye2025).toString()
      );
      jQuery("#monthlyPaymentRepaye2025").text(monthlyPaymentRepaye2025Text);

      var monthlyPaymentRepaye2026 = getYourMonthlyPaymetRepaye(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[5],
        TaxableIncome[5],
        automaticTaxableIncomespouse[5],
        TaxableIncomespouse[5],
        Years[6],
        Years[0],
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToYou
      );
      var monthlyPaymentRepaye2026Text = addCommas(
        Math.round(monthlyPaymentRepaye2026).toString()
      );
      jQuery("#monthlyPaymentRepaye2026").text(monthlyPaymentRepaye2026Text);

      var monthlyPaymentRepaye2027 = getYourMonthlyPaymetRepaye(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[6],
        TaxableIncome[6],
        automaticTaxableIncomespouse[6],
        TaxableIncomespouse[6],
        Years[7],
        Years[0],
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToYou
      );
      var monthlyPaymentRepaye2027Text = addCommas(
        Math.round(monthlyPaymentRepaye2027).toString()
      );
      jQuery("#monthlyPaymentRepaye2027").text(monthlyPaymentRepaye2027Text);

      var monthlyPaymentRepaye2028 = getYourMonthlyPaymetRepaye(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[7],
        TaxableIncome[7],
        automaticTaxableIncomespouse[7],
        TaxableIncomespouse[7],
        Years[8],
        Years[0],
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToYou
      );
      var monthlyPaymentRepaye2028Text = addCommas(
        Math.round(monthlyPaymentRepaye2028).toString()
      );
      jQuery("#monthlyPaymentRepaye2028").text(monthlyPaymentRepaye2028Text);

      var monthlyPaymentRepaye2029 = getYourMonthlyPaymetRepaye(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[9],
        Years[0],
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToYou
      );
      var monthlyPaymentRepaye2029Text = addCommas(
        Math.round(monthlyPaymentRepaye2029).toString()
      );
      jQuery("#monthlyPaymentRepaye2029").text(monthlyPaymentRepaye2029Text);

      var monthlyPaymentRepaye2030 = getYourMonthlyPaymetRepaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[10],
        Years[0],
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToYou,
        monthlyPaymentRepaye2029
      );
      var monthlyPaymentRepaye2030Text = addCommas(
        Math.round(monthlyPaymentRepaye2030).toString()
      );
      jQuery("#monthlyPaymentRepaye2030").text(monthlyPaymentRepaye2030Text);

      var monthlyPaymentRepaye2031 = getYourMonthlyPaymetRepaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[11],
        Years[0],
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToYou,
        monthlyPaymentRepaye2030
      );
      var monthlyPaymentRepaye2031Text = addCommas(
        Math.round(monthlyPaymentRepaye2031).toString()
      );
      jQuery("#monthlyPaymentRepaye2031").text(monthlyPaymentRepaye2031Text);

      var monthlyPaymentRepaye2032 = getYourMonthlyPaymetRepaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[12],
        Years[0],
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToYou,
        monthlyPaymentRepaye2031
      );
      var monthlyPaymentRepaye2032Text = addCommas(
        Math.round(monthlyPaymentRepaye2032).toString()
      );
      jQuery("#monthlyPaymentRepaye2032").text(monthlyPaymentRepaye2032Text);

      var monthlyPaymentRepaye2033 = getYourMonthlyPaymetRepaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[13],
        Years[0],
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToYou,
        monthlyPaymentRepaye2032
      );
      var monthlyPaymentRepaye2033Text = addCommas(
        Math.round(monthlyPaymentRepaye2033).toString()
      );
      jQuery("#monthlyPaymentRepaye2033").text(monthlyPaymentRepaye2033Text);

      var monthlyPaymentRepaye2034 = getYourMonthlyPaymetRepaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[14],
        Years[0],
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToYou,
        monthlyPaymentRepaye2033
      );
      var monthlyPaymentRepaye2034Text = addCommas(
        Math.round(monthlyPaymentRepaye2034).toString()
      );
      jQuery("#monthlyPaymentRepaye2034").text(monthlyPaymentRepaye2034Text);

      var monthlyPaymentRepaye2035 = getYourMonthlyPaymetRepaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[15],
        Years[0],
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToYou,
        monthlyPaymentRepaye2034
      );
      var monthlyPaymentRepaye2035Text = addCommas(
        Math.round(monthlyPaymentRepaye2035).toString()
      );
      jQuery("#monthlyPaymentRepaye2035").text(monthlyPaymentRepaye2035Text);

      var monthlyPaymentRepaye2036 = getYourMonthlyPaymetRepaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[16],
        Years[0],
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToYou,
        monthlyPaymentRepaye2035
      );
      var monthlyPaymentRepaye2036Text = addCommas(
        Math.round(monthlyPaymentRepaye2036).toString()
      );
      jQuery("#monthlyPaymentRepaye2036").text(monthlyPaymentRepaye2030Text);

      var monthlyPaymentRepaye2037 = getYourMonthlyPaymetRepaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[17],
        Years[0],
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToYou,
        monthlyPaymentRepaye2036
      );
      var monthlyPaymentRepaye2037Text = addCommas(
        Math.round(monthlyPaymentRepaye2036).toString()
      );
      jQuery("#monthlyPaymentRepaye2037").text(monthlyPaymentRepaye2037Text);

      var monthlyPaymentRepaye2038 = getYourMonthlyPaymetRepaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[18],
        Years[0],
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToYou,
        monthlyPaymentRepaye2037
      );
      var monthlyPaymentRepaye2038Text = addCommas(
        Math.round(monthlyPaymentRepaye2038).toString()
      );
      jQuery("#monthlyPaymentRepaye2038").text(monthlyPaymentRepaye2038Text);

      var monthlyPaymentRepaye2039 = getYourMonthlyPaymetRepaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[19],
        Years[0],
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToYou,
        monthlyPaymentRepaye2038
      );
      var monthlyPaymentRepaye2039Text = addCommas(
        Math.round(monthlyPaymentRepaye2039).toString()
      );
      jQuery("#monthlyPaymentRepaye2039").text(monthlyPaymentRepaye2038Text);

      var monthlyPaymentRepaye2040 = getYourMonthlyPaymetRepaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[20],
        Years[0],
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToYou,
        monthlyPaymentRepaye2039
      );
      var monthlyPaymentRepaye2040Text = addCommas(
        Math.round(monthlyPaymentRepaye2040).toString()
      );
      jQuery("#monthlyPaymentRepaye2040").text(monthlyPaymentRepaye2040Text);

      var monthlyPaymentRepaye2041 = getYourMonthlyPaymetRepaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[21],
        Years[0],
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToYou,
        monthlyPaymentRepaye2040
      );
      var monthlyPaymentRepaye2041Text = addCommas(
        Math.round(monthlyPaymentRepaye2041).toString()
      );
      jQuery("#monthlyPaymentRepaye2041").text(monthlyPaymentRepaye2041Text);

      var monthlyPaymentRepaye2042 = getYourMonthlyPaymetRepaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[22],
        Years[0],
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToYou,
        monthlyPaymentRepaye2041
      );
      var monthlyPaymentRepaye2042Text = addCommas(
        Math.round(monthlyPaymentRepaye2042).toString()
      );
      jQuery("#monthlyPaymentRepaye2042").text(monthlyPaymentRepaye2042Text);

      var monthlyPaymentRepaye2043 = getYourMonthlyPaymetRepaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[23],
        Years[0],
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToYou,
        monthlyPaymentRepaye2042
      );
      var monthlyPaymentRepaye2043Text = addCommas(
        Math.round(monthlyPaymentRepaye2043).toString()
      );
      jQuery("#monthlyPaymentRepaye2043").text(monthlyPaymentRepaye2043Text);

      var monthlyPaymentRepaye2044 = getYourMonthlyPaymetRepaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[24],
        Years[0],
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToYou,
        monthlyPaymentRepaye2043
      );
      var monthlyPaymentRepaye2044Text = addCommas(
        Math.round(monthlyPaymentRepaye2044).toString()
      );
      jQuery("#monthlyPaymentRepaye2044").text(monthlyPaymentRepaye2044Text);

      var monthlyPaymentRepaye2045 = getYourMonthlyPaymetRepaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[25],
        Years[0],
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToYou,
        monthlyPaymentRepaye2044
      );
      var monthlyPaymentRepaye2045Text = addCommas(
        Math.round(monthlyPaymentRepaye2045).toString()
      );
      jQuery("#monthlyPaymentRepaye2045").text(monthlyPaymentRepaye2045Text);
    }

    //spouse repaye
    if (1 === 1) {
      var spouseRepaye2021 = getSpouseMonthlyPaymetRepaye(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[0],
        TaxableIncome[0],
        automaticTaxableIncomespouse[0],
        TaxableIncomespouse[0],
        Years[1],
        Years[0],
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToSpouse
      );
      var spouseRepaye2021Text = addCommas(
        Math.round(spouseRepaye2021).toString()
      );
      jQuery("#spouseRepaye2021").text(spouseRepaye2021Text);

      var spouseRepaye2022 = getSpouseMonthlyPaymetRepaye(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[1],
        TaxableIncome[1],
        automaticTaxableIncomespouse[1],
        TaxableIncomespouse[1],
        Years[2],
        Years[0],
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToSpouse
      );
      var spouseRepaye2022Text = addCommas(
        Math.round(spouseRepaye2022).toString()
      );
      jQuery("#spouseRepaye2022").text(spouseRepaye2022Text);

      var spouseRepaye2023 = getSpouseMonthlyPaymetRepaye(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[2],
        TaxableIncome[2],
        automaticTaxableIncomespouse[2],
        TaxableIncomespouse[2],
        Years[3],
        Years[0],
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToSpouse
      );
      var spouseRepaye2023Text = addCommas(
        Math.round(spouseRepaye2023).toString()
      );
      jQuery("#spouseRepaye2023").text(spouseRepaye2023Text);

      var spouseRepaye2024 = getSpouseMonthlyPaymetRepaye(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[3],
        TaxableIncome[3],
        automaticTaxableIncomespouse[3],
        TaxableIncomespouse[3],
        Years[4],
        Years[0],
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToSpouse
      );
      var spouseRepaye2024Text = addCommas(
        Math.round(spouseRepaye2024).toString()
      );
      jQuery("#spouseRepaye2024").text(spouseRepaye2024Text);

      var spouseRepaye2025 = getSpouseMonthlyPaymetRepaye(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[4],
        TaxableIncome[4],
        automaticTaxableIncomespouse[4],
        TaxableIncomespouse[4],
        Years[5],
        Years[0],
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToSpouse
      );
      var spouseRepaye2025Text = addCommas(
        Math.round(spouseRepaye2025).toString()
      );
      jQuery("#spouseRepaye2025").text(spouseRepaye2025Text);

      var spouseRepaye2026 = getSpouseMonthlyPaymetRepaye(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[5],
        TaxableIncome[5],
        automaticTaxableIncomespouse[5],
        TaxableIncomespouse[5],
        Years[6],
        Years[0],
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToSpouse
      );
      var spouseRepaye2026Text = addCommas(
        Math.round(spouseRepaye2026).toString()
      );
      jQuery("#spouseRepaye2026").text(spouseRepaye2026Text);

      var spouseRepaye2027 = getSpouseMonthlyPaymetRepaye(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[6],
        TaxableIncome[6],
        automaticTaxableIncomespouse[6],
        TaxableIncomespouse[6],
        Years[7],
        Years[0],
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToSpouse
      );
      var spouseRepaye2027Text = addCommas(
        Math.round(spouseRepaye2027).toString()
      );
      jQuery("#spouseRepaye2027").text(spouseRepaye2027Text);

      var spouseRepaye2028 = getSpouseMonthlyPaymetRepaye(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[7],
        TaxableIncome[7],
        automaticTaxableIncomespouse[7],
        TaxableIncomespouse[7],
        Years[8],
        Years[0],
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToSpouse
      );
      var spouseRepaye2028Text = addCommas(
        Math.round(spouseRepaye2028).toString()
      );
      jQuery("#spouseRepaye2028").text(spouseRepaye2028Text);

      var spouseRepaye2029 = getSpouseMonthlyPaymetRepaye(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[9],
        Years[0],
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToSpouse
      );
      var spouseRepaye2029Text = addCommas(
        Math.round(spouseRepaye2029).toString()
      );
      jQuery("#spouseRepaye2029").text(spouseRepaye2029Text);

      var spouseRepaye2030 = getSpouseMonthlyPaymetRepaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[10],
        Years[0],
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        spouseRepaye2029
      );
      var spouseRepaye2030Text = addCommas(
        Math.round(spouseRepaye2030).toString()
      );
      jQuery("#spouseRepaye2030").text(spouseRepaye2030Text);

      var spouseRepaye2031 = getSpouseMonthlyPaymetRepaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[11],
        Years[0],
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        spouseRepaye2030
      );
      var spouseRepaye2031Text = addCommas(
        Math.round(spouseRepaye2031).toString()
      );
      jQuery("#spouseRepaye2031").text(spouseRepaye2031Text);

      var spouseRepaye2032 = getSpouseMonthlyPaymetRepaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[12],
        Years[0],
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        spouseRepaye2031
      );
      var spouseRepaye2032Text = addCommas(
        Math.round(spouseRepaye2032).toString()
      );
      jQuery("#spouseRepaye2032").text(spouseRepaye2032Text);

      var spouseRepaye2033 = getSpouseMonthlyPaymetRepaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[13],
        Years[0],
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        spouseRepaye2032
      );
      var spouseRepaye2033Text = addCommas(
        Math.round(spouseRepaye2033).toString()
      );
      jQuery("#spouseRepaye2033").text(spouseRepaye2033Text);

      var spouseRepaye2034 = getSpouseMonthlyPaymetRepaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[14],
        Years[0],
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        spouseRepaye2033
      );
      var spouseRepaye2034Text = addCommas(
        Math.round(spouseRepaye2034).toString()
      );
      jQuery("#spouseRepaye2034").text(spouseRepaye2034Text);

      var spouseRepaye2035 = getSpouseMonthlyPaymetRepaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[15],
        Years[0],
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        spouseRepaye2034
      );
      var spouseRepaye2035Text = addCommas(
        Math.round(spouseRepaye2035).toString()
      );
      jQuery("#spouseRepaye2035").text(spouseRepaye2035Text);

      var spouseRepaye2036 = getSpouseMonthlyPaymetRepaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[16],
        Years[0],
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        spouseRepaye2035
      );
      var spouseRepaye2036Text = addCommas(
        Math.round(spouseRepaye2036).toString()
      );
      jQuery("#spouseRepaye2036").text(spouseRepaye2036Text);

      var spouseRepaye2037 = getSpouseMonthlyPaymetRepaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[17],
        Years[0],
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        spouseRepaye2036
      );
      var spouseRepaye2037Text = addCommas(
        Math.round(spouseRepaye2037).toString()
      );
      jQuery("#spouseRepaye2037").text(spouseRepaye2037Text);

      var spouseRepaye2038 = getSpouseMonthlyPaymetRepaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[18],
        Years[0],
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        spouseRepaye2037
      );
      var spouseRepaye2038Text = addCommas(
        Math.round(spouseRepaye2038).toString()
      );
      jQuery("#spouseRepaye2038").text(spouseRepaye2038Text);

      var spouseRepaye2039 = getSpouseMonthlyPaymetRepaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[19],
        Years[0],
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        spouseRepaye2038
      );
      var spouseRepaye2039Text = addCommas(
        Math.round(spouseRepaye2039).toString()
      );
      jQuery("#spouseRepaye2039").text(spouseRepaye2039Text);

      var spouseRepaye2040 = getSpouseMonthlyPaymetRepaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[20],
        Years[0],
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        spouseRepaye2039
      );
      var spouseRepaye2040Text = addCommas(
        Math.round(spouseRepaye2040).toString()
      );
      jQuery("#spouseRepaye2040").text(spouseRepaye2040Text);

      var spouseRepaye2041 = getSpouseMonthlyPaymetRepaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[21],
        Years[0],
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        spouseRepaye2040
      );
      var spouseRepaye2041Text = addCommas(
        Math.round(spouseRepaye2041).toString()
      );
      jQuery("#spouseRepaye2041").text(spouseRepaye2041Text);

      var spouseRepaye2042 = getSpouseMonthlyPaymetRepaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[22],
        Years[0],
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        spouseRepaye2041
      );
      var spouseRepaye2042Text = addCommas(
        Math.round(spouseRepaye2042).toString()
      );
      jQuery("#spouseRepaye2042").text(spouseRepaye2042Text);

      var spouseRepaye2043 = getSpouseMonthlyPaymetRepaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[23],
        Years[0],
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        spouseRepaye2042
      );
      var spouseRepaye2043Text = addCommas(
        Math.round(spouseRepaye2043).toString()
      );
      jQuery("#spouseRepaye2043").text(spouseRepaye2043Text);

      var spouseRepaye2044 = getSpouseMonthlyPaymetRepaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[24],
        Years[0],
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        spouseRepaye2043
      );
      var spouseRepaye2044Text = addCommas(
        Math.round(spouseRepaye2044).toString()
      );
      jQuery("#spouseRepaye2044").text(spouseRepaye2044Text);

      var spouseRepaye2045 = getSpouseMonthlyPaymetRepaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[25],
        Years[0],
        startEarningCreditTowards,
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        spouseRepaye2044
      );
      var spouseRepaye2045Text = addCommas(
        Math.round(spouseRepaye2045).toString()
      );
      jQuery("#spouseRepaye2045").text(spouseRepaye2045Text);
    }

    if (borrowFederalStudentLoansBefore) {
      $(".hide_borrowed_before").hide();
    } else {
      $(".hide_borrowed_before").show();
    }

    // your paye
    if (1 === 1) {
      var Paye2020;
      var Paye2020Res;

      var Paye2020Res1 =
        (proportionOfDebtBelongingToYou *
          (listSmallerOfYourPriorYearAGI +
            listSmallerOfYourSpousesPrior -
            resulttable2) *
          0.1) /
        12;
      var Paye2020Res2 =
        ((listSmallerOfYourPriorYearAGI - resulttable2) * 0.1) / 12;

      if (borrowFederalStudentLoansBefore) {
        Paye2020 = "N/A";
      } else if (monthlyPaymentRepayeCurrentYear == 0) {
        Paye2020 = 0;
      } else if (
        (legallyMarried &&
          !fillingSeparately &&
          monthlyPaymentStandart <= Paye2020Res1) ||
        (!legallyMarried && monthlyPaymentStandart <= Paye2020Res2) ||
        (legallyMarried &&
          fillingSeparately &&
          monthlyPaymentStandart <= Paye2020Res2)
      ) {
        Paye2020 = monthlyPaymentStandart;
      } else if (legallyMarried && fillingSeparately) {
        Paye2020 = Paye2020Res2;
      } else {
        Paye2020 = Paye2020Res1;
      }

      if (Paye2020 < 0) {
        Paye2020 = 0;
      }

      var Paye2020Text = addCommas(Math.round(Paye2020).toString());
      jQuery("#Paye2020").text(
        borrowFederalStudentLoansBefore ? "N/A" : Paye2020Text
      );

      var Paye2021 = getMonthlyPaye(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[0],
        TaxableIncome[0],
        automaticTaxableIncomespouse[0],
        TaxableIncomespouse[0],
        Years[1],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToYou,
        legallyMarried,
        fillingSeparately,
        monthlyPaymentStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards
      );
      var Paye2021Text = addCommas(Math.round(Paye2021).toString());
      jQuery("#Paye2021").text(
        borrowFederalStudentLoansBefore ? "N/A" : Paye2021Text
      );

      var Paye2022 = getMonthlyPaye(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[1],
        TaxableIncome[1],
        automaticTaxableIncomespouse[1],
        TaxableIncomespouse[1],
        Years[2],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToYou,
        legallyMarried,
        fillingSeparately,
        monthlyPaymentStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards
      );
      var Paye2022Text = addCommas(Math.round(Paye2022).toString());
      jQuery("#monthlyPaymentPaye2022").text(
        borrowFederalStudentLoansBefore ? "N/A" : Paye2022Text
      );

      var Paye2023 = getMonthlyPaye(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[2],
        TaxableIncome[2],
        automaticTaxableIncomespouse[2],
        TaxableIncomespouse[2],
        Years[3],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToYou,
        legallyMarried,
        fillingSeparately,
        monthlyPaymentStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards
      );
      var Paye2023Text = addCommas(Math.round(Paye2023).toString());
      jQuery("#monthlyPaymentPaye2023").text(
        borrowFederalStudentLoansBefore ? "N/A" : Paye2023Text
      );

      var Paye2024 = getMonthlyPaye(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[3],
        TaxableIncome[3],
        automaticTaxableIncomespouse[3],
        TaxableIncomespouse[3],
        Years[4],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToYou,
        legallyMarried,
        fillingSeparately,
        monthlyPaymentStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards
      );
      var Paye2024Text = addCommas(Math.round(Paye2024).toString());
      jQuery("#monthlyPaymentPaye2024").text(
        borrowFederalStudentLoansBefore ? "N/A" : Paye2024Text
      );

      var Paye2025 = getMonthlyPaye(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[4],
        TaxableIncome[4],
        automaticTaxableIncomespouse[4],
        TaxableIncomespouse[4],
        Years[5],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToYou,
        legallyMarried,
        fillingSeparately,
        monthlyPaymentStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards
      );
      var Paye2025Text = addCommas(Math.round(Paye2025).toString());
      jQuery("#monthlyPaymentPaye2025").text(
        borrowFederalStudentLoansBefore ? "N/A" : Paye2025Text
      );

      var Paye2026 = getMonthlyPaye(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[5],
        TaxableIncome[5],
        automaticTaxableIncomespouse[5],
        TaxableIncomespouse[5],
        Years[6],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToYou,
        legallyMarried,
        fillingSeparately,
        monthlyPaymentStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards
      );
      var Paye2026Text = addCommas(Math.round(Paye2026).toString());
      jQuery("#monthlyPaymentPaye2026").text(
        borrowFederalStudentLoansBefore ? "N/A" : Paye2026Text
      );

      var Paye2027 = getMonthlyPaye(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[6],
        TaxableIncome[6],
        automaticTaxableIncomespouse[6],
        TaxableIncomespouse[6],
        Years[7],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToYou,
        legallyMarried,
        fillingSeparately,
        monthlyPaymentStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards
      );
      var Paye2027Text = addCommas(Math.round(Paye2027).toString());
      jQuery("#monthlyPaymentPaye2027").text(
        borrowFederalStudentLoansBefore ? "N/A" : Paye2027Text
      );

      var Paye2028 = getMonthlyPaye(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[7],
        TaxableIncome[7],
        automaticTaxableIncomespouse[7],
        TaxableIncomespouse[7],
        Years[8],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToYou,
        legallyMarried,
        fillingSeparately,
        monthlyPaymentStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards
      );
      var Paye2028Text = addCommas(Math.round(Paye2028).toString());
      jQuery("#monthlyPaymentPaye2028").text(
        borrowFederalStudentLoansBefore ? "N/A" : Paye2028Text
      );

      var Paye2029 = getMonthlyPaye(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[9],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToYou,
        legallyMarried,
        fillingSeparately,
        monthlyPaymentStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards
      );
      var Paye2029Text = addCommas(Math.round(Paye2029).toString());
      jQuery("#monthlyPaymentPaye2029").text(
        borrowFederalStudentLoansBefore ? "N/A" : Paye2029Text
      );

      var Paye2030 = getMonthlyPaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[10],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToYou,
        legallyMarried,
        fillingSeparately,
        monthlyPaymentStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        Paye2029
      );
      var Paye2030Text = addCommas(Math.round(Paye2030).toString());
      jQuery("#monthlyPaymentPaye2030").text(
        borrowFederalStudentLoansBefore ? "N/A" : Paye2030Text
      );

      var Paye2031 = getMonthlyPaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[11],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToYou,
        legallyMarried,
        fillingSeparately,
        monthlyPaymentStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        Paye2030
      );
      var Paye2031Text = addCommas(Math.round(Paye2031).toString());
      jQuery("#monthlyPaymentPaye2031").text(
        borrowFederalStudentLoansBefore ? "N/A" : Paye2031Text
      );

      var Paye2032 = getMonthlyPaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[12],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToYou,
        legallyMarried,
        fillingSeparately,
        monthlyPaymentStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        Paye2031
      );
      var Paye2032Text = addCommas(Math.round(Paye2032).toString());
      jQuery("#monthlyPaymentPaye2032").text(
        borrowFederalStudentLoansBefore ? "N/A" : Paye2032Text
      );

      var Paye2033 = getMonthlyPaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[13],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToYou,
        legallyMarried,
        fillingSeparately,
        monthlyPaymentStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        Paye2032
      );
      var Paye2033Text = addCommas(Math.round(Paye2033).toString());
      jQuery("#monthlyPaymentPaye2033").text(
        borrowFederalStudentLoansBefore ? "N/A" : Paye2033Text
      );

      var Paye2034 = getMonthlyPaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[14],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToYou,
        legallyMarried,
        fillingSeparately,
        monthlyPaymentStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        Paye2033
      );
      var Paye2034Text = addCommas(Math.round(Paye2034).toString());
      jQuery("#monthlyPaymentPaye2034").text(
        borrowFederalStudentLoansBefore ? "N/A" : Paye2034Text
      );

      var Paye2035 = getMonthlyPaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[15],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToYou,
        legallyMarried,
        fillingSeparately,
        monthlyPaymentStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        Paye2034
      );
      var Paye2035Text = addCommas(Math.round(Paye2035).toString());
      jQuery("#monthlyPaymentPaye2035").text(
        borrowFederalStudentLoansBefore ? "N/A" : Paye2035Text
      );

      var Paye2036 = getMonthlyPaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[16],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToYou,
        legallyMarried,
        fillingSeparately,
        monthlyPaymentStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        Paye2035
      );
      var Paye2036Text = addCommas(Math.round(Paye2036).toString());
      jQuery("#monthlyPaymentPaye2036").text(
        borrowFederalStudentLoansBefore ? "N/A" : Paye2036Text
      );

      var Paye2037 = getMonthlyPaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[17],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToYou,
        legallyMarried,
        fillingSeparately,
        monthlyPaymentStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        Paye2036
      );
      var Paye2037Text = addCommas(Math.round(Paye2037).toString());
      jQuery("#monthlyPaymentPaye2037").text(
        borrowFederalStudentLoansBefore ? "N/A" : Paye2037Text
      );

      var Paye2038 = getMonthlyPaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[18],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToYou,
        legallyMarried,
        fillingSeparately,
        monthlyPaymentStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        Paye2037
      );
      var Paye2038Text = addCommas(Math.round(Paye2038).toString());
      jQuery("#monthlyPaymentPaye2038").text(
        borrowFederalStudentLoansBefore ? "N/A" : Paye2038Text
      );

      var Paye2039 = getMonthlyPaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[19],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToYou,
        legallyMarried,
        fillingSeparately,
        monthlyPaymentStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        Paye2038
      );
      var Paye2039Text = addCommas(Math.round(Paye2039).toString());
      jQuery("#monthlyPaymentPaye2039").text(
        borrowFederalStudentLoansBefore ? "N/A" : Paye2039Text
      );
    }

    //spouse paye
    if (1 === 1) {
      var spousePaye2020;
      var spousePaye2020Res;

      var spousePaye2020Res1 =
        (proportionOfDebtBelongingToSpouse *
          (listSmallerOfYourPriorYearAGI +
            listSmallerOfYourSpousesPrior -
            resulttable2) *
          0.1) /
        12;
      var spousePaye2020Res2 =
        ((listSmallerOfYourPriorYearAGI - resulttable2) * 0.1) / 12;

      if (borrowFederalStudentLoansBefore) {
        spousePaye2020 = "Not eligible";
      } else if (monthlyPaymentRepayeCurrentYear == 0) {
        spousePaye2020 = 0;
      } else if (
        (legallyMarried &&
          !fillingSeparately &&
          spouseStandart <= spousePaye2020Res1) ||
        (!legallyMarried && spouseStandart <= spousePaye2020Res2) ||
        (legallyMarried &&
          fillingSeparately &&
          spouseStandart <= spousePaye2020Res2)
      ) {
        spousePaye2020 = spouseStandart;
      } else if (legallyMarried && fillingSeparately) {
        spousePaye2020 = spousePaye2020Res2;
      } else {
        spousePaye2020 = spousePaye2020Res1;
      }

      if (spousePaye2020 < 0) {
        spousePaye2020 = 0;
      }

      var spousePaye2020Text = addCommas(Math.round(spousePaye2020).toString());
      jQuery("#spousePaye2020").text(
        borrowFederalStudentLoansBefore ? "N/A" : spousePaye2020Text
      );

      var PayeSpouse2021 = getMonthlyPaye(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[0],
        TaxableIncome[0],
        automaticTaxableIncomespouse[0],
        TaxableIncomespouse[0],
        Years[1],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        legallyMarried,
        fillingSeparately,
        spouseStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards
      );
      var PayeSpouse2021Text = addCommas(Math.round(PayeSpouse2021).toString());
      jQuery("#spousePaye2021").text(
        borrowFederalStudentLoansBefore ? "N/A" : PayeSpouse2021Text
      );

      var PayeSpouse2022 = getMonthlyPaye(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[1],
        TaxableIncome[1],
        automaticTaxableIncomespouse[1],
        TaxableIncomespouse[1],
        Years[2],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        legallyMarried,
        fillingSeparately,
        spouseStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards
      );
      var PayeSpouse2022Text = addCommas(Math.round(PayeSpouse2022).toString());
      jQuery("#spousePaye2022").text(
        borrowFederalStudentLoansBefore ? "N/A" : PayeSpouse2022Text
      );

      var PayeSpouse2023 = getMonthlyPaye(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[2],
        TaxableIncome[2],
        automaticTaxableIncomespouse[2],
        TaxableIncomespouse[2],
        Years[3],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        legallyMarried,
        fillingSeparately,
        spouseStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards
      );
      var PayeSpouse2023Text = addCommas(Math.round(PayeSpouse2023).toString());
      jQuery("#spousePaye2023").text(
        borrowFederalStudentLoansBefore ? "N/A" : PayeSpouse2023Text
      );

      var PayeSpouse2024 = getMonthlyPaye(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[3],
        TaxableIncome[3],
        automaticTaxableIncomespouse[3],
        TaxableIncomespouse[3],
        Years[4],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        legallyMarried,
        fillingSeparately,
        spouseStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards
      );
      var PayeSpouse2024Text = addCommas(Math.round(PayeSpouse2024).toString());
      jQuery("#spousePaye2024").text(
        borrowFederalStudentLoansBefore ? "N/A" : PayeSpouse2024Text
      );

      var PayeSpouse2025 = getMonthlyPaye(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[4],
        TaxableIncome[4],
        automaticTaxableIncomespouse[4],
        TaxableIncomespouse[4],
        Years[5],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        legallyMarried,
        fillingSeparately,
        spouseStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards
      );
      var PayeSpouse2025Text = addCommas(Math.round(PayeSpouse2025).toString());
      jQuery("#spousePaye2025").text(
        borrowFederalStudentLoansBefore ? "N/A" : PayeSpouse2025Text
      );

      var PayeSpouse2026 = getMonthlyPaye(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[5],
        TaxableIncome[5],
        automaticTaxableIncomespouse[5],
        TaxableIncomespouse[5],
        Years[6],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        legallyMarried,
        fillingSeparately,
        spouseStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards
      );
      var PayeSpouse2026Text = addCommas(Math.round(PayeSpouse2026).toString());
      jQuery("#spousePaye2026").text(
        borrowFederalStudentLoansBefore ? "N/A" : PayeSpouse2026Text
      );

      var PayeSpouse2027 = getMonthlyPaye(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[6],
        TaxableIncome[6],
        automaticTaxableIncomespouse[6],
        TaxableIncomespouse[6],
        Years[7],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        legallyMarried,
        fillingSeparately,
        spouseStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards
      );
      var PayeSpouse2027Text = addCommas(Math.round(PayeSpouse2027).toString());
      jQuery("#spousePaye2027").text(
        borrowFederalStudentLoansBefore ? "N/A" : PayeSpouse2027Text
      );

      var PayeSpouse2028 = getMonthlyPaye(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[7],
        TaxableIncome[7],
        automaticTaxableIncomespouse[7],
        TaxableIncomespouse[7],
        Years[8],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        legallyMarried,
        fillingSeparately,
        spouseStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards
      );
      var PayeSpouse2028Text = addCommas(Math.round(PayeSpouse2028).toString());
      jQuery("#spousePaye2028").text(
        borrowFederalStudentLoansBefore ? "N/A" : PayeSpouse2028Text
      );

      var PayeSpouse2029 = getMonthlyPaye(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[9],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        legallyMarried,
        fillingSeparately,
        spouseStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards
      );
      var PayeSpouse2029Text = addCommas(Math.round(PayeSpouse2029).toString());
      jQuery("#spousePaye2029").text(
        borrowFederalStudentLoansBefore ? "N/A" : PayeSpouse2029Text
      );

      var PayeSpouse2030 = getMonthlyPaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[10],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        legallyMarried,
        fillingSeparately,
        spouseStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        PayeSpouse2029
      );
      var PayeSpouse2030Text = addCommas(Math.round(PayeSpouse2030).toString());
      jQuery("#spousePaye2030").text(
        borrowFederalStudentLoansBefore ? "N/A" : PayeSpouse2030Text
      );

      var PayeSpouse2031 = getMonthlyPaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[11],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        legallyMarried,
        fillingSeparately,
        spouseStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        PayeSpouse2030
      );
      var PayeSpouse2031Text = addCommas(Math.round(PayeSpouse2031).toString());
      jQuery("#spousePaye2031").text(
        borrowFederalStudentLoansBefore ? "N/A" : PayeSpouse2031Text
      );

      var PayeSpouse2032 = getMonthlyPaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[12],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        legallyMarried,
        fillingSeparately,
        spouseStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        PayeSpouse2031
      );
      var PayeSpouse2032Text = addCommas(Math.round(PayeSpouse2032).toString());
      jQuery("#spousePaye2032").text(
        borrowFederalStudentLoansBefore ? "N/A" : PayeSpouse2032Text
      );

      var PayeSpouse2033 = getMonthlyPaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[13],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        legallyMarried,
        fillingSeparately,
        spouseStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        PayeSpouse2032
      );
      var PayeSpouse2033Text = addCommas(Math.round(PayeSpouse2033).toString());
      jQuery("#spousePaye2033").text(
        borrowFederalStudentLoansBefore ? "N/A" : PayeSpouse2033Text
      );

      var PayeSpouse2034 = getMonthlyPaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[14],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        legallyMarried,
        fillingSeparately,
        spouseStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        PayeSpouse2033
      );
      var PayeSpouse2034Text = addCommas(Math.round(PayeSpouse2034).toString());
      jQuery("#spousePaye2034").text(
        borrowFederalStudentLoansBefore ? "N/A" : PayeSpouse2034Text
      );

      var PayeSpouse2035 = getMonthlyPaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[15],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        legallyMarried,
        fillingSeparately,
        spouseStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        PayeSpouse2034
      );
      var PayeSpouse2035Text = addCommas(Math.round(PayeSpouse2035).toString());
      jQuery("#spousePaye2035").text(
        borrowFederalStudentLoansBefore ? "N/A" : PayeSpouse2035Text
      );

      var PayeSpouse2036 = getMonthlyPaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[16],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        legallyMarried,
        fillingSeparately,
        spouseStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        PayeSpouse2035
      );
      var PayeSpouse2036Text = addCommas(Math.round(PayeSpouse2036).toString());
      jQuery("#spousePaye2036").text(
        borrowFederalStudentLoansBefore ? "N/A" : PayeSpouse2036Text
      );

      var PayeSpouse2037 = getMonthlyPaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[17],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        legallyMarried,
        fillingSeparately,
        spouseStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        PayeSpouse2036
      );
      var PayeSpouse2037Text = addCommas(Math.round(PayeSpouse2037).toString());
      jQuery("#spousePaye2037").text(
        borrowFederalStudentLoansBefore ? "N/A" : PayeSpouse2037Text
      );

      var PayeSpouse2038 = getMonthlyPaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[18],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        legallyMarried,
        fillingSeparately,
        spouseStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        PayeSpouse2037
      );
      var PayeSpouse2038Text = addCommas(Math.round(PayeSpouse2038).toString());
      jQuery("#spousePaye2038").text(
        borrowFederalStudentLoansBefore ? "N/A" : PayeSpouse2038Text
      );

      var PayeSpouse2039 = getMonthlyPaye10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[19],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        legallyMarried,
        fillingSeparately,
        spouseStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        PayeSpouse2038
      );
      var PayeSpouse2039Text = addCommas(Math.round(PayeSpouse2039).toString());
      jQuery("#spousePaye2039").text(
        borrowFederalStudentLoansBefore ? "N/A" : PayeSpouse2039Text
      );
    }

    // your old Ibr

    if (1 === 1) {
      var OldIbr2020;
      var OldIbr2020Res;

      var OldIbr2020Res1 =
        (proportionOfDebtBelongingToYou *
          (listSmallerOfYourPriorYearAGI +
            listSmallerOfYourSpousesPrior -
            resulttable2) *
          0.15) /
        12;
      var OldIbr2020Res2 =
        ((listSmallerOfYourPriorYearAGI - resulttable2) * 0.15) / 12;

      if (monthlyPaymentRepayeCurrentYear == 0) {
        OldIbr2020 = 0;
      } else if (
        (legallyMarried &&
          !fillingSeparately &&
          monthlyPaymentStandart <= OldIbr2020Res1) ||
        (!legallyMarried && monthlyPaymentStandart <= OldIbr2020Res2) ||
        (legallyMarried &&
          fillingSeparately &&
          monthlyPaymentStandart <= OldIbr2020Res2)
      ) {
        OldIbr2020 = monthlyPaymentStandart;
      } else if (legallyMarried && fillingSeparately) {
        OldIbr2020 = OldIbr2020Res2;
      } else {
        OldIbr2020 = OldIbr2020Res1;
      }

      if (OldIbr2020 < 0) {
        OldIbr2020 = 0;
      }

      var OldIbr2020Text = addCommas(Math.round(OldIbr2020).toString());
      jQuery("#monthlyPaymentOldIBR2020").text(OldIbr2020Text);

      var OldIbr2021 = getOldIbr(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[0],
        TaxableIncome[0],
        automaticTaxableIncomespouse[0],
        TaxableIncomespouse[0],
        Years[1],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToYou,
        legallyMarried,
        fillingSeparately,
        monthlyPaymentStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards
      );
      var OldIbr2021Text = addCommas(Math.round(OldIbr2021).toString());
      jQuery("#monthlyPaymentOldIBR2021").text(OldIbr2021Text);
      var OldIbr2022 = getOldIbr(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[1],
        TaxableIncome[1],
        automaticTaxableIncomespouse[1],
        TaxableIncomespouse[1],
        Years[2],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToYou,
        legallyMarried,
        fillingSeparately,
        monthlyPaymentStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards
      );
      var OldIbr2022Text = addCommas(Math.round(OldIbr2022).toString());
      jQuery("#monthlyPaymentOldIBR2022").text(OldIbr2022Text);
      var OldIbr2023 = getOldIbr(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[2],
        TaxableIncome[2],
        automaticTaxableIncomespouse[2],
        TaxableIncomespouse[2],
        Years[3],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToYou,
        legallyMarried,
        fillingSeparately,
        monthlyPaymentStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards
      );
      var OldIbr2023Text = addCommas(Math.round(OldIbr2023).toString());
      jQuery("#monthlyPaymentOldIBR2023").text(OldIbr2023Text);
      var OldIbr2024 = getOldIbr(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[3],
        TaxableIncome[3],
        automaticTaxableIncomespouse[3],
        TaxableIncomespouse[3],
        Years[4],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToYou,
        legallyMarried,
        fillingSeparately,
        monthlyPaymentStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards
      );
      var OldIbr2024Text = addCommas(Math.round(OldIbr2024).toString());
      jQuery("#monthlyPaymentOldIBR2024").text(OldIbr2024Text);
      var OldIbr2025 = getOldIbr(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[4],
        TaxableIncome[4],
        automaticTaxableIncomespouse[4],
        TaxableIncomespouse[4],
        Years[5],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToYou,
        legallyMarried,
        fillingSeparately,
        monthlyPaymentStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards
      );
      var OldIbr2025Text = addCommas(Math.round(OldIbr2025).toString());
      jQuery("#monthlyPaymentOldIBR2025").text(OldIbr2025Text);
      var OldIbr2026 = getOldIbr(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[5],
        TaxableIncome[5],
        automaticTaxableIncomespouse[5],
        TaxableIncomespouse[5],
        Years[6],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToYou,
        legallyMarried,
        fillingSeparately,
        monthlyPaymentStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards
      );
      var OldIbr2026Text = addCommas(Math.round(OldIbr2026).toString());
      jQuery("#monthlyPaymentOldIBR2026").text(OldIbr2026Text);
      var OldIbr2027 = getOldIbr(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[6],
        TaxableIncome[6],
        automaticTaxableIncomespouse[6],
        TaxableIncomespouse[6],
        Years[7],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToYou,
        legallyMarried,
        fillingSeparately,
        monthlyPaymentStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards
      );
      var OldIbr2027Text = addCommas(Math.round(OldIbr2027).toString());
      jQuery("#monthlyPaymentOldIBR2027").text(OldIbr2027Text);
      var OldIbr2028 = getOldIbr(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[7],
        TaxableIncome[7],
        automaticTaxableIncomespouse[7],
        TaxableIncomespouse[7],
        Years[8],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToYou,
        legallyMarried,
        fillingSeparately,
        monthlyPaymentStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards
      );
      var OldIbr2028Text = addCommas(Math.round(OldIbr2028).toString());
      jQuery("#monthlyPaymentOldIBR2028").text(OldIbr2028Text);
      var OldIbr2029 = getOldIbr(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[9],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToYou,
        legallyMarried,
        fillingSeparately,
        monthlyPaymentStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards
      );
      var OldIbr2029Text = addCommas(Math.round(OldIbr2029).toString());
      jQuery("#monthlyPaymentOldIBR2029").text(OldIbr2029Text);

      var OldIbr2030 = getOldIbr10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[10],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToYou,
        legallyMarried,
        fillingSeparately,
        monthlyPaymentStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        OldIbr2029
      );
      var OldIbr2030Text = addCommas(Math.round(OldIbr2030).toString());
      jQuery("#monthlyPaymentOldIBR2030").text(OldIbr2030Text);

      var OldIbr2031 = getOldIbr10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[11],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToYou,
        legallyMarried,
        fillingSeparately,
        monthlyPaymentStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        OldIbr2030
      );
      var OldIbr2031Text = addCommas(Math.round(OldIbr2031).toString());
      jQuery("#monthlyPaymentOldIBR2031").text(OldIbr2031Text);

      var OldIbr2032 = getOldIbr10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[12],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToYou,
        legallyMarried,
        fillingSeparately,
        monthlyPaymentStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        OldIbr2031
      );
      var OldIbr2032Text = addCommas(Math.round(OldIbr2032).toString());
      jQuery("#monthlyPaymentOldIBR2032").text(OldIbr2032Text);

      var OldIbr2033 = getOldIbr10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[13],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToYou,
        legallyMarried,
        fillingSeparately,
        monthlyPaymentStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        OldIbr2032
      );
      var OldIbr2033Text = addCommas(Math.round(OldIbr2033).toString());
      jQuery("#monthlyPaymentOldIBR2033").text(OldIbr2033Text);

      var OldIbr2034 = getOldIbr10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[14],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToYou,
        legallyMarried,
        fillingSeparately,
        monthlyPaymentStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        OldIbr2033
      );
      var OldIbr2034Text = addCommas(Math.round(OldIbr2034).toString());
      jQuery("#monthlyPaymentOldIBR2034").text(OldIbr2034Text);

      var OldIbr2035 = getOldIbr10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[15],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToYou,
        legallyMarried,
        fillingSeparately,
        monthlyPaymentStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        OldIbr2034
      );
      var OldIbr2035Text = addCommas(Math.round(OldIbr2035).toString());
      jQuery("#monthlyPaymentOldIBR2035").text(OldIbr2035Text);

      var OldIbr2036 = getOldIbr10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[16],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToYou,
        legallyMarried,
        fillingSeparately,
        monthlyPaymentStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        OldIbr2035
      );
      var OldIbr2036Text = addCommas(Math.round(OldIbr2036).toString());
      jQuery("#monthlyPaymentOldIBR2036").text(OldIbr2036Text);

      var OldIbr2037 = getOldIbr10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[17],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToYou,
        legallyMarried,
        fillingSeparately,
        monthlyPaymentStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        OldIbr2036
      );
      var OldIbr2037Text = addCommas(Math.round(OldIbr2037).toString());
      jQuery("#monthlyPaymentOldIBR2037").text(OldIbr2037Text);

      var OldIbr2038 = getOldIbr10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[18],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToYou,
        legallyMarried,
        fillingSeparately,
        monthlyPaymentStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        OldIbr2037
      );
      var OldIbr2038Text = addCommas(Math.round(OldIbr2038).toString());
      jQuery("#monthlyPaymentOldIBR2038").text(OldIbr2038Text);

      var OldIbr2039 = getOldIbr10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[19],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToYou,
        legallyMarried,
        fillingSeparately,
        monthlyPaymentStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        OldIbr2038
      );
      var OldIbr2039Text = addCommas(Math.round(OldIbr2039).toString());
      jQuery("#monthlyPaymentOldIBR2039").text(OldIbr2039Text);

      var OldIbr2040 = getOldIbr10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[20],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToYou,
        legallyMarried,
        fillingSeparately,
        monthlyPaymentStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        OldIbr2039
      );
      var OldIbr2040Text = addCommas(Math.round(OldIbr2040).toString());
      jQuery("#monthlyPaymentOldIBR2040").text(OldIbr2040Text);

      var OldIbr2041 = getOldIbr10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[21],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToYou,
        legallyMarried,
        fillingSeparately,
        monthlyPaymentStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        OldIbr2040
      );
      var OldIbr2041Text = addCommas(Math.round(OldIbr2041).toString());
      jQuery("#monthlyPaymentOldIBR2041").text(OldIbr2041Text);

      var OldIbr2042 = getOldIbr10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[22],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToYou,
        legallyMarried,
        fillingSeparately,
        monthlyPaymentStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        OldIbr2041
      );
      var OldIbr2042Text = addCommas(Math.round(OldIbr2042).toString());
      jQuery("#monthlyPaymentOldIBR2042").text(OldIbr2042Text);

      var OldIbr2043 = getOldIbr10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[23],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToYou,
        legallyMarried,
        fillingSeparately,
        monthlyPaymentStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        OldIbr2042
      );
      var OldIbr2043Text = addCommas(Math.round(OldIbr2043).toString());
      jQuery("#monthlyPaymentOldIBR2043").text(OldIbr2043Text);

      var OldIbr2044 = getOldIbr10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[24],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToYou,
        legallyMarried,
        fillingSeparately,
        monthlyPaymentStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        OldIbr2043
      );
      var OldIbr2044Text = addCommas(Math.round(OldIbr2044).toString());
      jQuery("#monthlyPaymentOldIBR2044").text(OldIbr2044Text);

      var OldIbr2045 = getOldIbr10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[25],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToYou,
        legallyMarried,
        fillingSeparately,
        monthlyPaymentStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        OldIbr2044
      );
      var OldIbr2045Text = addCommas(Math.round(OldIbr2045).toString());
      jQuery("#monthlyPaymentOldIBR2045").text(OldIbr2045Text);
    }

    // spouse old Ibr

    if (1 === 1) {
      var spouseOldIBR2020;
      var spouseOldIBR2020Res;
      var spouseOldIBR2020Res1 =
        (proportionOfDebtBelongingToSpouse *
          (listSmallerOfYourPriorYearAGI +
            listSmallerOfYourSpousesPrior -
            resulttable2) *
          0.15) /
        12;
      var spouseOldIBR2020Res2 =
        ((listSmallerOfYourPriorYearAGI - resulttable2) * 0.15) / 12;

      if (monthlyPaymentRepayeCurrentYear == 0) {
        spouseOldIBR2020 = 0;
      } else if (
        (legallyMarried &&
          !fillingSeparately &&
          spouseStandart <= spouseOldIBR2020Res1) ||
        (!legallyMarried && spouseStandart <= spouseOldIBR2020Res2) ||
        (legallyMarried &&
          fillingSeparately &&
          spouseStandart <= spouseOldIBR2020Res2)
      ) {
        spouseOldIBR2020 = spouseStandart;
      } else if (legallyMarried && fillingSeparately) {
        spouseOldIBR2020 = spouseOldIBR2020Res2;
      } else {
        spouseOldIBR2020 = spouseOldIBR2020Res1;
      }

      if (spouseOldIBR2020 < 0) {
        spouseOldIBR2020 = 0;
      }

      var spouseOldIBR2020Text = addCommas(
        Math.round(spouseOldIBR2020).toString()
      );
      jQuery("#spouseOldIBR2020").text(spouseOldIBR2020Text);

      var spouseOldIBR2021 = getOldIbr(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[0],
        TaxableIncome[0],
        automaticTaxableIncomespouse[0],
        TaxableIncomespouse[0],
        Years[1],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        legallyMarried,
        fillingSeparately,
        spouseStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards
      );
      var spouseOldIBR2021Text = addCommas(
        Math.round(spouseOldIBR2021).toString()
      );
      jQuery("#spouseOldIBR2021").text(spouseOldIBR2021Text);

      var spouseOldIBR2022 = getOldIbr(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[1],
        TaxableIncome[1],
        automaticTaxableIncomespouse[1],
        TaxableIncomespouse[1],
        Years[2],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        legallyMarried,
        fillingSeparately,
        spouseStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards
      );
      var spouseOldIBR2022Text = addCommas(
        Math.round(spouseOldIBR2022).toString()
      );
      jQuery("#spouseOldIBR2022").text(spouseOldIBR2022Text);

      var spouseOldIBR2023 = getOldIbr(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[2],
        TaxableIncome[2],
        automaticTaxableIncomespouse[2],
        TaxableIncomespouse[2],
        Years[3],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        legallyMarried,
        fillingSeparately,
        spouseStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards
      );
      var spouseOldIBR2023Text = addCommas(
        Math.round(spouseOldIBR2023).toString()
      );
      jQuery("#spouseOldIBR2023").text(spouseOldIBR2023Text);

      var spouseOldIBR2024 = getOldIbr(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[3],
        TaxableIncome[3],
        automaticTaxableIncomespouse[3],
        TaxableIncomespouse[3],
        Years[4],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        legallyMarried,
        fillingSeparately,
        spouseStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards
      );
      var spouseOldIBR2024Text = addCommas(
        Math.round(spouseOldIBR2024).toString()
      );
      jQuery("#spouseOldIBR2024").text(spouseOldIBR2024Text);

      var spouseOldIBR2025 = getOldIbr(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[4],
        TaxableIncome[4],
        automaticTaxableIncomespouse[4],
        TaxableIncomespouse[4],
        Years[5],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        legallyMarried,
        fillingSeparately,
        spouseStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards
      );
      var spouseOldIBR2025Text = addCommas(
        Math.round(spouseOldIBR2025).toString()
      );
      jQuery("#spouseOldIBR2025").text(spouseOldIBR2025Text);

      var spouseOldIBR2026 = getOldIbr(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[5],
        TaxableIncome[5],
        automaticTaxableIncomespouse[5],
        TaxableIncomespouse[5],
        Years[6],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        legallyMarried,
        fillingSeparately,
        spouseStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards
      );
      var spouseOldIBR2026Text = addCommas(
        Math.round(spouseOldIBR2026).toString()
      );
      jQuery("#spouseOldIBR2026").text(spouseOldIBR2026Text);

      var spouseOldIBR2027 = getOldIbr(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[6],
        TaxableIncome[6],
        automaticTaxableIncomespouse[6],
        TaxableIncomespouse[6],
        Years[7],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        legallyMarried,
        fillingSeparately,
        spouseStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards
      );
      var spouseOldIBR2027Text = addCommas(
        Math.round(spouseOldIBR2027).toString()
      );
      jQuery("#spouseOldIBR2027").text(spouseOldIBR2027Text);

      var spouseOldIBR2028 = getOldIbr(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[7],
        TaxableIncome[7],
        automaticTaxableIncomespouse[7],
        TaxableIncomespouse[7],
        Years[8],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        legallyMarried,
        fillingSeparately,
        spouseStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards
      );
      var spouseOldIBR2028Text = addCommas(
        Math.round(spouseOldIBR2028).toString()
      );
      jQuery("#spouseOldIBR2028").text(spouseOldIBR2028Text);

      var spouseOldIBR2029 = getOldIbr(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[9],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        legallyMarried,
        fillingSeparately,
        spouseStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards
      );
      var spouseOldIBR2029Text = addCommas(
        Math.round(spouseOldIBR2029).toString()
      );
      jQuery("#spouseOldIBR2029").text(spouseOldIBR2029Text);

      var spouseOldIBR2030 = getOldIbr10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[10],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        legallyMarried,
        fillingSeparately,
        spouseStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        spouseOldIBR2029
      );
      var spouseOldIBR2030Text = addCommas(
        Math.round(spouseOldIBR2030).toString()
      );
      jQuery("#spouseOldIBR2030").text(spouseOldIBR2030Text);

      var spouseOldIBR2031 = getOldIbr10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[11],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        legallyMarried,
        fillingSeparately,
        spouseStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        spouseOldIBR2030
      );
      var spouseOldIBR2031Text = addCommas(
        Math.round(spouseOldIBR2031).toString()
      );
      jQuery("#spouseOldIBR2031").text(spouseOldIBR2031Text);

      var spouseOldIBR2032 = getOldIbr10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[12],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        legallyMarried,
        fillingSeparately,
        spouseStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        spouseOldIBR2031
      );
      var spouseOldIBR2032Text = addCommas(
        Math.round(spouseOldIBR2032).toString()
      );
      jQuery("#spouseOldIBR2032").text(spouseOldIBR2032Text);

      var spouseOldIBR2033 = getOldIbr10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[13],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        legallyMarried,
        fillingSeparately,
        spouseStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        spouseOldIBR2032
      );
      var spouseOldIBR2033Text = addCommas(
        Math.round(spouseOldIBR2033).toString()
      );
      jQuery("#spouseOldIBR2033").text(spouseOldIBR2033Text);

      var spouseOldIBR2034 = getOldIbr10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[14],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        legallyMarried,
        fillingSeparately,
        spouseStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        spouseOldIBR2033
      );
      var spouseOldIBR2034Text = addCommas(
        Math.round(spouseOldIBR2034).toString()
      );
      jQuery("#spouseOldIBR2034").text(spouseOldIBR2034Text);

      var spouseOldIBR2035 = getOldIbr10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[15],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        legallyMarried,
        fillingSeparately,
        spouseStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        spouseOldIBR2034
      );
      var spouseOldIBR2035Text = addCommas(
        Math.round(spouseOldIBR2035).toString()
      );
      jQuery("#spouseOldIBR2035").text(spouseOldIBR2030Text);

      var spouseOldIBR2036 = getOldIbr10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[16],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        legallyMarried,
        fillingSeparately,
        spouseStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        spouseOldIBR2035
      );
      var spouseOldIBR2036Text = addCommas(
        Math.round(spouseOldIBR2036).toString()
      );
      jQuery("#spouseOldIBR2036").text(spouseOldIBR2036Text);

      var spouseOldIBR2037 = getOldIbr10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[17],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        legallyMarried,
        fillingSeparately,
        spouseStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        spouseOldIBR2036
      );
      var spouseOldIBR2037Text = addCommas(
        Math.round(spouseOldIBR2037).toString()
      );
      jQuery("#spouseOldIBR2037").text(spouseOldIBR2037Text);

      var spouseOldIBR2038 = getOldIbr10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[18],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        legallyMarried,
        fillingSeparately,
        spouseStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        spouseOldIBR2037
      );
      var spouseOldIBR2038Text = addCommas(
        Math.round(spouseOldIBR2038).toString()
      );
      jQuery("#spouseOldIBR2038").text(spouseOldIBR2038Text);

      var spouseOldIBR2039 = getOldIbr10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[19],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        legallyMarried,
        fillingSeparately,
        spouseStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        spouseOldIBR2038
      );
      var spouseOldIBR2039Text = addCommas(
        Math.round(spouseOldIBR2039).toString()
      );
      jQuery("#spouseOldIBR2039").text(spouseOldIBR2039Text);

      var spouseOldIBR2040 = getOldIbr10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[20],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        legallyMarried,
        fillingSeparately,
        spouseStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        spouseOldIBR2039
      );
      var spouseOldIBR2040Text = addCommas(
        Math.round(spouseOldIBR2040).toString()
      );
      jQuery("#spouseOldIBR2040").text(spouseOldIBR2040Text);

      var spouseOldIBR2041 = getOldIbr10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[21],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        legallyMarried,
        fillingSeparately,
        spouseStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        spouseOldIBR2040
      );
      var spouseOldIBR2041Text = addCommas(
        Math.round(spouseOldIBR2041).toString()
      );
      jQuery("#spouseOldIBR2041").text(spouseOldIBR2041Text);

      var spouseOldIBR2042 = getOldIbr10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[22],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        legallyMarried,
        fillingSeparately,
        spouseStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        spouseOldIBR2041
      );
      var spouseOldIBR2042Text = addCommas(
        Math.round(spouseOldIBR2042).toString()
      );
      jQuery("#spouseOldIBR2042").text(spouseOldIBR2042Text);

      var spouseOldIBR2043 = getOldIbr10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[23],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        legallyMarried,
        fillingSeparately,
        spouseStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        spouseOldIBR2042
      );
      var spouseOldIBR2043Text = addCommas(
        Math.round(spouseOldIBR2043).toString()
      );
      jQuery("#spouseOldIBR2043").text(spouseOldIBR2043Text);

      var spouseOldIBR2044 = getOldIbr10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[24],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        legallyMarried,
        fillingSeparately,
        spouseStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        spouseOldIBR2043
      );
      var spouseOldIBR2044Text = addCommas(
        Math.round(spouseOldIBR2044).toString()
      );
      jQuery("#spouseOldIBR2044").text(spouseOldIBR2044Text);

      var spouseOldIBR2045 = getOldIbr10(
        incomeAutomaticallyManually,
        incomeSpouseAutomaticallyManually,
        automaticTaxableIncome[8],
        TaxableIncome[8],
        automaticTaxableIncomespouse[8],
        TaxableIncomespouse[8],
        Years[25],
        Years[0],
        resulttable2,
        proportionOfDebtBelongingToSpouse,
        legallyMarried,
        fillingSeparately,
        spouseStandart,
        borrowFederalStudentLoansBefore,
        startEarningCreditTowards,
        spouseOldIBR2044
      );
      var spouseOldIBR2045Text = addCommas(
        Math.round(spouseOldIBR2045).toString()
      );
      jQuery("#spouseOldIBR2045").text(spouseOldIBR2045Text);
    }

    //PSLF
    if (1 === 1) {
      var lowestMonthlyPSLFPayment2020 =
        Years[0] - startEarningCreditTowards >= 10
          ? ""
          : Math.min(monthlyPaymentRepayeCurrentYear, OldIbr2020);
      var lowestMonthlyPSLFPayment2020Text =
        !nonProfitOrGovernmentEmployerFullTime
          ? "N/A"
          : addCommas(Math.round(lowestMonthlyPSLFPayment2020).toString());
      jQuery("#10YearPSLF2020").text(lowestMonthlyPSLFPayment2020Text);

      var lowestMonthlyPSLFPayment2021 =
        Years[1] - startEarningCreditTowards >= 10
          ? ""
          : Math.min(monthlyPaymentRepaye2021, OldIbr2021);
      var lowestMonthlyPSLFPayment2021Text =
        !nonProfitOrGovernmentEmployerFullTime
          ? "N/A"
          : addCommas(Math.round(lowestMonthlyPSLFPayment2021).toString());
      jQuery("#10YearPSLF2021").text(lowestMonthlyPSLFPayment2021Text);

      var lowestMonthlyPSLFPayment2022 =
        Years[2] - startEarningCreditTowards >= 10
          ? ""
          : Math.min(monthlyPaymentRepaye2022, OldIbr2022);
      var lowestMonthlyPSLFPayment2022Text =
        !nonProfitOrGovernmentEmployerFullTime
          ? "N/A"
          : addCommas(Math.round(lowestMonthlyPSLFPayment2022).toString());
      jQuery("#10YearPSLF2022").text(lowestMonthlyPSLFPayment2022Text);

      var lowestMonthlyPSLFPayment2023 =
        Years[3] - startEarningCreditTowards >= 10
          ? ""
          : Math.min(monthlyPaymentRepaye2023, OldIbr2023);
      var lowestMonthlyPSLFPayment2023Text =
        !nonProfitOrGovernmentEmployerFullTime
          ? "N/A"
          : addCommas(Math.round(lowestMonthlyPSLFPayment2023).toString());
      jQuery("#10YearPSLF2023").text(lowestMonthlyPSLFPayment2023Text);

      var lowestMonthlyPSLFPayment2024 =
        Years[4] - startEarningCreditTowards >= 10
          ? ""
          : Math.min(monthlyPaymentRepaye2024, OldIbr2024);
      var lowestMonthlyPSLFPayment2024Text =
        !nonProfitOrGovernmentEmployerFullTime
          ? "N/A"
          : addCommas(Math.round(lowestMonthlyPSLFPayment2024).toString());
      jQuery("#10YearPSLF2024").text(lowestMonthlyPSLFPayment2024Text);

      var lowestMonthlyPSLFPayment2025 =
        Years[5] - startEarningCreditTowards >= 10
          ? ""
          : Math.min(monthlyPaymentRepaye2025, OldIbr2025);
      var lowestMonthlyPSLFPayment2025Text =
        !nonProfitOrGovernmentEmployerFullTime
          ? "N/A"
          : addCommas(Math.round(lowestMonthlyPSLFPayment2025).toString());
      jQuery("#10YearPSLF2025").text(lowestMonthlyPSLFPayment2025Text);

      var lowestMonthlyPSLFPayment2026 =
        Years[6] - startEarningCreditTowards >= 10
          ? ""
          : Math.min(monthlyPaymentRepaye2026, OldIbr2026);
      var lowestMonthlyPSLFPayment2026Text =
        !nonProfitOrGovernmentEmployerFullTime
          ? "N/A"
          : addCommas(Math.round(lowestMonthlyPSLFPayment2026).toString());
      jQuery("#10YearPSLF2026").text(lowestMonthlyPSLFPayment2026Text);

      var lowestMonthlyPSLFPayment2027 =
        Years[7] - startEarningCreditTowards >= 10
          ? ""
          : Math.min(monthlyPaymentRepaye2027, OldIbr2027);
      var lowestMonthlyPSLFPayment2027Text =
        !nonProfitOrGovernmentEmployerFullTime
          ? "N/A"
          : addCommas(Math.round(lowestMonthlyPSLFPayment2027).toString());
      jQuery("#10YearPSLF2027").text(lowestMonthlyPSLFPayment2027Text);

      var lowestMonthlyPSLFPayment2028 =
        Years[8] - startEarningCreditTowards >= 10
          ? ""
          : Math.min(monthlyPaymentRepaye2028, OldIbr2028);
      var lowestMonthlyPSLFPayment2028Text =
        !nonProfitOrGovernmentEmployerFullTime
          ? "N/A"
          : addCommas(Math.round(lowestMonthlyPSLFPayment2028).toString());
      jQuery("#10YearPSLF2028").text(lowestMonthlyPSLFPayment2028Text);

      var lowestMonthlyPSLFPayment2029 =
        Years[9] - startEarningCreditTowards >= 10
          ? ""
          : Math.min(monthlyPaymentRepaye2029, OldIbr2029);
      var lowestMonthlyPSLFPayment2029Text =
        !nonProfitOrGovernmentEmployerFullTime
          ? "N/A"
          : addCommas(Math.round(lowestMonthlyPSLFPayment2029).toString());
      jQuery("#10YearPSLF2029").text(lowestMonthlyPSLFPayment2029Text);

      var sposeLowestMonthlyPSLFPayment2020 =
        Years[0] - startEarningCreditTowards >= 10
          ? ""
          : Math.min(spouseRepaye2020, spouseOldIBR2020);
      var sposeLowestMonthlyPSLFPayment2020Text =
        !nonProfitOrGovernmentEmployerFullTime
          ? "N/A"
          : addCommas(Math.round(sposeLowestMonthlyPSLFPayment2020).toString());
      jQuery("#spouse10YearPSLF2020").text(
        sposeLowestMonthlyPSLFPayment2020Text
      );

      var sposeLowestMonthlyPSLFPayment2021 =
        Years[1] - startEarningCreditTowards >= 10
          ? ""
          : Math.min(spouseRepaye2021, spouseOldIBR2021);
      var sposeLowestMonthlyPSLFPayment2021Text =
        !nonProfitOrGovernmentEmployerFullTime
          ? "N/A"
          : addCommas(Math.round(sposeLowestMonthlyPSLFPayment2021).toString());
      jQuery("#spouse10YearPSLF2021").text(
        sposeLowestMonthlyPSLFPayment2021Text
      );

      var sposeLowestMonthlyPSLFPayment2022 =
        Years[2] - startEarningCreditTowards >= 10
          ? ""
          : Math.min(spouseRepaye2022, spouseOldIBR2022);
      var sposeLowestMonthlyPSLFPayment2022Text =
        !nonProfitOrGovernmentEmployerFullTime
          ? "N/A"
          : addCommas(Math.round(sposeLowestMonthlyPSLFPayment2022).toString());
      jQuery("#spouse10YearPSLF2022").text(
        sposeLowestMonthlyPSLFPayment2022Text
      );

      var sposeLowestMonthlyPSLFPayment2023 =
        Years[3] - startEarningCreditTowards >= 10
          ? ""
          : Math.min(spouseRepaye2023, spouseOldIBR2023);
      var sposeLowestMonthlyPSLFPayment2023Text =
        !nonProfitOrGovernmentEmployerFullTime
          ? "N/A"
          : addCommas(Math.round(sposeLowestMonthlyPSLFPayment2023).toString());
      jQuery("#spouse10YearPSLF2023").text(
        sposeLowestMonthlyPSLFPayment2023Text
      );

      var sposeLowestMonthlyPSLFPayment2024 =
        Years[4] - startEarningCreditTowards >= 10
          ? ""
          : Math.min(spouseRepaye2024, spouseOldIBR2024);
      var sposeLowestMonthlyPSLFPayment2024Text =
        !nonProfitOrGovernmentEmployerFullTime
          ? "N/A"
          : addCommas(Math.round(sposeLowestMonthlyPSLFPayment2024).toString());
      jQuery("#spouse10YearPSLF2024").text(
        sposeLowestMonthlyPSLFPayment2024Text
      );

      var sposeLowestMonthlyPSLFPayment2025 =
        Years[5] - startEarningCreditTowards >= 10
          ? ""
          : Math.min(spouseRepaye2025, spouseOldIBR2025);
      var sposeLowestMonthlyPSLFPayment2025Text =
        !nonProfitOrGovernmentEmployerFullTime
          ? "N/A"
          : addCommas(Math.round(sposeLowestMonthlyPSLFPayment2025).toString());
      jQuery("#spouse10YearPSLF2025").text(
        sposeLowestMonthlyPSLFPayment2025Text
      );

      var sposeLowestMonthlyPSLFPayment2026 =
        Years[6] - startEarningCreditTowards >= 10
          ? ""
          : Math.min(spouseRepaye2026, spouseOldIBR2026);
      var sposeLowestMonthlyPSLFPayment2026Text =
        !nonProfitOrGovernmentEmployerFullTime
          ? "N/A"
          : addCommas(Math.round(sposeLowestMonthlyPSLFPayment2026).toString());
      jQuery("#spouse10YearPSLF2026").text(
        sposeLowestMonthlyPSLFPayment2026Text
      );

      var sposeLowestMonthlyPSLFPayment2027 =
        Years[7] - startEarningCreditTowards >= 10
          ? ""
          : Math.min(spouseRepaye2027, spouseOldIBR2027);
      var sposeLowestMonthlyPSLFPayment2027Text =
        !nonProfitOrGovernmentEmployerFullTime
          ? "N/A"
          : addCommas(Math.round(sposeLowestMonthlyPSLFPayment2027).toString());
      jQuery("#spouse10YearPSLF2027").text(
        sposeLowestMonthlyPSLFPayment2027Text
      );

      var sposeLowestMonthlyPSLFPayment2028 =
        Years[8] - startEarningCreditTowards >= 10
          ? ""
          : Math.min(spouseRepaye2028, spouseOldIBR2028);
      var sposeLowestMonthlyPSLFPayment2028Text =
        !nonProfitOrGovernmentEmployerFullTime
          ? "N/A"
          : addCommas(Math.round(sposeLowestMonthlyPSLFPayment2028).toString());
      jQuery("#spouse10YearPSLF2028").text(
        sposeLowestMonthlyPSLFPayment2028Text
      );

      var sposeLowestMonthlyPSLFPayment2029 =
        Years[9] - startEarningCreditTowards >= 10
          ? ""
          : Math.min(spouseRepaye2029, spouseOldIBR2029);
      var sposeLowestMonthlyPSLFPayment2029Text =
        !nonProfitOrGovernmentEmployerFullTime
          ? "N/A"
          : addCommas(Math.round(sposeLowestMonthlyPSLFPayment2029).toString());
      jQuery("#spouse10YearPSLF2029").text(
        sposeLowestMonthlyPSLFPayment2029Text
      );
    }

    //refinancing
    if (1 === 1) {
      var Refinancing2020 = getRefinancing(
        Years[0],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebt
      );
      var Refinancing2020Text =
        Refinancing2020 === ""
          ? ""
          : addCommas(Math.round(Refinancing2020).toString());
      jQuery("#Refinancing2020").text(Refinancing2020Text);

      var Refinancing2021 = getRefinancing(
        Years[1],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebt
      );
      var Refinancing2021Text =
        Refinancing2021 === ""
          ? ""
          : addCommas(Math.round(Refinancing2021).toString());
      jQuery("#Refinancing2021").text(Refinancing2021Text);

      var Refinancing2022 = getRefinancing(
        Years[2],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebt
      );
      var Refinancing2022Text =
        Refinancing2022 === ""
          ? ""
          : addCommas(Math.round(Refinancing2022).toString());
      jQuery("#Refinancing2022").text(Refinancing2022Text);

      var Refinancing2023 = getRefinancing(
        Years[3],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebt
      );
      var Refinancing2023Text =
        Refinancing2023 === ""
          ? ""
          : addCommas(Math.round(Refinancing2023).toString());
      jQuery("#Refinancing2023").text(Refinancing2023Text);

      var Refinancing2024 = getRefinancing(
        Years[4],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebt
      );
      var Refinancing2024Text =
        Refinancing2024 === ""
          ? ""
          : addCommas(Math.round(Refinancing2024).toString());
      jQuery("#Refinancing2024").text(Refinancing2024Text);

      var Refinancing2025 = getRefinancing(
        Years[5],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebt
      );
      var Refinancing2025Text =
        Refinancing2025 === ""
          ? ""
          : addCommas(Math.round(Refinancing2025).toString());
      jQuery("#Refinancing2025").text(Refinancing2025Text);

      var Refinancing2026 = getRefinancing(
        Years[6],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebt
      );
      var Refinancing2026Text =
        Refinancing2026 === ""
          ? ""
          : addCommas(Math.round(Refinancing2026).toString());
      jQuery("#Refinancing2026").text(Refinancing2026Text);

      var Refinancing2027 = getRefinancing(
        Years[7],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebt
      );
      var Refinancing2027Text =
        Refinancing2027 === ""
          ? ""
          : addCommas(Math.round(Refinancing2027).toString());
      jQuery("#Refinancing2027").text(Refinancing2027Text);

      var Refinancing2028 = getRefinancing(
        Years[8],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebt
      );
      var Refinancing2028Text =
        Refinancing2028 === ""
          ? ""
          : addCommas(Math.round(Refinancing2028).toString());
      jQuery("#Refinancing2028").text(Refinancing2028Text);

      var Refinancing2029 = getRefinancing(
        Years[9],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebt
      );
      var Refinancing2029Text =
        Refinancing2029 === ""
          ? ""
          : addCommas(Math.round(Refinancing2029).toString());
      jQuery("#Refinancing2029").text(Refinancing2029Text);

      var Refinancing2030 = getRefinancing(
        Years[10],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebt
      );
      var Refinancing2030Text =
        Refinancing2030 === ""
          ? ""
          : addCommas(Math.round(Refinancing2030).toString());
      jQuery("#Refinancing2030").text(Refinancing2030Text);

      var Refinancing2031 = getRefinancing(
        Years[11],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebt
      );
      var Refinancing2031Text =
        Refinancing2031 === ""
          ? ""
          : addCommas(Math.round(Refinancing2031).toString());
      jQuery("#Refinancing2031").text(Refinancing2031Text);

      var Refinancing2032 = getRefinancing(
        Years[12],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebt
      );
      var Refinancing2032Text =
        Refinancing2032 === ""
          ? ""
          : addCommas(Math.round(Refinancing2032).toString());
      jQuery("#Refinancing2032").text(Refinancing2032Text);

      var Refinancing2033 = getRefinancing(
        Years[13],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebt
      );
      var Refinancing2033Text =
        Refinancing2033 === ""
          ? ""
          : addCommas(Math.round(Refinancing2033).toString());
      jQuery("#Refinancing2033").text(Refinancing2033Text);

      var Refinancing2034 = getRefinancing(
        Years[14],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebt
      );
      var Refinancing2034Text =
        Refinancing2034 === ""
          ? ""
          : addCommas(Math.round(Refinancing2034).toString());
      jQuery("#Refinancing2034").text(Refinancing2034Text);

      var Refinancing2035 = getRefinancing(
        Years[15],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebt
      );
      var Refinancing2035Text =
        Refinancing2035 === ""
          ? ""
          : addCommas(Math.round(Refinancing2035).toString());
      jQuery("#Refinancing2035").text(Refinancing2035Text);

      var Refinancing2036 = getRefinancing(
        Years[16],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebt
      );
      var Refinancing2036Text =
        Refinancing2036 === ""
          ? ""
          : addCommas(Math.round(Refinancing2036).toString());
      jQuery("#Refinancing2036").text(Refinancing2036Text);

      var Refinancing2037 = getRefinancing(
        Years[17],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebt
      );
      var Refinancing2037Text =
        Refinancing2037 === ""
          ? ""
          : addCommas(Math.round(Refinancing2037).toString());
      jQuery("#Refinancing2037").text(Refinancing2037Text);

      var Refinancing2038 = getRefinancing(
        Years[18],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebt
      );
      var Refinancing2038Text =
        Refinancing2038 === ""
          ? ""
          : addCommas(Math.round(Refinancing2038).toString());
      jQuery("#Refinancing2038").text(Refinancing2038Text);

      var Refinancing2039 = getRefinancing(
        Years[19],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebt
      );
      var Refinancing2039Text =
        Refinancing2039 === ""
          ? ""
          : addCommas(Math.round(Refinancing2039).toString());
      jQuery("#Refinancing2039").text(Refinancing2039Text);

      var Refinancing2040 = getRefinancing(
        Years[20],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebt
      );
      var Refinancing2040Text =
        Refinancing2040 === ""
          ? ""
          : addCommas(Math.round(Refinancing2040).toString());
      jQuery("#Refinancing2040").text(Refinancing2040Text);

      var Refinancing2041 = getRefinancing(
        Years[21],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebt
      );
      var Refinancing2041Text =
        Refinancing2041 === ""
          ? ""
          : addCommas(Math.round(Refinancing2041).toString());
      jQuery("#Refinancing2041").text(Refinancing2041Text);

      var Refinancing2042 = getRefinancing(
        Years[22],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebt
      );
      var Refinancing2042Text =
        Refinancing2042 === ""
          ? ""
          : addCommas(Math.round(Refinancing2042).toString());
      jQuery("#Refinancing2042").text(Refinancing2042Text);

      var Refinancing2043 = getRefinancing(
        Years[23],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebt
      );
      var Refinancing2043Text =
        Refinancing2043 === ""
          ? ""
          : addCommas(Math.round(Refinancing2043).toString());
      jQuery("#Refinancing2043").text(Refinancing2043Text);

      var Refinancing2044 = getRefinancing(
        Years[24],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebt
      );
      var Refinancing2044Text =
        Refinancing2044 === ""
          ? ""
          : addCommas(Math.round(Refinancing2044).toString());
      jQuery("#Refinancing2044").text(Refinancing2044Text);

      var Refinancing2045 = getRefinancing(
        Years[25],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebt
      );
      var Refinancing2045Text =
        Refinancing2045 === ""
          ? ""
          : addCommas(Math.round(Refinancing2045).toString());
      jQuery("#Refinancing2045").text(Refinancing2045Text);
    }

    //refinancing spouse
    if (1 === 1) {
      var spouseRefinancing2020 = getRefinancing(
        Years[0],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebtDoesYourSpouseOwe
      );
      var spouseRefinancing2020Text =
        spouseRefinancing2020 === ""
          ? ""
          : addCommas(Math.round(spouseRefinancing2020).toString());
      jQuery("#spouseRefinancing2020").text(spouseRefinancing2020Text);

      var spouseRefinancing2021 = getRefinancing(
        Years[1],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebtDoesYourSpouseOwe
      );
      var spouseRefinancing2021Text =
        spouseRefinancing2021 === ""
          ? ""
          : addCommas(Math.round(spouseRefinancing2021).toString());
      jQuery("#spouseRefinancing2021").text(spouseRefinancing2021Text);

      var spouseRefinancing2022 = getRefinancing(
        Years[2],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebtDoesYourSpouseOwe
      );
      var spouseRefinancing2022Text =
        spouseRefinancing2022 === ""
          ? ""
          : addCommas(Math.round(spouseRefinancing2022).toString());
      jQuery("#spouseRefinancing2022").text(spouseRefinancing2022Text);

      var spouseRefinancing2023 = getRefinancing(
        Years[3],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebtDoesYourSpouseOwe
      );
      var spouseRefinancing2023Text =
        spouseRefinancing2023 === ""
          ? ""
          : addCommas(Math.round(spouseRefinancing2023).toString());
      jQuery("#spouseRefinancing2023").text(spouseRefinancing2023Text);

      var spouseRefinancing2024 = getRefinancing(
        Years[4],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebtDoesYourSpouseOwe
      );
      var spouseRefinancing2024Text =
        spouseRefinancing2024 === ""
          ? ""
          : addCommas(Math.round(spouseRefinancing2024).toString());
      jQuery("#spouseRefinancing2024").text(spouseRefinancing2024Text);

      var spouseRefinancing2025 = getRefinancing(
        Years[5],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebtDoesYourSpouseOwe
      );
      var spouseRefinancing2025Text =
        spouseRefinancing2025 === ""
          ? ""
          : addCommas(Math.round(spouseRefinancing2025).toString());
      jQuery("#spouseRefinancing2025").text(spouseRefinancing2025Text);

      var spouseRefinancing2026 = getRefinancing(
        Years[6],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebtDoesYourSpouseOwe
      );
      var spouseRefinancing2026Text =
        spouseRefinancing2026 === ""
          ? ""
          : addCommas(Math.round(spouseRefinancing2026).toString());
      jQuery("#spouseRefinancing2026").text(spouseRefinancing2026Text);

      var spouseRefinancing2027 = getRefinancing(
        Years[7],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebtDoesYourSpouseOwe
      );
      var spouseRefinancing2027Text =
        spouseRefinancing2027 === ""
          ? ""
          : addCommas(Math.round(spouseRefinancing2027).toString());
      jQuery("#spouseRefinancing2027").text(spouseRefinancing2027Text);

      var spouseRefinancing2028 = getRefinancing(
        Years[8],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebtDoesYourSpouseOwe
      );
      var spouseRefinancing2028Text =
        spouseRefinancing2028 === ""
          ? ""
          : addCommas(Math.round(spouseRefinancing2028).toString());
      jQuery("#spouseRefinancing2028").text(spouseRefinancing2028Text);

      var spouseRefinancing2029 = getRefinancing(
        Years[9],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebtDoesYourSpouseOwe
      );
      var spouseRefinancing2029Text =
        spouseRefinancing2029 === ""
          ? ""
          : addCommas(Math.round(spouseRefinancing2029).toString());
      jQuery("#spouseRefinancing2029").text(spouseRefinancing2029Text);

      var spouseRefinancing2030 = getRefinancing(
        Years[10],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebtDoesYourSpouseOwe
      );
      var spouseRefinancing2030Text =
        spouseRefinancing2030 === ""
          ? ""
          : addCommas(Math.round(spouseRefinancing2030).toString());
      jQuery("#spouseRefinancing2030").text(spouseRefinancing2030Text);

      var spouseRefinancing2031 = getRefinancing(
        Years[11],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebtDoesYourSpouseOwe
      );
      var spouseRefinancing2031Text =
        spouseRefinancing2031 === ""
          ? ""
          : addCommas(Math.round(spouseRefinancing2031).toString());
      jQuery("#spouseRefinancing2031").text(spouseRefinancing2031Text);

      var spouseRefinancing2032 = getRefinancing(
        Years[12],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebtDoesYourSpouseOwe
      );
      var spouseRefinancing2032Text =
        spouseRefinancing2032 === ""
          ? ""
          : addCommas(Math.round(spouseRefinancing2032).toString());
      jQuery("#spouseRefinancing2032").text(spouseRefinancing2032Text);

      var spouseRefinancing2033 = getRefinancing(
        Years[13],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebtDoesYourSpouseOwe
      );
      var spouseRefinancing2033Text =
        spouseRefinancing2033 === ""
          ? ""
          : addCommas(Math.round(spouseRefinancing2033).toString());
      jQuery("#spouseRefinancing2033").text(spouseRefinancing2033Text);

      var spouseRefinancing2034 = getRefinancing(
        Years[14],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebtDoesYourSpouseOwe
      );
      var spouseRefinancing2034Text =
        spouseRefinancing2034 === ""
          ? ""
          : addCommas(Math.round(spouseRefinancing2034).toString());
      jQuery("#spouseRefinancing2034").text(spouseRefinancing2034Text);

      var spouseRefinancing2035 = getRefinancing(
        Years[15],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebtDoesYourSpouseOwe
      );
      var spouseRefinancing2035Text =
        spouseRefinancing2035 === ""
          ? ""
          : addCommas(Math.round(spouseRefinancing2035).toString());
      jQuery("#spouseRefinancing2035").text(spouseRefinancing2035Text);

      var spouseRefinancing2036 = getRefinancing(
        Years[16],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebtDoesYourSpouseOwe
      );
      var spouseRefinancing2036Text =
        spouseRefinancing2036 === ""
          ? ""
          : addCommas(Math.round(spouseRefinancing2036).toString());
      jQuery("#spouseRefinancing2036").text(spouseRefinancing2036Text);

      var spouseRefinancing2037 = getRefinancing(
        Years[17],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebtDoesYourSpouseOwe
      );
      var spouseRefinancing2037Text =
        spouseRefinancing2037 === ""
          ? ""
          : addCommas(Math.round(spouseRefinancing2037).toString());
      jQuery("#spouseRefinancing2037").text(spouseRefinancing2037Text);

      var spouseRefinancing2038 = getRefinancing(
        Years[18],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebtDoesYourSpouseOwe
      );
      var spouseRefinancing2038Text =
        spouseRefinancing2038 === ""
          ? ""
          : addCommas(Math.round(spouseRefinancing2038).toString());
      jQuery("#spouseRefinancing2038").text(spouseRefinancing2038Text);

      var spouseRefinancing2039 = getRefinancing(
        Years[19],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebtDoesYourSpouseOwe
      );
      var spouseRefinancing2039Text =
        spouseRefinancing2039 === ""
          ? ""
          : addCommas(Math.round(spouseRefinancing2039).toString());
      jQuery("#spouseRefinancing2039").text(spouseRefinancing2039Text);

      var spouseRefinancing2040 = getRefinancing(
        Years[20],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebtDoesYourSpouseOwe
      );
      var spouseRefinancing2040Text =
        spouseRefinancing2040 === ""
          ? ""
          : addCommas(Math.round(spouseRefinancing2040).toString());
      jQuery("#spouseRefinancing2040").text(spouseRefinancing2040Text);

      var spouseRefinancing2041 = getRefinancing(
        Years[21],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebtDoesYourSpouseOwe
      );
      var spouseRefinancing2041Text =
        spouseRefinancing2041 === ""
          ? ""
          : addCommas(Math.round(spouseRefinancing2041).toString());
      jQuery("#spouseRefinancing2041").text(spouseRefinancing2041Text);

      var spouseRefinancing2042 = getRefinancing(
        Years[22],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebtDoesYourSpouseOwe
      );
      var spouseRefinancing2042Text =
        spouseRefinancing2042 === ""
          ? ""
          : addCommas(Math.round(spouseRefinancing2042).toString());
      jQuery("#spouseRefinancing2042").text(spouseRefinancing2042Text);

      var spouseRefinancing2043 = getRefinancing(
        Years[23],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebtDoesYourSpouseOwe
      );
      var spouseRefinancing2043Text =
        spouseRefinancing2043 === ""
          ? ""
          : addCommas(Math.round(spouseRefinancing2043).toString());
      jQuery("#spouseRefinancing2043").text(spouseRefinancing2043Text);

      var spouseRefinancing2044 = getRefinancing(
        Years[24],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebtDoesYourSpouseOwe
      );
      var spouseRefinancing2044Text =
        spouseRefinancing2044 === ""
          ? ""
          : addCommas(Math.round(spouseRefinancing2044).toString());
      jQuery("#spouseRefinancing2044").text(spouseRefinancing2044Text);

      var spouseRefinancing2045 = getRefinancing(
        Years[25],
        Years[0],
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        termLengthManual,
        federalStudentDebtDoesYourSpouseOwe
      );
      var spouseRefinancing2045Text =
        spouseRefinancing2045 === ""
          ? ""
          : addCommas(Math.round(spouseRefinancing2045).toString());
      jQuery("#spouseRefinancing2045").text(spouseRefinancing2045Text);
    }

    /**** 2nd  and 3d table*****/

    //ibr 2d and 3d
    if (1 === 1) {
      var balanceOldIBR2020 = federalStudentDebt;
      var yearlyOldIBR2020 = federalStudentDebt * averageInterestRateOfAllDebt;
      jQuery("#balanceOldIBR2020").text(
        addCommas(Math.round(balanceOldIBR2020))
      );
      jQuery("#yearlyOldIBR2020").text(addCommas(Math.round(yearlyOldIBR2020)));

      var balanceOldIBR2021 = getOldIbroverTime(
        balanceOldIBR2020,
        yearlyOldIBR2020,
        OldIbr2020
      );
      var yearlyOldIBR2021 = getOldIbryear(
        balanceOldIBR2021,
        federalStudentDebt,
        averageInterestRateOfAllDebt
      );
      jQuery("#balanceOldIBR2021").text(
        addCommas(Math.round(balanceOldIBR2021))
      );
      jQuery("#yearlyOldIBR2021").text(addCommas(Math.round(yearlyOldIBR2021)));

      var balanceOldIBR2022 = getOldIbroverTime(
        balanceOldIBR2021,
        yearlyOldIBR2021,
        OldIbr2021
      );
      var yearlyOldIBR2022 = getOldIbryear(
        balanceOldIBR2022,
        federalStudentDebt,
        averageInterestRateOfAllDebt
      );
      jQuery("#balanceOldIBR2022").text(
        addCommas(Math.round(balanceOldIBR2022))
      );
      jQuery("#yearlyOldIBR2022").text(addCommas(Math.round(yearlyOldIBR2022)));

      var balanceOldIBR2023 = getOldIbroverTime(
        balanceOldIBR2022,
        yearlyOldIBR2022,
        OldIbr2022
      );
      var yearlyOldIBR2023 = getOldIbryear(
        balanceOldIBR2023,
        federalStudentDebt,
        averageInterestRateOfAllDebt
      );
      jQuery("#balanceOldIBR2023").text(
        addCommas(Math.round(balanceOldIBR2023))
      );
      jQuery("#yearlyOldIBR2023").text(addCommas(Math.round(yearlyOldIBR2023)));

      var balanceOldIBR2024 = getOldIbroverTime(
        balanceOldIBR2023,
        yearlyOldIBR2023,
        OldIbr2023
      );
      var yearlyOldIBR2024 = getOldIbryear(
        balanceOldIBR2024,
        federalStudentDebt,
        averageInterestRateOfAllDebt
      );
      jQuery("#balanceOldIBR2024").text(
        addCommas(Math.round(balanceOldIBR2024))
      );
      jQuery("#yearlyOldIBR2024").text(addCommas(Math.round(yearlyOldIBR2024)));

      var balanceOldIBR2025 = getOldIbroverTime(
        balanceOldIBR2024,
        yearlyOldIBR2024,
        OldIbr2024
      );
      var yearlyOldIBR2025 = getOldIbryear(
        balanceOldIBR2025,
        federalStudentDebt,
        averageInterestRateOfAllDebt
      );
      jQuery("#balanceOldIBR2025").text(
        addCommas(Math.round(balanceOldIBR2025))
      );
      jQuery("#yearlyOldIBR2025").text(addCommas(Math.round(yearlyOldIBR2025)));

      var balanceOldIBR2026 = getOldIbroverTime(
        balanceOldIBR2025,
        yearlyOldIBR2025,
        OldIbr2025
      );
      var yearlyOldIBR2026 = getOldIbryear(
        balanceOldIBR2026,
        federalStudentDebt,
        averageInterestRateOfAllDebt
      );
      jQuery("#balanceOldIBR2026").text(
        addCommas(Math.round(balanceOldIBR2026))
      );
      jQuery("#yearlyOldIBR2026").text(addCommas(Math.round(yearlyOldIBR2026)));

      var balanceOldIBR2027 = getOldIbroverTime(
        balanceOldIBR2026,
        yearlyOldIBR2026,
        OldIbr2026
      );
      var yearlyOldIBR2027 = getOldIbryear(
        balanceOldIBR2027,
        federalStudentDebt,
        averageInterestRateOfAllDebt
      );
      jQuery("#balanceOldIBR2027").text(
        addCommas(Math.round(balanceOldIBR2027))
      );
      jQuery("#yearlyOldIBR2027").text(addCommas(Math.round(yearlyOldIBR2027)));

      var balanceOldIBR2028 = getOldIbroverTime(
        balanceOldIBR2027,
        yearlyOldIBR2027,
        OldIbr2027
      );
      var yearlyOldIBR2028 = getOldIbryear(
        balanceOldIBR2028,
        federalStudentDebt,
        averageInterestRateOfAllDebt
      );
      jQuery("#balanceOldIBR2028").text(
        addCommas(Math.round(balanceOldIBR2028))
      );
      jQuery("#yearlyOldIBR2028").text(addCommas(Math.round(yearlyOldIBR2028)));

      var balanceOldIBR2029 = getOldIbroverTime(
        balanceOldIBR2028,
        yearlyOldIBR2028,
        OldIbr2028
      );
      var yearlyOldIBR2029 = getOldIbryear(
        balanceOldIBR2029,
        federalStudentDebt,
        averageInterestRateOfAllDebt
      );
      jQuery("#balanceOldIBR2029").text(
        addCommas(Math.round(balanceOldIBR2029))
      );
      jQuery("#yearlyOldIBR2029").text(addCommas(Math.round(yearlyOldIBR2029)));

      var balanceOldIBR2030 = getOldIbroverTime(
        balanceOldIBR2029,
        yearlyOldIBR2029,
        OldIbr2029
      );
      var yearlyOldIBR2030 = getOldIbryear(
        balanceOldIBR2030,
        federalStudentDebt,
        averageInterestRateOfAllDebt
      );
      jQuery("#balanceOldIBR2030").text(
        addCommas(Math.round(balanceOldIBR2030))
      );
      jQuery("#yearlyOldIBR2030").text(addCommas(Math.round(yearlyOldIBR2030)));

      if (balanceOldIBR2030 == "" || balanceOldIBR2030 == 0) {
        OldIbr2030 = 0;
        OldIbr2030Text = addCommas(Math.round(OldIbr2030).toString());
        jQuery("#monthlyPaymentOldIBR2030").text(OldIbr2030Text);
      }

      var balanceOldIBR2031 = getOldIbroverTime(
        balanceOldIBR2030,
        yearlyOldIBR2030,
        OldIbr2030
      );
      var yearlyOldIBR2031 = getOldIbryear(
        balanceOldIBR2031,
        federalStudentDebt,
        averageInterestRateOfAllDebt
      );
      jQuery("#balanceOldIBR2031").text(
        addCommas(Math.round(balanceOldIBR2031))
      );
      jQuery("#yearlyOldIBR2031").text(addCommas(Math.round(yearlyOldIBR2031)));

      if (balanceOldIBR2031 == "" || balanceOldIBR2031 == 0) {
        OldIbr2031 = 0;
        OldIbr2031Text = addCommas(Math.round(OldIbr2031).toString());
        jQuery("#monthlyPaymentOldIBR2031").text(OldIbr2031Text);
      }

      var balanceOldIBR2032 = getOldIbroverTime(
        balanceOldIBR2031,
        yearlyOldIBR2031,
        OldIbr2031
      );
      var yearlyOldIBR2032 = getOldIbryear(
        balanceOldIBR2032,
        federalStudentDebt,
        averageInterestRateOfAllDebt
      );
      jQuery("#balanceOldIBR2032").text(
        addCommas(Math.round(balanceOldIBR2032))
      );
      jQuery("#yearlyOldIBR2032").text(addCommas(Math.round(yearlyOldIBR2032)));

      if (balanceOldIBR2032 == "" || balanceOldIBR2032 == 0) {
        OldIbr2032 = 0;
        OldIbr2032Text = addCommas(Math.round(OldIbr2032).toString());
        jQuery("#monthlyPaymentOldIBR2032").text(OldIbr2032Text);
      }
      var balanceOldIBR2033 = getOldIbroverTime(
        balanceOldIBR2032,
        yearlyOldIBR2032,
        OldIbr2032
      );
      var yearlyOldIBR2033 = getOldIbryear(
        balanceOldIBR2033,
        federalStudentDebt,
        averageInterestRateOfAllDebt
      );
      jQuery("#balanceOldIBR2033").text(
        addCommas(Math.round(balanceOldIBR2033))
      );
      jQuery("#yearlyOldIBR2033").text(addCommas(Math.round(yearlyOldIBR2033)));

      if (balanceOldIBR2033 == "" || balanceOldIBR2033 == 0) {
        OldIbr2033 = 0;
        OldIbr2033Text = addCommas(Math.round(OldIbr2033).toString());
        jQuery("#monthlyPaymentOldIBR2033").text(OldIbr2033Text);
      }
      var balanceOldIBR2034 = getOldIbroverTime(
        balanceOldIBR2033,
        yearlyOldIBR2033,
        OldIbr2033
      );
      var yearlyOldIBR2034 = getOldIbryear(
        balanceOldIBR2034,
        federalStudentDebt,
        averageInterestRateOfAllDebt
      );
      jQuery("#balanceOldIBR2034").text(
        addCommas(Math.round(balanceOldIBR2034))
      );
      jQuery("#yearlyOldIBR2034").text(addCommas(Math.round(yearlyOldIBR2034)));

      if (balanceOldIBR2034 == "" || balanceOldIBR2034 == 0) {
        OldIbr2034 = 0;
        OldIbr2034Text = addCommas(Math.round(OldIbr2034).toString());
        jQuery("#monthlyPaymentOldIBR2034").text(OldIbr2034Text);
      }
      var balanceOldIBR2035 = getOldIbroverTime(
        balanceOldIBR2034,
        yearlyOldIBR2034,
        OldIbr2034
      );
      var yearlyOldIBR2035 = getOldIbryear(
        balanceOldIBR2035,
        federalStudentDebt,
        averageInterestRateOfAllDebt
      );
      jQuery("#balanceOldIBR2035").text(
        addCommas(Math.round(balanceOldIBR2035))
      );
      jQuery("#yearlyOldIBR2035").text(addCommas(Math.round(yearlyOldIBR2035)));

      if (balanceOldIBR2035 == "" || balanceOldIBR2035 == 0) {
        OldIbr2035 = 0;
        OldIbr2035Text = addCommas(Math.round(OldIbr2035).toString());
        jQuery("#monthlyPaymentOldIBR2035").text(OldIbr2035Text);
      }
      var balanceOldIBR2036 = getOldIbroverTime(
        balanceOldIBR2035,
        yearlyOldIBR2035,
        OldIbr2035
      );
      var yearlyOldIBR2036 = getOldIbryear(
        balanceOldIBR2036,
        federalStudentDebt,
        averageInterestRateOfAllDebt
      );
      jQuery("#balanceOldIBR2036").text(
        addCommas(Math.round(balanceOldIBR2036))
      );
      jQuery("#yearlyOldIBR2036").text(addCommas(Math.round(yearlyOldIBR2036)));

      if (balanceOldIBR2036 == "" || balanceOldIBR2036 == 0) {
        OldIbr2036 = 0;
        OldIbr2036Text = addCommas(Math.round(OldIbr2036).toString());
        jQuery("#monthlyPaymentOldIBR2036").text(OldIbr2036Text);
      }
      var balanceOldIBR2037 = getOldIbroverTime(
        balanceOldIBR2036,
        yearlyOldIBR2036,
        OldIbr2036
      );
      var yearlyOldIBR2037 = getOldIbryear(
        balanceOldIBR2037,
        federalStudentDebt,
        averageInterestRateOfAllDebt
      );
      jQuery("#balanceOldIBR2037").text(
        addCommas(Math.round(balanceOldIBR2037))
      );
      jQuery("#yearlyOldIBR2037").text(addCommas(Math.round(yearlyOldIBR2037)));

      if (balanceOldIBR2037 == "" || balanceOldIBR2037 == 0) {
        OldIbr2037 = 0;
        OldIbr2037Text = addCommas(Math.round(OldIbr2037).toString());
        jQuery("#monthlyPaymentOldIBR2037").text(OldIbr2037Text);
      }
      var balanceOldIBR2038 = getOldIbroverTime(
        balanceOldIBR2037,
        yearlyOldIBR2037,
        OldIbr2037
      );
      var yearlyOldIBR2038 = getOldIbryear(
        balanceOldIBR2038,
        federalStudentDebt,
        averageInterestRateOfAllDebt
      );
      jQuery("#balanceOldIBR2038").text(
        addCommas(Math.round(balanceOldIBR2038))
      );
      jQuery("#yearlyOldIBR2038").text(addCommas(Math.round(yearlyOldIBR2038)));

      if (balanceOldIBR2038 == "" || balanceOldIBR2038 == 0) {
        OldIbr2038 = 0;
        OldIbr2038Text = addCommas(Math.round(OldIbr2038).toString());
        jQuery("#monthlyPaymentOldIBR2038").text(OldIbr2038Text);
      }
      var balanceOldIBR2039 = getOldIbroverTime(
        balanceOldIBR2038,
        yearlyOldIBR2038,
        OldIbr2038
      );
      var yearlyOldIBR2039 = getOldIbryear(
        balanceOldIBR2039,
        federalStudentDebt,
        averageInterestRateOfAllDebt
      );
      jQuery("#balanceOldIBR2039").text(
        addCommas(Math.round(balanceOldIBR2039))
      );
      jQuery("#yearlyOldIBR2039").text(addCommas(Math.round(yearlyOldIBR2039)));

      if (balanceOldIBR2039 == "" || balanceOldIBR2039 == 0) {
        OldIbr2039 = 0;
        OldIbr2039Text = addCommas(Math.round(OldIbr2039).toString());
        jQuery("#monthlyPaymentOldIBR2039").text(OldIbr2039Text);
      }
      var balanceOldIBR2040 = getOldIbroverTime(
        balanceOldIBR2039,
        yearlyOldIBR2039,
        OldIbr2039
      );
      var yearlyOldIBR2040 = getOldIbryear(
        balanceOldIBR2040,
        federalStudentDebt,
        averageInterestRateOfAllDebt
      );
      jQuery("#balanceOldIBR2040").text(
        addCommas(Math.round(balanceOldIBR2040))
      );
      jQuery("#yearlyOldIBR2040").text(addCommas(Math.round(yearlyOldIBR2040)));

      if (balanceOldIBR2040 == "" || balanceOldIBR2040 == 0) {
        OldIbr2040 = 0;
        OldIbr2040Text = addCommas(Math.round(OldIbr2040).toString());
        jQuery("#monthlyPaymentOldIBR2040").text(OldIbr2040Text);
      }
      var balanceOldIBR2041 = getOldIbroverTime(
        balanceOldIBR2040,
        yearlyOldIBR2040,
        OldIbr2040
      );
      var yearlyOldIBR2041 = getOldIbryear(
        balanceOldIBR2041,
        federalStudentDebt,
        averageInterestRateOfAllDebt
      );
      jQuery("#balanceOldIBR2041").text(
        addCommas(Math.round(balanceOldIBR2041))
      );
      jQuery("#yearlyOldIBR2041").text(addCommas(Math.round(yearlyOldIBR2041)));

      if (balanceOldIBR2041 == "" || balanceOldIBR2041 == 0) {
        OldIbr2041 = 0;
        OldIbr2041Text = addCommas(Math.round(OldIbr2041).toString());
        jQuery("#monthlyPaymentOldIBR2041").text(OldIbr2041Text);
      }

      var balanceOldIBR2042 = getOldIbroverTime(
        balanceOldIBR2041,
        yearlyOldIBR2041,
        OldIbr2041
      );
      var yearlyOldIBR2042 = getOldIbryear(
        balanceOldIBR2042,
        federalStudentDebt,
        averageInterestRateOfAllDebt
      );
      jQuery("#balanceOldIBR2042").text(
        addCommas(Math.round(balanceOldIBR2042))
      );
      jQuery("#yearlyOldIBR2042").text(addCommas(Math.round(yearlyOldIBR2042)));

      if (balanceOldIBR2042 == "" || balanceOldIBR2042 == 0) {
        OldIbr2042 = 0;
        OldIbr2042Text = addCommas(Math.round(OldIbr2042).toString());
        jQuery("#monthlyPaymentOldIBR2042").text(OldIbr2042Text);
      }

      var balanceOldIBR2043 = getOldIbroverTime(
        balanceOldIBR2042,
        yearlyOldIBR2042,
        OldIbr2042
      );
      var yearlyOldIBR2043 = getOldIbryear(
        balanceOldIBR2043,
        federalStudentDebt,
        averageInterestRateOfAllDebt
      );
      jQuery("#balanceOldIBR2043").text(
        addCommas(Math.round(balanceOldIBR2043))
      );
      jQuery("#yearlyOldIBR2043").text(addCommas(Math.round(yearlyOldIBR2043)));

      if (balanceOldIBR2043 == "" || balanceOldIBR2043 == 0) {
        OldIbr2043 = 0;
        OldIbr2043Text = addCommas(Math.round(OldIbr2043).toString());
        jQuery("#monthlyPaymentOldIBR2043").text(OldIbr2043Text);
      }

      var balanceOldIBR2044 = getOldIbroverTime(
        balanceOldIBR2043,
        yearlyOldIBR2043,
        OldIbr2043
      );
      var yearlyOldIBR2044 = getOldIbryear(
        balanceOldIBR2044,
        federalStudentDebt,
        averageInterestRateOfAllDebt
      );
      jQuery("#balanceOldIBR2044").text(
        addCommas(Math.round(balanceOldIBR2044))
      );
      jQuery("#yearlyOldIBR2044").text(addCommas(Math.round(yearlyOldIBR2044)));

      if (balanceOldIBR2044 == "" || balanceOldIBR2044 == 0) {
        OldIbr2044 = 0;
        OldIbr2044Text = addCommas(Math.round(OldIbr2044).toString());
        jQuery("#monthlyPaymentOldIBR2044").text(OldIbr2044Text);
      }

      var balanceOldIBR2045 = getOldIbroverTime(
        balanceOldIBR2044,
        yearlyOldIBR2044,
        OldIbr2044
      );
      var yearlyOldIBR2045 = getOldIbryear(
        balanceOldIBR2045,
        federalStudentDebt,
        averageInterestRateOfAllDebt
      );
      jQuery("#balanceOldIBR2045").text(
        addCommas(Math.round(balanceOldIBR2045))
      );
      jQuery("#yearlyOldIBR2045").text(addCommas(Math.round(yearlyOldIBR2045)));

      if (balanceOldIBR2045 == "" || balanceOldIBR2045 == 0) {
        OldIbr2045 = 0;
        OldIbr2045Text = addCommas(Math.round(OldIbr2045).toString());
        jQuery("#monthlyPaymentOldIBR2045").text(OldIbr2045Text);
      }
    }

    //ibr 2d and 3d spouse
    if (1 === 1) {
      var spouseBalanceOldIBR2020 = federalStudentDebtDoesYourSpouseOwe;
      var spouseYearlyOldIBR2020 =
        federalStudentDebtDoesYourSpouseOwe * averageInterestRateOfAllDebt;
      jQuery("#spouseBalanceOldIBR2020").text(
        addCommas(Math.round(spouseBalanceOldIBR2020))
      );
      jQuery("#spouseYearlyOldIBR2020").text(
        addCommas(Math.round(spouseYearlyOldIBR2020))
      );

      var spouseBalanceOldIBR2021 = getOldIbroverTime(
        spouseBalanceOldIBR2020,
        spouseYearlyOldIBR2020,
        spouseOldIBR2020
      );
      var spouseYearlyOldIBR2021 = getOldIbryear(
        spouseBalanceOldIBR2021,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt
      );
      jQuery("#spouseBalanceOldIBR2021").text(
        addCommas(Math.round(spouseBalanceOldIBR2021))
      );
      jQuery("#spouseYearlyOldIBR2021").text(
        addCommas(Math.round(spouseYearlyOldIBR2021))
      );

      var spouseBalanceOldIBR2022 = getOldIbroverTime(
        spouseBalanceOldIBR2021,
        spouseYearlyOldIBR2021,
        spouseOldIBR2021
      );
      var spouseYearlyOldIBR2022 = getOldIbryear(
        spouseBalanceOldIBR2022,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt
      );
      jQuery("#spouseBalanceOldIBR2022").text(
        addCommas(Math.round(spouseBalanceOldIBR2022))
      );
      jQuery("#spouseYearlyOldIBR2022").text(
        addCommas(Math.round(spouseYearlyOldIBR2022))
      );

      var spouseBalanceOldIBR2023 = getOldIbroverTime(
        spouseBalanceOldIBR2022,
        spouseYearlyOldIBR2022,
        spouseOldIBR2022
      );
      var spouseYearlyOldIBR2023 = getOldIbryear(
        spouseBalanceOldIBR2023,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt
      );
      jQuery("#spouseBalanceOldIBR2023").text(
        addCommas(Math.round(spouseBalanceOldIBR2023))
      );
      jQuery("#spouseYearlyOldIBR2023").text(
        addCommas(Math.round(spouseYearlyOldIBR2023))
      );

      var spouseBalanceOldIBR2024 = getOldIbroverTime(
        spouseBalanceOldIBR2023,
        spouseYearlyOldIBR2023,
        spouseOldIBR2023
      );
      var spouseYearlyOldIBR2024 = getOldIbryear(
        spouseBalanceOldIBR2024,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt
      );
      jQuery("#spouseBalanceOldIBR2024").text(
        addCommas(Math.round(spouseBalanceOldIBR2024))
      );
      jQuery("#spouseYearlyOldIBR2024").text(
        addCommas(Math.round(spouseYearlyOldIBR2024))
      );

      var spouseBalanceOldIBR2025 = getOldIbroverTime(
        spouseBalanceOldIBR2024,
        spouseYearlyOldIBR2024,
        spouseOldIBR2024
      );
      var spouseYearlyOldIBR2025 = getOldIbryear(
        spouseBalanceOldIBR2025,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt
      );
      jQuery("#spouseBalanceOldIBR2025").text(
        addCommas(Math.round(spouseBalanceOldIBR2025))
      );
      jQuery("#spouseYearlyOldIBR2025").text(
        addCommas(Math.round(spouseYearlyOldIBR2025))
      );

      var spouseBalanceOldIBR2026 = getOldIbroverTime(
        spouseBalanceOldIBR2025,
        spouseYearlyOldIBR2025,
        spouseOldIBR2025
      );
      var spouseYearlyOldIBR2026 = getOldIbryear(
        spouseBalanceOldIBR2026,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt
      );
      jQuery("#spouseBalanceOldIBR2026").text(
        addCommas(Math.round(spouseBalanceOldIBR2026))
      );
      jQuery("#spouseYearlyOldIBR2026").text(
        addCommas(Math.round(spouseYearlyOldIBR2026))
      );

      var spouseBalanceOldIBR2027 = getOldIbroverTime(
        spouseBalanceOldIBR2026,
        spouseYearlyOldIBR2026,
        spouseOldIBR2026
      );
      var spouseYearlyOldIBR2027 = getOldIbryear(
        spouseBalanceOldIBR2027,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt
      );
      jQuery("#spouseBalanceOldIBR2027").text(
        addCommas(Math.round(spouseBalanceOldIBR2027))
      );
      jQuery("#spouseYearlyOldIBR2027").text(
        addCommas(Math.round(spouseYearlyOldIBR2027))
      );

      var spouseBalanceOldIBR2028 = getOldIbroverTime(
        spouseBalanceOldIBR2027,
        spouseYearlyOldIBR2027,
        spouseOldIBR2027
      );
      var spouseYearlyOldIBR2028 = getOldIbryear(
        spouseBalanceOldIBR2028,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt
      );
      jQuery("#spouseBalanceOldIBR2028").text(
        addCommas(Math.round(spouseBalanceOldIBR2028))
      );
      jQuery("#spouseYearlyOldIBR2028").text(
        addCommas(Math.round(spouseYearlyOldIBR2028))
      );

      var spouseBalanceOldIBR2029 = getOldIbroverTime(
        spouseBalanceOldIBR2028,
        spouseYearlyOldIBR2028,
        spouseOldIBR2028
      );
      var spouseYearlyOldIBR2029 = getOldIbryear(
        spouseBalanceOldIBR2029,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt
      );
      jQuery("#spouseBalanceOldIBR2029").text(
        addCommas(Math.round(spouseBalanceOldIBR2029))
      );
      jQuery("#spouseYearlyOldIBR2029").text(
        addCommas(Math.round(spouseYearlyOldIBR2029))
      );

      var spouseBalanceOldIBR2030 = getOldIbroverTime(
        spouseBalanceOldIBR2029,
        spouseYearlyOldIBR2029,
        spouseOldIBR2029
      );
      var spouseYearlyOldIBR2030 = getOldIbryear(
        spouseBalanceOldIBR2030,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt
      );
      jQuery("#spouseBalanceOldIBR2030").text(
        addCommas(Math.round(spouseBalanceOldIBR2030))
      );
      jQuery("#spouseYearlyOldIBR2030").text(
        addCommas(Math.round(spouseYearlyOldIBR2030))
      );

      if (spouseBalanceOldIBR2030 == "" || spouseBalanceOldIBR2030 == 0) {
        spouseOldIBR2030 = 0;
        spouseOldIBR2030Text = addCommas(
          Math.round(spouseOldIBR2030).toString()
        );
        jQuery("#spouseOldIBR2030").text(spouseOldIBR2030Text);
      }
      var spouseBalanceOldIBR2031 = getOldIbroverTime(
        spouseBalanceOldIBR2030,
        spouseYearlyOldIBR2030,
        spouseOldIBR2030
      );
      var spouseYearlyOldIBR2031 = getOldIbryear(
        spouseBalanceOldIBR2031,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt
      );
      jQuery("#spouseBalanceOldIBR2031").text(
        addCommas(Math.round(spouseBalanceOldIBR2031))
      );
      jQuery("#spouseYearlyOldIBR2031").text(
        addCommas(Math.round(spouseYearlyOldIBR2031))
      );

      if (spouseBalanceOldIBR2031 == "" || spouseBalanceOldIBR2031 == 0) {
        spouseOldIBR2031 = 0;
        spouseOldIBR2031Text = addCommas(
          Math.round(spouseOldIBR2031).toString()
        );
        jQuery("#spouseOldIBR2031").text(spouseOldIBR2031Text);
      }
      var spouseBalanceOldIBR2032 = getOldIbroverTime(
        spouseBalanceOldIBR2031,
        spouseYearlyOldIBR2031,
        spouseOldIBR2031
      );
      var spouseYearlyOldIBR2032 = getOldIbryear(
        spouseBalanceOldIBR2032,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt
      );
      jQuery("#spouseBalanceOldIBR2032").text(
        addCommas(Math.round(spouseBalanceOldIBR2032))
      );
      jQuery("#spouseYearlyOldIBR2032").text(
        addCommas(Math.round(spouseYearlyOldIBR2032))
      );

      if (spouseBalanceOldIBR2032 == "" || spouseBalanceOldIBR2032 == 0) {
        spouseOldIBR2032 = 0;
        spouseOldIBR2032Text = addCommas(
          Math.round(spouseOldIBR2032).toString()
        );
        jQuery("#spouseOldIBR2032").text(spouseOldIBR2032Text);
      }
      var spouseBalanceOldIBR2033 = getOldIbroverTime(
        spouseBalanceOldIBR2032,
        spouseYearlyOldIBR2032,
        spouseOldIBR2032
      );
      var spouseYearlyOldIBR2033 = getOldIbryear(
        spouseBalanceOldIBR2033,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt
      );
      jQuery("#spouseBalanceOldIBR2033").text(
        addCommas(Math.round(spouseBalanceOldIBR2033))
      );
      jQuery("#spouseYearlyOldIBR2033").text(
        addCommas(Math.round(spouseYearlyOldIBR2033))
      );

      if (spouseBalanceOldIBR2033 == "" || spouseBalanceOldIBR2033 == 0) {
        spouseOldIBR2033 = 0;
        spouseOldIBR2033Text = addCommas(
          Math.round(spouseOldIBR2033).toString()
        );
        jQuery("#spouseOldIBR2033").text(spouseOldIBR2033Text);
      }
      var spouseBalanceOldIBR2034 = getOldIbroverTime(
        spouseBalanceOldIBR2033,
        spouseYearlyOldIBR2033,
        spouseOldIBR2033
      );
      var spouseYearlyOldIBR2034 = getOldIbryear(
        spouseBalanceOldIBR2034,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt
      );
      jQuery("#spouseBalanceOldIBR2034").text(
        addCommas(Math.round(spouseBalanceOldIBR2034))
      );
      jQuery("#spouseYearlyOldIBR2034").text(
        addCommas(Math.round(spouseYearlyOldIBR2034))
      );

      if (spouseBalanceOldIBR2034 == "" || spouseBalanceOldIBR2034 == 0) {
        spouseOldIBR2034 = 0;
        spouseOldIBR2034Text = addCommas(
          Math.round(spouseOldIBR2034).toString()
        );
        jQuery("#spouseOldIBR2034").text(spouseOldIBR2034Text);
      }
      var spouseBalanceOldIBR2035 = getOldIbroverTime(
        spouseBalanceOldIBR2034,
        spouseYearlyOldIBR2034,
        spouseOldIBR2034
      );
      var spouseYearlyOldIBR2035 = getOldIbryear(
        spouseBalanceOldIBR2035,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt
      );
      jQuery("#spouseBalanceOldIBR2035").text(
        addCommas(Math.round(spouseBalanceOldIBR2035))
      );
      jQuery("#spouseYearlyOldIBR2035").text(
        addCommas(Math.round(spouseYearlyOldIBR2035))
      );

      if (spouseBalanceOldIBR2035 == "" || spouseBalanceOldIBR2035 == 0) {
        spouseOldIBR2035 = 0;
        spouseOldIBR2035Text = addCommas(
          Math.round(spouseOldIBR2035).toString()
        );
        jQuery("#spouseOldIBR2035").text(spouseOldIBR2035Text);
      }
      var spouseBalanceOldIBR2036 = getOldIbroverTime(
        spouseBalanceOldIBR2035,
        spouseYearlyOldIBR2035,
        spouseOldIBR2035
      );
      var spouseYearlyOldIBR2036 = getOldIbryear(
        spouseBalanceOldIBR2036,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt
      );
      jQuery("#spouseBalanceOldIBR2036").text(
        addCommas(Math.round(spouseBalanceOldIBR2036))
      );
      jQuery("#spouseYearlyOldIBR2036").text(
        addCommas(Math.round(spouseYearlyOldIBR2036))
      );

      if (spouseBalanceOldIBR2036 == "" || spouseBalanceOldIBR2036 == 0) {
        spouseOldIBR2036 = 0;
        spouseOldIBR2036Text = addCommas(
          Math.round(spouseOldIBR2036).toString()
        );
        jQuery("#spouseOldIBR2036").text(spouseOldIBR2036Text);
      }
      var spouseBalanceOldIBR2037 = getOldIbroverTime(
        spouseBalanceOldIBR2036,
        spouseYearlyOldIBR2036,
        spouseOldIBR2036
      );
      var spouseYearlyOldIBR2037 = getOldIbryear(
        spouseBalanceOldIBR2037,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt
      );
      jQuery("#spouseBalanceOldIBR2037").text(
        addCommas(Math.round(spouseBalanceOldIBR2037))
      );
      jQuery("#spouseYearlyOldIBR2037").text(
        addCommas(Math.round(spouseYearlyOldIBR2037))
      );

      if (spouseBalanceOldIBR2037 == "" || spouseBalanceOldIBR2037 == 0) {
        spouseOldIBR2037 = 0;
        spouseOldIBR2037Text = addCommas(
          Math.round(spouseOldIBR2037).toString()
        );
        jQuery("#spouseOldIBR2037").text(spouseOldIBR2037Text);
      }
      var spouseBalanceOldIBR2038 = getOldIbroverTime(
        spouseBalanceOldIBR2037,
        spouseYearlyOldIBR2037,
        spouseOldIBR2037
      );
      var spouseYearlyOldIBR2038 = getOldIbryear(
        spouseBalanceOldIBR2038,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt
      );
      jQuery("#spouseBalanceOldIBR2038").text(
        addCommas(Math.round(spouseBalanceOldIBR2038))
      );
      jQuery("#spouseYearlyOldIBR2038").text(
        addCommas(Math.round(spouseYearlyOldIBR2038))
      );

      if (spouseBalanceOldIBR2038 == "" || spouseBalanceOldIBR2038 == 0) {
        spouseOldIBR2038 = 0;
        spouseOldIBR2038Text = addCommas(
          Math.round(spouseOldIBR2038).toString()
        );
        jQuery("#spouseOldIBR2038").text(spouseOldIBR2038Text);
      }
      var spouseBalanceOldIBR2039 = getOldIbroverTime(
        spouseBalanceOldIBR2038,
        spouseYearlyOldIBR2038,
        spouseOldIBR2038
      );
      var spouseYearlyOldIBR2039 = getOldIbryear(
        spouseBalanceOldIBR2039,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt
      );
      jQuery("#spouseBalanceOldIBR2039").text(
        addCommas(Math.round(spouseBalanceOldIBR2039))
      );
      jQuery("#spouseYearlyOldIBR2039").text(
        addCommas(Math.round(spouseYearlyOldIBR2039))
      );

      if (spouseBalanceOldIBR2039 == "" || spouseBalanceOldIBR2039 == 0) {
        spouseOldIBR2039 = 0;
        spouseOldIBR2039Text = addCommas(
          Math.round(spouseOldIBR2039).toString()
        );
        jQuery("#spouseOldIBR2039").text(spouseOldIBR2039Text);
      }
      var spouseBalanceOldIBR2040 = getOldIbroverTime(
        spouseBalanceOldIBR2039,
        spouseYearlyOldIBR2039,
        spouseOldIBR2039
      );
      var spouseYearlyOldIBR2040 = getOldIbryear(
        spouseBalanceOldIBR2040,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt
      );
      jQuery("#spouseBalanceOldIBR2040").text(
        addCommas(Math.round(spouseBalanceOldIBR2040))
      );
      jQuery("#spouseYearlyOldIBR2040").text(
        addCommas(Math.round(spouseYearlyOldIBR2040))
      );

      if (spouseBalanceOldIBR2040 == "" || spouseBalanceOldIBR2040 == 0) {
        spouseOldIBR2040 = 0;
        spouseOldIBR2040Text = addCommas(
          Math.round(spouseOldIBR2040).toString()
        );
        jQuery("#spouseOldIBR2040").text(spouseOldIBR2040Text);
      }
      var spouseBalanceOldIBR2041 = getOldIbroverTime(
        spouseBalanceOldIBR2040,
        spouseYearlyOldIBR2040,
        spouseOldIBR2040
      );
      var spouseYearlyOldIBR2041 = getOldIbryear(
        spouseBalanceOldIBR2041,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt
      );
      jQuery("#spouseBalanceOldIBR2041").text(
        addCommas(Math.round(spouseBalanceOldIBR2041))
      );
      jQuery("#spouseYearlyOldIBR2041").text(
        addCommas(Math.round(spouseYearlyOldIBR2041))
      );

      if (spouseBalanceOldIBR2041 == "" || spouseBalanceOldIBR2041 == 0) {
        spouseOldIBR2041 = 0;
        spouseOldIBR2041Text = addCommas(
          Math.round(spouseOldIBR2041).toString()
        );
        jQuery("#spouseOldIBR2041").text(spouseOldIBR2041Text);
      }
      var spouseBalanceOldIBR2042 = getOldIbroverTime(
        spouseBalanceOldIBR2041,
        spouseYearlyOldIBR2041,
        spouseOldIBR2041
      );
      var spouseYearlyOldIBR2042 = getOldIbryear(
        spouseBalanceOldIBR2042,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt
      );
      jQuery("#spouseBalanceOldIBR2042").text(
        addCommas(Math.round(spouseBalanceOldIBR2042))
      );
      jQuery("#spouseYearlyOldIBR2042").text(
        addCommas(Math.round(spouseYearlyOldIBR2042))
      );

      if (spouseBalanceOldIBR2042 == "" || spouseBalanceOldIBR2042 == 0) {
        spouseOldIBR2042 = 0;
        spouseOldIBR2042Text = addCommas(
          Math.round(spouseOldIBR2042).toString()
        );
        jQuery("#spouseOldIBR2042").text(spouseOldIBR2042Text);
      }

      var spouseBalanceOldIBR2043 = getOldIbroverTime(
        spouseBalanceOldIBR2042,
        spouseYearlyOldIBR2042,
        spouseOldIBR2042
      );
      var spouseYearlyOldIBR2043 = getOldIbryear(
        spouseBalanceOldIBR2043,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt
      );
      jQuery("#spouseBalanceOldIBR2043").text(
        addCommas(Math.round(spouseBalanceOldIBR2043))
      );
      jQuery("#spouseYearlyOldIBR2043").text(
        addCommas(Math.round(spouseYearlyOldIBR2043))
      );

      if (spouseBalanceOldIBR2043 == "" || spouseBalanceOldIBR2043 == 0) {
        spouseOldIBR2043 = 0;
        spouseOldIBR2043Text = addCommas(
          Math.round(spouseOldIBR2043).toString()
        );
        jQuery("#spouseOldIBR2043").text(spouseOldIBR2043Text);
      }

      var spouseBalanceOldIBR2044 = getOldIbroverTime(
        spouseBalanceOldIBR2043,
        spouseYearlyOldIBR2043,
        spouseOldIBR2043
      );
      var spouseYearlyOldIBR2044 = getOldIbryear(
        spouseBalanceOldIBR2044,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt
      );
      jQuery("#spouseBalanceOldIBR2044").text(
        addCommas(Math.round(spouseBalanceOldIBR2044))
      );
      jQuery("#spouseYearlyOldIBR2044").text(
        addCommas(Math.round(spouseYearlyOldIBR2044))
      );

      if (spouseBalanceOldIBR2044 == "" || spouseBalanceOldIBR2044 == 0) {
        spouseOldIBR2044 = 0;
        spouseOldIBR2044Text = addCommas(
          Math.round(spouseOldIBR2044).toString()
        );
        jQuery("#spouseOldIBR2044").text(spouseOldIBR2044Text);
      }

      var spouseBalanceOldIBR2045 = getOldIbroverTime(
        spouseBalanceOldIBR2044,
        spouseYearlyOldIBR2044,
        spouseOldIBR2044
      );
      var spouseYearlyOldIBR2045 = getOldIbryear(
        spouseBalanceOldIBR2045,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt
      );
      jQuery("#spouseBalanceOldIBR2045").text(
        addCommas(Math.round(spouseBalanceOldIBR2045))
      );
      jQuery("#spouseYearlyOldIBR2045").text(
        addCommas(Math.round(spouseYearlyOldIBR2045))
      );

      if (spouseBalanceOldIBR2045 == "" || spouseBalanceOldIBR2045 == 0) {
        spouseOldIBR2045 = 0;
        spouseOldIBR2045Text = addCommas(
          Math.round(spouseOldIBR2045).toString()
        );
        jQuery("#spouseOldIBR2045").text(spouseOldIBR2045Text);
      }
    }

    //paye 2d and 3d
    if (1 === 1) {
      var balancePaye2020 = borrowFederalStudentLoansBefore
        ? "N/A"
        : federalStudentDebt;
      var yearlyPaye2020 = borrowFederalStudentLoansBefore
        ? "N/A"
        : federalStudentDebt * averageInterestRateOfAllDebt;
      jQuery("#balancePaye2020").text(
        balancePaye2020 !== "" && balancePaye2020 !== "N/A"
          ? addCommas(Math.round(balancePaye2020))
          : balancePaye2020
      );
      jQuery("#yearlyPaye2020").text(
        yearlyPaye2020 !== "" && yearlyPaye2020 !== "N/A"
          ? addCommas(Math.round(yearlyPaye2020))
          : yearlyPaye2020
      );

      var balancePaye2021 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeoverTime(
            Years[1],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            balancePaye2020,
            Paye2020,
            yearlyPaye2020
          );
      var yearlyPaye2021 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeyear(
            Years[1],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            balancePaye2021,
            federalStudentDebt,
            averageInterestRateOfAllDebt
          );
      jQuery("#balancePaye2021").text(
        balancePaye2021 !== "" && balancePaye2021 !== "N/A"
          ? addCommas(Math.round(balancePaye2021))
          : balancePaye2021
      );
      jQuery("#yearlyPaye2021").text(
        yearlyPaye2021 !== "" && yearlyPaye2021 !== "N/A"
          ? addCommas(Math.round(yearlyPaye2021))
          : yearlyPaye2021
      );

      var balancePaye2022 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeoverTime(
            Years[2],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            balancePaye2021,
            Paye2021,
            yearlyPaye2021
          );
      var yearlyPaye2022 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeyear(
            Years[2],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            balancePaye2022,
            federalStudentDebt,
            averageInterestRateOfAllDebt
          );
      jQuery("#balancePaye2022").text(
        balancePaye2022 !== "" && balancePaye2022 !== "N/A"
          ? addCommas(Math.round(balancePaye2022))
          : balancePaye2022
      );
      jQuery("#yearlyPaye2022").text(
        yearlyPaye2022 !== "" && yearlyPaye2022 !== "N/A"
          ? addCommas(Math.round(yearlyPaye2022))
          : yearlyPaye2022
      );

      var balancePaye2023 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeoverTime(
            Years[3],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            balancePaye2022,
            Paye2022,
            yearlyPaye2022
          );
      var yearlyPaye2023 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeyear(
            Years[3],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            balancePaye2023,
            federalStudentDebt,
            averageInterestRateOfAllDebt
          );
      jQuery("#balancePaye2023").text(
        balancePaye2023 !== "" && balancePaye2023 !== "N/A"
          ? addCommas(Math.round(balancePaye2023))
          : balancePaye2023
      );
      jQuery("#yearlyPaye2023").text(
        yearlyPaye2023 !== "" && yearlyPaye2023 !== "N/A"
          ? addCommas(Math.round(yearlyPaye2023))
          : yearlyPaye2023
      );

      var balancePaye2024 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeoverTime(
            Years[4],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            balancePaye2023,
            Paye2023,
            yearlyPaye2023
          );
      var yearlyPaye2024 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeyear(
            Years[4],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            balancePaye2024,
            federalStudentDebt,
            averageInterestRateOfAllDebt
          );
      jQuery("#balancePaye2024").text(
        balancePaye2024 !== "" && balancePaye2024 !== "N/A"
          ? addCommas(Math.round(balancePaye2024))
          : balancePaye2024
      );
      jQuery("#yearlyPaye2024").text(
        yearlyPaye2024 !== "" && yearlyPaye2024 !== "N/A"
          ? addCommas(Math.round(yearlyPaye2024))
          : yearlyPaye2024
      );

      var balancePaye2025 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeoverTime(
            Years[5],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            balancePaye2024,
            Paye2024,
            yearlyPaye2024
          );
      var yearlyPaye2025 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeyear(
            Years[5],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            balancePaye2025,
            federalStudentDebt,
            averageInterestRateOfAllDebt
          );
      jQuery("#balancePaye2025").text(
        balancePaye2025 !== "" && balancePaye2025 !== "N/A"
          ? addCommas(Math.round(balancePaye2025))
          : balancePaye2025
      );
      jQuery("#yearlyPaye2025").text(
        yearlyPaye2025 !== "" && yearlyPaye2025 !== "N/A"
          ? addCommas(Math.round(yearlyPaye2025))
          : yearlyPaye2025
      );

      var balancePaye2026 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeoverTime(
            Years[6],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            balancePaye2025,
            Paye2025,
            yearlyPaye2025
          );
      var yearlyPaye2026 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeyear(
            Years[6],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            balancePaye2026,
            federalStudentDebt,
            averageInterestRateOfAllDebt
          );
      jQuery("#balancePaye2026").text(
        balancePaye2026 !== "" && balancePaye2026 !== "N/A"
          ? addCommas(Math.round(balancePaye2026))
          : balancePaye2026
      );
      jQuery("#yearlyPaye2026").text(
        yearlyPaye2026 !== "" && yearlyPaye2021 !== "N/A"
          ? addCommas(Math.round(yearlyPaye2026))
          : yearlyPaye2026
      );

      var balancePaye2027 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeoverTime(
            Years[7],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            balancePaye2026,
            Paye2026,
            yearlyPaye2026
          );
      var yearlyPaye2027 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeyear(
            Years[7],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            balancePaye2027,
            federalStudentDebt,
            averageInterestRateOfAllDebt
          );
      jQuery("#balancePaye2027").text(
        balancePaye2027 !== "" && balancePaye2027 !== "N/A"
          ? addCommas(Math.round(balancePaye2027))
          : balancePaye2027
      );
      jQuery("#yearlyPaye2027").text(
        yearlyPaye2027 !== "" && yearlyPaye2027 !== "N/A"
          ? addCommas(Math.round(yearlyPaye2027))
          : yearlyPaye2027
      );

      var balancePaye2028 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeoverTime(
            Years[8],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            balancePaye2027,
            Paye2027,
            yearlyPaye2027
          );
      var yearlyPaye2028 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeyear(
            Years[8],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            balancePaye2028,
            federalStudentDebt,
            averageInterestRateOfAllDebt
          );
      jQuery("#balancePaye2028").text(
        balancePaye2028 !== "" && balancePaye2028 !== "N/A"
          ? addCommas(Math.round(balancePaye2028))
          : balancePaye2028
      );
      jQuery("#yearlyPaye2028").text(
        yearlyPaye2028 !== "" && yearlyPaye2028 !== "N/A"
          ? addCommas(Math.round(yearlyPaye2028))
          : yearlyPaye2028
      );

      var balancePaye2029 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeoverTime(
            Years[9],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            balancePaye2028,
            Paye2028,
            yearlyPaye2028
          );
      var yearlyPaye2029 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeyear(
            Years[9],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            balancePaye2029,
            federalStudentDebt,
            averageInterestRateOfAllDebt
          );
      jQuery("#balancePaye2029").text(
        balancePaye2029 !== "" && balancePaye2029 !== "N/A"
          ? addCommas(Math.round(balancePaye2029))
          : balancePaye2029
      );
      jQuery("#yearlyPaye2029").text(
        yearlyPaye2029 !== "" && yearlyPaye2029 !== "N/A"
          ? addCommas(Math.round(yearlyPaye2029))
          : yearlyPaye2029
      );

      var balancePaye2030 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeoverTime(
            Years[10],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            balancePaye2029,
            Paye2029,
            yearlyPaye2029
          );
      var yearlyPaye2030 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeyear(
            Years[10],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            balancePaye2030,
            federalStudentDebt,
            averageInterestRateOfAllDebt
          );
      jQuery("#balancePaye2030").text(
        balancePaye2030 !== "" && balancePaye2030 !== "N/A"
          ? addCommas(Math.round(balancePaye2030))
          : balancePaye2030
      );
      jQuery("#yearlyPaye2030").text(
        yearlyPaye2030 !== "" && yearlyPaye2030 !== "N/A"
          ? addCommas(Math.round(yearlyPaye2030))
          : yearlyPaye2030
      );

      if (balancePaye2030 == "" || balancePaye2030 == 0) {
        Paye2030 = 0;
        Paye2030Text = addCommas(Math.round(Paye2030).toString());
        jQuery("#monthlyPaymentPaye2030").text(
          borrowFederalStudentLoansBefore ? "N/A" : Paye2030Text
        );
      }

      var balancePaye2031 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeoverTime(
            Years[11],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            balancePaye2030,
            Paye2030,
            yearlyPaye2030
          );
      var yearlyPaye2031 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeyear(
            Years[11],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            balancePaye2031,
            federalStudentDebt,
            averageInterestRateOfAllDebt
          );
      jQuery("#balancePaye2031").text(
        balancePaye2031 !== "" && balancePaye2031 !== "N/A"
          ? addCommas(Math.round(balancePaye2031))
          : balancePaye2031
      );
      jQuery("#yearlyPaye2031").text(
        yearlyPaye2031 !== "" && yearlyPaye2031 !== "N/A"
          ? addCommas(Math.round(yearlyPaye2031))
          : yearlyPaye2031
      );

      if (balancePaye2031 == "" || balancePaye2031 == 0) {
        Paye2031 = 0;
        Paye2030Text = addCommas(Math.round(Paye2031).toString());
        jQuery("#monthlyPaymentPaye2031").text(
          borrowFederalStudentLoansBefore ? "N/A" : Paye2031Text
        );
      }

      var balancePaye2032 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeoverTime(
            Years[12],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            balancePaye2031,
            Paye2031,
            yearlyPaye2031
          );
      var yearlyPaye2032 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeyear(
            Years[12],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            balancePaye2032,
            federalStudentDebt,
            averageInterestRateOfAllDebt
          );
      jQuery("#balancePaye2032").text(
        balancePaye2032 !== "" && balancePaye2032 !== "N/A"
          ? addCommas(Math.round(balancePaye2032))
          : balancePaye2032
      );
      jQuery("#yearlyPaye2032").text(
        yearlyPaye2032 !== "" && yearlyPaye2032 !== "N/A"
          ? addCommas(Math.round(yearlyPaye2032))
          : yearlyPaye2032
      );

      if (balancePaye2032 == "" || balancePaye2032 == 0) {
        Paye2032 = 0;
        Paye2032Text = addCommas(Math.round(Paye2032).toString());
        jQuery("#monthlyPaymentPaye2032").text(
          borrowFederalStudentLoansBefore ? "N/A" : Paye2032Text
        );
      }

      var balancePaye2033 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeoverTime(
            Years[13],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            balancePaye2032,
            Paye2032,
            yearlyPaye2032
          );
      var yearlyPaye2033 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeyear(
            Years[13],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            balancePaye2033,
            federalStudentDebt,
            averageInterestRateOfAllDebt
          );
      jQuery("#balancePaye2033").text(
        balancePaye2033 !== "" && balancePaye2033 !== "N/A"
          ? addCommas(Math.round(balancePaye2033))
          : balancePaye2033
      );
      jQuery("#yearlyPaye2033").text(
        yearlyPaye2033 !== "" && yearlyPaye2033 !== "N/A"
          ? addCommas(Math.round(yearlyPaye2033))
          : yearlyPaye2033
      );

      if (balancePaye2033 == "" || balancePaye2033 == 0) {
        Paye2033 = 0;
        Paye2033Text = addCommas(Math.round(Paye2033).toString());
        jQuery("#monthlyPaymentPaye2033").text(
          borrowFederalStudentLoansBefore ? "N/A" : Paye2033Text
        );
      }

      var balancePaye2034 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeoverTime(
            Years[14],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            balancePaye2033,
            Paye2033,
            yearlyPaye2033
          );
      var yearlyPaye2034 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeyear(
            Years[14],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            balancePaye2034,
            federalStudentDebt,
            averageInterestRateOfAllDebt
          );
      jQuery("#balancePaye2034").text(
        balancePaye2034 !== "" && balancePaye2034 !== "N/A"
          ? addCommas(Math.round(balancePaye2034))
          : balancePaye2034
      );
      jQuery("#yearlyPaye2034").text(
        yearlyPaye2034 !== "" && yearlyPaye2034 !== "N/A"
          ? addCommas(Math.round(yearlyPaye2034))
          : yearlyPaye2034
      );

      if (balancePaye2034 == "" || balancePaye2034 == 0) {
        Paye2034 = 0;
        Paye2034Text = addCommas(Math.round(Paye2034).toString());
        jQuery("#monthlyPaymentPaye2034").text(
          borrowFederalStudentLoansBefore ? "N/A" : Paye2034Text
        );
      }

      var balancePaye2035 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeoverTime(
            Years[15],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            balancePaye2034,
            Paye2034,
            yearlyPaye2034
          );
      var yearlyPaye2035 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeyear(
            Years[15],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            balancePaye2035,
            federalStudentDebt,
            averageInterestRateOfAllDebt
          );
      jQuery("#balancePaye2035").text(
        balancePaye2035 !== "" && balancePaye2035 !== "N/A"
          ? addCommas(Math.round(balancePaye2035))
          : balancePaye2035
      );
      jQuery("#yearlyPaye2035").text(
        yearlyPaye2035 !== "" && yearlyPaye2035 !== "N/A"
          ? addCommas(Math.round(yearlyPaye2035))
          : yearlyPaye2035
      );

      if (balancePaye2035 == "" || balancePaye2035 == 0) {
        Paye2035 = 0;
        Paye2035Text = addCommas(Math.round(Paye2035).toString());
        jQuery("#monthlyPaymentPaye2035").text(
          borrowFederalStudentLoansBefore ? "N/A" : Paye2035Text
        );
      }

      var balancePaye2036 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeoverTime(
            Years[16],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            balancePaye2035,
            Paye2035,
            yearlyPaye2035
          );
      var yearlyPaye2036 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeyear(
            Years[16],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            balancePaye2036,
            federalStudentDebt,
            averageInterestRateOfAllDebt
          );
      jQuery("#balancePaye2036").text(
        balancePaye2036 !== "" && balancePaye2036 !== "N/A"
          ? addCommas(Math.round(balancePaye2036))
          : balancePaye2036
      );
      jQuery("#yearlyPaye2036").text(
        yearlyPaye2036 !== "" && yearlyPaye2036 !== "N/A"
          ? addCommas(Math.round(yearlyPaye2036))
          : yearlyPaye2036
      );

      if (balancePaye2036 == "" || balancePaye2036 == 0) {
        Paye2036 = 0;
        Paye2036Text = addCommas(Math.round(Paye2036).toString());
        jQuery("#monthlyPaymentPaye2036").text(
          borrowFederalStudentLoansBefore ? "N/A" : Paye2036Text
        );
      }

      var balancePaye2037 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeoverTime(
            Years[17],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            balancePaye2036,
            Paye2036,
            yearlyPaye2036
          );
      var yearlyPaye2037 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeyear(
            Years[17],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            balancePaye2037,
            federalStudentDebt,
            averageInterestRateOfAllDebt
          );
      jQuery("#balancePaye2037").text(
        balancePaye2037 !== "" && balancePaye2037 !== "N/A"
          ? addCommas(Math.round(balancePaye2037))
          : balancePaye2037
      );
      jQuery("#yearlyPaye2037").text(
        yearlyPaye2037 !== "" && yearlyPaye2037 !== "N/A"
          ? addCommas(Math.round(yearlyPaye2037))
          : yearlyPaye2037
      );

      if (balancePaye2037 == "" || balancePaye2037 == 0) {
        Paye2037 = 0;
        Paye2037Text = addCommas(Math.round(Paye2037).toString());
        jQuery("#monthlyPaymentPaye2037").text(
          borrowFederalStudentLoansBefore ? "N/A" : Paye2037Text
        );
      }

      var balancePaye2038 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeoverTime(
            Years[18],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            balancePaye2037,
            Paye2037,
            yearlyPaye2037
          );
      var yearlyPaye2038 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeyear(
            Years[18],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            balancePaye2038,
            federalStudentDebt,
            averageInterestRateOfAllDebt
          );
      jQuery("#balancePaye2038").text(
        balancePaye2038 !== "" && balancePaye2038 !== "N/A"
          ? addCommas(Math.round(balancePaye2038))
          : balancePaye2038
      );
      jQuery("#yearlyPaye2038").text(
        yearlyPaye2038 !== "" && yearlyPaye2038 !== "N/A"
          ? addCommas(Math.round(yearlyPaye2038))
          : yearlyPaye2038
      );

      if (balancePaye2038 == "" || balancePaye2038 == 0) {
        Paye2038 = 0;
        Paye2038Text = addCommas(Math.round(Paye2038).toString());
        jQuery("#monthlyPaymentPaye2038").text(
          borrowFederalStudentLoansBefore ? "N/A" : Paye2038Text
        );
      }

      var balancePaye2039 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeoverTime(
            Years[19],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            balancePaye2038,
            Paye2038,
            yearlyPaye2038
          );
      var yearlyPaye2039 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeyear(
            Years[19],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            balancePaye2039,
            federalStudentDebt,
            averageInterestRateOfAllDebt
          );
      jQuery("#balancePaye2039").text(
        balancePaye2039 !== "" && balancePaye2039 !== "N/A"
          ? addCommas(Math.round(balancePaye2039))
          : balancePaye2039
      );
      jQuery("#yearlyPaye2039").text(
        yearlyPaye2039 !== "" && yearlyPaye2039 !== "N/A"
          ? addCommas(Math.round(yearlyPaye2039))
          : yearlyPaye2039
      );

      if (balancePaye2039 == "" || balancePaye2039 == 0) {
        Paye2039 = 0;
        Paye2039Text = addCommas(Math.round(Paye2039).toString());
        jQuery("#monthlyPaymentPaye2039").text(
          borrowFederalStudentLoansBefore ? "N/A" : Paye2039Text
        );
      }

      var balancePaye2040 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeoverTime(
            Years[20],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            balancePaye2039,
            Paye2039,
            yearlyPaye2039
          );
      var yearlyPaye2040 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeyear(
            Years[20],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            balancePaye2040,
            federalStudentDebt,
            averageInterestRateOfAllDebt
          );
      jQuery("#balancePaye2040").text(
        balancePaye2040 !== "" && balancePaye2040 !== "N/A"
          ? addCommas(Math.round(balancePaye2040))
          : balancePaye2040
      );
      jQuery("#yearlyPaye2040").text(
        yearlyPaye2040 !== "" && yearlyPaye2040 !== "N/A"
          ? addCommas(Math.round(yearlyPaye2040))
          : yearlyPaye2040
      );
    }

    //paye 2d and 3d spouse
    if (1 === 1) {
      var spouseBalancePaye2020 = borrowFederalStudentLoansBefore
        ? "N/A"
        : federalStudentDebtDoesYourSpouseOwe;
      var spouseYearlyPaye2020 = borrowFederalStudentLoansBefore
        ? "N/A"
        : federalStudentDebtDoesYourSpouseOwe * averageInterestRateOfAllDebt;
      jQuery("#spouseBalancePaye2020").text(
        spouseBalancePaye2020 !== "" && spouseBalancePaye2020 !== "N/A"
          ? addCommas(Math.round(spouseBalancePaye2020))
          : balancePaye2020
      );
      jQuery("#spouseYearlyPaye2020").text(
        spouseYearlyPaye2020 !== "" && spouseYearlyPaye2020 !== "N/A"
          ? addCommas(Math.round(spouseYearlyPaye2020))
          : yearlyPaye2020
      );

      var spouseBalancePaye2021 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeoverTime(
            Years[1],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            spouseBalancePaye2020,
            spousePaye2020,
            spouseYearlyPaye2020
          );
      var spouseYearlyPaye2021 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeyear(
            Years[1],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            spouseBalancePaye2021,
            federalStudentDebtDoesYourSpouseOwe,
            averageInterestRateOfAllDebt
          );
      jQuery("#spouseBalancePaye2021").text(
        spouseBalancePaye2021 !== "" && spouseBalancePaye2021 !== "N/A"
          ? addCommas(Math.round(spouseBalancePaye2021))
          : balancePaye2021
      );
      jQuery("#spouseYearlyPaye2021").text(
        spouseYearlyPaye2021 !== "" && spouseYearlyPaye2021 !== "N/A"
          ? addCommas(Math.round(spouseYearlyPaye2021))
          : yearlyPaye2021
      );

      var spouseBalancePaye2022 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeoverTime(
            Years[2],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            spouseBalancePaye2021,
            PayeSpouse2021,
            spouseYearlyPaye2021
          );
      var spouseYearlyPaye2022 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeyear(
            Years[2],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            spouseBalancePaye2022,
            federalStudentDebtDoesYourSpouseOwe,
            averageInterestRateOfAllDebt
          );
      jQuery("#spouseBalancePaye2022").text(
        spouseBalancePaye2022 !== "" && spouseBalancePaye2022 !== "N/A"
          ? addCommas(Math.round(spouseBalancePaye2022))
          : balancePaye2022
      );
      jQuery("#spouseYearlyPaye2022").text(
        spouseYearlyPaye2022 !== "" && spouseYearlyPaye2022 !== "N/A"
          ? addCommas(Math.round(spouseYearlyPaye2022))
          : yearlyPaye2022
      );

      var spouseBalancePaye2023 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeoverTime(
            Years[3],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            spouseBalancePaye2022,
            PayeSpouse2022,
            spouseYearlyPaye2022
          );
      var spouseYearlyPaye2023 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeyear(
            Years[3],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            spouseBalancePaye2023,
            federalStudentDebtDoesYourSpouseOwe,
            averageInterestRateOfAllDebt
          );
      jQuery("#spouseBalancePaye2023").text(
        spouseBalancePaye2023 !== "" && spouseBalancePaye2023 !== "N/A"
          ? addCommas(Math.round(spouseBalancePaye2023))
          : balancePaye2023
      );
      jQuery("#spouseYearlyPaye2023").text(
        spouseYearlyPaye2023 !== "" && spouseYearlyPaye2023 !== "N/A"
          ? addCommas(Math.round(spouseYearlyPaye2023))
          : yearlyPaye2023
      );

      var spouseBalancePaye2024 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeoverTime(
            Years[4],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            spouseBalancePaye2023,
            PayeSpouse2023,
            spouseYearlyPaye2023
          );
      var spouseYearlyPaye2024 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeyear(
            Years[4],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            spouseBalancePaye2024,
            federalStudentDebtDoesYourSpouseOwe,
            averageInterestRateOfAllDebt
          );
      jQuery("#spouseBalancePaye2024").text(
        spouseBalancePaye2024 !== "" && spouseBalancePaye2024 !== "N/A"
          ? addCommas(Math.round(spouseBalancePaye2024))
          : balancePaye2024
      );
      jQuery("#spouseYearlyPaye2024").text(
        spouseYearlyPaye2024 !== "" && spouseYearlyPaye2024 !== "N/A"
          ? addCommas(Math.round(spouseYearlyPaye2024))
          : yearlyPaye2024
      );

      var spouseBalancePaye2025 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeoverTime(
            Years[5],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            spouseBalancePaye2024,
            PayeSpouse2024,
            spouseYearlyPaye2024
          );
      var spouseYearlyPaye2025 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeyear(
            Years[5],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            spouseBalancePaye2025,
            federalStudentDebtDoesYourSpouseOwe,
            averageInterestRateOfAllDebt
          );
      jQuery("#spouseBalancePaye2025").text(
        spouseBalancePaye2025 !== "" && spouseBalancePaye2025 !== "N/A"
          ? addCommas(Math.round(spouseBalancePaye2025))
          : balancePaye2025
      );
      jQuery("#spouseYearlyPaye2025").text(
        spouseYearlyPaye2025 !== "" && spouseYearlyPaye2025 !== "N/A"
          ? addCommas(Math.round(spouseYearlyPaye2025))
          : yearlyPaye2025
      );

      var spouseBalancePaye2026 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeoverTime(
            Years[6],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            spouseBalancePaye2025,
            PayeSpouse2025,
            spouseYearlyPaye2025
          );
      var spouseYearlyPaye2026 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeyear(
            Years[6],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            spouseBalancePaye2026,
            federalStudentDebtDoesYourSpouseOwe,
            averageInterestRateOfAllDebt
          );
      jQuery("#spouseBalancePaye2026").text(
        spouseBalancePaye2026 !== "" && spouseBalancePaye2026 !== "N/A"
          ? addCommas(Math.round(spouseBalancePaye2026))
          : balancePaye2026
      );
      jQuery("#spouseYearlyPaye2026").text(
        spouseYearlyPaye2026 !== "" && spouseYearlyPaye2021 !== "N/A"
          ? addCommas(Math.round(spouseYearlyPaye2026))
          : yearlyPaye2026
      );

      var spouseBalancePaye2027 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeoverTime(
            Years[7],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            spouseBalancePaye2026,
            PayeSpouse2026,
            spouseYearlyPaye2026
          );
      var spouseYearlyPaye2027 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeyear(
            Years[7],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            spouseBalancePaye2027,
            federalStudentDebtDoesYourSpouseOwe,
            averageInterestRateOfAllDebt
          );
      jQuery("#spouseBalancePaye2027").text(
        spouseBalancePaye2027 !== "" && spouseBalancePaye2027 !== "N/A"
          ? addCommas(Math.round(spouseBalancePaye2027))
          : balancePaye2027
      );
      jQuery("#spouseYearlyPaye2027").text(
        spouseYearlyPaye2027 !== "" && spouseYearlyPaye2027 !== "N/A"
          ? addCommas(Math.round(spouseYearlyPaye2027))
          : yearlyPaye2027
      );

      var spouseBalancePaye2028 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeoverTime(
            Years[8],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            spouseBalancePaye2027,
            PayeSpouse2027,
            spouseYearlyPaye2027
          );
      var spouseYearlyPaye2028 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeyear(
            Years[8],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            spouseBalancePaye2028,
            federalStudentDebtDoesYourSpouseOwe,
            averageInterestRateOfAllDebt
          );
      jQuery("#spouseBalancePaye2028").text(
        spouseBalancePaye2028 !== "" && spouseBalancePaye2028 !== "N/A"
          ? addCommas(Math.round(spouseBalancePaye2028))
          : balancePaye2028
      );
      jQuery("#spouseYearlyPaye2028").text(
        spouseYearlyPaye2028 !== "" && spouseYearlyPaye2028 !== "N/A"
          ? addCommas(Math.round(spouseYearlyPaye2028))
          : yearlyPaye2028
      );

      var spouseBalancePaye2029 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeoverTime(
            Years[9],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            spouseBalancePaye2028,
            PayeSpouse2028,
            spouseYearlyPaye2028
          );
      var spouseYearlyPaye2029 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeyear(
            Years[9],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            spouseBalancePaye2029,
            federalStudentDebtDoesYourSpouseOwe,
            averageInterestRateOfAllDebt
          );
      jQuery("#spouseBalancePaye2029").text(
        spouseBalancePaye2029 !== "" && spouseBalancePaye2029 !== "N/A"
          ? addCommas(Math.round(spouseBalancePaye2029))
          : balancePaye2029
      );
      jQuery("#spouseYearlyPaye2029").text(
        spouseYearlyPaye2029 !== "" && spouseYearlyPaye2029 !== "N/A"
          ? addCommas(Math.round(spouseYearlyPaye2029))
          : yearlyPaye2029
      );

      var spouseBalancePaye2030 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeoverTime(
            Years[10],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            spouseBalancePaye2029,
            PayeSpouse2029,
            spouseYearlyPaye2029
          );
      var spouseYearlyPaye2030 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeyear(
            Years[10],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            spouseBalancePaye2030,
            federalStudentDebtDoesYourSpouseOwe,
            averageInterestRateOfAllDebt
          );
      jQuery("#spouseBalancePaye2030").text(
        spouseBalancePaye2030 !== "" && spouseBalancePaye2030 !== "N/A"
          ? addCommas(Math.round(spouseBalancePaye2030))
          : balancePaye2030
      );
      jQuery("#spouseYearlyPaye2030").text(
        spouseYearlyPaye2030 !== "" && spouseYearlyPaye2030 !== "N/A"
          ? addCommas(Math.round(spouseYearlyPaye2030))
          : yearlyPaye2030
      );

      if (spouseBalancePaye2030 == "" || spouseBalancePaye2030 == 0) {
        PayeSpouse2030 = 0;
        PayeSpouse2030Text = addCommas(Math.round(PayeSpouse2030).toString());
        jQuery("#spousePaye2030").text(
          borrowFederalStudentLoansBefore ? "N/A" : PayeSpouse2030Text
        );
      }

      var spouseBalancePaye2031 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeoverTime(
            Years[11],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            spouseBalancePaye2030,
            PayeSpouse2030,
            spouseYearlyPaye2030
          );
      var spouseYearlyPaye2031 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeyear(
            Years[11],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            spouseBalancePaye2031,
            federalStudentDebtDoesYourSpouseOwe,
            averageInterestRateOfAllDebt
          );
      jQuery("#spouseBalancePaye2031").text(
        spouseBalancePaye2031 !== "" && spouseBalancePaye2031 !== "N/A"
          ? addCommas(Math.round(spouseBalancePaye2031))
          : balancePaye2031
      );
      jQuery("#spouseYearlyPaye2031").text(
        spouseYearlyPaye2031 !== "" && spouseYearlyPaye2031 !== "N/A"
          ? addCommas(Math.round(spouseYearlyPaye2031))
          : yearlyPaye2031
      );

      if (spouseBalancePaye2031 == "" || spouseBalancePaye2031 == 0) {
        PayeSpouse2031 = 0;
        PayeSpouse2031Text = addCommas(Math.round(PayeSpouse2031).toString());
        jQuery("#spousePaye2031").text(
          borrowFederalStudentLoansBefore ? "N/A" : PayeSpouse2031Text
        );
      }

      var spouseBalancePaye2032 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeoverTime(
            Years[12],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            spouseBalancePaye2031,
            PayeSpouse2031,
            spouseYearlyPaye2031
          );
      var spouseYearlyPaye2032 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeyear(
            Years[12],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            spouseBalancePaye2032,
            federalStudentDebtDoesYourSpouseOwe,
            averageInterestRateOfAllDebt
          );
      jQuery("#spouseBalancePaye2032").text(
        spouseBalancePaye2032 !== "" && spouseBalancePaye2032 !== "N/A"
          ? addCommas(Math.round(spouseBalancePaye2032))
          : balancePaye2032
      );
      jQuery("#spouseYearlyPaye2032").text(
        spouseYearlyPaye2032 !== "" && spouseYearlyPaye2032 !== "N/A"
          ? addCommas(Math.round(spouseYearlyPaye2032))
          : yearlyPaye2032
      );

      if (spouseBalancePaye2032 == "" || spouseBalancePaye2032 == 0) {
        PayeSpouse2032 = 0;
        PayeSpouse2032Text = addCommas(Math.round(PayeSpouse2032).toString());
        jQuery("#spousePaye2032").text(
          borrowFederalStudentLoansBefore ? "N/A" : PayeSpouse2032Text
        );
      }

      var spouseBalancePaye2033 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeoverTime(
            Years[13],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            spouseBalancePaye2032,
            PayeSpouse2032,
            spouseYearlyPaye2032
          );
      var spouseYearlyPaye2033 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeyear(
            Years[13],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            spouseBalancePaye2033,
            federalStudentDebtDoesYourSpouseOwe,
            averageInterestRateOfAllDebt
          );
      jQuery("#spouseBalancePaye2033").text(
        spouseBalancePaye2033 !== "" && spouseBalancePaye2033 !== "N/A"
          ? addCommas(Math.round(spouseBalancePaye2033))
          : balancePaye2033
      );
      jQuery("#spouseYearlyPaye2033").text(
        spouseYearlyPaye2033 !== "" && spouseYearlyPaye2033 !== "N/A"
          ? addCommas(Math.round(spouseYearlyPaye2033))
          : yearlyPaye2033
      );

      if (spouseBalancePaye2033 == "" || spouseBalancePaye2033 == 0) {
        PayeSpouse2033 = 0;
        PayeSpouse2033Text = addCommas(Math.round(PayeSpouse2033).toString());
        jQuery("#spousePaye2033").text(
          borrowFederalStudentLoansBefore ? "N/A" : PayeSpouse2033Text
        );
      }

      var spouseBalancePaye2034 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeoverTime(
            Years[14],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            spouseBalancePaye2033,
            PayeSpouse2033,
            spouseYearlyPaye2033
          );
      var spouseYearlyPaye2034 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeyear(
            Years[14],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            spouseBalancePaye2034,
            federalStudentDebtDoesYourSpouseOwe,
            averageInterestRateOfAllDebt
          );
      jQuery("#spouseBalancePaye2034").text(
        spouseBalancePaye2034 !== "" && spouseBalancePaye2034 !== "N/A"
          ? addCommas(Math.round(spouseBalancePaye2034))
          : balancePaye2034
      );
      jQuery("#spouseYearlyPaye2034").text(
        spouseYearlyPaye2034 !== "" && spouseYearlyPaye2034 !== "N/A"
          ? addCommas(Math.round(spouseYearlyPaye2034))
          : yearlyPaye2034
      );

      if (spouseBalancePaye2034 == "" || spouseBalancePaye2034 == 0) {
        PayeSpouse2034 = 0;
        PayeSpouse2034Text = addCommas(Math.round(PayeSpouse2034).toString());
        jQuery("#spousePaye2034").text(
          borrowFederalStudentLoansBefore ? "N/A" : PayeSpouse2034Text
        );
      }

      var spouseBalancePaye2035 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeoverTime(
            Years[15],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            spouseBalancePaye2034,
            PayeSpouse2034,
            spouseYearlyPaye2034
          );
      var spouseYearlyPaye2035 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeyear(
            Years[15],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            spouseBalancePaye2035,
            federalStudentDebtDoesYourSpouseOwe,
            averageInterestRateOfAllDebt
          );
      jQuery("#spouseBalancePaye2035").text(
        spouseBalancePaye2035 !== "" && spouseBalancePaye2035 !== "N/A"
          ? addCommas(Math.round(spouseBalancePaye2035))
          : balancePaye2035
      );
      jQuery("#spouseYearlyPaye2035").text(
        spouseYearlyPaye2035 !== "" && spouseYearlyPaye2035 !== "N/A"
          ? addCommas(Math.round(spouseYearlyPaye2035))
          : yearlyPaye2035
      );

      if (spouseBalancePaye2035 == "" || spouseBalancePaye2035 == 0) {
        PayeSpouse2035 = 0;
        PayeSpouse2035Text = addCommas(Math.round(PayeSpouse2035).toString());
        jQuery("#spousePaye2035").text(
          borrowFederalStudentLoansBefore ? "N/A" : PayeSpouse2035Text
        );
      }

      var spouseBalancePaye2036 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeoverTime(
            Years[16],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            spouseBalancePaye2035,
            PayeSpouse2035,
            spouseYearlyPaye2035
          );
      var spouseYearlyPaye2036 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeyear(
            Years[16],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            spouseBalancePaye2036,
            federalStudentDebtDoesYourSpouseOwe,
            averageInterestRateOfAllDebt
          );
      jQuery("#spouseBalancePaye2036").text(
        spouseBalancePaye2036 !== "" && spouseBalancePaye2036 !== "N/A"
          ? addCommas(Math.round(spouseBalancePaye2036))
          : balancePaye2036
      );
      jQuery("#spouseYearlyPaye2036").text(
        spouseYearlyPaye2036 !== "" && spouseYearlyPaye2036 !== "N/A"
          ? addCommas(Math.round(spouseYearlyPaye2036))
          : yearlyPaye2036
      );

      if (spouseBalancePaye2036 == "" || spouseBalancePaye2036 == 0) {
        PayeSpouse2036 = 0;
        PayeSpouse2036Text = addCommas(Math.round(PayeSpouse2036).toString());
        jQuery("#spousePaye2036").text(
          borrowFederalStudentLoansBefore ? "N/A" : PayeSpouse2036Text
        );
      }

      var spouseBalancePaye2037 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeoverTime(
            Years[17],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            spouseBalancePaye2036,
            PayeSpouse2036,
            spouseYearlyPaye2036
          );
      var spouseYearlyPaye2037 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeyear(
            Years[17],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            spouseBalancePaye2037,
            federalStudentDebtDoesYourSpouseOwe,
            averageInterestRateOfAllDebt
          );
      jQuery("#spouseBalancePaye2037").text(
        spouseBalancePaye2037 !== "" && spouseBalancePaye2037 !== "N/A"
          ? addCommas(Math.round(spouseBalancePaye2037))
          : balancePaye2037
      );
      jQuery("#spouseYearlyPaye2037").text(
        spouseYearlyPaye2037 !== "" && spouseYearlyPaye2037 !== "N/A"
          ? addCommas(Math.round(spouseYearlyPaye2037))
          : yearlyPaye2037
      );

      if (spouseBalancePaye2037 == "" || spouseBalancePaye2037 == 0) {
        PayeSpouse2037 = 0;
        PayeSpouse2037Text = addCommas(Math.round(PayeSpouse2037).toString());
        jQuery("#spousePaye2037").text(
          borrowFederalStudentLoansBefore ? "N/A" : PayeSpouse2037Text
        );
      }

      var spouseBalancePaye2038 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeoverTime(
            Years[18],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            spouseBalancePaye2037,
            PayeSpouse2037,
            spouseYearlyPaye2037
          );
      var spouseYearlyPaye2038 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeyear(
            Years[18],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            spouseBalancePaye2038,
            federalStudentDebtDoesYourSpouseOwe,
            averageInterestRateOfAllDebt
          );
      jQuery("#spouseBalancePaye2038").text(
        spouseBalancePaye2038 !== "" && spouseBalancePaye2038 !== "N/A"
          ? addCommas(Math.round(spouseBalancePaye2038))
          : balancePaye2038
      );
      jQuery("#spouseYearlyPaye2038").text(
        spouseYearlyPaye2038 !== "" && spouseYearlyPaye2038 !== "N/A"
          ? addCommas(Math.round(spouseYearlyPaye2038))
          : yearlyPaye2038
      );

      if (spouseBalancePaye2038 == "" || spouseBalancePaye2038 == 0) {
        PayeSpouse2038 = 0;
        PayeSpouse2038Text = addCommas(Math.round(PayeSpouse2038).toString());
        jQuery("#spousePaye2038").text(
          borrowFederalStudentLoansBefore ? "N/A" : PayeSpouse2038Text
        );
      }

      var spouseBalancePaye2039 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeoverTime(
            Years[19],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            spouseBalancePaye2038,
            PayeSpouse2038,
            spouseYearlyPaye2038
          );
      var spouseYearlyPaye2039 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeyear(
            Years[19],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            spouseBalancePaye2039,
            federalStudentDebtDoesYourSpouseOwe,
            averageInterestRateOfAllDebt
          );
      jQuery("#spouseBalancePaye2039").text(
        spouseBalancePaye2039 !== "" && spouseBalancePaye2039 !== "N/A"
          ? addCommas(Math.round(spouseBalancePaye2039))
          : balancePaye2039
      );
      jQuery("#spouseYearlyPaye2039").text(
        spouseYearlyPaye2039 !== "" && spouseYearlyPaye2039 !== "N/A"
          ? addCommas(Math.round(spouseYearlyPaye2039))
          : yearlyPaye2039
      );

      if (spouseBalancePaye2039 == "" || spouseBalancePaye2039 == 0) {
        PayeSpouse2039 = 0;
        PayeSpouse2039Text = addCommas(Math.round(PayeSpouse2039).toString());
        jQuery("#spousePaye2039").text(
          borrowFederalStudentLoansBefore ? "N/A" : PayeSpouse2039Text
        );
      }

      var spouseBalancePaye2040 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeoverTime(
            Years[20],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            spouseBalancePaye2039,
            PayeSpouse2039,
            spouseYearlyPaye2039
          );
      var spouseYearlyPaye2040 = borrowFederalStudentLoansBefore
        ? "N/A"
        : getPayeyear(
            Years[20],
            startEarningCreditTowards,
            borrowFederalStudentLoansBefore,
            spouseBalancePaye2040,
            federalStudentDebtDoesYourSpouseOwe,
            averageInterestRateOfAllDebt
          );
      jQuery("#spouseBalancePaye2040").text(
        spouseBalancePaye2040 !== "" && spouseBalancePaye2040 !== "N/A"
          ? addCommas(Math.round(spouseBalancePaye2040))
          : balancePaye2040
      );
      jQuery("#spouseYearlyPaye2040").text(
        spouseYearlyPaye2040 !== "" && spouseYearlyPaye2040 !== "N/A"
          ? addCommas(Math.round(spouseYearlyPaye2040))
          : yearlyPaye2040
      );
    }

    //Standart 10 year 2d and 3d

    if (1 === 1) {
      var balanceStandart2020 = federalStudentDebt;
      var yearlytandart2020 = federalStudentDebt * averageInterestRateOfAllDebt;
      jQuery("#balanceStandart2020").text(
        addCommas(Math.round(balanceStandart2020))
      );
      jQuery("#yearlytandart2020").text(
        addCommas(Math.round(yearlytandart2020))
      );

      var balanceStandart2021 = getStandartoverTime(
        balanceStandart2020,
        monthlyPaymentStandart,
        yearlytandart2020
      );
      var yearlytandart2021 =
        balanceStandart2021 * averageInterestRateOfAllDebt;
      jQuery("#balanceStandart2021").text(
        addCommas(Math.round(balanceStandart2021))
      );
      jQuery("#yearlytandart2021").text(
        addCommas(Math.round(yearlytandart2021))
      );

      var balanceStandart2022 = getStandartoverTime(
        balanceStandart2021,
        monthlyPaymentStandart,
        yearlytandart2021
      );
      var yearlytandart2022 =
        balanceStandart2022 * averageInterestRateOfAllDebt;
      jQuery("#balanceStandart2022").text(
        addCommas(Math.round(balanceStandart2022))
      );
      jQuery("#yearlytandart2022").text(
        addCommas(Math.round(yearlytandart2022))
      );

      var balanceStandart2023 = getStandartoverTime(
        balanceStandart2022,
        monthlyPaymentStandart,
        yearlytandart2022
      );
      var yearlytandart2023 =
        balanceStandart2023 * averageInterestRateOfAllDebt;
      jQuery("#balanceStandart2023").text(
        addCommas(Math.round(balanceStandart2023))
      );
      jQuery("#yearlytandart2023").text(
        addCommas(Math.round(yearlytandart2023))
      );

      var balanceStandart2024 = getStandartoverTime(
        balanceStandart2023,
        monthlyPaymentStandart,
        yearlytandart2023
      );
      var yearlytandart2024 =
        balanceStandart2024 * averageInterestRateOfAllDebt;
      jQuery("#balanceStandart2024").text(
        addCommas(Math.round(balanceStandart2024))
      );
      jQuery("#yearlytandart2024").text(
        addCommas(Math.round(yearlytandart2024))
      );

      var balanceStandart2025 = getStandartoverTime(
        balanceStandart2024,
        monthlyPaymentStandart,
        yearlytandart2024
      );
      var yearlytandart2025 =
        balanceStandart2025 * averageInterestRateOfAllDebt;
      jQuery("#balanceStandart2025").text(
        addCommas(Math.round(balanceStandart2025))
      );
      jQuery("#yearlytandart2025").text(
        addCommas(Math.round(yearlytandart2025))
      );

      var balanceStandart2026 = getStandartoverTime(
        balanceStandart2025,
        monthlyPaymentStandart,
        yearlytandart2025
      );
      var yearlytandart2026 =
        balanceStandart2026 * averageInterestRateOfAllDebt;
      jQuery("#balanceStandart2026").text(
        addCommas(Math.round(balanceStandart2026))
      );
      jQuery("#yearlytandart2026").text(
        addCommas(Math.round(yearlytandart2026))
      );

      var balanceStandart2027 = getStandartoverTime(
        balanceStandart2026,
        monthlyPaymentStandart,
        yearlytandart2026
      );
      var yearlytandart2027 =
        balanceStandart2027 * averageInterestRateOfAllDebt;
      jQuery("#balanceStandart2027").text(
        addCommas(Math.round(balanceStandart2027))
      );
      jQuery("#yearlytandart2027").text(
        addCommas(Math.round(yearlytandart2027))
      );

      var balanceStandart2028 = getStandartoverTime(
        balanceStandart2027,
        monthlyPaymentStandart,
        yearlytandart2027
      );
      var yearlytandart2028 =
        balanceStandart2028 * averageInterestRateOfAllDebt;
      jQuery("#balanceStandart2028").text(
        addCommas(Math.round(balanceStandart2028))
      );
      jQuery("#yearlytandart2028").text(
        addCommas(Math.round(yearlytandart2028))
      );

      var balanceStandart2029 = getStandartoverTime(
        balanceStandart2028,
        monthlyPaymentStandart,
        yearlytandart2028
      );
      var yearlytandart2029 =
        balanceStandart2029 * averageInterestRateOfAllDebt;
      jQuery("#balanceStandart2029").text(
        addCommas(Math.round(balanceStandart2029))
      );
      jQuery("#yearlytandart2029").text(
        addCommas(Math.round(yearlytandart2029))
      );

      var balanceStandart2030 = getStandartoverTime(
        balanceStandart2029,
        monthlyPaymentStandart,
        yearlytandart2029
      );
      var yearlytandart2030 =
        balanceStandart2030 * averageInterestRateOfAllDebt;
      jQuery("#balanceStandart2030").text(
        addCommas(Math.round(balanceStandart2030))
      );
      jQuery("#yearlytandart2030").text(
        addCommas(Math.round(yearlytandart2030))
      );
    }

    //Standart 10 year 2d and 3d spouse

    if (1 === 1) {
      var spouseBalanceStandart2020 = federalStudentDebtDoesYourSpouseOwe;
      var spouseYearlytandart2020 =
        federalStudentDebtDoesYourSpouseOwe * averageInterestRateOfAllDebt;
      jQuery("#spouseBalanceStandart2020").text(
        addCommas(Math.round(spouseBalanceStandart2020))
      );
      jQuery("#spouseYearlytandart2020").text(
        addCommas(Math.round(spouseYearlytandart2020))
      );

      var spouseBalanceStandart2021 = getStandartoverTime(
        spouseBalanceStandart2020,
        spouseStandart,
        spouseYearlytandart2020
      );
      var spouseYearlytandart2021 =
        spouseBalanceStandart2021 * averageInterestRateOfAllDebt;
      jQuery("#spouseBalanceStandart2021").text(
        addCommas(Math.round(spouseBalanceStandart2021))
      );
      jQuery("#spouseYearlytandart2021").text(
        addCommas(Math.round(spouseYearlytandart2021))
      );

      var spouseBalanceStandart2022 = getStandartoverTime(
        spouseBalanceStandart2021,
        spouseStandart,
        spouseYearlytandart2021
      );
      var spouseYearlytandart2022 =
        spouseBalanceStandart2022 * averageInterestRateOfAllDebt;
      jQuery("#spouseBalanceStandart2022").text(
        addCommas(Math.round(spouseBalanceStandart2022))
      );
      jQuery("#spouseYearlytandart2022").text(
        addCommas(Math.round(spouseYearlytandart2022))
      );

      var spouseBalanceStandart2023 = getStandartoverTime(
        spouseBalanceStandart2022,
        spouseStandart,
        spouseYearlytandart2022
      );
      var spouseYearlytandart2023 =
        spouseBalanceStandart2023 * averageInterestRateOfAllDebt;
      jQuery("#spouseBalanceStandart2023").text(
        addCommas(Math.round(spouseBalanceStandart2023))
      );
      jQuery("#spouseYearlytandart2023").text(
        addCommas(Math.round(spouseYearlytandart2023))
      );

      var spouseBalanceStandart2024 = getStandartoverTime(
        spouseBalanceStandart2023,
        spouseStandart,
        spouseYearlytandart2023
      );
      var spouseYearlytandart2024 =
        spouseBalanceStandart2024 * averageInterestRateOfAllDebt;
      jQuery("#spouseBalanceStandart2024").text(
        addCommas(Math.round(spouseBalanceStandart2024))
      );
      jQuery("#spouseYearlytandart2024").text(
        addCommas(Math.round(spouseYearlytandart2024))
      );

      var spouseBalanceStandart2025 = getStandartoverTime(
        spouseBalanceStandart2024,
        spouseStandart,
        spouseYearlytandart2024
      );
      var spouseYearlytandart2025 =
        spouseBalanceStandart2025 * averageInterestRateOfAllDebt;
      jQuery("#spouseBalanceStandart2025").text(
        addCommas(Math.round(spouseBalanceStandart2025))
      );
      jQuery("#spouseYearlytandart2025").text(
        addCommas(Math.round(spouseYearlytandart2025))
      );

      var spouseBalanceStandart2026 = getStandartoverTime(
        spouseBalanceStandart2025,
        spouseStandart,
        spouseYearlytandart2025
      );
      var spouseYearlytandart2026 =
        spouseBalanceStandart2026 * averageInterestRateOfAllDebt;
      jQuery("#spouseBalanceStandart2026").text(
        addCommas(Math.round(spouseBalanceStandart2026))
      );
      jQuery("#spouseYearlytandart2026").text(
        addCommas(Math.round(spouseYearlytandart2026))
      );

      var spouseBalanceStandart2027 = getStandartoverTime(
        spouseBalanceStandart2026,
        spouseStandart,
        spouseYearlytandart2026
      );
      var spouseYearlytandart2027 =
        spouseBalanceStandart2027 * averageInterestRateOfAllDebt;
      jQuery("#spouseBalanceStandart2027").text(
        addCommas(Math.round(spouseBalanceStandart2027))
      );
      jQuery("#spouseYearlytandart2027").text(
        addCommas(Math.round(spouseYearlytandart2027))
      );

      var spouseBalanceStandart2028 = getStandartoverTime(
        spouseBalanceStandart2027,
        spouseStandart,
        spouseYearlytandart2027
      );
      var spouseYearlytandart2028 =
        spouseBalanceStandart2028 * averageInterestRateOfAllDebt;
      jQuery("#spouseBalanceStandart2028").text(
        addCommas(Math.round(spouseBalanceStandart2028))
      );
      jQuery("#spouseYearlytandart2028").text(
        addCommas(Math.round(spouseYearlytandart2028))
      );

      var spouseBalanceStandart2029 = getStandartoverTime(
        spouseBalanceStandart2028,
        spouseStandart,
        spouseYearlytandart2028
      );
      var spouseYearlytandart2029 =
        spouseBalanceStandart2029 * averageInterestRateOfAllDebt;
      jQuery("#spouseBalanceStandart2029").text(
        addCommas(Math.round(spouseBalanceStandart2029))
      );
      jQuery("#spouseYearlytandart2029").text(
        addCommas(Math.round(spouseYearlytandart2029))
      );

      var spouseBalanceStandart2030 = getStandartoverTime(
        spouseBalanceStandart2029,
        spouseStandart,
        spouseYearlytandart2029
      );
      var spouseYearlytandart2030 =
        spouseBalanceStandart2030 * averageInterestRateOfAllDebt;
      jQuery("#spouseBalanceStandart2030").text(
        addCommas(Math.round(spouseBalanceStandart2030))
      );
      jQuery("#spouseYearlytandart2030").text(
        addCommas(Math.round(spouseYearlytandart2030))
      );
    }

    //repaye 2d and 3d

    if (1 === 1) {
      var balanceRepaye = [];

      var balanceRepaye2020 = federalStudentDebt;
      var yearlyRepaye2020 = getRepayeyear(
        balanceRepaye2020,
        federalStudentDebt,
        averageInterestRateOfAllDebt,
        monthlyPaymentRepayeCurrentYear,
        yearlytandart2020
      );
      jQuery("#balanceRepaye2020").text(
        addCommas(Math.round(balanceRepaye2020))
      );
      jQuery("#yearlyRepaye2020").text(addCommas(Math.round(yearlyRepaye2020)));
      balanceRepaye[Years[0]] = balanceRepaye2020;

      var balanceRepaye2021 = getRepayeoverTime(
        balanceRepaye2020,
        monthlyPaymentRepayeCurrentYear,
        yearlyRepaye2020
      );
      var yearlyRepaye2021 = getRepayeyear(
        balanceRepaye2021,
        federalStudentDebt,
        averageInterestRateOfAllDebt,
        monthlyPaymentRepaye2021,
        yearlytandart2020
      );
      jQuery("#balanceRepaye2021").text(
        addCommas(Math.round(balanceRepaye2021))
      );
      jQuery("#yearlyRepaye2021").text(addCommas(Math.round(yearlyRepaye2021)));
      balanceRepaye[Years[1]] = balanceRepaye2021;

      var balanceRepaye2022 = getRepayeoverTime(
        balanceRepaye2021,
        monthlyPaymentRepaye2021,
        yearlyRepaye2021
      );
      var yearlyRepaye2022 = getRepayeyear(
        balanceRepaye2022,
        federalStudentDebt,
        averageInterestRateOfAllDebt,
        monthlyPaymentRepaye2022,
        yearlytandart2020
      );
      jQuery("#balanceRepaye2022").text(
        addCommas(Math.round(balanceRepaye2022))
      );
      jQuery("#yearlyRepaye2022").text(addCommas(Math.round(yearlyRepaye2022)));
      balanceRepaye[Years[2]] = balanceRepaye2021;

      var balanceRepaye2023 = getRepayeoverTime(
        balanceRepaye2022,
        monthlyPaymentRepaye2022,
        yearlyRepaye2022
      );
      var yearlyRepaye2023 = getRepayeyear(
        balanceRepaye2023,
        federalStudentDebt,
        averageInterestRateOfAllDebt,
        monthlyPaymentRepaye2023,
        yearlytandart2020
      );
      jQuery("#balanceRepaye2023").text(
        addCommas(Math.round(balanceRepaye2023))
      );
      jQuery("#yearlyRepaye2023").text(addCommas(Math.round(yearlyRepaye2023)));
      balanceRepaye[Years[3]] = balanceRepaye2023;

      var balanceRepaye2024 = getRepayeoverTime(
        balanceRepaye2023,
        monthlyPaymentRepaye2023,
        yearlyRepaye2023
      );
      var yearlyRepaye2024 = getRepayeyear(
        balanceRepaye2024,
        federalStudentDebt,
        averageInterestRateOfAllDebt,
        monthlyPaymentRepaye2024,
        yearlytandart2020
      );
      jQuery("#balanceRepaye2024").text(
        addCommas(Math.round(balanceRepaye2024))
      );
      jQuery("#yearlyRepaye2024").text(addCommas(Math.round(yearlyRepaye2024)));
      balanceRepaye[Years[4]] = balanceRepaye2024;

      var balanceRepaye2025 = getRepayeoverTime(
        balanceRepaye2024,
        monthlyPaymentRepaye2024,
        yearlyRepaye2024
      );
      var yearlyRepaye2025 = getRepayeyear(
        balanceRepaye2025,
        federalStudentDebt,
        averageInterestRateOfAllDebt,
        monthlyPaymentRepaye2025,
        yearlytandart2020
      );
      jQuery("#balanceRepaye2025").text(
        addCommas(Math.round(balanceRepaye2025))
      );
      jQuery("#yearlyRepaye2025").text(addCommas(Math.round(yearlyRepaye2025)));
      balanceRepaye[Years[5]] = balanceRepaye2025;

      var balanceRepaye2026 = getRepayeoverTime(
        balanceRepaye2025,
        monthlyPaymentRepaye2025,
        yearlyRepaye2025
      );
      var yearlyRepaye2026 = getRepayeyear(
        balanceRepaye2026,
        federalStudentDebt,
        averageInterestRateOfAllDebt,
        monthlyPaymentRepaye2026,
        yearlytandart2020
      );
      jQuery("#balanceRepaye2026").text(
        addCommas(Math.round(balanceRepaye2026))
      );
      jQuery("#yearlyRepaye2026").text(addCommas(Math.round(yearlyRepaye2026)));
      balanceRepaye[Years[6]] = balanceRepaye2026;

      var balanceRepaye2027 = getRepayeoverTime(
        balanceRepaye2026,
        monthlyPaymentRepaye2026,
        yearlyRepaye2026
      );
      var yearlyRepaye2027 = getRepayeyear(
        balanceRepaye2027,
        federalStudentDebt,
        averageInterestRateOfAllDebt,
        monthlyPaymentRepaye2027,
        yearlytandart2020
      );
      jQuery("#balanceRepaye2027").text(
        addCommas(Math.round(balanceRepaye2027))
      );
      jQuery("#yearlyRepaye2027").text(addCommas(Math.round(yearlyRepaye2027)));
      balanceRepaye[Years[7]] = balanceRepaye2027;

      var balanceRepaye2028 = getRepayeoverTime(
        balanceRepaye2027,
        monthlyPaymentRepaye2027,
        yearlyRepaye2027
      );
      var yearlyRepaye2028 = getRepayeyear(
        balanceRepaye2028,
        federalStudentDebt,
        averageInterestRateOfAllDebt,
        monthlyPaymentRepaye2028,
        yearlytandart2020
      );
      jQuery("#balanceRepaye2028").text(
        addCommas(Math.round(balanceRepaye2028))
      );
      jQuery("#yearlyRepaye2028").text(addCommas(Math.round(yearlyRepaye2028)));
      balanceRepaye[Years[8]] = balanceRepaye2028;

      var balanceRepaye2029 = getRepayeoverTime(
        balanceRepaye2028,
        monthlyPaymentRepaye2028,
        yearlyRepaye2028
      );
      var yearlyRepaye2029 = getRepayeyear(
        balanceRepaye2029,
        federalStudentDebt,
        averageInterestRateOfAllDebt,
        monthlyPaymentRepaye2029,
        yearlytandart2020
      );
      jQuery("#balanceRepaye2029").text(
        addCommas(Math.round(balanceRepaye2029))
      );
      jQuery("#yearlyRepaye2029").text(addCommas(Math.round(yearlyRepaye2029)));

      balanceRepaye[Years[9]] = balanceRepaye2029;

      var balanceRepaye2030 = getRepayeoverTime(
        balanceRepaye2029,
        monthlyPaymentRepaye2029,
        yearlyRepaye2029,
        Years[10],
        startEarningCreditTowards
      );
      var yearlyRepaye2030 = getRepayeyear(
        balanceRepaye2030,
        federalStudentDebt,
        averageInterestRateOfAllDebt,
        monthlyPaymentRepaye2030,
        yearlytandart2020
      );
      jQuery("#balanceRepaye2030").text(
        addCommas(Math.round(balanceRepaye2030))
      );
      jQuery("#yearlyRepaye2030").text(addCommas(Math.round(yearlyRepaye2030)));
      balanceRepaye[Years[10]] = balanceRepaye2030;

      if (balanceRepaye2030 == "" || balanceRepaye2030 == 0) {
        monthlyPaymentRepaye2030 = 0;
        monthlyPaymentRepaye2030Text = addCommas(
          Math.round(monthlyPaymentRepaye2030).toString()
        );
        jQuery("#monthlyPaymentRepaye2030").text(monthlyPaymentRepaye2030Text);
      }

      var balanceRepaye2031 = getRepayeoverTime(
        balanceRepaye2030,
        monthlyPaymentRepaye2030,
        yearlyRepaye2030,
        Years[11],
        startEarningCreditTowards
      );
      var yearlyRepaye2031 = getRepayeyear(
        balanceRepaye2031,
        federalStudentDebt,
        averageInterestRateOfAllDebt,
        monthlyPaymentRepaye2031,
        yearlytandart2020
      );
      jQuery("#balanceRepaye2031").text(
        addCommas(Math.round(balanceRepaye2031))
      );
      jQuery("#yearlyRepaye2031").text(addCommas(Math.round(yearlyRepaye2031)));
      balanceRepaye[Years[11]] = balanceRepaye2031;

      if (balanceRepaye2031 == "" || balanceRepaye2031 == 0) {
        monthlyPaymentRepaye2031 = 0;
        monthlyPaymentRepaye2031Text = addCommas(
          Math.round(monthlyPaymentRepaye2031).toString()
        );
        jQuery("#monthlyPaymentRepaye2031").text(monthlyPaymentRepaye2031Text);
      }

      var balanceRepaye2032 = getRepayeoverTime(
        balanceRepaye2031,
        monthlyPaymentRepaye2031,
        yearlyRepaye2031,
        Years[12],
        startEarningCreditTowards
      );
      var yearlyRepaye2032 = getRepayeyear(
        balanceRepaye2032,
        federalStudentDebt,
        averageInterestRateOfAllDebt,
        monthlyPaymentRepaye2032,
        yearlytandart2020
      );
      jQuery("#balanceRepaye2032").text(
        addCommas(Math.round(balanceRepaye2032))
      );
      jQuery("#yearlyRepaye2032").text(addCommas(Math.round(yearlyRepaye2032)));
      balanceRepaye[Years[12]] = balanceRepaye2032;

      if (balanceRepaye2032 == "" || balanceRepaye2032 == 0) {
        monthlyPaymentRepaye2032 = 0;
        monthlyPaymentRepaye2032Text = addCommas(
          Math.round(monthlyPaymentRepaye2032).toString()
        );
        jQuery("#monthlyPaymentRepaye2032").text(monthlyPaymentRepaye2032Text);
      }

      var balanceRepaye2033 = getRepayeoverTime(
        balanceRepaye2032,
        monthlyPaymentRepaye2032,
        yearlyRepaye2032,
        Years[13],
        startEarningCreditTowards
      );
      var yearlyRepaye2033 = getRepayeyear(
        balanceRepaye2033,
        federalStudentDebt,
        averageInterestRateOfAllDebt,
        monthlyPaymentRepaye2033,
        yearlytandart2020
      );
      jQuery("#balanceRepaye2033").text(
        addCommas(Math.round(balanceRepaye2033))
      );
      jQuery("#yearlyRepaye2033").text(addCommas(Math.round(yearlyRepaye2033)));
      balanceRepaye[Years[23]] = balanceRepaye2033;

      if (balanceRepaye2033 == "" || balanceRepaye2033 == 0) {
        monthlyPaymentRepaye2033 = 0;
        monthlyPaymentRepaye2033Text = addCommas(
          Math.round(monthlyPaymentRepaye2033).toString()
        );
        jQuery("#monthlyPaymentRepaye2033").text(monthlyPaymentRepaye2033Text);
      }

      var balanceRepaye2034 = getRepayeoverTime(
        balanceRepaye2033,
        monthlyPaymentRepaye2033,
        yearlyRepaye2033,
        Years[14],
        startEarningCreditTowards
      );
      var yearlyRepaye2034 = getRepayeyear(
        balanceRepaye2034,
        federalStudentDebt,
        averageInterestRateOfAllDebt,
        monthlyPaymentRepaye2034,
        yearlytandart2020
      );
      jQuery("#balanceRepaye2034").text(
        addCommas(Math.round(balanceRepaye2034))
      );
      jQuery("#yearlyRepaye2034").text(addCommas(Math.round(yearlyRepaye2034)));
      balanceRepaye[Years[14]] = balanceRepaye2034;

      if (balanceRepaye2034 == "" || balanceRepaye2034 == 0) {
        monthlyPaymentRepaye2034 = 0;
        monthlyPaymentRepaye2034Text = addCommas(
          Math.round(monthlyPaymentRepaye2034).toString()
        );
        jQuery("#monthlyPaymentRepaye2034").text(monthlyPaymentRepaye2034Text);
      }

      var balanceRepaye2035 = getRepayeoverTime(
        balanceRepaye2034,
        monthlyPaymentRepaye2034,
        yearlyRepaye2034,
        Years[15],
        startEarningCreditTowards
      );
      var yearlyRepaye2035 = getRepayeyear(
        balanceRepaye2035,
        federalStudentDebt,
        averageInterestRateOfAllDebt,
        monthlyPaymentRepaye2035,
        yearlytandart2020
      );
      jQuery("#balanceRepaye2035").text(
        addCommas(Math.round(balanceRepaye2035))
      );
      jQuery("#yearlyRepaye2035").text(addCommas(Math.round(yearlyRepaye2035)));
      balanceRepaye[Years[15]] = balanceRepaye2035;

      if (balanceRepaye2035 == "" || balanceRepaye2035 == 0) {
        monthlyPaymentRepaye2035 = 0;
        monthlyPaymentRepaye2035Text = addCommas(
          Math.round(monthlyPaymentRepaye2035).toString()
        );
        jQuery("#monthlyPaymentRepaye2035").text(monthlyPaymentRepaye2035Text);
      }

      var balanceRepaye2036 = getRepayeoverTime(
        balanceRepaye2035,
        monthlyPaymentRepaye2035,
        yearlyRepaye2035,
        Years[16],
        startEarningCreditTowards
      );
      var yearlyRepaye2036 = getRepayeyear(
        balanceRepaye2036,
        federalStudentDebt,
        averageInterestRateOfAllDebt,
        monthlyPaymentRepaye2035,
        yearlytandart2020
      );
      jQuery("#balanceRepaye2036").text(
        addCommas(Math.round(balanceRepaye2036))
      );
      jQuery("#yearlyRepaye2036").text(addCommas(Math.round(yearlyRepaye2036)));
      balanceRepaye[Years[16]] = balanceRepaye2036;

      if (balanceRepaye2036 == "" || balanceRepaye2036 == 0) {
        monthlyPaymentRepaye2036 = 0;
        monthlyPaymentRepaye2036Text = addCommas(
          Math.round(monthlyPaymentRepaye2036).toString()
        );
        jQuery("#monthlyPaymentRepaye2036").text(monthlyPaymentRepaye2036Text);
      }

      var balanceRepaye2037 = getRepayeoverTime(
        balanceRepaye2036,
        monthlyPaymentRepaye2036,
        yearlyRepaye2036,
        Years[17],
        startEarningCreditTowards
      );
      var yearlyRepaye2037 = getRepayeyear(
        balanceRepaye2037,
        federalStudentDebt,
        averageInterestRateOfAllDebt,
        monthlyPaymentRepaye2037,
        yearlytandart2020
      );
      jQuery("#balanceRepaye2037").text(
        addCommas(Math.round(balanceRepaye2037))
      );
      jQuery("#yearlyRepaye2037").text(addCommas(Math.round(yearlyRepaye2037)));
      balanceRepaye[Years[17]] = balanceRepaye2037;

      if (balanceRepaye2037 == "" || balanceRepaye2037 == 0) {
        monthlyPaymentRepaye2037 = 0;
        monthlyPaymentRepaye2037Text = addCommas(
          Math.round(monthlyPaymentRepaye2037).toString()
        );
        jQuery("#monthlyPaymentRepaye2037").text(monthlyPaymentRepaye2037Text);
      }

      var balanceRepaye2038 = getRepayeoverTime(
        balanceRepaye2037,
        monthlyPaymentRepaye2037,
        yearlyRepaye2037,
        Years[18],
        startEarningCreditTowards
      );
      var yearlyRepaye2038 = getRepayeyear(
        balanceRepaye2038,
        federalStudentDebt,
        averageInterestRateOfAllDebt,
        monthlyPaymentRepaye2038,
        yearlytandart2020
      );
      jQuery("#balanceRepaye2038").text(
        addCommas(Math.round(balanceRepaye2038))
      );
      jQuery("#yearlyRepaye2038").text(addCommas(Math.round(yearlyRepaye2038)));
      balanceRepaye[Years[18]] = balanceRepaye2038;

      if (balanceRepaye2038 == "" || balanceRepaye2038 == 0) {
        monthlyPaymentRepaye2038 = 0;
        monthlyPaymentRepaye2038Text = addCommas(
          Math.round(monthlyPaymentRepaye2038).toString()
        );
        jQuery("#monthlyPaymentRepaye2038").text(monthlyPaymentRepaye2038Text);
      }

      var balanceRepaye2039 = getRepayeoverTime(
        balanceRepaye2038,
        monthlyPaymentRepaye2038,
        yearlyRepaye2038,
        Years[19],
        startEarningCreditTowards
      );
      var yearlyRepaye2039 = getRepayeyear(
        balanceRepaye2039,
        federalStudentDebt,
        averageInterestRateOfAllDebt,
        monthlyPaymentRepaye2039,
        yearlytandart2020
      );
      jQuery("#balanceRepaye2039").text(
        addCommas(Math.round(balanceRepaye2039))
      );
      jQuery("#yearlyRepaye2039").text(addCommas(Math.round(yearlyRepaye2039)));
      balanceRepaye[Years[19]] = balanceRepaye2039;

      if (balanceRepaye2039 == "" || balanceRepaye2039 == 0) {
        monthlyPaymentRepaye2039 = 0;
        monthlyPaymentRepaye2039Text = addCommas(
          Math.round(monthlyPaymentRepaye2039).toString()
        );
        jQuery("#monthlyPaymentRepaye2039").text(monthlyPaymentRepaye2039Text);
      }

      var balanceRepaye2040 = getRepayeoverTime(
        balanceRepaye2039,
        monthlyPaymentRepaye2039,
        yearlyRepaye2039,
        Years[20],
        startEarningCreditTowards
      );
      var yearlyRepaye2040 = getRepayeyear(
        balanceRepaye2040,
        federalStudentDebt,
        averageInterestRateOfAllDebt,
        monthlyPaymentRepaye2040,
        yearlytandart2020
      );
      jQuery("#balanceRepaye2040").text(
        addCommas(Math.round(balanceRepaye2040))
      );
      jQuery("#yearlyRepaye2040").text(addCommas(Math.round(yearlyRepaye2040)));
      balanceRepaye[Years[20]] = balanceRepaye2040;

      if (balanceRepaye2040 == "" || balanceRepaye2040 == 0) {
        monthlyPaymentRepaye2040 = 0;
        monthlyPaymentRepaye2040Text = addCommas(
          Math.round(monthlyPaymentRepaye2040).toString()
        );
        jQuery("#monthlyPaymentRepaye2040").text(monthlyPaymentRepaye2040Text);
      }

      var balanceRepaye2041 = getRepayeoverTime(
        balanceRepaye2040,
        monthlyPaymentRepaye2040,
        yearlyRepaye2040,
        Years[21],
        startEarningCreditTowards
      );
      var yearlyRepaye2041 = getRepayeyear(
        balanceRepaye2041,
        federalStudentDebt,
        averageInterestRateOfAllDebt,
        monthlyPaymentRepaye2041,
        yearlytandart2020
      );
      jQuery("#balanceRepaye2041").text(
        addCommas(Math.round(balanceRepaye2041))
      );
      jQuery("#yearlyRepaye2041").text(addCommas(Math.round(yearlyRepaye2041)));
      balanceRepaye[Years[21]] = balanceRepaye2041;

      if (balanceRepaye2041 == "" || balanceRepaye2041 == 0) {
        monthlyPaymentRepaye2041 = 0;
        monthlyPaymentRepaye2041Text = addCommas(
          Math.round(monthlyPaymentRepaye2041).toString()
        );
        jQuery("#monthlyPaymentRepaye2041").text(monthlyPaymentRepaye2041Text);
      }

      var balanceRepaye2042 = getRepayeoverTime(
        balanceRepaye2041,
        monthlyPaymentRepaye2041,
        yearlyRepaye2041,
        Years[22],
        startEarningCreditTowards
      );
      var yearlyRepaye2042 = getRepayeyear(
        balanceRepaye2042,
        federalStudentDebt,
        averageInterestRateOfAllDebt,
        monthlyPaymentRepaye2042,
        yearlytandart2020
      );
      jQuery("#balanceRepaye2042").text(
        addCommas(Math.round(balanceRepaye2042))
      );
      jQuery("#yearlyRepaye2042").text(addCommas(Math.round(yearlyRepaye2042)));
      balanceRepaye[Years[22]] = balanceRepaye2042;

      if (balanceRepaye2042 == "" || balanceRepaye2042 == 0) {
        monthlyPaymentRepaye2042 = 0;
        monthlyPaymentRepaye2042Text = addCommas(
          Math.round(monthlyPaymentRepaye2042).toString()
        );
        jQuery("#monthlyPaymentRepaye2042").text(monthlyPaymentRepaye2042Text);
      }

      var balanceRepaye2043 = getRepayeoverTime(
        balanceRepaye2042,
        monthlyPaymentRepaye2042,
        yearlyRepaye2042,
        Years[23],
        startEarningCreditTowards
      );
      var yearlyRepaye2043 = getRepayeyear(
        balanceRepaye2043,
        federalStudentDebt,
        averageInterestRateOfAllDebt,
        monthlyPaymentRepaye2043,
        yearlytandart2020
      );
      jQuery("#balanceRepaye2043").text(
        addCommas(Math.round(balanceRepaye2043))
      );
      jQuery("#yearlyRepaye2043").text(addCommas(Math.round(yearlyRepaye2043)));
      balanceRepaye[Years[23]] = balanceRepaye2043;

      if (balanceRepaye2043 == "" || balanceRepaye2043 == 0) {
        monthlyPaymentRepaye2043 = 0;
        monthlyPaymentRepaye2043Text = addCommas(
          Math.round(monthlyPaymentRepaye2043).toString()
        );
        jQuery("#monthlyPaymentRepaye2043").text(monthlyPaymentRepaye2043Text);
      }

      var balanceRepaye2044 = getRepayeoverTime(
        balanceRepaye2043,
        monthlyPaymentRepaye2043,
        yearlyRepaye2043,
        Years[24],
        startEarningCreditTowards
      );
      var yearlyRepaye2044 = getRepayeyear(
        balanceRepaye2044,
        federalStudentDebt,
        averageInterestRateOfAllDebt,
        monthlyPaymentRepaye2044,
        yearlytandart2020
      );
      jQuery("#balanceRepaye2044").text(
        addCommas(Math.round(balanceRepaye2044))
      );
      jQuery("#yearlyRepaye2044").text(addCommas(Math.round(yearlyRepaye2044)));
      balanceRepaye[Years[24]] = balanceRepaye2044;

      if (balanceRepaye2044 == "" || balanceRepaye2044 == 0) {
        monthlyPaymentRepaye2044 = 0;
        monthlyPaymentRepaye2044Text = addCommas(
          Math.round(monthlyPaymentRepaye2044).toString()
        );
        jQuery("#monthlyPaymentRepaye2044").text(monthlyPaymentRepaye2044Text);
      }

      var balanceRepaye2045 = getRepayeoverTime(
        balanceRepaye2044,
        monthlyPaymentRepaye2044,
        yearlyRepaye2044,
        Years[25],
        startEarningCreditTowards
      );
      var yearlyRepaye2045 = getRepayeyear(
        balanceRepaye2045,
        federalStudentDebt,
        averageInterestRateOfAllDebt,
        monthlyPaymentRepaye2045,
        yearlytandart2020
      );
      jQuery("#balanceRepaye2045").text(
        addCommas(Math.round(balanceRepaye2045))
      );
      jQuery("#yearlyRepaye2045").text(addCommas(Math.round(yearlyRepaye2045)));
      balanceRepaye[Years[25]] = balanceRepaye2045;

      if (balanceRepaye2045 == "" || balanceRepaye2045 == 0) {
        monthlyPaymentRepaye2045 = 0;
        monthlyPaymentRepaye2045Text = addCommas(
          Math.round(monthlyPaymentRepaye2045).toString()
        );
        jQuery("#monthlyPaymentRepaye2045").text(monthlyPaymentRepaye2045Text);
      }
    }

    //repaye 2d and 3d spouse

    if (1 === 1) {
      var spouseBalanceRepaye = [];
      var spouseBalanceRepaye2020 = federalStudentDebtDoesYourSpouseOwe;

      var spouseYearlyRepaye2020 = getRepayeyear(
        spouseBalanceRepaye2020,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt,
        spouseRepaye2020,
        yearlytandart2020
      );
      jQuery("#spouseBalanceRepaye2020").text(
        addCommas(Math.round(spouseBalanceRepaye2020))
      );
      jQuery("#spouseYearlyRepaye2020").text(
        addCommas(Math.round(spouseYearlyRepaye2020))
      );
      spouseBalanceRepaye[Years[0]] = spouseBalanceRepaye2020;

      var spouseBalanceRepaye2021 = getRepayeoverTime(
        spouseBalanceRepaye2020,
        spouseRepaye2020,
        spouseYearlyRepaye2020
      );
      var spouseYearlyRepaye2021 = getRepayeyear(
        spouseBalanceRepaye2021,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt,
        spouseRepaye2021,
        yearlytandart2020
      );
      jQuery("#spouseBalanceRepaye2021").text(
        addCommas(Math.round(spouseBalanceRepaye2021))
      );
      jQuery("#spouseYearlyRepaye2021").text(
        addCommas(Math.round(spouseYearlyRepaye2021))
      );
      spouseBalanceRepaye[Years[1]] = spouseBalanceRepaye2021;

      var spouseBalanceRepaye2022 = getRepayeoverTime(
        spouseBalanceRepaye2021,
        spouseRepaye2021,
        spouseYearlyRepaye2021
      );
      var spouseYearlyRepaye2022 = getRepayeyear(
        spouseBalanceRepaye2022,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt,
        spouseRepaye2022,
        yearlytandart2020
      );
      jQuery("#spouseBalanceRepaye2022").text(
        addCommas(Math.round(spouseBalanceRepaye2022))
      );
      jQuery("#spouseYearlyRepaye2022").text(
        addCommas(Math.round(spouseYearlyRepaye2022))
      );
      spouseBalanceRepaye[Years[2]] = spouseBalanceRepaye2022;

      var spouseBalanceRepaye2023 = getRepayeoverTime(
        spouseBalanceRepaye2022,
        spouseRepaye2022,
        spouseYearlyRepaye2022
      );
      var spouseYearlyRepaye2023 = getRepayeyear(
        spouseBalanceRepaye2023,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt,
        spouseRepaye2023,
        yearlytandart2020
      );
      jQuery("#spouseBalanceRepaye2023").text(
        addCommas(Math.round(spouseBalanceRepaye2023))
      );
      jQuery("#spouseYearlyRepaye2023").text(
        addCommas(Math.round(spouseYearlyRepaye2023))
      );
      spouseBalanceRepaye[Years[3]] = spouseBalanceRepaye2023;

      var spouseBalanceRepaye2024 = getRepayeoverTime(
        spouseBalanceRepaye2023,
        spouseRepaye2023,
        spouseYearlyRepaye2023
      );
      var spouseYearlyRepaye2024 = getRepayeyear(
        spouseBalanceRepaye2024,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt,
        spouseRepaye2024,
        yearlytandart2020
      );
      jQuery("#spouseBalanceRepaye2024").text(
        addCommas(Math.round(spouseBalanceRepaye2024))
      );
      jQuery("#spouseYearlyRepaye2024").text(
        addCommas(Math.round(spouseYearlyRepaye2024))
      );

      spouseBalanceRepaye[Years[4]] = spouseBalanceRepaye2024;

      var spouseBalanceRepaye2025 = getRepayeoverTime(
        spouseBalanceRepaye2024,
        spouseRepaye2024,
        spouseYearlyRepaye2024
      );
      var spouseYearlyRepaye2025 = getRepayeyear(
        spouseBalanceRepaye2025,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt,
        spouseRepaye2025,
        yearlytandart2020
      );
      jQuery("#spouseBalanceRepaye2025").text(
        addCommas(Math.round(spouseBalanceRepaye2025))
      );
      jQuery("#spouseYearlyRepaye2025").text(
        addCommas(Math.round(spouseYearlyRepaye2025))
      );
      spouseBalanceRepaye[Years[5]] = spouseBalanceRepaye2025;

      var spouseBalanceRepaye2026 = getRepayeoverTime(
        spouseBalanceRepaye2025,
        spouseRepaye2025,
        spouseYearlyRepaye2025
      );
      var spouseYearlyRepaye2026 = getRepayeyear(
        spouseBalanceRepaye2026,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt,
        spouseRepaye2026,
        yearlytandart2020
      );
      jQuery("#spouseBalanceRepaye2026").text(
        addCommas(Math.round(spouseBalanceRepaye2026))
      );
      jQuery("#spouseYearlyRepaye2026").text(
        addCommas(Math.round(spouseYearlyRepaye2026))
      );
      spouseBalanceRepaye[Years[6]] = spouseBalanceRepaye2026;

      var spouseBalanceRepaye2027 = getRepayeoverTime(
        spouseBalanceRepaye2026,
        spouseRepaye2026,
        spouseYearlyRepaye2026
      );
      var spouseYearlyRepaye2027 = getRepayeyear(
        spouseBalanceRepaye2027,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt,
        spouseRepaye2027,
        yearlytandart2020
      );
      jQuery("#spouseBalanceRepaye2027").text(
        addCommas(Math.round(spouseBalanceRepaye2027))
      );
      jQuery("#spouseYearlyRepaye2027").text(
        addCommas(Math.round(spouseYearlyRepaye2027))
      );
      spouseBalanceRepaye[Years[7]] = spouseBalanceRepaye2027;

      var spouseBalanceRepaye2028 = getRepayeoverTime(
        spouseBalanceRepaye2027,
        spouseRepaye2027,
        spouseYearlyRepaye2027
      );
      var spouseYearlyRepaye2028 = getRepayeyear(
        spouseBalanceRepaye2028,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt,
        spouseRepaye2028,
        yearlytandart2020
      );
      jQuery("#spouseBalanceRepaye2028").text(
        addCommas(Math.round(spouseBalanceRepaye2028))
      );
      jQuery("#spouseYearlyRepaye2028").text(
        addCommas(Math.round(spouseYearlyRepaye2028))
      );
      spouseBalanceRepaye[Years[8]] = spouseBalanceRepaye2028;

      var spouseBalanceRepaye2029 = getRepayeoverTime(
        spouseBalanceRepaye2028,
        spouseRepaye2028,
        spouseYearlyRepaye2028
      );
      var spouseYearlyRepaye2029 = getRepayeyear(
        spouseBalanceRepaye2029,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt,
        spouseRepaye2029,
        yearlytandart2020
      );
      jQuery("#spouseBalanceRepaye2029").text(
        addCommas(Math.round(spouseBalanceRepaye2029))
      );
      jQuery("#spouseYearlyRepaye2029").text(
        addCommas(Math.round(spouseYearlyRepaye2029))
      );
      spouseBalanceRepaye[Years[9]] = spouseBalanceRepaye2029;

      var spouseBalanceRepaye2030 = getRepayeoverTime(
        spouseBalanceRepaye2029,
        spouseRepaye2029,
        spouseYearlyRepaye2029
      );
      var spouseYearlyRepaye2030 = getRepayeyear(
        spouseBalanceRepaye2030,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt,
        spouseRepaye2030,
        yearlytandart2020
      );
      jQuery("#spouseBalanceRepaye2030").text(
        addCommas(Math.round(spouseBalanceRepaye2030))
      );
      jQuery("#spouseYearlyRepaye2030").text(
        addCommas(Math.round(spouseYearlyRepaye2030))
      );

      if (spouseBalanceRepaye2030 == "" || spouseBalanceRepaye2030 == 0) {
        spouseRepaye2030 = 0;
        spouseRepaye2030Text = addCommas(
          Math.round(spouseRepaye2030).toString()
        );
        jQuery("#spouseRepaye2030").text(spouseRepaye2030Text);
      }

      spouseBalanceRepaye[Years[10]] = spouseBalanceRepaye2030;

      var spouseBalanceRepaye2031 = getRepayeoverTime(
        spouseBalanceRepaye2030,
        spouseRepaye2030,
        spouseYearlyRepaye2030
      );
      var spouseYearlyRepaye2031 = getRepayeyear(
        spouseBalanceRepaye2031,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt,
        spouseRepaye2031,
        yearlytandart2020
      );
      jQuery("#spouseBalanceRepaye2031").text(
        addCommas(Math.round(spouseBalanceRepaye2031))
      );
      jQuery("#spouseYearlyRepaye2031").text(
        addCommas(Math.round(spouseYearlyRepaye2031))
      );

      if (spouseBalanceRepaye2031 == "" || spouseBalanceRepaye2031 == 0) {
        spouseRepaye2031 = 0;
        spouseRepaye2031Text = addCommas(
          Math.round(spouseRepaye2031).toString()
        );
        jQuery("#spouseRepaye2031").text(spouseRepaye2031Text);
      }

      spouseBalanceRepaye[Years[11]] = spouseBalanceRepaye2031;

      var spouseBalanceRepaye2032 = getRepayeoverTime(
        spouseBalanceRepaye2031,
        spouseRepaye2031,
        spouseYearlyRepaye2031
      );
      var spouseYearlyRepaye2032 = getRepayeyear(
        spouseBalanceRepaye2032,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt,
        spouseRepaye2032,
        yearlytandart2020
      );
      jQuery("#spouseBalanceRepaye2032").text(
        addCommas(Math.round(spouseBalanceRepaye2032))
      );
      jQuery("#spouseYearlyRepaye2032").text(
        addCommas(Math.round(spouseYearlyRepaye2032))
      );

      if (spouseBalanceRepaye2032 == "" || spouseBalanceRepaye2032 == 0) {
        spouseRepaye2032 = 0;
        spouseRepaye2032Text = addCommas(
          Math.round(spouseRepaye2032).toString()
        );
        jQuery("#spouseRepaye2032").text(spouseRepaye2032Text);
      }

      spouseBalanceRepaye[Years[12]] = spouseBalanceRepaye2032;

      var spouseBalanceRepaye2033 = getRepayeoverTime(
        spouseBalanceRepaye2032,
        spouseRepaye2032,
        spouseYearlyRepaye2032
      );
      var spouseYearlyRepaye2033 = getRepayeyear(
        spouseBalanceRepaye2033,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt,
        spouseRepaye2033,
        yearlytandart2020
      );
      jQuery("#spouseBalanceRepaye2033").text(
        addCommas(Math.round(spouseBalanceRepaye2033))
      );
      jQuery("#spouseYearlyRepaye2033").text(
        addCommas(Math.round(spouseYearlyRepaye2033))
      );

      if (spouseBalanceRepaye2033 == "" || spouseBalanceRepaye2033 == 0) {
        spouseRepaye2033 = 0;
        spouseRepaye2033Text = addCommas(
          Math.round(spouseRepaye2033).toString()
        );
        jQuery("#spouseRepaye2033").text(spouseRepaye2033Text);
      }

      spouseBalanceRepaye[Years[13]] = spouseBalanceRepaye2033;

      var spouseBalanceRepaye2034 = getRepayeoverTime(
        spouseBalanceRepaye2033,
        spouseRepaye2033,
        spouseYearlyRepaye2033
      );
      var spouseYearlyRepaye2034 = getRepayeyear(
        spouseBalanceRepaye2034,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt,
        spouseRepaye2034,
        yearlytandart2020
      );
      jQuery("#spouseBalanceRepaye2034").text(
        addCommas(Math.round(spouseBalanceRepaye2034))
      );
      jQuery("#spouseYearlyRepaye2034").text(
        addCommas(Math.round(spouseYearlyRepaye2034))
      );

      if (spouseBalanceRepaye2034 == "" || spouseBalanceRepaye2034 == 0) {
        spouseRepaye2034 = 0;
        spouseRepaye2034Text = addCommas(
          Math.round(spouseRepaye2034).toString()
        );
        jQuery("#spouseRepaye2034").text(spouseRepaye2034Text);
      }

      spouseBalanceRepaye[Years[14]] = spouseBalanceRepaye2034;
      var spouseBalanceRepaye2035 = getRepayeoverTime(
        spouseBalanceRepaye2034,
        spouseRepaye2034,
        spouseYearlyRepaye2034
      );
      var spouseYearlyRepaye2035 = getRepayeyear(
        spouseBalanceRepaye2035,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt,
        spouseRepaye2035,
        yearlytandart2020
      );
      jQuery("#spouseBalanceRepaye2035").text(
        addCommas(Math.round(spouseBalanceRepaye2035))
      );
      jQuery("#spouseYearlyRepaye2035").text(
        addCommas(Math.round(spouseYearlyRepaye2035))
      );

      if (spouseBalanceRepaye2035 == "" || spouseBalanceRepaye2035 == 0) {
        spouseRepaye2035 = 0;
        spouseRepaye2035Text = addCommas(
          Math.round(spouseRepaye2035).toString()
        );
        jQuery("#spouseRepaye2035").text(spouseRepaye2035Text);
      }

      spouseBalanceRepaye[Years[15]] = spouseBalanceRepaye2035;
      var spouseBalanceRepaye2036 = getRepayeoverTime(
        spouseBalanceRepaye2035,
        spouseRepaye2035,
        spouseYearlyRepaye2035
      );
      var spouseYearlyRepaye2036 = getRepayeyear(
        spouseBalanceRepaye2036,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt,
        spouseRepaye2036,
        yearlytandart2020
      );
      jQuery("#spouseBalanceRepaye2036").text(
        addCommas(Math.round(spouseBalanceRepaye2036))
      );
      jQuery("#spouseYearlyRepaye2036").text(
        addCommas(Math.round(spouseYearlyRepaye2036))
      );

      if (spouseBalanceRepaye2036 == "" || spouseBalanceRepaye2036 == 0) {
        spouseRepaye2036 = 0;
        spouseRepaye2036Text = addCommas(
          Math.round(spouseRepaye2036).toString()
        );
        jQuery("#spouseRepaye2036").text(spouseRepaye2036Text);
      }

      spouseBalanceRepaye[Years[16]] = spouseBalanceRepaye2036;
      var spouseBalanceRepaye2037 = getRepayeoverTime(
        spouseBalanceRepaye2036,
        spouseRepaye2036,
        spouseYearlyRepaye2036
      );
      var spouseYearlyRepaye2037 = getRepayeyear(
        spouseBalanceRepaye2037,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt,
        spouseRepaye2037,
        yearlytandart2020
      );
      jQuery("#spouseBalanceRepaye2037").text(
        addCommas(Math.round(spouseBalanceRepaye2037))
      );
      jQuery("#spouseYearlyRepaye2037").text(
        addCommas(Math.round(spouseYearlyRepaye2037))
      );

      if (spouseBalanceRepaye2037 == "" || spouseBalanceRepaye2037 == 0) {
        spouseRepaye2037 = 0;
        spouseRepaye2037Text = addCommas(
          Math.round(spouseRepaye2037).toString()
        );
        jQuery("#spouseRepaye2037").text(spouseRepaye2037Text);
      }

      spouseBalanceRepaye[Years[17]] = spouseBalanceRepaye2037;

      var spouseBalanceRepaye2038 = getRepayeoverTime(
        spouseBalanceRepaye2037,
        spouseRepaye2037,
        spouseYearlyRepaye2037
      );
      var spouseYearlyRepaye2038 = getRepayeyear(
        spouseBalanceRepaye2038,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt,
        spouseRepaye2038,
        yearlytandart2020
      );
      jQuery("#spouseBalanceRepaye2038").text(
        addCommas(Math.round(spouseBalanceRepaye2038))
      );
      jQuery("#spouseYearlyRepaye2038").text(
        addCommas(Math.round(spouseYearlyRepaye2038))
      );

      if (spouseBalanceRepaye2038 == "" || spouseBalanceRepaye2038 == 0) {
        spouseRepaye2038 = 0;
        spouseRepaye2038Text = addCommas(
          Math.round(spouseRepaye2038).toString()
        );
        jQuery("#spouseRepaye2038").text(spouseRepaye2038Text);
      }

      spouseBalanceRepaye[Years[18]] = spouseBalanceRepaye2038;

      var spouseBalanceRepaye2039 = getRepayeoverTime(
        spouseBalanceRepaye2038,
        spouseRepaye2038,
        spouseYearlyRepaye2038
      );
      var spouseYearlyRepaye2039 = getRepayeyear(
        spouseBalanceRepaye2039,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt,
        spouseRepaye2039,
        yearlytandart2020
      );
      jQuery("#spouseBalanceRepaye2039").text(
        addCommas(Math.round(spouseBalanceRepaye2039))
      );
      jQuery("#spouseYearlyRepaye2039").text(
        addCommas(Math.round(spouseYearlyRepaye2039))
      );

      if (spouseBalanceRepaye2039 == "" || spouseBalanceRepaye2039 == 0) {
        spouseRepaye2039 = 0;
        spouseRepaye2039Text = addCommas(
          Math.round(spouseRepaye2039).toString()
        );
        jQuery("#spouseRepaye2039").text(spouseRepaye2039Text);
      }

      spouseBalanceRepaye[Years[19]] = spouseBalanceRepaye2039;

      var spouseBalanceRepaye2040 = getRepayeoverTime(
        spouseBalanceRepaye2039,
        spouseRepaye2039,
        spouseYearlyRepaye2039
      );
      var spouseYearlyRepaye2040 = getRepayeyear(
        spouseBalanceRepaye2040,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt,
        spouseRepaye2040,
        yearlytandart2020
      );
      jQuery("#spouseBalanceRepaye2040").text(
        addCommas(Math.round(spouseBalanceRepaye2040))
      );
      jQuery("#spouseYearlyRepaye2040").text(
        addCommas(Math.round(spouseYearlyRepaye2040))
      );

      if (spouseBalanceRepaye2040 == "" || spouseBalanceRepaye2040 == 0) {
        spouseRepaye2040 = 0;
        spouseRepaye2040Text = addCommas(
          Math.round(spouseRepaye2040).toString()
        );
        jQuery("#spouseRepaye2040").text(spouseRepaye2040Text);
      }

      spouseBalanceRepaye[Years[20]] = spouseBalanceRepaye2040;
      var spouseBalanceRepaye2041 = getRepayeoverTime(
        spouseBalanceRepaye2040,
        spouseRepaye2040,
        spouseYearlyRepaye2040
      );
      var spouseYearlyRepaye2041 = getRepayeyear(
        spouseBalanceRepaye2041,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt,
        spouseRepaye2041,
        yearlytandart2020
      );
      jQuery("#spouseBalanceRepaye2041").text(
        addCommas(Math.round(spouseBalanceRepaye2041))
      );
      jQuery("#spouseYearlyRepaye2041").text(
        addCommas(Math.round(spouseYearlyRepaye2041))
      );

      if (spouseBalanceRepaye2041 == "" || spouseBalanceRepaye2041 == 0) {
        spouseRepaye2041 = 0;
        spouseRepaye2041Text = addCommas(
          Math.round(spouseRepaye2041).toString()
        );
        jQuery("#spouseRepaye2041").text(spouseRepaye2041Text);
      }

      spouseBalanceRepaye[Years[21]] = spouseBalanceRepaye2041;

      var spouseBalanceRepaye2042 = getRepayeoverTime(
        spouseBalanceRepaye2041,
        spouseRepaye2041,
        spouseYearlyRepaye2041
      );
      var spouseYearlyRepaye2042 = getRepayeyear(
        spouseBalanceRepaye2042,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt,
        spouseRepaye2042,
        yearlytandart2020
      );
      jQuery("#spouseBalanceRepaye2042").text(
        addCommas(Math.round(spouseBalanceRepaye2042))
      );
      jQuery("#spouseYearlyRepaye2042").text(
        addCommas(Math.round(spouseYearlyRepaye2042))
      );

      if (spouseBalanceRepaye2042 == "" || spouseBalanceRepaye2042 == 0) {
        spouseRepaye2042 = 0;
        spouseRepaye2042Text = addCommas(
          Math.round(spouseRepaye2042).toString()
        );
        jQuery("#spouseRepaye2042").text(spouseRepaye2042Text);
      }

      spouseBalanceRepaye[Years[22]] = spouseBalanceRepaye2042;

      var spouseBalanceRepaye2043 = getRepayeoverTime(
        spouseBalanceRepaye2042,
        spouseRepaye2042,
        spouseYearlyRepaye2042
      );
      var spouseYearlyRepaye2043 = getRepayeyear(
        spouseBalanceRepaye2043,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt,
        spouseRepaye2043,
        yearlytandart2020
      );
      jQuery("#spouseBalanceRepaye2043").text(
        addCommas(Math.round(spouseBalanceRepaye2043))
      );
      jQuery("#spouseYearlyRepaye2043").text(
        addCommas(Math.round(spouseYearlyRepaye2043))
      );

      if (spouseBalanceRepaye2043 == "" || spouseBalanceRepaye2043 == 0) {
        spouseRepaye2043 = 0;
        spouseRepaye2043Text = addCommas(
          Math.round(spouseRepaye2043).toString()
        );
        jQuery("#spouseRepaye2043").text(spouseRepaye2043Text);
      }

      spouseBalanceRepaye[Years[23]] = spouseBalanceRepaye2043;

      var spouseBalanceRepaye2044 = getRepayeoverTime(
        spouseBalanceRepaye2043,
        spouseRepaye2043,
        spouseYearlyRepaye2043
      );
      var spouseYearlyRepaye2044 = getRepayeyear(
        spouseBalanceRepaye2044,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt,
        spouseRepaye2044,
        yearlytandart2020
      );
      jQuery("#spouseBalanceRepaye2044").text(
        addCommas(Math.round(spouseBalanceRepaye2044))
      );
      jQuery("#spouseYearlyRepaye2044").text(
        addCommas(Math.round(spouseYearlyRepaye2044))
      );

      if (spouseBalanceRepaye2044 == "" || spouseBalanceRepaye2044 == 0) {
        spouseRepaye2044 = 0;
        spouseRepaye2044Text = addCommas(
          Math.round(spouseRepaye2044).toString()
        );
        jQuery("#spouseRepaye2044").text(spouseRepaye2044Text);
      }

      spouseBalanceRepaye[Years[24]] = spouseBalanceRepaye2044;

      var spouseBalanceRepaye2045 = getRepayeoverTime(
        spouseBalanceRepaye2044,
        spouseRepaye2044,
        spouseYearlyRepaye2044
      );
      var spouseYearlyRepaye2045 = getRepayeyear(
        spouseBalanceRepaye2045,
        federalStudentDebtDoesYourSpouseOwe,
        averageInterestRateOfAllDebt,
        spouseRepaye2045,
        yearlytandart2020
      );
      jQuery("#spouseBalanceRepaye2045").text(
        addCommas(Math.round(spouseBalanceRepaye2045))
      );
      jQuery("#spouseYearlyRepaye2045").text(
        addCommas(Math.round(spouseYearlyRepaye2045))
      );

      if (spouseBalanceRepaye2045 == "" || spouseBalanceRepaye2045 == 0) {
        spouseRepaye2045 = 0;
        spouseRepaye2045Text = addCommas(
          Math.round(spouseRepaye2045).toString()
        );
        jQuery("#spouseRepaye2045").text(spouseRepaye2045Text);
      }

      spouseBalanceRepaye[Years[25]] = spouseBalanceRepaye2045;
    }

    //refinance 2 and 3

    if (1 === 1) {
      var balanceRefinancing2020 = federalStudentDebt;
      var yearlyRefinancing2020 = getYearlyRefinancing(
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        balanceRefinancing2020
      );
      jQuery("#balanceRefinancing2020").text(
        addCommas(Math.round(balanceRefinancing2020))
      );
      jQuery("#yearlyRefinancing2020").text(
        addCommas(Math.round(yearlyRefinancing2020))
      );

      var balanceRefinancing2021 = getBalanceRefinancing(
        balanceRefinancing2020,
        Refinancing2020,
        yearlyRefinancing2020
      );
      var yearlyRefinancing2021 = getYearlyRefinancing(
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        balanceRefinancing2021
      );
      jQuery("#balanceRefinancing2021").text(
        addCommas(Math.round(balanceRefinancing2021))
      );
      jQuery("#yearlyRefinancing2021").text(
        addCommas(Math.round(yearlyRefinancing2021))
      );

      var balanceRefinancing2022 = getBalanceRefinancing(
        balanceRefinancing2021,
        Refinancing2021,
        yearlyRefinancing2021
      );
      var yearlyRefinancing2022 = getYearlyRefinancing(
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        balanceRefinancing2022
      );
      jQuery("#balanceRefinancing2022").text(
        addCommas(Math.round(balanceRefinancing2022))
      );
      jQuery("#yearlyRefinancing2022").text(
        addCommas(Math.round(yearlyRefinancing2022))
      );

      var balanceRefinancing2023 = getBalanceRefinancing(
        balanceRefinancing2022,
        Refinancing2022,
        yearlyRefinancing2022
      );
      var yearlyRefinancing2023 = getYearlyRefinancing(
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        balanceRefinancing2023
      );
      jQuery("#balanceRefinancing2023").text(
        addCommas(Math.round(balanceRefinancing2023))
      );
      jQuery("#yearlyRefinancing2023").text(
        addCommas(Math.round(yearlyRefinancing2023))
      );

      var balanceRefinancing2024 = getBalanceRefinancing(
        balanceRefinancing2023,
        Refinancing2023,
        yearlyRefinancing2023
      );
      var yearlyRefinancing2024 = getYearlyRefinancing(
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        balanceRefinancing2024
      );
      jQuery("#balanceRefinancing2024").text(
        addCommas(Math.round(balanceRefinancing2024))
      );
      jQuery("#yearlyRefinancing2024").text(
        addCommas(Math.round(yearlyRefinancing2024))
      );

      var balanceRefinancing2025 = getBalanceRefinancing(
        balanceRefinancing2024,
        Refinancing2024,
        yearlyRefinancing2024
      );
      var yearlyRefinancing2025 = getYearlyRefinancing(
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        balanceRefinancing2025
      );
      jQuery("#balanceRefinancing2025").text(
        addCommas(Math.round(balanceRefinancing2025))
      );
      jQuery("#yearlyRefinancing2025").text(
        addCommas(Math.round(yearlyRefinancing2025))
      );

      var balanceRefinancing2026 = getBalanceRefinancing(
        balanceRefinancing2025,
        Refinancing2025,
        yearlyRefinancing2025
      );
      var yearlyRefinancing2026 = getYearlyRefinancing(
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        balanceRefinancing2026
      );
      jQuery("#balanceRefinancing2026").text(
        addCommas(Math.round(balanceRefinancing2026))
      );
      jQuery("#yearlyRefinancing2026").text(
        addCommas(Math.round(yearlyRefinancing2026))
      );

      var balanceRefinancing2027 = getBalanceRefinancing(
        balanceRefinancing2026,
        Refinancing2026,
        yearlyRefinancing2026
      );
      var yearlyRefinancing2027 = getYearlyRefinancing(
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        balanceRefinancing2027
      );
      jQuery("#balanceRefinancing2027").text(
        addCommas(Math.round(balanceRefinancing2027))
      );
      jQuery("#yearlyRefinancing2027").text(
        addCommas(Math.round(yearlyRefinancing2027))
      );

      var balanceRefinancing2028 = getBalanceRefinancing(
        balanceRefinancing2027,
        Refinancing2027,
        yearlyRefinancing2027
      );
      var yearlyRefinancing2028 = getYearlyRefinancing(
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        balanceRefinancing2028
      );
      jQuery("#balanceRefinancing2028").text(
        addCommas(Math.round(balanceRefinancing2028))
      );
      jQuery("#yearlyRefinancing2028").text(
        addCommas(Math.round(yearlyRefinancing2028))
      );

      var balanceRefinancing2029 = getBalanceRefinancing(
        balanceRefinancing2028,
        Refinancing2028,
        yearlyRefinancing2028
      );
      var yearlyRefinancing2029 = getYearlyRefinancing(
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        balanceRefinancing2029
      );
      jQuery("#balanceRefinancing2029").text(
        addCommas(Math.round(balanceRefinancing2029))
      );
      jQuery("#yearlyRefinancing2029").text(
        addCommas(Math.round(yearlyRefinancing2029))
      );

      var balanceRefinancing2030 = getBalanceRefinancing(
        balanceRefinancing2029,
        Refinancing2029,
        yearlyRefinancing2029
      );
      var yearlyRefinancing2030 = getYearlyRefinancing(
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        balanceRefinancing2030
      );
      jQuery("#balanceRefinancing2030").text(
        addCommas(Math.round(balanceRefinancing2030))
      );
      jQuery("#yearlyRefinancing2030").text(
        addCommas(Math.round(yearlyRefinancing2030))
      );
    }

    //refinance 2 and 3 spouse

    if (1 === 1) {
      var spouseBalanceRefinancing2020 = federalStudentDebtDoesYourSpouseOwe;
      var spouseYearlyRefinancing2020 = getYearlyRefinancing(
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        spouseBalanceRefinancing2020
      );
      jQuery("#spouseBalanceRefinancing2020").text(
        addCommas(Math.round(spouseBalanceRefinancing2020))
      );
      jQuery("#spouseYearlyRefinancing2020").text(
        addCommas(Math.round(spouseYearlyRefinancing2020))
      );

      var spouseBalanceRefinancing2021 = getBalanceRefinancing(
        spouseBalanceRefinancing2020,
        spouseRefinancing2020,
        spouseYearlyRefinancing2020
      );
      var spouseYearlyRefinancing2021 = getYearlyRefinancing(
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        spouseBalanceRefinancing2021
      );
      jQuery("#spouseBalanceRefinancing2021").text(
        addCommas(Math.round(spouseBalanceRefinancing2021))
      );
      jQuery("#spouseYearlyRefinancing2021").text(
        addCommas(Math.round(spouseYearlyRefinancing2021))
      );

      var spouseBalanceRefinancing2022 = getBalanceRefinancing(
        spouseBalanceRefinancing2021,
        spouseRefinancing2021,
        spouseYearlyRefinancing2021
      );
      var spouseYearlyRefinancing2022 = getYearlyRefinancing(
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        spouseBalanceRefinancing2022
      );
      jQuery("#spouseBalanceRefinancing2022").text(
        addCommas(Math.round(spouseBalanceRefinancing2022))
      );
      jQuery("#spouseYearlyRefinancing2022").text(
        addCommas(Math.round(spouseYearlyRefinancing2022))
      );

      var spouseBalanceRefinancing2023 = getBalanceRefinancing(
        spouseBalanceRefinancing2022,
        spouseRefinancing2022,
        spouseYearlyRefinancing2022
      );
      var spouseYearlyRefinancing2023 = getYearlyRefinancing(
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        spouseBalanceRefinancing2023
      );
      jQuery("#spouseBalanceRefinancing2023").text(
        addCommas(Math.round(spouseBalanceRefinancing2023))
      );
      jQuery("#spouseYearlyRefinancing2023").text(
        addCommas(Math.round(spouseYearlyRefinancing2023))
      );

      var spouseBalanceRefinancing2024 = getBalanceRefinancing(
        spouseBalanceRefinancing2023,
        spouseRefinancing2023,
        spouseYearlyRefinancing2023
      );
      var spouseYearlyRefinancing2024 = getYearlyRefinancing(
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        spouseBalanceRefinancing2024
      );
      jQuery("#spouseBalanceRefinancing2024").text(
        addCommas(Math.round(spouseBalanceRefinancing2024))
      );
      jQuery("#spouseYearlyRefinancing2024").text(
        addCommas(Math.round(spouseYearlyRefinancing2024))
      );

      var spouseBalanceRefinancing2025 = getBalanceRefinancing(
        spouseBalanceRefinancing2024,
        spouseRefinancing2024,
        spouseYearlyRefinancing2024
      );
      var spouseYearlyRefinancing2025 = getYearlyRefinancing(
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        spouseBalanceRefinancing2025
      );
      jQuery("#spouseBalanceRefinancing2025").text(
        addCommas(Math.round(spouseBalanceRefinancing2025))
      );
      jQuery("#spouseYearlyRefinancing2025").text(
        addCommas(Math.round(spouseYearlyRefinancing2025))
      );

      var spouseBalanceRefinancing2026 = getBalanceRefinancing(
        spouseBalanceRefinancing2025,
        spouseRefinancing2025,
        spouseYearlyRefinancing2025
      );
      var spouseYearlyRefinancing2026 = getYearlyRefinancing(
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        spouseBalanceRefinancing2026
      );
      jQuery("#spouseBalanceRefinancing2026").text(
        addCommas(Math.round(spouseBalanceRefinancing2026))
      );
      jQuery("#spouseYearlyRefinancing2026").text(
        addCommas(Math.round(spouseYearlyRefinancing2026))
      );

      var spouseBalanceRefinancing2027 = getBalanceRefinancing(
        spouseBalanceRefinancing2026,
        spouseRefinancing2026,
        spouseYearlyRefinancing2026
      );
      var spouseYearlyRefinancing2027 = getYearlyRefinancing(
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        spouseBalanceRefinancing2027
      );
      jQuery("#spouseBalanceRefinancing2027").text(
        addCommas(Math.round(spouseBalanceRefinancing2027))
      );
      jQuery("#spouseYearlyRefinancing2027").text(
        addCommas(Math.round(spouseYearlyRefinancing2027))
      );

      var spouseBalanceRefinancing2028 = getBalanceRefinancing(
        spouseBalanceRefinancing2027,
        spouseRefinancing2027,
        spouseYearlyRefinancing2027
      );
      var spouseYearlyRefinancing2028 = getYearlyRefinancing(
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        spouseBalanceRefinancing2028
      );
      jQuery("#spouseBalanceRefinancing2028").text(
        addCommas(Math.round(spouseBalanceRefinancing2028))
      );
      jQuery("#spouseYearlyRefinancing2028").text(
        addCommas(Math.round(spouseYearlyRefinancing2028))
      );

      var spouseBalanceRefinancing2029 = getBalanceRefinancing(
        spouseBalanceRefinancing2028,
        spouseRefinancing2028,
        spouseYearlyRefinancing2028
      );
      var spouseYearlyRefinancing2029 = getYearlyRefinancing(
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        spouseBalanceRefinancing2029
      );
      jQuery("#spouseBalanceRefinancing2029").text(
        addCommas(Math.round(spouseBalanceRefinancing2029))
      );
      jQuery("#spouseYearlyRefinancing2029").text(
        addCommas(Math.round(spouseYearlyRefinancing2029))
      );

      var spouseBalanceRefinancing2030 = getBalanceRefinancing(
        spouseBalanceRefinancing2029,
        spouseRefinancing2029,
        spouseYearlyRefinancing2029
      );
      var spouseYearlyRefinancing2030 = getYearlyRefinancing(
        assumptionAutomaticallyManually,
        refinancingInterestRateManual,
        spouseBalanceRefinancing2030
      );
      jQuery("#spouseBalanceRefinancing2030").text(
        addCommas(Math.round(spouseBalanceRefinancing2030))
      );
      jQuery("#spouseYearlyRefinancing2030").text(
        addCommas(Math.round(spouseYearlyRefinancing2030))
      );
    }

    //ispf
    if (1 === 1) {
      var balance10YearPSLF = [];
      var spouseBalance10YearPSLF = [];

      var balance10YearPSLF2020 =
        Years[0] - startEarningCreditTowards > 10
          ? ""
          : Math.max(
              natozero(balanceRepaye2020),
              natozero(balancePaye2020),
              natozero(balanceOldIBR2020)
            );
      var spouseBalance10YearPSLF2020 =
        Years[0] - startEarningCreditTowards > 10
          ? ""
          : Math.max(
              natozero(spouseBalanceRepaye2020),
              natozero(spouseBalancePaye2020),
              natozero(spouseBalanceOldIBR2020)
            );
      var yearly10YearPSLF2020 =
        Years[0] - startEarningCreditTowards > 10
          ? ""
          : Math.max(
              natozero(yearlyRepaye2020),
              natozero(yearlyPaye2020),
              yearlyOldIBR2020
            );
      var spouseYearly10YearPSLF2020 =
        Years[0] - startEarningCreditTowards > 10
          ? ""
          : Math.max(
              natozero(spouseYearlyRepaye2020),
              natozero(spouseYearlyPaye2020),
              spouseYearlyOldIBR2020
            );
      jQuery("#balance10YearPSLF2020").text(
        addCommas(Math.round(balance10YearPSLF2020))
      );
      jQuery("#spouseBalance10YearPSLF2020").text(
        addCommas(Math.round(spouseBalance10YearPSLF2020))
      );
      jQuery("#yearly10YearPSLF2020").text(
        addCommas(Math.round(yearly10YearPSLF2020))
      );
      jQuery("#spouseYearly10YearPSLF2020").text(
        addCommas(Math.round(spouseYearly10YearPSLF2020))
      );
      balance10YearPSLF[Years[0]] = balance10YearPSLF2020;
      spouseBalance10YearPSLF[Years[0]] = spouseBalance10YearPSLF2020;

      var balance10YearPSLF2021 =
        Years[1] - startEarningCreditTowards > 10
          ? ""
          : Math.max(
              natozero(balanceRepaye2021),
              natozero(balancePaye2021),
              natozero(balanceOldIBR2021)
            );
      var spouseBalance10YearPSLF2021 =
        Years[1] - startEarningCreditTowards > 10
          ? ""
          : Math.max(
              natozero(spouseBalanceRepaye2021),
              natozero(spouseBalancePaye2021),
              natozero(spouseBalanceOldIBR2021)
            );
      var yearly10YearPSLF2021 =
        Years[1] - startEarningCreditTowards > 10
          ? ""
          : Math.max(
              yearlyRepaye2021,
              natozero(yearlyPaye2021),
              yearlyOldIBR2021
            );
      var spouseYearly10YearPSLF2021 =
        Years[1] - startEarningCreditTowards > 10
          ? ""
          : Math.max(
              spouseYearlyRepaye2021,
              natozero(spouseYearlyPaye2021),
              spouseYearlyOldIBR2021
            );
      jQuery("#balance10YearPSLF2021").text(
        addCommas(Math.round(balance10YearPSLF2021))
      );
      jQuery("#spouseBalance10YearPSLF2021").text(
        addCommas(Math.round(spouseBalance10YearPSLF2021))
      );
      jQuery("#yearly10YearPSLF2021").text(
        addCommas(Math.round(yearly10YearPSLF2021))
      );
      jQuery("#spouseYearly10YearPSLF2021").text(
        addCommas(Math.round(spouseYearly10YearPSLF2021))
      );
      balance10YearPSLF[Years[1]] = balance10YearPSLF2021;
      spouseBalance10YearPSLF[Years[1]] = spouseBalance10YearPSLF2021;

      var balance10YearPSLF2022 =
        Years[2] - startEarningCreditTowards > 10
          ? ""
          : Math.max(
              natozero(balanceRepaye2022),
              natozero(balancePaye2022),
              natozero(balanceOldIBR2022)
            );
      var spouseBalance10YearPSLF2022 =
        Years[2] - startEarningCreditTowards > 10
          ? ""
          : Math.max(
              natozero(spouseBalanceRepaye2022),
              natozero(spouseBalancePaye2022),
              natozero(spouseBalanceOldIBR2022)
            );
      var yearly10YearPSLF2022 =
        Years[2] - startEarningCreditTowards > 10
          ? ""
          : Math.max(
              yearlyRepaye2022,
              natozero(yearlyPaye2022),
              yearlyOldIBR2022
            );
      var spouseYearly10YearPSLF2022 =
        Years[2] - startEarningCreditTowards > 10
          ? ""
          : Math.max(
              spouseYearlyRepaye2022,
              natozero(spouseYearlyPaye2022),
              spouseYearlyOldIBR2022
            );
      jQuery("#balance10YearPSLF2022").text(
        addCommas(Math.round(balance10YearPSLF2022))
      );
      jQuery("#spouseBalance10YearPSLF2022").text(
        addCommas(Math.round(spouseBalance10YearPSLF2022))
      );
      jQuery("#yearly10YearPSLF2022").text(
        addCommas(Math.round(yearly10YearPSLF2022))
      );
      jQuery("#spouseYearly10YearPSLF2022").text(
        addCommas(Math.round(spouseYearly10YearPSLF2022))
      );
      balance10YearPSLF[Years[2]] = balance10YearPSLF2022;
      spouseBalance10YearPSLF[Years[2]] = spouseBalance10YearPSLF2022;

      var balance10YearPSLF2023 =
        Years[3] - startEarningCreditTowards > 10
          ? ""
          : Math.max(
              natozero(balanceRepaye2023),
              natozero(balancePaye2023),
              natozero(balanceOldIBR2023)
            );
      var spouseBalance10YearPSLF2023 =
        Years[3] - startEarningCreditTowards > 10
          ? ""
          : Math.max(
              natozero(spouseBalanceRepaye2023),
              natozero(spouseBalancePaye2023),
              natozero(spouseBalanceOldIBR2023)
            );
      var yearly10YearPSLF2023 =
        Years[3] - startEarningCreditTowards > 10
          ? ""
          : Math.max(
              yearlyRepaye2023,
              natozero(yearlyPaye2023),
              yearlyOldIBR2023
            );
      var spouseYearly10YearPSLF2023 =
        Years[3] - startEarningCreditTowards > 10
          ? ""
          : Math.max(
              spouseYearlyRepaye2023,
              natozero(spouseYearlyPaye2023),
              spouseYearlyOldIBR2023
            );
      jQuery("#balance10YearPSLF2023").text(
        addCommas(Math.round(balance10YearPSLF2023))
      );
      jQuery("#spouseBalance10YearPSLF2023").text(
        addCommas(Math.round(spouseBalance10YearPSLF2023))
      );
      jQuery("#yearly10YearPSLF2023").text(
        addCommas(Math.round(yearly10YearPSLF2023))
      );
      jQuery("#spouseYearly10YearPSLF2023").text(
        addCommas(Math.round(spouseYearly10YearPSLF2023))
      );
      balance10YearPSLF[Years[3]] = balance10YearPSLF2023;
      spouseBalance10YearPSLF[Years[3]] = spouseBalance10YearPSLF2023;

      var balance10YearPSLF2024 =
        Years[4] - startEarningCreditTowards > 10
          ? ""
          : Math.max(
              natozero(balanceRepaye2024),
              natozero(balancePaye2024),
              natozero(balanceOldIBR2024)
            );
      var spouseBalance10YearPSLF2024 =
        Years[4] - startEarningCreditTowards > 10
          ? ""
          : Math.max(
              natozero(spouseBalanceRepaye2024),
              natozero(spouseBalancePaye2024),
              natozero(spouseBalanceOldIBR2024)
            );
      var yearly10YearPSLF2024 =
        Years[4] - startEarningCreditTowards > 10
          ? ""
          : Math.max(
              yearlyRepaye2020,
              natozero(yearlyPaye2020),
              yearlyOldIBR2024
            );
      var spouseYearly10YearPSLF2024 =
        Years[4] - startEarningCreditTowards > 10
          ? ""
          : Math.max(
              spouseYearlyRepaye2020,
              natozero(spouseYearlyPaye2024),
              spouseYearlyOldIBR2024
            );
      jQuery("#balance10YearPSLF2024").text(
        addCommas(Math.round(balance10YearPSLF2024))
      );
      jQuery("#spouseBalance10YearPSLF2024").text(
        addCommas(Math.round(spouseBalance10YearPSLF2024))
      );
      jQuery("#yearly10YearPSLF2024").text(
        addCommas(Math.round(yearly10YearPSLF2024))
      );
      jQuery("#spouseYearly10YearPSLF2024").text(
        addCommas(Math.round(spouseYearly10YearPSLF2024))
      );
      balance10YearPSLF[Years[4]] = balance10YearPSLF2024;
      spouseBalance10YearPSLF[Years[4]] = spouseBalance10YearPSLF2024;

      var balance10YearPSLF2025 =
        Years[5] - startEarningCreditTowards > 10
          ? ""
          : Math.max(
              natozero(balanceRepaye2025),
              natozero(balancePaye2025),
              natozero(balanceOldIBR2025)
            );
      var spouseBalance10YearPSLF2025 =
        Years[5] - startEarningCreditTowards > 10
          ? ""
          : Math.max(
              natozero(spouseBalanceRepaye2025),
              natozero(spouseBalancePaye2025),
              natozero(spouseBalanceOldIBR2025)
            );
      var yearly10YearPSLF2025 =
        Years[5] - startEarningCreditTowards > 10
          ? ""
          : Math.max(
              yearlyRepaye2025,
              natozero(yearlyPaye2025),
              yearlyOldIBR2025
            );
      var spouseYearly10YearPSLF2025 =
        Years[5] - startEarningCreditTowards > 10
          ? ""
          : Math.max(
              spouseYearlyRepaye2025,
              natozero(spouseYearlyPaye2025),
              spouseYearlyOldIBR2025
            );
      jQuery("#balance10YearPSLF2025").text(
        addCommas(Math.round(balance10YearPSLF2025))
      );
      jQuery("#spouseBalance10YearPSLF2025").text(
        addCommas(Math.round(spouseBalance10YearPSLF2025))
      );
      jQuery("#yearly10YearPSLF2025").text(
        addCommas(Math.round(yearly10YearPSLF2025))
      );
      jQuery("#spouseYearly10YearPSLF2025").text(
        addCommas(Math.round(spouseYearly10YearPSLF2025))
      );
      balance10YearPSLF[Years[5]] = balance10YearPSLF2025;
      spouseBalance10YearPSLF[Years[5]] = spouseBalance10YearPSLF2025;

      var balance10YearPSLF2026 =
        Years[6] - startEarningCreditTowards > 10
          ? ""
          : Math.max(
              natozero(balanceRepaye2026),
              natozero(balancePaye2026),
              natozero(balanceOldIBR2026)
            );
      var spouseBalance10YearPSLF2026 =
        Years[6] - startEarningCreditTowards > 10
          ? ""
          : Math.max(
              natozero(spouseBalanceRepaye2026),
              natozero(spouseBalancePaye2026),
              natozero(spouseBalanceOldIBR2026)
            );
      var yearly10YearPSLF2026 =
        Years[6] - startEarningCreditTowards > 10
          ? ""
          : Math.max(
              yearlyRepaye2026,
              natozero(yearlyPaye2026),
              yearlyOldIBR2026
            );
      var spouseYearly10YearPSLF2026 =
        Years[6] - startEarningCreditTowards > 10
          ? ""
          : Math.max(
              spouseYearlyRepaye2026,
              natozero(spouseYearlyPaye2026),
              spouseYearlyOldIBR2026
            );
      jQuery("#balance10YearPSLF2026").text(
        addCommas(Math.round(balance10YearPSLF2026))
      );
      jQuery("#spouseBalance10YearPSLF2026").text(
        addCommas(Math.round(spouseBalance10YearPSLF2026))
      );
      jQuery("#yearly10YearPSLF2026").text(
        addCommas(Math.round(yearly10YearPSLF2026))
      );
      jQuery("#spouseYearly10YearPSLF2026").text(
        addCommas(Math.round(spouseYearly10YearPSLF2026))
      );
      balance10YearPSLF[Years[6]] = balance10YearPSLF2026;
      spouseBalance10YearPSLF[Years[6]] = spouseBalance10YearPSLF2026;

      var balance10YearPSLF2027 =
        Years[7] - startEarningCreditTowards > 10
          ? ""
          : Math.max(
              natozero(balanceRepaye2027),
              natozero(balancePaye2027),
              natozero(balanceOldIBR2027)
            );
      var spouseBalance10YearPSLF2027 =
        Years[7] - startEarningCreditTowards > 10
          ? ""
          : Math.max(
              natozero(spouseBalanceRepaye2027),
              natozero(spouseBalancePaye2027),
              natozero(spouseBalanceOldIBR2027)
            );
      var yearly10YearPSLF2027 =
        Years[7] - startEarningCreditTowards > 10
          ? ""
          : Math.max(
              yearlyRepaye2027,
              natozero(yearlyPaye2027),
              yearlyOldIBR2027
            );
      var spouseYearly10YearPSLF2027 =
        Years[7] - startEarningCreditTowards > 10
          ? ""
          : Math.max(
              spouseYearlyRepaye2027,
              natozero(spouseYearlyPaye2027),
              spouseYearlyOldIBR2027
            );
      jQuery("#balance10YearPSLF2027").text(
        addCommas(Math.round(balance10YearPSLF2027))
      );
      jQuery("#spouseBalance10YearPSLF2027").text(
        addCommas(Math.round(spouseBalance10YearPSLF2027))
      );
      jQuery("#yearly10YearPSLF2027").text(
        addCommas(Math.round(yearly10YearPSLF2027))
      );
      jQuery("#spouseYearly10YearPSLF2027").text(
        addCommas(Math.round(spouseYearly10YearPSLF2027))
      );

      balance10YearPSLF[Years[7]] = balance10YearPSLF2027;
      spouseBalance10YearPSLF[Years[7]] = spouseBalance10YearPSLF2027;

      var balance10YearPSLF2028 =
        Years[8] - startEarningCreditTowards > 10
          ? ""
          : Math.max(
              natozero(balanceRepaye2028),
              natozero(balancePaye2028),
              natozero(balanceOldIBR2028)
            );
      var spouseBalance10YearPSLF2028 =
        Years[8] - startEarningCreditTowards > 10
          ? ""
          : Math.max(
              natozero(spouseBalanceRepaye2028),
              natozero(spouseBalancePaye2028),
              natozero(spouseBalanceOldIBR2028)
            );
      var yearly10YearPSLF2028 =
        Years[8] - startEarningCreditTowards > 10
          ? ""
          : Math.max(
              yearlyRepaye2028,
              natozero(yearlyPaye2028),
              yearlyOldIBR2028
            );
      var spouseYearly10YearPSLF2028 =
        Years[8] - startEarningCreditTowards > 10
          ? ""
          : Math.max(
              spouseYearlyRepaye2028,
              natozero(spouseYearlyPaye2028),
              spouseYearlyOldIBR2028
            );
      jQuery("#balance10YearPSLF2028").text(
        addCommas(Math.round(balance10YearPSLF2028))
      );
      jQuery("#spouseBalance10YearPSLF2028").text(
        addCommas(Math.round(spouseBalance10YearPSLF2028))
      );
      jQuery("#yearly10YearPSLF2028").text(
        addCommas(Math.round(yearly10YearPSLF2028))
      );
      jQuery("#spouseYearly10YearPSLF2028").text(
        addCommas(Math.round(spouseYearly10YearPSLF2028))
      );

      balance10YearPSLF[Years[8]] = balance10YearPSLF2028;
      spouseBalance10YearPSLF[Years[8]] = spouseBalance10YearPSLF2028;

      var balance10YearPSLF2029 =
        Years[9] - startEarningCreditTowards > 10
          ? ""
          : Math.max(
              natozero(balanceRepaye2029),
              natozero(balancePaye2029),
              natozero(balanceOldIBR2029)
            );
      var spouseBalance10YearPSLF2029 =
        Years[9] - startEarningCreditTowards > 10
          ? ""
          : Math.max(
              natozero(spouseBalanceRepaye2029),
              natozero(spouseBalancePaye2029),
              natozero(spouseBalanceOldIBR2029)
            );
      var yearly10YearPSLF2029 =
        Years[9] - startEarningCreditTowards > 10
          ? ""
          : Math.max(
              yearlyRepaye2020,
              natozero(yearlyPaye2029),
              yearlyOldIBR2029
            );
      var spouseYearly10YearPSLF2029 =
        Years[9] - startEarningCreditTowards > 10
          ? ""
          : Math.max(
              spouseYearlyRepaye2029,
              natozero(spouseYearlyPaye2029),
              spouseYearlyOldIBR2029
            );
      jQuery("#balance10YearPSLF2029").text(
        addCommas(Math.round(balance10YearPSLF2029))
      );
      jQuery("#spouseBalance10YearPSLF2029").text(
        addCommas(Math.round(spouseBalance10YearPSLF2029))
      );
      jQuery("#yearly10YearPSLF2029").text(
        addCommas(Math.round(yearly10YearPSLF2029))
      );
      jQuery("#spouseYearly10YearPSLF2029").text(
        addCommas(Math.round(spouseYearly10YearPSLF2029))
      );
      balance10YearPSLF[Years[9]] = balance10YearPSLF2029;
      spouseBalance10YearPSLF[Years[9]] = spouseBalance10YearPSLF2029;

      var balance10YearPSLF2030 =
        Years[10] - startEarningCreditTowards > 10
          ? ""
          : Math.max(
              natozero(balanceRepaye2030),
              natozero(balancePaye2030),
              natozero(balanceOldIBR2030)
            );
      var spouseBalance10YearPSLF2030 =
        Years[10] - startEarningCreditTowards > 10
          ? ""
          : Math.max(
              natozero(spouseBalanceRepaye2030),
              natozero(spouseBalancePaye2030),
              natozero(spouseBalanceOldIBR2030)
            );
      var yearly10YearPSLF2030 =
        Years[10] - startEarningCreditTowards > 10
          ? ""
          : Math.max(
              yearlyRepaye2020,
              natozero(yearlyPaye2030),
              yearlyOldIBR2030
            );
      var spouseYearly10YearPSLF2030 =
        Years[10] - startEarningCreditTowards > 10
          ? ""
          : Math.max(
              spouseYearlyRepaye2030,
              natozero(spouseYearlyPaye2030),
              spouseYearlyOldIBR2030
            );
      jQuery("#balance10YearPSLF2030").text(
        addCommas(Math.round(balance10YearPSLF2030))
      );
      jQuery("#spouseBalance10YearPSLF2030").text(
        addCommas(Math.round(spouseBalance10YearPSLF2030))
      );
      jQuery("#yearly10YearPSLF2030").text(
        addCommas(Math.round(yearly10YearPSLF2030))
      );
      jQuery("#spouseYearly10YearPSLF2030").text(
        addCommas(Math.round(spouseYearly10YearPSLF2030))
      );
      balance10YearPSLF[Years[10]] = balance10YearPSLF2030;
      spouseBalance10YearPSLF[Years[10]] = spouseBalance10YearPSLF2030;
      console.log(balance10YearPSLF);
      console.log(spouseBalance10YearPSLF);
    }
    /**** 4th table*****/

    //present value repaye

    if (1 === 1) {
      var presentvalueRepaye2020 = monthlyPaymentRepayeCurrentYear * 12;
      jQuery("#presentvalueRepaye2020").text(
        addCommas(Math.round(presentvalueRepaye2020))
      );

      var presentvalueRepaye2021 = getPresentValue(
        monthlyPaymentRepaye2021,
        balanceRepaye2022,
        25,
        Years[1],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueRepaye2021").text(
        addCommas(Math.round(presentvalueRepaye2021))
      );

      var presentvalueRepaye2022 = getPresentValue(
        monthlyPaymentRepaye2022,
        balanceRepaye2023,
        25,
        Years[2],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueRepaye2022").text(
        addCommas(Math.round(presentvalueRepaye2022))
      );

      var presentvalueRepaye2023 = getPresentValue(
        monthlyPaymentRepaye2023,
        balanceRepaye2024,
        25,
        Years[3],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueRepaye2023").text(
        addCommas(Math.round(presentvalueRepaye2023))
      );

      var presentvalueRepaye2024 = getPresentValue(
        monthlyPaymentRepaye2024,
        balanceRepaye2025,
        25,
        Years[4],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueRepaye2024").text(
        addCommas(Math.round(presentvalueRepaye2024))
      );

      var presentvalueRepaye2025 = getPresentValue(
        monthlyPaymentRepaye2025,
        balanceRepaye2026,
        25,
        Years[5],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueRepaye2025").text(
        addCommas(Math.round(presentvalueRepaye2025))
      );

      var presentvalueRepaye2026 = getPresentValue(
        monthlyPaymentRepaye2026,
        balanceRepaye2027,
        25,
        Years[6],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueRepaye2026").text(
        addCommas(Math.round(presentvalueRepaye2026))
      );

      var presentvalueRepaye2027 = getPresentValue(
        monthlyPaymentRepaye2027,
        balanceRepaye2028,
        25,
        Years[7],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueRepaye2027").text(
        addCommas(Math.round(presentvalueRepaye2027))
      );

      var presentvalueRepaye2028 = getPresentValue(
        monthlyPaymentRepaye2028,
        balanceRepaye2029,
        25,
        Years[8],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueRepaye2028").text(
        addCommas(Math.round(presentvalueRepaye2028))
      );

      var presentvalueRepaye2029 = getPresentValue(
        monthlyPaymentRepaye2029,
        balanceRepaye2030,
        25,
        Years[9],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueRepaye2029").text(
        addCommas(Math.round(presentvalueRepaye2029))
      );

      var presentvalueRepaye2030 = getPresentValue(
        monthlyPaymentRepaye2030,
        balanceRepaye2031,
        25,
        Years[10],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueRepaye2030").text(
        addCommas(Math.round(presentvalueRepaye2030))
      );

      var presentvalueRepaye2031 = getPresentValue(
        monthlyPaymentRepaye2031,
        balanceRepaye2032,
        25,
        Years[11],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueRepaye2031").text(
        addCommas(Math.round(presentvalueRepaye2031))
      );

      var presentvalueRepaye2032 = getPresentValue(
        monthlyPaymentRepaye2032,
        balanceRepaye2033,
        25,
        Years[12],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueRepaye2032").text(
        addCommas(Math.round(presentvalueRepaye2032))
      );

      var presentvalueRepaye2033 = getPresentValue(
        monthlyPaymentRepaye2033,
        balanceRepaye2034,
        25,
        Years[13],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueRepaye2033").text(
        addCommas(Math.round(presentvalueRepaye2033))
      );

      var presentvalueRepaye2034 = getPresentValue(
        monthlyPaymentRepaye2034,
        balanceRepaye2035,
        25,
        Years[14],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueRepaye2034").text(
        addCommas(Math.round(presentvalueRepaye2034))
      );

      var presentvalueRepaye2035 = getPresentValue(
        monthlyPaymentRepaye2035,
        balanceRepaye2036,
        25,
        Years[15],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueRepaye2035").text(
        addCommas(Math.round(presentvalueRepaye2035))
      );

      var presentvalueRepaye2036 = getPresentValue(
        monthlyPaymentRepaye2036,
        balanceRepaye2037,
        25,
        Years[16],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueRepaye2036").text(
        addCommas(Math.round(presentvalueRepaye2036))
      );

      var presentvalueRepaye2037 = getPresentValue(
        monthlyPaymentRepaye2037,
        balanceRepaye2038,
        25,
        Years[17],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueRepaye2037").text(
        addCommas(Math.round(presentvalueRepaye2037))
      );

      var presentvalueRepaye2038 = getPresentValue(
        monthlyPaymentRepaye2038,
        balanceRepaye2039,
        25,
        Years[18],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueRepaye2038").text(
        addCommas(Math.round(presentvalueRepaye2038))
      );

      var presentvalueRepaye2039 = getPresentValue(
        monthlyPaymentRepaye2039,
        balanceRepaye2040,
        25,
        Years[19],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueRepaye2039").text(
        addCommas(Math.round(presentvalueRepaye2039))
      );

      var presentvalueRepaye2040 = getPresentValue(
        monthlyPaymentRepaye2040,
        balanceRepaye2041,
        25,
        Years[20],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueRepaye2040").text(
        addCommas(Math.round(presentvalueRepaye2040))
      );

      var presentvalueRepaye2041 = getPresentValue(
        monthlyPaymentRepaye2041,
        balanceRepaye2042,
        25,
        Years[21],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueRepaye2041").text(
        addCommas(Math.round(presentvalueRepaye2041))
      );

      var presentvalueRepaye2042 = getPresentValue(
        monthlyPaymentRepaye2042,
        balanceRepaye2043,
        25,
        Years[22],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueRepaye2042").text(
        addCommas(Math.round(presentvalueRepaye2042))
      );

      var presentvalueRepaye2043 = getPresentValue(
        monthlyPaymentRepaye2043,
        balanceRepaye2044,
        25,
        Years[23],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueRepaye2043").text(
        addCommas(Math.round(presentvalueRepaye2043))
      );

      var presentvalueRepaye2044 = getPresentValue(
        monthlyPaymentRepaye2044,
        balanceRepaye2045,
        25,
        Years[24],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueRepaye2044").text(
        addCommas(Math.round(presentvalueRepaye2044))
      );

      var presentvalueRepaye2045 = getPresentValue(
        monthlyPaymentRepaye2045,
        balanceRepaye2045,
        25,
        Years[25],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueRepaye2045").text(
        addCommas(Math.round(presentvalueRepaye2045))
      );

      var spousePresentvalueRepaye2020 = spouseRepaye2020 * 12;
      jQuery("#spousePresentvalueRepaye2020").text(
        addCommas(Math.round(spousePresentvalueRepaye2020))
      );

      var spousePresentvalueRepaye2021 = getPresentValue(
        spouseRepaye2021,
        spouseBalanceRepaye2022,
        25,
        Years[1],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueRepaye2021").text(
        addCommas(Math.round(spousePresentvalueRepaye2021))
      );

      var spousePresentvalueRepaye2022 = getPresentValue(
        spouseRepaye2022,
        spouseBalanceRepaye2023,
        25,
        Years[2],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueRepaye2022").text(
        addCommas(Math.round(spousePresentvalueRepaye2022))
      );

      var spousePresentvalueRepaye2023 = getPresentValue(
        spouseRepaye2023,
        spouseBalanceRepaye2024,
        25,
        Years[3],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueRepaye2023").text(
        addCommas(Math.round(spousePresentvalueRepaye2023))
      );

      var spousePresentvalueRepaye2024 = getPresentValue(
        spouseRepaye2024,
        spouseBalanceRepaye2025,
        25,
        Years[4],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueRepaye2024").text(
        addCommas(Math.round(spousePresentvalueRepaye2024))
      );

      var spousePresentvalueRepaye2025 = getPresentValue(
        spouseRepaye2025,
        spouseBalanceRepaye2026,
        25,
        Years[5],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueRepaye2025").text(
        addCommas(Math.round(spousePresentvalueRepaye2025))
      );

      var spousePresentvalueRepaye2026 = getPresentValue(
        spouseRepaye2026,
        spouseBalanceRepaye2027,
        25,
        Years[6],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueRepaye2026").text(
        addCommas(Math.round(spousePresentvalueRepaye2026))
      );

      var spousePresentvalueRepaye2027 = getPresentValue(
        spouseRepaye2027,
        spouseBalanceRepaye2028,
        25,
        Years[7],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueRepaye2027").text(
        addCommas(Math.round(spousePresentvalueRepaye2027))
      );

      var spousePresentvalueRepaye2028 = getPresentValue(
        spouseRepaye2028,
        spouseBalanceRepaye2029,
        25,
        Years[8],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueRepaye2028").text(
        addCommas(Math.round(spousePresentvalueRepaye2028))
      );

      var spousePresentvalueRepaye2029 = getPresentValue(
        spouseRepaye2029,
        spouseBalanceRepaye2030,
        25,
        Years[9],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueRepaye2029").text(
        addCommas(Math.round(spousePresentvalueRepaye2029))
      );

      var spousePresentvalueRepaye2030 = getPresentValue(
        spouseRepaye2030,
        spouseBalanceRepaye2031,
        25,
        Years[10],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueRepaye2030").text(
        addCommas(Math.round(spousePresentvalueRepaye2030))
      );

      var spousePresentvalueRepaye2031 = getPresentValue(
        spouseRepaye2031,
        spouseBalanceRepaye2032,
        25,
        Years[11],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueRepaye2031").text(
        addCommas(Math.round(spousePresentvalueRepaye2031))
      );

      var spousePresentvalueRepaye2032 = getPresentValue(
        spouseRepaye2032,
        spouseBalanceRepaye2033,
        25,
        Years[12],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueRepaye2032").text(
        addCommas(Math.round(spousePresentvalueRepaye2032))
      );

      var spousePresentvalueRepaye2033 = getPresentValue(
        spouseRepaye2033,
        spouseBalanceRepaye2034,
        25,
        Years[13],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueRepaye2033").text(
        addCommas(Math.round(spousePresentvalueRepaye2033))
      );

      var spousePresentvalueRepaye2034 = getPresentValue(
        spouseRepaye2034,
        spouseBalanceRepaye2035,
        25,
        Years[14],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueRepaye2034").text(
        addCommas(Math.round(spousePresentvalueRepaye2034))
      );

      var spousePresentvalueRepaye2035 = getPresentValue(
        spouseRepaye2035,
        spouseBalanceRepaye2036,
        25,
        Years[15],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueRepaye2035").text(
        addCommas(Math.round(spousePresentvalueRepaye2035))
      );

      var spousePresentvalueRepaye2036 = getPresentValue(
        spouseRepaye2036,
        spouseBalanceRepaye2037,
        25,
        Years[16],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueRepaye2036").text(
        addCommas(Math.round(spousePresentvalueRepaye2036))
      );

      var spousePresentvalueRepaye2037 = getPresentValue(
        spouseRepaye2037,
        spouseBalanceRepaye2038,
        25,
        Years[17],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueRepaye2037").text(
        addCommas(Math.round(spousePresentvalueRepaye2037))
      );

      var spousePresentvalueRepaye2038 = getPresentValue(
        spouseRepaye2038,
        spouseBalanceRepaye2039,
        25,
        Years[18],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueRepaye2038").text(
        addCommas(Math.round(spousePresentvalueRepaye2038))
      );

      var spousePresentvalueRepaye2039 = getPresentValue(
        spouseRepaye2039,
        spouseBalanceRepaye2040,
        25,
        Years[19],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueRepaye2039").text(
        addCommas(Math.round(spousePresentvalueRepaye2039))
      );

      var spousePresentvalueRepaye2040 = getPresentValue(
        spouseRepaye2040,
        spouseBalanceRepaye2041,
        25,
        Years[20],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueRepaye2040").text(
        addCommas(Math.round(spousePresentvalueRepaye2040))
      );

      var spousePresentvalueRepaye2041 = getPresentValue(
        spouseRepaye2041,
        spouseBalanceRepaye2042,
        25,
        Years[21],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueRepaye2041").text(
        addCommas(Math.round(spousePresentvalueRepaye2041))
      );

      var spousePresentvalueRepaye2042 = getPresentValue(
        spouseRepaye2042,
        spouseBalanceRepaye2043,
        25,
        Years[22],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueRepaye2042").text(
        addCommas(Math.round(spousePresentvalueRepaye2042))
      );

      var spousePresentvalueRepaye2043 = getPresentValue(
        spouseRepaye2043,
        spouseBalanceRepaye2044,
        25,
        Years[23],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueRepaye2043").text(
        addCommas(Math.round(spousePresentvalueRepaye2043))
      );

      var spousePresentvalueRepaye2044 = getPresentValue(
        spouseRepaye2044,
        spouseBalanceRepaye2045,
        25,
        Years[24],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueRepaye2044").text(
        addCommas(Math.round(spousePresentvalueRepaye2044))
      );

      var spousePresentvalueRepaye2045 = getPresentValue(
        spouseRepaye2045,
        spouseBalanceRepaye2045,
        25,
        Years[25],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueRepaye2045").text(
        addCommas(Math.round(spousePresentvalueRepaye2045))
      );
    }

    //present value paye

    if (1 === 1) {
      var presentvaluePaye2020 = Paye2020 * 12;

      jQuery("#presentvaluePaye2020").text(
        borrowFederalStudentLoansBefore
          ? "N/A"
          : addCommas(Math.round(presentvaluePaye2020))
      );

      var presentvaluePaye2021 = getPresentValue(
        Paye2021,
        balancePaye2022,
        20,
        Years[1],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvaluePaye2021").text(
        borrowFederalStudentLoansBefore
          ? "N/A"
          : addCommas(Math.round(presentvaluePaye2021))
      );

      var presentvaluePaye2022 = getPresentValue(
        Paye2022,
        balancePaye2023,
        20,
        Years[2],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvaluePaye2022").text(
        borrowFederalStudentLoansBefore
          ? "N/A"
          : addCommas(Math.round(presentvaluePaye2022))
      );

      var presentvaluePaye2023 = getPresentValue(
        Paye2023,
        balancePaye2024,
        20,
        Years[3],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvaluePaye2023").text(
        borrowFederalStudentLoansBefore
          ? "N/A"
          : addCommas(Math.round(presentvaluePaye2023))
      );

      var presentvaluePaye2024 = getPresentValue(
        Paye2024,
        balancePaye2025,
        20,
        Years[4],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvaluePaye2024").text(
        borrowFederalStudentLoansBefore
          ? "N/A"
          : addCommas(Math.round(presentvaluePaye2024))
      );

      var presentvaluePaye2025 = getPresentValue(
        Paye2025,
        balancePaye2026,
        20,
        Years[5],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvaluePaye2025").text(
        borrowFederalStudentLoansBefore
          ? "N/A"
          : addCommas(Math.round(presentvaluePaye2025))
      );

      var presentvaluePaye2026 = getPresentValue(
        Paye2026,
        balancePaye2027,
        20,
        Years[6],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvaluePaye2026").text(
        borrowFederalStudentLoansBefore
          ? "N/A"
          : addCommas(Math.round(presentvaluePaye2026))
      );

      var presentvaluePaye2027 = getPresentValue(
        Paye2027,
        balancePaye2028,
        20,
        Years[7],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvaluePaye2027").text(
        borrowFederalStudentLoansBefore
          ? "N/A"
          : addCommas(Math.round(presentvaluePaye2027))
      );

      var presentvaluePaye2028 = getPresentValue(
        Paye2028,
        balancePaye2029,
        20,
        Years[8],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvaluePaye2028").text(
        borrowFederalStudentLoansBefore
          ? "N/A"
          : addCommas(Math.round(presentvaluePaye2028))
      );

      var presentvaluePaye2029 = getPresentValue(
        Paye2029,
        balancePaye2030,
        20,
        Years[9],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvaluePaye2029").text(
        borrowFederalStudentLoansBefore
          ? "N/A"
          : addCommas(Math.round(presentvaluePaye2029))
      );

      var presentvaluePaye2030 = getPresentValue(
        Paye2030,
        balancePaye2031,
        20,
        Years[10],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvaluePaye2030").text(
        borrowFederalStudentLoansBefore
          ? "N/A"
          : addCommas(Math.round(presentvaluePaye2030))
      );

      var presentvaluePaye2031 = getPresentValue(
        Paye2031,
        balancePaye2032,
        20,
        Years[11],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvaluePaye2031").text(
        borrowFederalStudentLoansBefore
          ? "N/A"
          : addCommas(Math.round(presentvaluePaye2031))
      );

      var presentvaluePaye2032 = getPresentValue(
        Paye2032,
        balancePaye2033,
        20,
        Years[12],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvaluePaye2032").text(
        borrowFederalStudentLoansBefore
          ? "N/A"
          : addCommas(Math.round(presentvaluePaye2032))
      );

      var presentvaluePaye2033 = getPresentValue(
        Paye2033,
        balancePaye2034,
        20,
        Years[13],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvaluePaye2033").text(
        borrowFederalStudentLoansBefore
          ? "N/A"
          : addCommas(Math.round(presentvaluePaye2033))
      );

      var presentvaluePaye2034 = getPresentValue(
        Paye2034,
        balancePaye2035,
        20,
        Years[14],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvaluePaye2034").text(
        borrowFederalStudentLoansBefore
          ? "N/A"
          : addCommas(Math.round(presentvaluePaye2034))
      );

      var presentvaluePaye2035 = getPresentValue(
        Paye2035,
        balancePaye2036,
        20,
        Years[15],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvaluePaye2035").text(
        borrowFederalStudentLoansBefore
          ? "N/A"
          : addCommas(Math.round(presentvaluePaye2035))
      );

      var presentvaluePaye2036 = getPresentValue(
        Paye2036,
        balancePaye2037,
        20,
        Years[16],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvaluePaye2036").text(
        borrowFederalStudentLoansBefore
          ? "N/A"
          : addCommas(Math.round(presentvaluePaye2036))
      );

      var presentvaluePaye2037 = getPresentValue(
        Paye2037,
        balancePaye2038,
        20,
        Years[17],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvaluePaye2037").text(
        borrowFederalStudentLoansBefore
          ? "N/A"
          : addCommas(Math.round(presentvaluePaye2037))
      );

      var presentvaluePaye2038 = getPresentValue(
        Paye2038,
        balancePaye2039,
        20,
        Years[18],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvaluePaye2038").text(
        borrowFederalStudentLoansBefore
          ? "N/A"
          : addCommas(Math.round(presentvaluePaye2038))
      );

      var presentvaluePaye2039 = getPresentValue(
        Paye2039,
        balancePaye2040,
        20,
        Years[19],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvaluePaye2039").text(
        borrowFederalStudentLoansBefore
          ? "N/A"
          : addCommas(Math.round(presentvaluePaye2039))
      );

      /* var presentvaluePaye2040 = getPresentValue(Paye2040,balancePaye2040,20,Years[20],Years[0],startEarningCreditTowards,annualRateOfReturnCanGetOnYourInvestments,estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate);
jQuery('#presentvaluePaye2040').text (addCommas(Math.round(presentvaluePaye2040)));*/

      var spousePresentvaluePaye2020 = spousePaye2020 * 12;

      jQuery("#spousePresentvaluePaye2020").text(
        borrowFederalStudentLoansBefore
          ? "N/A"
          : addCommas(Math.round(spousePresentvaluePaye2020))
      );

      var spousePresentvaluePaye2021 = getPresentValue(
        PayeSpouse2021,
        spouseBalancePaye2022,
        20,
        Years[1],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvaluePaye2021").text(
        borrowFederalStudentLoansBefore
          ? "N/A"
          : addCommas(Math.round(spousePresentvaluePaye2021))
      );

      var spousePresentvaluePaye2022 = getPresentValue(
        PayeSpouse2022,
        spouseBalancePaye2023,
        20,
        Years[2],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvaluePaye2022").text(
        borrowFederalStudentLoansBefore
          ? "N/A"
          : addCommas(Math.round(spousePresentvaluePaye2022))
      );

      var spousePresentvaluePaye2023 = getPresentValue(
        PayeSpouse2023,
        spouseBalancePaye2024,
        20,
        Years[3],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvaluePaye2023").text(
        borrowFederalStudentLoansBefore
          ? "N/A"
          : addCommas(Math.round(spousePresentvaluePaye2023))
      );

      var spousePresentvaluePaye2024 = getPresentValue(
        PayeSpouse2024,
        spouseBalancePaye2025,
        20,
        Years[4],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvaluePaye2024").text(
        borrowFederalStudentLoansBefore
          ? "N/A"
          : addCommas(Math.round(spousePresentvaluePaye2024))
      );

      var spousePresentvaluePaye2025 = getPresentValue(
        PayeSpouse2025,
        spouseBalancePaye2026,
        20,
        Years[5],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvaluePaye2025").text(
        borrowFederalStudentLoansBefore
          ? "N/A"
          : addCommas(Math.round(spousePresentvaluePaye2025))
      );

      var spousePresentvaluePaye2026 = getPresentValue(
        PayeSpouse2026,
        spouseBalancePaye2027,
        20,
        Years[6],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvaluePaye2026").text(
        borrowFederalStudentLoansBefore
          ? "N/A"
          : addCommas(Math.round(spousePresentvaluePaye2026))
      );

      var spousePresentvaluePaye2027 = getPresentValue(
        PayeSpouse2027,
        spouseBalancePaye2028,
        20,
        Years[7],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvaluePaye2027").text(
        borrowFederalStudentLoansBefore
          ? "N/A"
          : addCommas(Math.round(spousePresentvaluePaye2027))
      );

      var spousePresentvaluePaye2028 = getPresentValue(
        PayeSpouse2028,
        spouseBalancePaye2029,
        20,
        Years[8],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvaluePaye2028").text(
        borrowFederalStudentLoansBefore
          ? "N/A"
          : addCommas(Math.round(spousePresentvaluePaye2028))
      );

      var spousePresentvaluePaye2029 = getPresentValue(
        PayeSpouse2029,
        spouseBalancePaye2030,
        20,
        Years[9],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvaluePaye2029").text(
        borrowFederalStudentLoansBefore
          ? "N/A"
          : addCommas(Math.round(spousePresentvaluePaye2029))
      );

      var spousePresentvaluePaye2030 = getPresentValue(
        PayeSpouse2030,
        spouseBalancePaye2031,
        20,
        Years[10],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvaluePaye2030").text(
        borrowFederalStudentLoansBefore
          ? "N/A"
          : addCommas(Math.round(spousePresentvaluePaye2030))
      );

      var spousePresentvaluePaye2031 = getPresentValue(
        PayeSpouse2031,
        spouseBalancePaye2032,
        20,
        Years[11],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvaluePaye2031").text(
        borrowFederalStudentLoansBefore
          ? "N/A"
          : addCommas(Math.round(spousePresentvaluePaye2031))
      );

      var spousePresentvaluePaye2032 = getPresentValue(
        PayeSpouse2032,
        spouseBalancePaye2033,
        20,
        Years[12],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvaluePaye2032").text(
        borrowFederalStudentLoansBefore
          ? "N/A"
          : addCommas(Math.round(spousePresentvaluePaye2032))
      );

      var spousePresentvaluePaye2033 = getPresentValue(
        PayeSpouse2033,
        spouseBalancePaye2034,
        20,
        Years[13],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvaluePaye2033").text(
        borrowFederalStudentLoansBefore
          ? "N/A"
          : addCommas(Math.round(spousePresentvaluePaye2033))
      );

      var spousePresentvaluePaye2034 = getPresentValue(
        PayeSpouse2034,
        spouseBalancePaye2035,
        20,
        Years[14],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvaluePaye2034").text(
        borrowFederalStudentLoansBefore
          ? "N/A"
          : addCommas(Math.round(spousePresentvaluePaye2034))
      );

      var spousePresentvaluePaye2035 = getPresentValue(
        PayeSpouse2035,
        spouseBalancePaye2036,
        20,
        Years[15],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvaluePaye2035").text(
        borrowFederalStudentLoansBefore
          ? "N/A"
          : addCommas(Math.round(spousePresentvaluePaye2035))
      );

      var spousePresentvaluePaye2036 = getPresentValue(
        PayeSpouse2036,
        spouseBalancePaye2037,
        20,
        Years[16],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvaluePaye2036").text(
        borrowFederalStudentLoansBefore
          ? "N/A"
          : addCommas(Math.round(spousePresentvaluePaye2036))
      );

      var spousePresentvaluePaye2037 = getPresentValue(
        PayeSpouse2037,
        spouseBalancePaye2038,
        20,
        Years[17],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvaluePaye2037").text(
        borrowFederalStudentLoansBefore
          ? "N/A"
          : addCommas(Math.round(spousePresentvaluePaye2037))
      );

      var spousePresentvaluePaye2038 = getPresentValue(
        PayeSpouse2038,
        spouseBalancePaye2039,
        20,
        Years[18],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvaluePaye2038").text(
        borrowFederalStudentLoansBefore
          ? "N/A"
          : addCommas(Math.round(spousePresentvaluePaye2038))
      );

      var spousePresentvaluePaye2039 = getPresentValue(
        PayeSpouse2039,
        spouseBalancePaye2040,
        20,
        Years[19],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvaluePaye2039").text(
        borrowFederalStudentLoansBefore
          ? "N/A"
          : addCommas(Math.round(spousePresentvaluePaye2039))
      );
      /*
var spousePresentvaluePaye2040 = getPresentValue(PayeSpouse2040,spouseBalancePaye2040,20,Years[20],Years[0],startEarningCreditTowards,annualRateOfReturnCanGetOnYourInvestments,estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate);
jQuery('#spousePresentvaluePaye2040').text (addCommas(Math.round(spousePresentvaluePaye2040)));

*/
    }

    //present value ibr

    if (1 === 1) {
      var presentvalueOldIBR2020 = OldIbr2020 * 12;
      jQuery("#presentvalueOldIBR2020").text(
        addCommas(Math.round(presentvalueOldIBR2020))
      );

      var presentvalueOldIBR2021 = getPresentValue(
        OldIbr2021,
        balanceOldIBR2022,
        25,
        Years[1],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueOldIBR2021").text(
        addCommas(Math.round(presentvalueOldIBR2021))
      );

      var presentvalueOldIBR2022 = getPresentValue(
        OldIbr2022,
        balanceOldIBR2023,
        25,
        Years[2],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueOldIBR2022").text(
        addCommas(Math.round(presentvalueOldIBR2022))
      );

      var presentvalueOldIBR2023 = getPresentValue(
        OldIbr2023,
        balanceOldIBR2024,
        25,
        Years[3],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueOldIBR2023").text(
        addCommas(Math.round(presentvalueOldIBR2023))
      );

      var presentvalueOldIBR2024 = getPresentValue(
        OldIbr2024,
        balanceOldIBR2025,
        25,
        Years[4],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueOldIBR2024").text(
        addCommas(Math.round(presentvalueOldIBR2024))
      );

      var presentvalueOldIBR2025 = getPresentValue(
        OldIbr2025,
        balanceOldIBR2026,
        25,
        Years[5],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueOldIBR2025").text(
        addCommas(Math.round(presentvalueOldIBR2025))
      );

      var presentvalueOldIBR2026 = getPresentValue(
        OldIbr2026,
        balanceOldIBR2027,
        25,
        Years[6],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueOldIBR2026").text(
        addCommas(Math.round(presentvalueOldIBR2026))
      );

      var presentvalueOldIBR2027 = getPresentValue(
        OldIbr2027,
        balanceOldIBR2028,
        25,
        Years[7],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueOldIBR2027").text(
        addCommas(Math.round(presentvalueOldIBR2027))
      );

      var presentvalueOldIBR2028 = getPresentValue(
        OldIbr2028,
        balanceOldIBR2029,
        25,
        Years[8],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueOldIBR2028").text(
        addCommas(Math.round(presentvalueOldIBR2028))
      );

      var presentvalueOldIBR2029 = getPresentValue(
        OldIbr2029,
        balanceOldIBR2030,
        25,
        Years[9],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueOldIBR2029").text(
        addCommas(Math.round(presentvalueOldIBR2029))
      );

      var presentvalueOldIBR2030 = getPresentValue(
        OldIbr2030,
        balanceOldIBR2031,
        25,
        Years[10],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueOldIBR2030").text(
        addCommas(Math.round(presentvalueOldIBR2030))
      );

      var presentvalueOldIBR2031 = getPresentValue(
        OldIbr2031,
        balanceOldIBR2032,
        25,
        Years[11],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueOldIBR2031").text(
        addCommas(Math.round(presentvalueOldIBR2031))
      );

      var presentvalueOldIBR2032 = getPresentValue(
        OldIbr2032,
        balanceOldIBR2033,
        25,
        Years[12],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueOldIBR2032").text(
        addCommas(Math.round(presentvalueOldIBR2032))
      );

      var presentvalueOldIBR2033 = getPresentValue(
        OldIbr2033,
        balanceOldIBR2034,
        25,
        Years[13],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueOldIBR2033").text(
        addCommas(Math.round(presentvalueOldIBR2033))
      );

      var presentvalueOldIBR2034 = getPresentValue(
        OldIbr2034,
        balanceOldIBR2035,
        25,
        Years[14],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueOldIBR2034").text(
        addCommas(Math.round(presentvalueOldIBR2034))
      );

      var presentvalueOldIBR2035 = getPresentValue(
        OldIbr2035,
        balanceOldIBR2036,
        25,
        Years[15],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueOldIBR2035").text(
        addCommas(Math.round(presentvalueOldIBR2035))
      );

      var presentvalueOldIBR2036 = getPresentValue(
        OldIbr2036,
        balanceOldIBR2037,
        25,
        Years[16],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueOldIBR2036").text(
        addCommas(Math.round(presentvalueOldIBR2036))
      );

      var presentvalueOldIBR2037 = getPresentValue(
        OldIbr2037,
        balanceOldIBR2038,
        25,
        Years[17],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueOldIBR2037").text(
        addCommas(Math.round(presentvalueOldIBR2037))
      );

      var presentvalueOldIBR2038 = getPresentValue(
        OldIbr2038,
        balanceOldIBR2039,
        25,
        Years[18],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueOldIBR2038").text(
        addCommas(Math.round(presentvalueOldIBR2038))
      );

      var presentvalueOldIBR2039 = getPresentValue(
        OldIbr2039,
        balanceOldIBR2040,
        25,
        Years[19],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueOldIBR2039").text(
        addCommas(Math.round(presentvalueOldIBR2039))
      );

      var presentvalueOldIBR2040 = getPresentValue(
        OldIbr2040,
        balanceOldIBR2041,
        25,
        Years[20],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueOldIBR2040").text(
        addCommas(Math.round(presentvalueOldIBR2040))
      );

      var presentvalueOldIBR2041 = getPresentValue(
        OldIbr2041,
        balanceOldIBR2042,
        25,
        Years[21],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueOldIBR2041").text(
        addCommas(Math.round(presentvalueOldIBR2041))
      );

      var presentvalueOldIBR2042 = getPresentValue(
        OldIbr2042,
        balanceOldIBR2043,
        25,
        Years[22],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueOldIBR2042").text(
        addCommas(Math.round(presentvalueOldIBR2042))
      );

      var presentvalueOldIBR2043 = getPresentValue(
        OldIbr2043,
        balanceOldIBR2044,
        25,
        Years[23],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueOldIBR2043").text(
        addCommas(Math.round(presentvalueOldIBR2043))
      );

      var presentvalueOldIBR2044 = getPresentValue(
        OldIbr2044,
        balanceOldIBR2045,
        25,
        Years[24],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueOldIBR2044").text(
        addCommas(Math.round(presentvalueOldIBR2044))
      );

      var presentvalueOldIBR2045 = getPresentValue(
        OldIbr2045,
        balanceOldIBR2045,
        25,
        Years[25],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueOldIBR2045").text(
        addCommas(Math.round(presentvalueOldIBR2045))
      );

      var spousePresentvalueOldIBR2020 = spouseOldIBR2020 * 12;
      jQuery("#spousePresentvalueOldIBR2020").text(
        addCommas(Math.round(spousePresentvalueOldIBR2020))
      );

      var spousePresentvalueOldIBR2021 = getPresentValue(
        spouseOldIBR2021,
        spouseBalanceOldIBR2022,
        25,
        Years[1],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueOldIBR2021").text(
        addCommas(Math.round(spousePresentvalueOldIBR2021))
      );

      var spousePresentvalueOldIBR2022 = getPresentValue(
        spouseOldIBR2022,
        spouseBalanceOldIBR2023,
        25,
        Years[2],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueOldIBR2022").text(
        addCommas(Math.round(spousePresentvalueOldIBR2022))
      );

      var spousePresentvalueOldIBR2023 = getPresentValue(
        spouseOldIBR2023,
        spouseBalanceOldIBR2024,
        25,
        Years[3],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueOldIBR2023").text(
        addCommas(Math.round(spousePresentvalueOldIBR2023))
      );

      var spousePresentvalueOldIBR2024 = getPresentValue(
        spouseOldIBR2024,
        spouseBalanceOldIBR2025,
        25,
        Years[4],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueOldIBR2024").text(
        addCommas(Math.round(spousePresentvalueOldIBR2024))
      );

      var spousePresentvalueOldIBR2025 = getPresentValue(
        spouseOldIBR2025,
        spouseBalanceOldIBR2026,
        25,
        Years[5],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueOldIBR2025").text(
        addCommas(Math.round(spousePresentvalueOldIBR2025))
      );

      var spousePresentvalueOldIBR2026 = getPresentValue(
        spouseOldIBR2026,
        spouseBalanceOldIBR2027,
        25,
        Years[6],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueOldIBR2026").text(
        addCommas(Math.round(spousePresentvalueOldIBR2026))
      );

      var spousePresentvalueOldIBR2027 = getPresentValue(
        spouseOldIBR2027,
        spouseBalanceOldIBR2028,
        25,
        Years[7],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueOldIBR2027").text(
        addCommas(Math.round(spousePresentvalueOldIBR2027))
      );

      var spousePresentvalueOldIBR2028 = getPresentValue(
        spouseOldIBR2028,
        spouseBalanceOldIBR2029,
        25,
        Years[8],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueOldIBR2028").text(
        addCommas(Math.round(spousePresentvalueOldIBR2028))
      );

      var spousePresentvalueOldIBR2029 = getPresentValue(
        spouseOldIBR2029,
        spouseBalanceOldIBR2030,
        25,
        Years[9],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueOldIBR2029").text(
        addCommas(Math.round(spousePresentvalueOldIBR2029))
      );

      var spousePresentvalueOldIBR2030 = getPresentValue(
        spouseOldIBR2030,
        spouseBalanceOldIBR2031,
        25,
        Years[10],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueOldIBR2030").text(
        addCommas(Math.round(spousePresentvalueOldIBR2030))
      );

      var spousePresentvalueOldIBR2031 = getPresentValue(
        spouseOldIBR2031,
        spouseBalanceOldIBR2032,
        25,
        Years[11],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueOldIBR2031").text(
        addCommas(Math.round(spousePresentvalueOldIBR2031))
      );

      var spousePresentvalueOldIBR2032 = getPresentValue(
        spouseOldIBR2032,
        spouseBalanceOldIBR2033,
        25,
        Years[12],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueOldIBR2032").text(
        addCommas(Math.round(spousePresentvalueOldIBR2032))
      );

      var spousePresentvalueOldIBR2033 = getPresentValue(
        spouseOldIBR2033,
        spouseBalanceOldIBR2034,
        25,
        Years[13],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueOldIBR2033").text(
        addCommas(Math.round(spousePresentvalueOldIBR2033))
      );

      var spousePresentvalueOldIBR2034 = getPresentValue(
        spouseOldIBR2034,
        spouseBalanceOldIBR2035,
        25,
        Years[14],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueOldIBR2034").text(
        addCommas(Math.round(spousePresentvalueOldIBR2034))
      );

      var spousePresentvalueOldIBR2035 = getPresentValue(
        spouseOldIBR2035,
        spouseBalanceOldIBR2036,
        25,
        Years[15],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueOldIBR2035").text(
        addCommas(Math.round(spousePresentvalueOldIBR2035))
      );

      var spousePresentvalueOldIBR2036 = getPresentValue(
        spouseOldIBR2036,
        spouseBalanceOldIBR2037,
        25,
        Years[16],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueOldIBR2036").text(
        addCommas(Math.round(spousePresentvalueOldIBR2036))
      );

      var spousePresentvalueOldIBR2037 = getPresentValue(
        spouseOldIBR2037,
        spouseBalanceOldIBR2038,
        25,
        Years[17],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueOldIBR2037").text(
        addCommas(Math.round(spousePresentvalueOldIBR2037))
      );

      var spousePresentvalueOldIBR2038 = getPresentValue(
        spouseOldIBR2038,
        spouseBalanceOldIBR2039,
        25,
        Years[18],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueOldIBR2038").text(
        addCommas(Math.round(spousePresentvalueOldIBR2038))
      );

      var spousePresentvalueOldIBR2039 = getPresentValue(
        spouseOldIBR2039,
        spouseBalanceOldIBR2040,
        25,
        Years[19],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueOldIBR2039").text(
        addCommas(Math.round(spousePresentvalueOldIBR2039))
      );

      var spousePresentvalueOldIBR2040 = getPresentValue(
        spouseOldIBR2040,
        spouseBalanceOldIBR2041,
        25,
        Years[20],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueOldIBR2040").text(
        addCommas(Math.round(spousePresentvalueOldIBR2040))
      );

      var spousePresentvalueOldIBR2041 = getPresentValue(
        spouseOldIBR2041,
        spouseBalanceOldIBR2042,
        25,
        Years[21],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueOldIBR2041").text(
        addCommas(Math.round(spousePresentvalueOldIBR2041))
      );

      var spousePresentvalueOldIBR2042 = getPresentValue(
        spouseOldIBR2042,
        spouseBalanceOldIBR2043,
        25,
        Years[22],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueOldIBR2042").text(
        addCommas(Math.round(spousePresentvalueOldIBR2042))
      );

      var spousePresentvalueOldIBR2043 = getPresentValue(
        spouseOldIBR2043,
        spouseBalanceOldIBR2044,
        25,
        Years[23],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueOldIBR2043").text(
        addCommas(Math.round(spousePresentvalueOldIBR2043))
      );

      var spousePresentvalueOldIBR2044 = getPresentValue(
        spouseOldIBR2044,
        spouseBalanceOldIBR2045,
        25,
        Years[24],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueOldIBR2044").text(
        addCommas(Math.round(spousePresentvalueOldIBR2044))
      );

      var spousePresentvalueOldIBR2045 = getPresentValue(
        spouseOldIBR2045,
        spouseBalanceOldIBR2045,
        25,
        Years[25],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueOldIBR2045").text(
        addCommas(Math.round(spousePresentvalueOldIBR2045))
      );
    }

    //present value standart

    if (1 === 1) {
      var presentvaluetandart2020 = monthlyPaymentStandart * 12;
      jQuery("#presentvaluetandart2020").text(
        addCommas(Math.round(presentvaluetandart2020))
      );

      var presentvaluetandart2021 = getPresentValue(
        monthlyPaymentStandart,
        balanceStandart2021,
        25,
        Years[1],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvaluetandart2021").text(
        addCommas(Math.round(presentvaluetandart2021))
      );

      var presentvaluetandart2022 = getPresentValue(
        monthlyPaymentStandart,
        balanceStandart2022,
        25,
        Years[2],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvaluetandart2022").text(
        addCommas(Math.round(presentvaluetandart2022))
      );

      var presentvaluetandart2023 = getPresentValue(
        monthlyPaymentStandart,
        balanceStandart2023,
        25,
        Years[3],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvaluetandart2023").text(
        addCommas(Math.round(presentvaluetandart2023))
      );

      var presentvaluetandart2024 = getPresentValue(
        monthlyPaymentStandart,
        balanceStandart2024,
        25,
        Years[4],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvaluetandart2024").text(
        addCommas(Math.round(presentvaluetandart2024))
      );

      var presentvaluetandart2025 = getPresentValue(
        monthlyPaymentStandart,
        balanceStandart2025,
        25,
        Years[5],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvaluetandart2025").text(
        addCommas(Math.round(presentvaluetandart2025))
      );

      var presentvaluetandart2026 = getPresentValue(
        monthlyPaymentStandart,
        balanceStandart2026,
        25,
        Years[6],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvaluetandart2026").text(
        addCommas(Math.round(presentvaluetandart2026))
      );

      var presentvaluetandart2027 = getPresentValue(
        monthlyPaymentStandart,
        balanceStandart2027,
        25,
        Years[7],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvaluetandart2027").text(
        addCommas(Math.round(presentvaluetandart2027))
      );

      var presentvaluetandart2028 = getPresentValue(
        monthlyPaymentStandart,
        balanceStandart2028,
        25,
        Years[8],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvaluetandart2028").text(
        addCommas(Math.round(presentvaluetandart2028))
      );

      var presentvaluetandart2029 = getPresentValue(
        monthlyPaymentStandart,
        balanceStandart2029,
        25,
        Years[9],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvaluetandart2029").text(
        addCommas(Math.round(presentvaluetandart2029))
      );

      var spousePresentvaluetandart2020 = spouseStandart * 12;
      jQuery("#spousePresentvaluetandart2020").text(
        addCommas(Math.round(spousePresentvaluetandart2020))
      );

      var spousePresentvaluetandart2021 = getPresentValue(
        spouseStandart,
        spouseBalanceStandart2021,
        25,
        Years[1],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvaluetandart2021").text(
        addCommas(Math.round(spousePresentvaluetandart2021))
      );

      var spousePresentvaluetandart2022 = getPresentValue(
        spouseStandart,
        spouseBalanceStandart2022,
        25,
        Years[2],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvaluetandart2022").text(
        addCommas(Math.round(spousePresentvaluetandart2022))
      );

      var spousePresentvaluetandart2023 = getPresentValue(
        spouseStandart,
        spouseBalanceStandart2023,
        25,
        Years[3],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvaluetandart2023").text(
        addCommas(Math.round(spousePresentvaluetandart2023))
      );

      var spousePresentvaluetandart2024 = getPresentValue(
        spouseStandart,
        spouseBalanceStandart2024,
        25,
        Years[4],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvaluetandart2024").text(
        addCommas(Math.round(spousePresentvaluetandart2024))
      );

      var spousePresentvaluetandart2025 = getPresentValue(
        spouseStandart,
        spouseBalanceStandart2025,
        25,
        Years[5],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvaluetandart2025").text(
        addCommas(Math.round(spousePresentvaluetandart2025))
      );

      var spousePresentvaluetandart2026 = getPresentValue(
        spouseStandart,
        spouseBalanceStandart2026,
        25,
        Years[6],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvaluetandart2026").text(
        addCommas(Math.round(spousePresentvaluetandart2026))
      );

      var spousePresentvaluetandart2027 = getPresentValue(
        spouseStandart,
        spouseBalanceStandart2027,
        25,
        Years[7],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvaluetandart2027").text(
        addCommas(Math.round(spousePresentvaluetandart2027))
      );

      var spousePresentvaluetandart2028 = getPresentValue(
        spouseStandart,
        spouseBalanceStandart2028,
        25,
        Years[8],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvaluetandart2028").text(
        addCommas(Math.round(spousePresentvaluetandart2028))
      );

      var spousePresentvaluetandart2029 = getPresentValue(
        spouseStandart,
        spouseBalanceStandart2029,
        25,
        Years[9],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvaluetandart2029").text(
        addCommas(Math.round(spousePresentvaluetandart2029))
      );
    }

    //refinancing

    if (1 === 1) {
      var presentvalueRefinancing2020 = Refinancing2020 * 12;
      jQuery("#presentvalueRefinancing2020").text(
        addCommas(Math.round(presentvalueRefinancing2020))
      );

      var presentvalueRefinancing2021 = getPresentValue(
        Refinancing2021,
        balanceRefinancing2021,
        25,
        Years[1],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueRefinancing2021").text(
        addCommas(Math.round(presentvalueRefinancing2021))
      );

      var presentvalueRefinancing2022 = getPresentValue(
        Refinancing2022,
        balanceRefinancing2022,
        25,
        Years[2],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueRefinancing2022").text(
        addCommas(Math.round(presentvalueRefinancing2022))
      );

      var presentvalueRefinancing2023 = getPresentValue(
        Refinancing2023,
        balanceRefinancing2023,
        25,
        Years[3],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueRefinancing2023").text(
        addCommas(Math.round(presentvalueRefinancing2023))
      );

      var presentvalueRefinancing2024 = getPresentValue(
        Refinancing2024,
        balanceRefinancing2024,
        25,
        Years[4],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueRefinancing2024").text(
        addCommas(Math.round(presentvalueRefinancing2024))
      );

      var presentvalueRefinancing2025 = getPresentValue(
        Refinancing2025,
        balanceRefinancing2025,
        25,
        Years[5],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueRefinancing2025").text(
        addCommas(Math.round(presentvalueRefinancing2025))
      );

      var presentvalueRefinancing2026 = getPresentValue(
        Refinancing2026,
        balanceRefinancing2026,
        25,
        Years[6],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueRefinancing2026").text(
        addCommas(Math.round(presentvalueRefinancing2026))
      );

      var presentvalueRefinancing2027 = getPresentValue(
        Refinancing2027,
        balanceRefinancing2027,
        25,
        Years[7],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueRefinancing2027").text(
        addCommas(Math.round(presentvalueRefinancing2027))
      );

      var presentvalueRefinancing2028 = getPresentValue(
        Refinancing2028,
        balanceRefinancing2028,
        25,
        Years[8],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueRefinancing2028").text(
        addCommas(Math.round(presentvalueRefinancing2028))
      );

      var presentvalueRefinancing2029 = getPresentValue(
        Refinancing2029,
        balanceRefinancing2029,
        25,
        Years[9],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalueRefinancing2029").text(
        addCommas(Math.round(presentvalueRefinancing2029))
      );

      var spousePresentvalueRefinancing2020 = spouseRefinancing2020 * 12;
      jQuery("#spousePresentvalueRefinancing2020").text(
        addCommas(Math.round(spousePresentvalueRefinancing2020))
      );

      var spousePresentvalueRefinancing2021 = getPresentValue(
        spouseRefinancing2021,
        spouseBalanceRefinancing2021,
        25,
        Years[1],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueRefinancing2021").text(
        addCommas(Math.round(spousePresentvalueRefinancing2021))
      );

      var spousePresentvalueRefinancing2022 = getPresentValue(
        spouseRefinancing2022,
        spouseBalanceRefinancing2022,
        25,
        Years[2],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueRefinancing2022").text(
        addCommas(Math.round(spousePresentvalueRefinancing2022))
      );

      var spousePresentvalueRefinancing2023 = getPresentValue(
        spouseRefinancing2023,
        spouseBalanceRefinancing2023,
        25,
        Years[3],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueRefinancing2023").text(
        addCommas(Math.round(spousePresentvalueRefinancing2023))
      );

      var spousePresentvalueRefinancing2024 = getPresentValue(
        spouseRefinancing2024,
        spouseBalanceRefinancing2024,
        25,
        Years[4],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueRefinancing2024").text(
        addCommas(Math.round(spousePresentvalueRefinancing2024))
      );

      var spousePresentvalueRefinancing2025 = getPresentValue(
        spouseRefinancing2025,
        spouseBalanceRefinancing2025,
        25,
        Years[5],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueRefinancing2025").text(
        addCommas(Math.round(spousePresentvalueRefinancing2025))
      );

      var spousePresentvalueRefinancing2026 = getPresentValue(
        spouseRefinancing2026,
        spouseBalanceRefinancing2026,
        25,
        Years[6],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueRefinancing2026").text(
        addCommas(Math.round(spousePresentvalueRefinancing2026))
      );

      var spousePresentvalueRefinancing2027 = getPresentValue(
        spouseRefinancing2027,
        spouseBalanceRefinancing2027,
        25,
        Years[7],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueRefinancing2027").text(
        addCommas(Math.round(spousePresentvalueRefinancing2027))
      );

      var spousePresentvalueRefinancing2028 = getPresentValue(
        spouseRefinancing2028,
        spouseBalanceRefinancing2028,
        25,
        Years[8],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueRefinancing2028").text(
        addCommas(Math.round(spousePresentvalueRefinancing2028))
      );

      var spousePresentvalueRefinancing2029 = getPresentValue(
        spouseRefinancing2029,
        spouseBalanceRefinancing2029,
        25,
        Years[9],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalueRefinancing2029").text(
        addCommas(Math.round(spousePresentvalueRefinancing2029))
      );
    }

    //pslf

    if (1 === 1) {
      var presentvalue10YearPSLF2020 = lowestMonthlyPSLFPayment2020 * 12;
      jQuery("#presentvalue10YearPSLF2020").text(
        addCommas(Math.round(presentvalue10YearPSLF2020))
      );

      var presentvalue10YearPSLF2021 = getPresentValue(
        lowestMonthlyPSLFPayment2021,
        balance10YearPSLF2021,
        25,
        Years[1],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalue10YearPSLF2021").text(
        addCommas(Math.round(presentvalue10YearPSLF2021))
      );

      var presentvalue10YearPSLF2022 = getPresentValue(
        lowestMonthlyPSLFPayment2022,
        balance10YearPSLF2022,
        25,
        Years[2],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalue10YearPSLF2022").text(
        addCommas(Math.round(presentvalue10YearPSLF2022))
      );

      var presentvalue10YearPSLF2023 = getPresentValue(
        lowestMonthlyPSLFPayment2023,
        balance10YearPSLF2023,
        25,
        Years[3],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalue10YearPSLF2023").text(
        addCommas(Math.round(presentvalue10YearPSLF2023))
      );

      var presentvalue10YearPSLF2024 = getPresentValue(
        lowestMonthlyPSLFPayment2024,
        balance10YearPSLF2024,
        25,
        Years[4],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalue10YearPSLF2024").text(
        addCommas(Math.round(presentvalue10YearPSLF2024))
      );

      var presentvalue10YearPSLF2025 = getPresentValue(
        lowestMonthlyPSLFPayment2025,
        balance10YearPSLF2025,
        25,
        Years[5],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalue10YearPSLF2025").text(
        addCommas(Math.round(presentvalue10YearPSLF2025))
      );

      var presentvalue10YearPSLF2026 = getPresentValue(
        lowestMonthlyPSLFPayment2026,
        balance10YearPSLF2026,
        25,
        Years[6],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalue10YearPSLF2026").text(
        addCommas(Math.round(presentvalue10YearPSLF2026))
      );

      var presentvalue10YearPSLF2027 = getPresentValue(
        lowestMonthlyPSLFPayment2027,
        balance10YearPSLF2027,
        25,
        Years[7],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalue10YearPSLF2027").text(
        addCommas(Math.round(presentvalue10YearPSLF2027))
      );

      var presentvalue10YearPSLF2028 = getPresentValue(
        lowestMonthlyPSLFPayment2028,
        balance10YearPSLF2028,
        25,
        Years[8],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalue10YearPSLF2028").text(
        addCommas(Math.round(presentvalue10YearPSLF2028))
      );

      var presentvalue10YearPSLF2029 = getPresentValue(
        lowestMonthlyPSLFPayment2029,
        balance10YearPSLF2029,
        25,
        Years[9],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#presentvalue10YearPSLF2029").text(
        addCommas(Math.round(presentvalue10YearPSLF2029))
      );

      var spousePresentvalue10YearPSLF2020 =
        sposeLowestMonthlyPSLFPayment2020 * 12;
      jQuery("#spousePresentvalue10YearPSLF2020").text(
        addCommas(Math.round(spousePresentvalue10YearPSLF2020))
      );

      var spousePresentvalue10YearPSLF2021 = getPresentValue(
        sposeLowestMonthlyPSLFPayment2021,
        spouseBalance10YearPSLF2021,
        25,
        Years[1],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalue10YearPSLF2021").text(
        addCommas(Math.round(spousePresentvalue10YearPSLF2021))
      );

      var spousePresentvalue10YearPSLF2022 = getPresentValue(
        sposeLowestMonthlyPSLFPayment2022,
        spouseBalance10YearPSLF2022,
        25,
        Years[2],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalue10YearPSLF2022").text(
        addCommas(Math.round(spousePresentvalue10YearPSLF2022))
      );

      var spousePresentvalue10YearPSLF2023 = getPresentValue(
        sposeLowestMonthlyPSLFPayment2023,
        spouseBalance10YearPSLF2023,
        25,
        Years[3],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalue10YearPSLF2023").text(
        addCommas(Math.round(spousePresentvalue10YearPSLF2023))
      );

      var spousePresentvalue10YearPSLF2024 = getPresentValue(
        sposeLowestMonthlyPSLFPayment2024,
        spouseBalance10YearPSLF2024,
        25,
        Years[4],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalue10YearPSLF2024").text(
        addCommas(Math.round(spousePresentvalue10YearPSLF2024))
      );

      var spousePresentvalue10YearPSLF2025 = getPresentValue(
        sposeLowestMonthlyPSLFPayment2025,
        spouseBalance10YearPSLF2025,
        25,
        Years[5],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalue10YearPSLF2025").text(
        addCommas(Math.round(spousePresentvalue10YearPSLF2025))
      );

      var spousePresentvalue10YearPSLF2026 = getPresentValue(
        sposeLowestMonthlyPSLFPayment2026,
        spouseBalance10YearPSLF2026,
        25,
        Years[6],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalue10YearPSLF2026").text(
        addCommas(Math.round(spousePresentvalue10YearPSLF2026))
      );

      var spousePresentvalue10YearPSLF2027 = getPresentValue(
        sposeLowestMonthlyPSLFPayment2027,
        spouseBalance10YearPSLF2027,
        25,
        Years[7],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalue10YearPSLF2027").text(
        addCommas(Math.round(spousePresentvalue10YearPSLF2027))
      );

      var spousePresentvalue10YearPSLF2028 = getPresentValue(
        sposeLowestMonthlyPSLFPayment2028,
        spouseBalance10YearPSLF2028,
        25,
        Years[8],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalue10YearPSLF2028").text(
        addCommas(Math.round(spousePresentvalue10YearPSLF2028))
      );

      var spousePresentvalue10YearPSLF2029 = getPresentValue(
        sposeLowestMonthlyPSLFPayment2029,
        spouseBalance10YearPSLF2029,
        25,
        Years[9],
        Years[0],
        startEarningCreditTowards,
        annualRateOfReturnCanGetOnYourInvestments,
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate
      );
      jQuery("#spousePresentvalue10YearPSLF2029").text(
        addCommas(Math.round(spousePresentvalue10YearPSLF2029))
      );
    }

    // 4th table
    //1st column

    if (1 === 1) {
      var v20YearPAYETotalPayments =
        (Paye2020 +
          Paye2021 +
          Paye2022 +
          Paye2023 +
          Paye2024 +
          Paye2025 +
          Paye2026 +
          Paye2027 +
          Paye2028 +
          Paye2029 +
          Paye2030 +
          Paye2031 +
          Paye2032 +
          Paye2033 +
          Paye2034 +
          Paye2035 +
          Paye2036 +
          Paye2037 +
          Paye2038 +
          Paye2039) *
        12;

      $("#20YearPAYETotalPayments").text(
        addCommas(Math.round(v20YearPAYETotalPayments))
      );

      var v25YearOldIBRTotalPayments =
        (OldIbr2020 +
          OldIbr2021 +
          OldIbr2022 +
          OldIbr2023 +
          OldIbr2024 +
          OldIbr2025 +
          OldIbr2026 +
          OldIbr2027 +
          OldIbr2028 +
          OldIbr2029 +
          OldIbr2030 +
          OldIbr2031 +
          OldIbr2032 +
          OldIbr2033 +
          OldIbr2034 +
          OldIbr2035 +
          OldIbr2036 +
          OldIbr2037 +
          OldIbr2038 +
          OldIbr2039 +
          OldIbr2040 +
          OldIbr2041 +
          OldIbr2042 +
          OldIbr2043 +
          OldIbr2044 +
          OldIbr2045) *
        12;

      $("#25YearOldIBRTotalPayments").text(
        addCommas(Math.round(v25YearOldIBRTotalPayments))
      );

      var v25YearPAYETotalPayments =
        (monthlyPaymentRepayeCurrentYear +
          monthlyPaymentRepaye2021 +
          monthlyPaymentRepaye2022 +
          monthlyPaymentRepaye2023 +
          monthlyPaymentRepaye2024 +
          monthlyPaymentRepaye2025 +
          monthlyPaymentRepaye2026 +
          monthlyPaymentRepaye2027 +
          monthlyPaymentRepaye2028 +
          monthlyPaymentRepaye2029 +
          monthlyPaymentRepaye2030 +
          monthlyPaymentRepaye2031 +
          monthlyPaymentRepaye2032 +
          monthlyPaymentRepaye2033 +
          monthlyPaymentRepaye2034 +
          monthlyPaymentRepaye2035 +
          monthlyPaymentRepaye2036 +
          monthlyPaymentRepaye2037 +
          monthlyPaymentRepaye2038 +
          monthlyPaymentRepaye2039 +
          monthlyPaymentRepaye2040 +
          monthlyPaymentRepaye2041 +
          monthlyPaymentRepaye2042 +
          monthlyPaymentRepaye2043 +
          monthlyPaymentRepaye2044 +
          monthlyPaymentRepaye2045) *
        12;

      $("#25YearPAYETotalPayments").text(
        addCommas(Math.round(v25YearPAYETotalPayments))
      );

      var refinancingTotalPayments =
        (Refinancing2020 +
          Refinancing2021 +
          Refinancing2022 +
          Refinancing2023 +
          Refinancing2024 +
          Refinancing2025 +
          Refinancing2026 +
          Refinancing2027 +
          Refinancing2028 +
          Refinancing2029 +
          Refinancing2030 +
          Refinancing2031 +
          Refinancing2032 +
          Refinancing2033 +
          Refinancing2034 +
          Refinancing2035 +
          Refinancing2036 +
          Refinancing2037 +
          Refinancing2038 +
          Refinancing2039 +
          Refinancing2040 +
          Refinancing2041 +
          Refinancing2042 +
          Refinancing2043 +
          Refinancing2044 +
          Refinancing2045) *
        12;

      $("#refinancingTotalPayments").text(
        addCommas(Math.round(refinancingTotalPayments))
      );

      var standard10YearTotalPayments =
        (monthlyPaymentStandart +
          monthlyPaymentStandart +
          monthlyPaymentStandart +
          monthlyPaymentStandart +
          monthlyPaymentStandart +
          monthlyPaymentStandart +
          monthlyPaymentStandart +
          monthlyPaymentStandart +
          monthlyPaymentStandart +
          monthlyPaymentStandart) *
        12;

      $("#standard10YearTotalPayments").text(
        addCommas(Math.round(standard10YearTotalPayments))
      );

      var lowestMonthlyPSLFPaymentTotal =
        (lowestMonthlyPSLFPayment2020 +
          lowestMonthlyPSLFPayment2021 +
          lowestMonthlyPSLFPayment2022 +
          lowestMonthlyPSLFPayment2023 +
          lowestMonthlyPSLFPayment2024 +
          lowestMonthlyPSLFPayment2025 +
          lowestMonthlyPSLFPayment2026 +
          lowestMonthlyPSLFPayment2027 +
          lowestMonthlyPSLFPayment2028 +
          lowestMonthlyPSLFPayment2029) *
        12;
      var lowestMonthlyPSLFPaymentTotalText = addCommas(
        Math.round(lowestMonthlyPSLFPaymentTotal).toString()
      );
      jQuery("#PSLFTotalPayments").text(lowestMonthlyPSLFPaymentTotalText);
    }

    //1st column spouse

    if (1 === 1) {
      var spouse20YearPAYETotalPayments =
        (spousePaye2020 +
          PayeSpouse2021 +
          PayeSpouse2022 +
          PayeSpouse2023 +
          PayeSpouse2024 +
          PayeSpouse2025 +
          PayeSpouse2026 +
          PayeSpouse2027 +
          PayeSpouse2028 +
          PayeSpouse2029 +
          PayeSpouse2030 +
          PayeSpouse2031 +
          PayeSpouse2032 +
          PayeSpouse2033 +
          PayeSpouse2034 +
          PayeSpouse2035 +
          PayeSpouse2036 +
          PayeSpouse2037 +
          PayeSpouse2038 +
          PayeSpouse2039) *
        12;

      $("#spouse20YearPAYETotalPayments").text(
        addCommas(Math.round(spouse20YearPAYETotalPayments))
      );

      var spouse25YearOldIBRTotalPayments =
        (spouseOldIBR2020 +
          spouseOldIBR2021 +
          spouseOldIBR2022 +
          spouseOldIBR2023 +
          spouseOldIBR2024 +
          spouseOldIBR2025 +
          spouseOldIBR2026 +
          spouseOldIBR2027 +
          spouseOldIBR2028 +
          spouseOldIBR2029 +
          spouseOldIBR2030 +
          spouseOldIBR2031 +
          spouseOldIBR2032 +
          spouseOldIBR2033 +
          spouseOldIBR2034 +
          spouseOldIBR2035 +
          spouseOldIBR2036 +
          spouseOldIBR2037 +
          spouseOldIBR2038 +
          spouseOldIBR2039 +
          spouseOldIBR2040 +
          spouseOldIBR2041 +
          spouseOldIBR2042 +
          spouseOldIBR2043 +
          spouseOldIBR2044 +
          spouseOldIBR2045) *
        12;

      $("#spouse25YearOldIBRTotalPayments").text(
        addCommas(Math.round(spouse25YearOldIBRTotalPayments))
      );

      var spouse25YearPAYETotalPayments =
        (spouseRepaye2020 +
          spouseRepaye2021 +
          spouseRepaye2022 +
          spouseRepaye2023 +
          spouseRepaye2024 +
          spouseRepaye2025 +
          spouseRepaye2026 +
          spouseRepaye2027 +
          spouseRepaye2028 +
          spouseRepaye2029 +
          spouseRepaye2030 +
          spouseRepaye2031 +
          spouseRepaye2032 +
          spouseRepaye2033 +
          spouseRepaye2034 +
          spouseRepaye2035 +
          spouseRepaye2036 +
          spouseRepaye2037 +
          spouseRepaye2038 +
          spouseRepaye2039 +
          spouseRepaye2040 +
          spouseRepaye2041 +
          spouseRepaye2042 +
          spouseRepaye2043 +
          spouseRepaye2044 +
          spouseRepaye2045) *
        12;

      $("#spouse25YearPAYETotalPayments").text(
        addCommas(Math.round(spouse25YearPAYETotalPayments))
      );

      var spouseRefinancingTotalPayments =
        (spouseRefinancing2020 +
          spouseRefinancing2021 +
          spouseRefinancing2022 +
          spouseRefinancing2023 +
          spouseRefinancing2024 +
          spouseRefinancing2025 +
          spouseRefinancing2026 +
          spouseRefinancing2027 +
          spouseRefinancing2028 +
          spouseRefinancing2029 +
          spouseRefinancing2030 +
          spouseRefinancing2031 +
          spouseRefinancing2032 +
          spouseRefinancing2033 +
          spouseRefinancing2034 +
          spouseRefinancing2035 +
          spouseRefinancing2036 +
          spouseRefinancing2037 +
          spouseRefinancing2038 +
          spouseRefinancing2039 +
          spouseRefinancing2040 +
          spouseRefinancing2041 +
          spouseRefinancing2042 +
          spouseRefinancing2043 +
          spouseRefinancing2044 +
          spouseRefinancing2045) *
        12;

      $("#spouseRefinancingTotalPayments").text(
        addCommas(Math.round(spouseRefinancingTotalPayments))
      );

      var spouseStandard10YearTotalPayments =
        (spouseStandart +
          spouseStandart +
          spouseStandart +
          spouseStandart +
          spouseStandart +
          spouseStandart +
          spouseStandart +
          spouseStandart +
          spouseStandart +
          spouseStandart) *
        12;

      $("#spouseStandard10YearTotalPayments").text(
        addCommas(Math.round(spouseStandard10YearTotalPayments))
      );

      var sposeLowestMonthlyPSLFPaymentTotal =
        (sposeLowestMonthlyPSLFPayment2020 +
          sposeLowestMonthlyPSLFPayment2021 +
          sposeLowestMonthlyPSLFPayment2022 +
          sposeLowestMonthlyPSLFPayment2023 +
          sposeLowestMonthlyPSLFPayment2024 +
          sposeLowestMonthlyPSLFPayment2025 +
          sposeLowestMonthlyPSLFPayment2026 +
          sposeLowestMonthlyPSLFPayment2027 +
          sposeLowestMonthlyPSLFPayment2028 +
          sposeLowestMonthlyPSLFPayment2029) *
        12;
      var sposeLowestMonthlyPSLFPaymentTotalText = addCommas(
        Math.round(sposeLowestMonthlyPSLFPaymentTotal).toString()
      );
      jQuery("#spousePSLFTotalPayments").text(
        sposeLowestMonthlyPSLFPaymentTotalText
      );
    }

    //2nd column

    if (1 === 1) {
      var payeforgivenselector =
        "#balancePaye" +
        (parseInt(startEarningCreditTowards) + 20 - (Years[0] - 2020));
      var v20YearPAYEForgivenBalance = $(payeforgivenselector).text();
      $("#20YearPAYEForgivenBalance").text(v20YearPAYEForgivenBalance);

      var repayeforgivenselector =
        "#balanceRepaye" +
        (parseInt(startEarningCreditTowards) + 25 - (Years[0] - 2020));
      var v25YearPAYEForgivenBalance = $(repayeforgivenselector).text();
      $("#25YearPAYEForgivenBalance").text(v25YearPAYEForgivenBalance);

      var ibrforgivenselector =
        "#balanceOldIBR" +
        (parseInt(startEarningCreditTowards) + 25 - (Years[0] - 2020));
      var v25YearOldIBRForgivenBalance = $(ibrforgivenselector).text();
      $("#25YearOldIBRForgivenBalance").text(v25YearOldIBRForgivenBalance);

      var spayeforgivenselector =
        "#spouseBalancePaye" +
        (parseInt(startEarningCreditTowards) + 20 - (Years[0] - 2020));
      var spouse20YearPAYEForgivenBalance = $(spayeforgivenselector).text();
      $("#spouse20YearPAYEForgivenBalance").text(
        spouse20YearPAYEForgivenBalance
      );

      var srepayeforgivenselector =
        "#spouseBalanceRepaye" +
        (parseInt(startEarningCreditTowards) + 25 - (Years[0] - 2020));
      var spouse25YearPAYEForgivenBalance = $(srepayeforgivenselector).text();
      $("#spouse25YearPAYEForgivenBalance").text(
        spouse25YearPAYEForgivenBalance
      );

      var sibrforgivenselector =
        "#spouseBalanceOldIBR" +
        (parseInt(startEarningCreditTowards) + 25 - (Years[0] - 2020));
      var spouse25YearOldIBRForgivenBalance = $(sibrforgivenselector).text();
      $("#spouse25YearOldIBRForgivenBalance").text(
        spouse25YearOldIBRForgivenBalance
      );
    }

    //3nd column

    if (1 === 1) {
      var v20YearPAYETaxesForgivenDebt =
        removeCommas(v20YearPAYEForgivenBalance) *
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate;
      $("#20YearPAYETaxesForgivenDebt").text(
        addCommas(Math.round(v20YearPAYETaxesForgivenDebt))
      );

      var v25YearPAYETaxesForgivenDebt =
        removeCommas(v25YearPAYEForgivenBalance) *
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate;
      $("#25YearPAYETaxesForgivenDebt").text(
        addCommas(Math.round(v25YearPAYETaxesForgivenDebt))
      );

      var v25YearOldIBRTaxesForgivenDebt =
        removeCommas(v25YearOldIBRForgivenBalance) *
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate;
      $("#25YearOldIBRTaxesForgivenDebt").text(
        addCommas(Math.round(v25YearOldIBRTaxesForgivenDebt))
      );

      var spouse20YearPAYETaxesForgivenDebt =
        removeCommas(spouse20YearPAYEForgivenBalance) *
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate;
      $("#spouse20YearPAYETaxesForgivenDebt").text(
        addCommas(Math.round(spouse20YearPAYETaxesForgivenDebt))
      );

      var spouse25YearPAYETaxesForgivenDebt =
        removeCommas(spouse25YearPAYEForgivenBalance) *
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate;
      $("#spouse25YearPAYETaxesForgivenDebt").text(
        addCommas(Math.round(spouse25YearPAYETaxesForgivenDebt))
      );

      var spouse25YearOldIBRTaxesForgivenDebt =
        removeCommas(spouse25YearOldIBRForgivenBalance) *
        estimateOfWhatYourCombinedFederalStateMarginalIncomeTaxRate;
      $("#spouse25YearOldIBRTaxesForgivenDebt").text(
        addCommas(Math.round(spouse25YearOldIBRTaxesForgivenDebt))
      );
    }

    //4nd column

    if (1 === 1) {
      var v20YearPAYETotalCost =
        v20YearPAYETotalPayments + v20YearPAYETaxesForgivenDebt;
      $("#20YearPAYETotalCost")
        .text(addCommas(Math.round(v20YearPAYETotalCost)))
        .parent()
        .css("background", "transparent");

      var v25YearPAYETotalCost =
        v25YearPAYETotalPayments + v25YearPAYETaxesForgivenDebt;
      $("#25YearPAYETotalCost")
        .text(addCommas(Math.round(v25YearPAYETotalCost)))
        .parent()
        .css("background", "transparent");

      var v25YearOldIBRTotalCost =
        v25YearOldIBRTotalPayments + v25YearOldIBRTaxesForgivenDebt;
      $("#25YearOldIBRTotalCost")
        .text(addCommas(Math.round(v25YearOldIBRTotalCost)))
        .parent()
        .css("background", "transparent");

      var refinancingTotalCost = refinancingTotalPayments;
      $("#refinancingTotalCost")
        .text(addCommas(Math.round(refinancingTotalCost)))
        .parent()
        .css("background", "transparent");

      var standard10YearTotalCost = standard10YearTotalPayments;
      $("#standard10YearTotalCost")
        .text(addCommas(Math.round(standard10YearTotalCost)))
        .parent()
        .css("background", "transparent");

      var PSLFTotalCost = lowestMonthlyPSLFPaymentTotal;
      $("#PSLFTotalCost").text(addCommas(Math.round(PSLFTotalCost)));

      var spouse20YearPAYETotalCost =
        spouse20YearPAYETotalPayments + spouse20YearPAYETaxesForgivenDebt;
      $("#spouse20YearPAYETotalCost")
        .text(addCommas(Math.round(spouse20YearPAYETotalCost)))
        .parent()
        .css("background", "transparent");

      var spouse25YearPAYETotalCost =
        spouse25YearPAYETotalPayments + spouse25YearPAYETaxesForgivenDebt;
      $("#spouse25YearPAYETotalCost")
        .text(addCommas(Math.round(spouse25YearPAYETotalCost)))
        .parent()
        .css("background", "transparent");

      var spouse25YearOldIBRTotalCost =
        spouse25YearOldIBRTotalPayments + spouse25YearOldIBRTaxesForgivenDebt;
      $("#spouse25YearOldIBRTotalCost")
        .text(addCommas(Math.round(spouse25YearOldIBRTotalCost)))
        .parent()
        .css("background", "transparent");

      var spouseRefinancingTotalCost = spouseRefinancingTotalPayments;
      $("#spouseRefinancingTotalCost")
        .text(addCommas(Math.round(spouseRefinancingTotalCost)))
        .parent()
        .css("background", "transparent");

      var spouseStandard10YearTotalCost = spouseStandard10YearTotalPayments;
      $("#spouseStandard10YearTotalCost")
        .text(addCommas(Math.round(spouseStandard10YearTotalCost)))
        .parent()
        .css("background", "transparent");

      var spousePSLFTotalCost = sposeLowestMonthlyPSLFPaymentTotal;
      $("#spousePSLFTotalCost")
        .text(addCommas(Math.round(spousePSLFTotalCost)))
        .parent()
        .css("background", "transparent");

      var maxValTotal = 9999999999999999999999;
      var totalCostObj = {
        "20YearPAYETotalCost":
          v20YearPAYETotalCost > 0 ? v20YearPAYETotalCost : maxValTotal,
        "25YearPAYETotalCost":
          v25YearPAYETotalCost > 0 ? v25YearPAYETotalCost : maxValTotal,
        "25YearOldIBRTotalCost":
          v25YearOldIBRTotalCost > 0 ? v25YearOldIBRTotalCost : maxValTotal,
        refinancingTotalCost:
          refinancingTotalCost > 0 ? refinancingTotalCost : maxValTotal,
        standard10YearTotalCost:
          standard10YearTotalCost > 0 ? standard10YearTotalCost : maxValTotal,
        PSLFTotalCost: PSLFTotalCost > 0 ? PSLFTotalCost : maxValTotal,
      };
      if (!nonProfitOrGovernmentEmployerFullTime) {
        totalCostObj["PSLFTotalCost"] = maxValTotal;
      }

      $("#" + lowestValueAndKey(totalCostObj))
        .parent()
        .css("background", "rgba(24,150,1,0.42)");
      var totalCostObjspouse = {
        spouse20YearPAYETotalCost:
          spouse20YearPAYETotalCost > 0
            ? spouse20YearPAYETotalCost
            : maxValTotal,
        spouse25YearPAYETotalCost:
          spouse25YearPAYETotalCost > 0
            ? spouse25YearPAYETotalCost
            : maxValTotal,
        spouse25YearOldIBRTotalCost:
          spouse25YearOldIBRTotalCost > 0
            ? spouse25YearOldIBRTotalCost
            : maxValTotal,
        spouseRefinancingTotalCost:
          spouseRefinancingTotalCost > 0
            ? spouseRefinancingTotalCost
            : maxValTotal,
        spouseStandard10YearTotalCost:
          spouseStandard10YearTotalCost > 0
            ? spouseStandard10YearTotalCost
            : maxValTotal,
        spousePSLFTotalCost:
          spousePSLFTotalCost > 0 ? spousePSLFTotalCost : maxValTotal,
      };
      if (!nonProfitOrGovernmentEmployerFullTime) {
        totalCostObjspouse["spousePSLFTotalCost"] = maxValTotal;
      }

      $("#" + lowestValueAndKey(totalCostObjspouse))
        .parent()
        .css("background", "rgba(24,150,1,0.42)");
    }

    //5nd column
    if (1 === 1) {
      var presentvalues = [];
      var presentvaluesSpouse = [];
      var v20YearPAYEPresentValue =
        presentvaluePaye2020 +
        presentvaluePaye2021 +
        presentvaluePaye2022 +
        presentvaluePaye2023 +
        presentvaluePaye2024 +
        presentvaluePaye2025 +
        presentvaluePaye2026 +
        presentvaluePaye2027 +
        presentvaluePaye2028 +
        presentvaluePaye2029 +
        presentvaluePaye2030 +
        presentvaluePaye2031 +
        presentvaluePaye2032 +
        presentvaluePaye2033 +
        presentvaluePaye2034 +
        presentvaluePaye2035 +
        presentvaluePaye2036 +
        presentvaluePaye2037 +
        presentvaluePaye2038 +
        presentvaluePaye2039;

      var spouse20YearPAYEPresentValue =
        spousePresentvaluePaye2020 +
        spousePresentvaluePaye2021 +
        spousePresentvaluePaye2022 +
        spousePresentvaluePaye2023 +
        spousePresentvaluePaye2024 +
        spousePresentvaluePaye2025 +
        spousePresentvaluePaye2026 +
        spousePresentvaluePaye2027 +
        spousePresentvaluePaye2028 +
        spousePresentvaluePaye2029 +
        spousePresentvaluePaye2030 +
        spousePresentvaluePaye2031 +
        spousePresentvaluePaye2032 +
        spousePresentvaluePaye2033 +
        spousePresentvaluePaye2034 +
        spousePresentvaluePaye2035 +
        spousePresentvaluePaye2036 +
        spousePresentvaluePaye2037 +
        spousePresentvaluePaye2038 +
        spousePresentvaluePaye2039;

      var v25YearPAYEPresentValue =
        presentvalueRepaye2020 +
        presentvalueRepaye2021 +
        presentvalueRepaye2022 +
        presentvalueRepaye2023 +
        presentvalueRepaye2024 +
        presentvalueRepaye2025 +
        presentvalueRepaye2026 +
        presentvalueRepaye2027 +
        presentvalueRepaye2028 +
        presentvalueRepaye2029 +
        presentvalueRepaye2030 +
        presentvalueRepaye2031 +
        presentvalueRepaye2032 +
        presentvalueRepaye2033 +
        presentvalueRepaye2034 +
        presentvalueRepaye2035 +
        presentvalueRepaye2036 +
        presentvalueRepaye2037 +
        presentvalueRepaye2038 +
        presentvalueRepaye2039 +
        presentvalueRepaye2040 +
        presentvalueRepaye2041 +
        presentvalueRepaye2042 +
        presentvalueRepaye2043 +
        presentvalueRepaye2044 +
        presentvalueRepaye2045;

      var spouse25YearPAYEPresentValue =
        spousePresentvalueRepaye2020 +
        spousePresentvalueRepaye2021 +
        spousePresentvalueRepaye2022 +
        spousePresentvalueRepaye2023 +
        spousePresentvalueRepaye2024 +
        spousePresentvalueRepaye2025 +
        spousePresentvalueRepaye2026 +
        spousePresentvalueRepaye2027 +
        spousePresentvalueRepaye2028 +
        spousePresentvalueRepaye2029 +
        spousePresentvalueRepaye2030 +
        spousePresentvalueRepaye2031 +
        spousePresentvalueRepaye2032 +
        spousePresentvalueRepaye2033 +
        spousePresentvalueRepaye2034 +
        spousePresentvalueRepaye2035 +
        spousePresentvalueRepaye2036 +
        spousePresentvalueRepaye2037 +
        spousePresentvalueRepaye2038 +
        spousePresentvalueRepaye2039 +
        spousePresentvalueRepaye2040 +
        spousePresentvalueRepaye2041 +
        spousePresentvalueRepaye2042 +
        spousePresentvalueRepaye2043 +
        spousePresentvalueRepaye2044 +
        spousePresentvalueRepaye2045;

      var v25YearOldIBRPresentValue =
        presentvalueOldIBR2020 +
        presentvalueOldIBR2021 +
        presentvalueOldIBR2022 +
        presentvalueOldIBR2023 +
        presentvalueOldIBR2024 +
        presentvalueOldIBR2025 +
        presentvalueOldIBR2026 +
        presentvalueOldIBR2027 +
        presentvalueOldIBR2028 +
        presentvalueOldIBR2029 +
        presentvalueOldIBR2030 +
        presentvalueOldIBR2031 +
        presentvalueOldIBR2032 +
        presentvalueOldIBR2033 +
        presentvalueOldIBR2034 +
        presentvalueOldIBR2035 +
        presentvalueOldIBR2036 +
        presentvalueOldIBR2037 +
        presentvalueOldIBR2038 +
        presentvalueOldIBR2039 +
        presentvalueOldIBR2040 +
        presentvalueOldIBR2041 +
        presentvalueOldIBR2042 +
        presentvalueOldIBR2043 +
        presentvalueOldIBR2044 +
        presentvalueOldIBR2045;

      var spouse25YearOldIBRPresentValue =
        spousePresentvalueOldIBR2020 +
        spousePresentvalueOldIBR2021 +
        spousePresentvalueOldIBR2022 +
        spousePresentvalueOldIBR2023 +
        spousePresentvalueOldIBR2024 +
        spousePresentvalueOldIBR2025 +
        spousePresentvalueOldIBR2026 +
        spousePresentvalueOldIBR2027 +
        spousePresentvalueOldIBR2028 +
        spousePresentvalueOldIBR2029 +
        spousePresentvalueOldIBR2030 +
        spousePresentvalueOldIBR2031 +
        spousePresentvalueOldIBR2032 +
        spousePresentvalueOldIBR2033 +
        spousePresentvalueOldIBR2034 +
        spousePresentvalueOldIBR2035 +
        spousePresentvalueOldIBR2036 +
        spousePresentvalueOldIBR2037 +
        spousePresentvalueOldIBR2038 +
        spousePresentvalueOldIBR2039 +
        spousePresentvalueOldIBR2040 +
        spousePresentvalueOldIBR2041 +
        spousePresentvalueOldIBR2042 +
        spousePresentvalueOldIBR2043 +
        spousePresentvalueOldIBR2044 +
        spousePresentvalueOldIBR2045;

      var refinancingPresentValue =
        presentvalueRefinancing2020 +
        presentvalueRefinancing2021 +
        presentvalueRefinancing2022 +
        presentvalueRefinancing2023 +
        presentvalueRefinancing2024 +
        presentvalueRefinancing2025 +
        presentvalueRefinancing2026 +
        presentvalueRefinancing2027 +
        presentvalueRefinancing2028 +
        presentvalueRefinancing2029;

      var spouseRefinancingPresentValue =
        spousePresentvalueRefinancing2020 +
        spousePresentvalueRefinancing2021 +
        spousePresentvalueRefinancing2022 +
        spousePresentvalueRefinancing2023 +
        spousePresentvalueRefinancing2024 +
        spousePresentvalueRefinancing2025 +
        spousePresentvalueRefinancing2026 +
        spousePresentvalueRefinancing2027 +
        spousePresentvalueRefinancing2028 +
        spousePresentvalueRefinancing2029;

      var standard10YearPresentValue =
        presentvaluetandart2020 +
        presentvaluetandart2021 +
        presentvaluetandart2022 +
        presentvaluetandart2023 +
        presentvaluetandart2024 +
        presentvaluetandart2025 +
        presentvaluetandart2026 +
        presentvaluetandart2027 +
        presentvaluetandart2028 +
        presentvaluetandart2029;

      var spouseStandard10YearPresentValue =
        spousePresentvaluetandart2020 +
        spousePresentvaluetandart2021 +
        spousePresentvaluetandart2022 +
        spousePresentvaluetandart2023 +
        spousePresentvaluetandart2024 +
        spousePresentvaluetandart2025 +
        spousePresentvaluetandart2026 +
        spousePresentvaluetandart2027 +
        spousePresentvaluetandart2028 +
        spousePresentvaluetandart2029;

      var PSLFPresentValue =
        presentvalue10YearPSLF2020 +
        presentvalue10YearPSLF2021 +
        presentvalue10YearPSLF2022 +
        presentvalue10YearPSLF2023 +
        presentvalue10YearPSLF2024 +
        presentvalue10YearPSLF2025 +
        presentvalue10YearPSLF2026 +
        presentvalue10YearPSLF2027 +
        presentvalue10YearPSLF2028 +
        presentvalue10YearPSLF2029;

      var spousePSLFPresentValue =
        spousePresentvalue10YearPSLF2020 +
        spousePresentvalue10YearPSLF2021 +
        spousePresentvalue10YearPSLF2022 +
        spousePresentvalue10YearPSLF2023 +
        spousePresentvalue10YearPSLF2024 +
        spousePresentvalue10YearPSLF2025 +
        spousePresentvalue10YearPSLF2026 +
        spousePresentvalue10YearPSLF2027 +
        spousePresentvalue10YearPSLF2028 +
        spousePresentvalue10YearPSLF2029;

      $("#20YearPAYEPresentValue")
        .text(addCommas(Math.round(v20YearPAYEPresentValue)))
        .parent()
        .css("background", "transparent");

      $("#spouse20YearPAYEPresentValue")
        .text(addCommas(Math.round(spouse20YearPAYEPresentValue)))
        .parent()
        .css("background", "transparent");

      $("#25YearPAYEPresentValue")
        .text(addCommas(Math.round(v25YearPAYEPresentValue)))
        .parent()
        .css("background", "transparent");

      $("#spouse25YearPAYEPresentValue")
        .text(addCommas(Math.round(spouse25YearPAYEPresentValue)))
        .parent()
        .css("background", "transparent");

      $("#25YearOldIBRPresentValue")
        .text(addCommas(Math.round(v25YearOldIBRPresentValue)))
        .parent()
        .css("background", "transparent");

      $("#spouse25YearOldIBRPresentValue")
        .text(addCommas(Math.round(spouse25YearOldIBRPresentValue)))
        .parent()
        .css("background", "transparent");

      $("#refinancingPresentValue")
        .text(addCommas(Math.round(refinancingPresentValue)))
        .parent()
        .css("background", "transparent");

      $("#spouseRefinancingPresentValue")
        .text(addCommas(Math.round(spouseRefinancingPresentValue)))
        .parent()
        .css("background", "transparent");

      $("#standard10YearPresentValue")
        .text(addCommas(Math.round(standard10YearPresentValue)))
        .parent()
        .css("background", "transparent");

      $("#spouseStandard10YearPresentValue")
        .text(addCommas(Math.round(spouseStandard10YearPresentValue)))
        .parent()
        .css("background", "transparent");

      $("#PSLFPresentValue")
        .text(addCommas(Math.round(PSLFPresentValue)))
        .parent()
        .css("background", "transparent");

      $("#spousePSLFPresentValue")
        .text(addCommas(Math.round(spousePSLFPresentValue)))
        .parent()
        .css("background", "transparent");

      var maxVal = 9999999999999999999999;
      var presValueObj = {
        "20YearPAYEPresentValue":
          v20YearPAYEPresentValue > 0 ? v20YearPAYEPresentValue : maxVal,
        "25YearPAYEPresentValue":
          v25YearPAYEPresentValue > 0 ? v25YearPAYEPresentValue : maxVal,
        "25YearOldIBRPresentValue":
          v25YearOldIBRPresentValue > 0 ? v25YearOldIBRPresentValue : maxVal,
        refinancingPresentValue:
          refinancingPresentValue > 0 ? refinancingPresentValue : maxVal,
        standard10YearPresentValue:
          standard10YearPresentValue > 0 ? standard10YearPresentValue : maxVal,
        PSLFPresentValue: PSLFPresentValue > 0 ? PSLFPresentValue : maxVal,
      };
      if (!nonProfitOrGovernmentEmployerFullTime) {
        presValueObj["PSLFPresentValue"] = maxVal;
      }

      $("#" + lowestValueAndKey(presValueObj))
        .parent()
        .css("background", "rgba(24,150,1,0.42)");
      var presSpouseValueObj = {
        spouse20YearPAYEPresentValue:
          spouse20YearPAYEPresentValue > 0
            ? spouse20YearPAYEPresentValue
            : maxVal,
        spouse25YearPAYEPresentValue:
          spouse25YearPAYEPresentValue > 0
            ? spouse25YearPAYEPresentValue
            : maxVal,
        spouse25YearOldIBRPresentValue:
          spouse25YearOldIBRPresentValue > 0
            ? spouse25YearOldIBRPresentValue
            : maxVal,
        spouseRefinancingPresentValue:
          spouseRefinancingPresentValue > 0
            ? spouseRefinancingPresentValue
            : maxVal,
        spouseStandard10YearPresentValue:
          spouseStandard10YearPresentValue > 0
            ? spouseStandard10YearPresentValue
            : maxVal,
        spousePSLFPresentValue:
          spousePSLFPresentValue > 0 ? spousePSLFPresentValue : maxVal,
      };
      if (!nonProfitOrGovernmentEmployerFullTime) {
        presSpouseValueObj["spousePSLFPresentValue"] = maxVal;
      }

      $("#" + lowestValueAndKey(presSpouseValueObj))
        .parent()
        .css("background", "rgba(24,150,1,0.42)");
    }

    var v20YearPAYEAmountSaveEachMonth =
      (1.1 *
        (v20YearPAYETaxesForgivenDebt /
          ((Math.pow(
            1 + annualRateOfReturnCanGetOnYourInvestments,
            parseInt(startEarningCreditTowards) + 20 - Years[0]
          ) -
            1) /
            annualRateOfReturnCanGetOnYourInvestments))) /
      12;

    $("#20YearPAYEAmountSaveEachMonth").text(
      addCommas(Math.round(v20YearPAYEAmountSaveEachMonth))
    );

    var v25YearPAYEAmountSaveEachMonth =
      (1.1 *
        (v25YearPAYETaxesForgivenDebt /
          ((Math.pow(
            1 + annualRateOfReturnCanGetOnYourInvestments,
            parseInt(startEarningCreditTowards) + 25 - Years[0]
          ) -
            1) /
            annualRateOfReturnCanGetOnYourInvestments))) /
      12;

    $("#25YearPAYEAmountSaveEachMonth").text(
      addCommas(Math.round(v25YearPAYEAmountSaveEachMonth))
    );

    var v25YearOldIBRAmountSaveEachMonth =
      (1.1 *
        (v25YearOldIBRTaxesForgivenDebt /
          ((Math.pow(
            1 + annualRateOfReturnCanGetOnYourInvestments,
            parseInt(startEarningCreditTowards) + 25 - Years[0]
          ) -
            1) /
            annualRateOfReturnCanGetOnYourInvestments))) /
      12;

    $("#25YearOldIBRAmountSaveEachMonth").text(
      addCommas(Math.round(v25YearOldIBRAmountSaveEachMonth))
    );

    var PSLFForgivenBalance =
      balance10YearPSLF[parseInt(startEarningCreditTowards) + 10];
    $("#PSLFForgivenBalance").text(addCommas(Math.round(PSLFForgivenBalance)));

    var spouse20YearPAYEAmountSaveEachMonth =
      (1.1 *
        (spouse20YearPAYETaxesForgivenDebt /
          ((Math.pow(
            1 + annualRateOfReturnCanGetOnYourInvestments,
            parseInt(startEarningCreditTowards) + 20 - Years[0]
          ) -
            1) /
            annualRateOfReturnCanGetOnYourInvestments))) /
      12;

    $("#spouse20YearPAYEAmountSaveEachMonth").text(
      addCommas(Math.round(spouse20YearPAYEAmountSaveEachMonth))
    );

    var spouse25YearPAYEAmountSaveEachMonth =
      (1.1 *
        (spouse25YearPAYETaxesForgivenDebt /
          ((Math.pow(
            1 + annualRateOfReturnCanGetOnYourInvestments,
            parseInt(startEarningCreditTowards) + 20 - Years[0]
          ) -
            1) /
            annualRateOfReturnCanGetOnYourInvestments))) /
      12;

    $("#spouse25YearPAYEAmountSaveEachMonth").text(
      addCommas(Math.round(spouse25YearPAYEAmountSaveEachMonth))
    );

    var spouse25YearOldIBRAmountSaveEachMonth =
      (1.1 *
        (spouse25YearOldIBRTaxesForgivenDebt /
          ((Math.pow(
            1 + annualRateOfReturnCanGetOnYourInvestments,
            parseInt(startEarningCreditTowards) + 20 - Years[0]
          ) -
            1) /
            annualRateOfReturnCanGetOnYourInvestments))) /
      12;

    $("#spouse25YearOldIBRAmountSaveEachMonth").text(
      addCommas(Math.round(spouse25YearOldIBRAmountSaveEachMonth))
    );

    var spousePSLFForgivenBalance =
      spouseBalance10YearPSLF[parseInt(startEarningCreditTowards) + 10];
    $("#spousePSLFForgivenBalance").text(
      addCommas(Math.round(spousePSLFForgivenBalance))
    );

    var lowestMonthlyPSLFPaymentTotalStandard =
      monthlyPaymentStandart * 10 * 12;
    var lowestMonthlyPSLFPaymentTotalStandardText = addCommas(
      Math.round(lowestMonthlyPSLFPaymentTotalStandard).toString()
    );
    jQuery("#lowestMonthlyPSLFPaymentTotalStandard").text(
      lowestMonthlyPSLFPaymentTotalStandardText
    );

    var lowestMonthlyPSLFPaymentTotalSavings =
      lowestMonthlyPSLFPaymentTotalStandard - lowestMonthlyPSLFPaymentTotal;
    var lowestMonthlyPSLFPaymentTotalSavingsText = addCommas(
      Math.round(lowestMonthlyPSLFPaymentTotalSavings).toString()
    );
    jQuery("#lowestMonthlyPSLFPaymentTotalSavings").text(
      lowestMonthlyPSLFPaymentTotalSavingsText
    );

    var sposeLowestMonthlyPSLFPaymentTotalStandard = spouseStandart * 10 * 12;
    var sposeLowestMonthlyPSLFPaymentTotalStandardText = addCommas(
      Math.round(sposeLowestMonthlyPSLFPaymentTotalStandard).toString()
    );
    jQuery("#sposeLowestMonthlyPSLFPaymentTotalStandard").text(
      sposeLowestMonthlyPSLFPaymentTotalStandardText
    );

    var sposeLowestMonthlyPSLFPaymentTotalSavings =
      sposeLowestMonthlyPSLFPaymentTotalStandard -
      sposeLowestMonthlyPSLFPaymentTotal;
    var sposeLowestMonthlyPSLFPaymentTotalSavingsText = addCommas(
      Math.round(sposeLowestMonthlyPSLFPaymentTotalSavings).toString()
    );
    jQuery("#sposeLowestMonthlyPSLFPaymentTotalSavings").text(
      sposeLowestMonthlyPSLFPaymentTotalSavingsText
    );

    jQuery(".slp-table_results-field>span").each(function () {
      if ($(this).text() == "$0") {
        $(this).text("");
      }
    });
    jQuery(".summary_table .slp-table_results-field>span").each(function () {
      if ($(this).text() == "") {
        $(this).text("$0");
      }
    });
  }

  function lowestValueAndKey(obj) {
    var [lowestItems] = Object.entries(obj).sort(([, v1], [, v2]) => v1 - v2);
    return lowestItems[0];
  }

  jQuery("#familySize").click(calculate);
  jQuery("input[name=incomeAutomaticallyManually]").click(calculate);
  jQuery("input[name=legallyMarried]").click(calculate);
  jQuery("input[name=fillingSeparately]").click(calculate);
  jQuery("input[name=incomeSpouseAutomaticallyManually]").click(calculate);
  // jQuery("#assumptionAutomaticallyManually").click(calculate);
  jQuery("input[name=assumptionAutomaticallyManually]").click(calculate);
  jQuery("input[name=borrowFederalStudentLoansBefore]").click(calculate);
  jQuery("input[name=nonProfitOrGovernmentEmployerFullTime]").click(calculate);

  $("#familySize").on("keyup", calculate);
  $("#startEarningCreditTowards").on("keyup", calculate);
  $("#federalStudentDebt").on("keyup", calculate);
  $("#listSmallerOfYourPriorYearAGI").on("keyup", calculate);
  $("#TaxableIncome1").on("keyup", calculate);
  $("#TaxableIncome2").on("keyup", calculate);
  $("#TaxableIncome3").on("keyup", calculate);
  $("#TaxableIncome4").on("keyup", calculate);
  $("#TaxableIncome5").on("keyup", calculate);
  $("#TaxableIncome6").on("keyup", calculate);
  $("#TaxableIncome7").on("keyup", calculate);
  $("#TaxableIncome8").on("keyup", calculate);
  $("#TaxableIncome9").on("keyup", calculate);
  $("#averageInterestRateOfAllDebt").on("keyup", calculate);
  $("#federalStudentDebtDoesYourSpouseOwe").on("keyup", calculate);
  $("#listSmallerOfYourSpousesPrior").on("keyup", calculate);
  $("#TaxableIncomespouse1").on("keyup", calculate);
  $("#TaxableIncomespouse2").on("keyup", calculate);
  $("#TaxableIncomespouse3").on("keyup", calculate);
  $("#TaxableIncomespouse4").on("keyup", calculate);
  $("#TaxableIncomespouse5").on("keyup", calculate);
  $("#TaxableIncomespouse6").on("keyup", calculate);
  $("#TaxableIncomespouse7").on("keyup", calculate);
  $("#TaxableIncomespouse8").on("keyup", calculate);
  $("#TaxableIncomespouse9").on("keyup", calculate);

  $(".slp-calculator .checkbox.yes-no").click(function () {
    analyzeCheckboxYesNo($(this));
  });
  $(".slp-calculator .checkbox.automatic-manually").click(function () {
    analyzeCheckboxAutomaticManually($(this));
  });

  function analyzeCheckboxYesNo($checkbox) {
    var label = $checkbox.siblings("label")[0];
    if ($checkbox.is(":checked")) {
      $(label).text("Yes");
    } else {
      $(label).text("No");
    }
  }
  function analyzeCheckboxAutomaticManually($checkbox) {
    var label = $checkbox.siblings("label")[0];
    if ($checkbox.is(":checked")) {
      $(label).text("Manual");
    } else {
      $(label).text("Automatic");
    }
  }
  $(".clickable_title_hider").on("click", function () {
    $(this).next().toggleClass("hidden");
    if ($(this).find("button.hide-show-caption").text() == "Hide") {
      $(this).find("button.hide-show-caption").text("Show");
    } else {
      $(this).find("button.hide-show-caption").text("Hide");
    }
  });
  $(".slp-calculator input[type=radio].material-radio__input").on(
    "change",
    calculate
  );

  calculate();
});


