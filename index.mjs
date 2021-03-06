// Dinker Batra's code is used as reference for leap year validation
// https://www.c-sharpcorner.com/forums/date-regular-expression-for-leap-year-date-validatation
// (Terms: https://www.c-sharpcorner.com/termsconditions.aspx)
export default /^(?<year>\d{4}):(?<month>\d{2}):(?<date>(?:(?<=02:)0[1-9]|1\d|2[0-8])|(?:(?<=(?:(?:\d{2}(?:0[48]|[2468][048]|[13579][26]))|(?:(?:[02468][048])|[13579][26])0{2}):02:)29)|(?:(?<=(?:[469]|11):)(?:0[1-9]|[12]\d|30))|(?:(?<=(?:0[13578]|1[02]):)(?:0[1-9]|[12]\d|3[01]))) (?<hours>[0-1]\d|2[0-3]):(?<minutes>[0-5]\d):(?<seconds>[0-5]\d)$/;
