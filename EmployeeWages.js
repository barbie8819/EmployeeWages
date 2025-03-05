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

// uc6

function calcDailyWage(empHrs){
    return empHrs* WAGE_PER_HOUR;
}
//uc08
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();
while(totalEmpHrs < MAX_HRS_IN_MONTH && totalWorkingDays < NUMBER_OF_WORKING_DAY){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
    let empHrs = getWorkingHours(empCheck)
    totalEmpHrs +=empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
    empDailyWageMap.set(totalWorkingDays,calcDailyWage(empHrs));
    empDailyHrsMap.set(totalWorkingDays,empHrs);
  }
  console.log(empDailyWageMap)
function totalWages(totalWage,dailyWage){
  return totalWage + dailyWage
}
console.log("UC 8 - Emp Wage Map totalHrs:  "+
  Array.from(empDailyWageMap.values()).reduce(totalWages,0))

  // UC 9 Arrow Functions 
const findTotal = (totalval, dailyVal) => { 
    return totalval + dailyVal; 

    } 
    let count = 0; 
    let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0); 
    let totalSalary =  empDailyWageArr.filter(dailywage => dailywage > 0) 
    .reduce(findTotal, 0); 
    console.log("UC9A Emp Wage with Arrow.: "+" Total Hours:" + 
    totalHours + "Total Wages: " + totalSalary); 
    let nonWorkingDays = new Array(); 
    let partWorkingDays = new Array(); 
    let fullWorkingDays = new Array(); 
    empDailyHrsMap.forEach((value, key, map) => { 
    if (value == 8) fullWorkingDays.push(key); 
    else if (value == 4) partWorkingDays.push(key); 
    else nonWorkingDays.push(key); 
    }); 
    console.log("Full Working Days: "+fullWorkingDays); 
    console.log("Part Working Days: "+partWorkingDays); 
    console.log("Non Working Days: "+nonWorkingDays);
 //uc07
// let totEmpWage=0; 
// function sum(dailyWage) { 
// totEmpWage +=dailyWage; 
// } 
// empDailyWageArr.forEach(sum); 
// console.log("UC7A Total Days: "+totalWorkingDays + "Total Hrs:" + totalEmpHrs +" Emp Wage:"+ totEmpWage); 
// function totalWages (totalWage, dailywage) { 
// return totalWage + dailywage; 
// } 
// console.log("UC7A Emp Wage with reduce:" + empDailyWageArr.reduce(totalWages, 0)); 
// let dailyCntr =0;
// function mapDayWithWage(dailywage) { 
// dailyCntr++; 
// return dailyCntr + "=" + dailywage; 
// } 
// let mapDaywithWageArr = empDailyWageArr.map(mapDayWithWage); 
// console.log("UC7B Daily Wage Map"); 
// console.log(mapDaywithWageArr); 
// function fulltimeWage(dailyWage) { 
//     return dailyWage.includes ("160"); 
// } 
// let fullDayWageArr =  mapDaywithWageArr.filter(fulltimeWage); 
// console.log("UC7C Daily Wage Filter When Fulltime Wage Earned"); 
// console.log(fullDayWageArr);
// // UC 7D Find the first occurrence when Full Time Wage was earned using find f 
// function findFulltimeWage (dailywage) { 
//     return dailywage.includes("160"); 
//     } 
//     console.log("UC 7D First time Fulltime wage was earned on Day: " + mapDaywithWageArr.find(findFulltimeWage)); 
//     // UC 7E Check if Every Element of Full Time Wage is truely holding Full time 
//     function isAllFulltimeWage (dailyWage) { return dailyWage.includes("160"); 
//     } 
//     console.log("UC 6E Check All Element have Full Time Wage: "+ fullDayWageArr.every(isAllFulltimeWage)); 
//     // UC 7F Check if there is any Part Time Wage 
//     function isAnyPartTimeWage(dailywage) { 
//     return dailywage.includes("80"); 
//     } 
//     console.log("UC 7F Check If Any Part Time Wage: "+ mapDaywithWageArr.some(isAnyPartTimeWage)); 
//     // UC 7G Find the number of days the Employee Worked 
//     function totalDaysWorked (numOfDays, dailyWage) { 
//     if (dailyWage > 0) return numOfDays+1; 
//     return numOfDays; 
//     } 
//     console.log("UC 7G Number of Days Emp Worked: "+ empDailyWageArr.reduce(totalDaysWorked, 0));