//uc 1
const IS_ABSENT =0
let empCheck = Math.floor(Math.random() * 10) %2;
if(empCheck == IS_ABSENT){
    console.log("Employee is Absent");
    return;
}else{
    console.log("Employee is Present");

}
//uc02
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOUR = 4;
const FULL_TIME_HOUR = 8;
const WAGE_PER_HOUR = 20;

//uc3
function  getWorkingHours(empCheck) {
    switch(empCheck) {
        case IS_PART_TIME:
          return PART_TIME_HOUR
        case IS_FULL_TIME:
          return FULL_TIME_HOUR
        default:
          return 0;
    }
  }
let empHrs = 0;
empCheck = Math.floor(Math.random()*10)%3;
empHrs  = getWorkingHours(empCheck);
// let empWage = empHrs * WAGE_PER_HOUR;
// console.log("Emp Wage : "+empWage);

// //uc4

// const NUMBER_OF_WORKING_DAY = 2
// empHrs = 0
// for(let day = 0;day<NUMBER_OF_WORKING_DAY;day++){
//   let empCheck = Math.floor(Math.random()*10)%3;
//   empHrs += getWorkingHours(empCheck);

// }
// empWage = empHrs  * WAGE_PER_HOUR;
// console.log("Total hrs : "+empHrs+" Emp wages :"+empWage);

//uc5
const MAX_HRS_IN_MONTH = 100;
const NUMBER_OF_WORKING_DAY = 10
let totalEmpHrs =0
let totalWorkingDays = 0
while(totalEmpHrs < MAX_HRS_IN_MONTH && totalWorkingDays < NUMBER_OF_WORKING_DAY){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
    totalEmpHrs = getWorkingHours(empCheck);
  }
let empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("UC05 - Total Days: "+totalWorkingDays+" Total Hrs: "+totalEmpHrs+ " Emp Wage: "+empWage)