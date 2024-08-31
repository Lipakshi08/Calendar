const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const today = new Date();
console.log(today);

const weekDays = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
const months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];

date.innerHTML = (today.getDate()<10?"0":"") + today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = months[today.getMonth()];
year.innerHTML = today.getFullYear();