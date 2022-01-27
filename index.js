//base collection from subscribers, what will be asked for//
function subscriberInfo(firstName, lastName, age, number, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.number = number;
  this.email = email;
  this.sayName = function () {
    console.log("Name: " + this.firstName + " " + this.lastName);
  };
}

//new subscriber var info entered in//
var robinAndrews = new subscriberInfo(
  "Robin",
  "Andrews",
  33,
  "630-913-6295",
  "RobinAndrews22@gmail.com"
);
console.log(robinAndrews);

//types of donuts function base//
function Donut(type, glazed, sweetness, hasSprinkles) {
  this.type = type;
  this.glazed = glazed;
  this.sweetness = sweetness;
  this.hasSprinkles = hasSprinkles;
  this.sayType = function () {
    console.log("type: " + this.type);
  };
  this.showSweetness = function () {
    console.log("Sweetness: " + this.sweetness + "/10");
  };
}
//types of donuts//
var coconutDonut = new Donut("coconut", false, 8, false);
console.log(coconutDonut);

var vanillaDonut = new Donut("vanilla", true, 10, true);
console.log(vanillaDonut);

coconutDonut.tasteGood = false;

vanillaDonut.tasteGood = true;

//format subscriber full name//
function formatNames(arg1, arg2) {
  return arg1 + " " + arg2;
}

//function of whats being collected//
function dataFormatter(fullName, email) {
  const formattedData = {
    name: fullName,
    email: email,
  };
  return formattedData;
}

//giving const to the full name format and combining with email//
function joining(firstName, lastName, email) {
  const formattedNames = formatNames(firstName, lastName);
  const formattedData = dataFormatter(formattedNames, email);
  return formattedData;
}
console.log(joining("Robin", "Andrews", "RobinAndrews22@gmail.com"));

//figuring out hourly pay to yearly salary//
function salary(num1) {
  function hourPay(x) {
    return x * 40;
  }

  return hourPay(num1) * 52;
}
console.log(salary(20));
