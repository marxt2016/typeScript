import { cloneDate, addDays } from "./flat-rent-sdk.js";

// console.log(cloneDate(3));
// console.log(cloneDate("2021-03-03"));
console.log(cloneDate(new Date("Mon Jan 20 2022 15:30:28")));
console.log(addDays(new Date("Mon Jan 20 2022 15:30:28"), 9));
