function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    ? `${year} is a leap year.`
    : `${year} is not a leap year.`;
}
