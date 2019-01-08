function getDay(x) {
  var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  if (x < 8 && x > 0) {
    x -= 1;
    console.log(days[x]);
  } else {
    console.log("undefined");
  }
}
