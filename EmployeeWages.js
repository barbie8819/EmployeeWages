// UC 1: Check Employee Presence
const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == IS_ABSENT) {
    console.log("Employee is Absent");
    return;
} else {
    console.log("Employee is Present");
}

// UC 2: Constants
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOUR = 4;
const FULL_TIME_HOUR = 8;
const WAGE_PER_HOUR = 20;

// UC 3: Function to Get Working Hours
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME: return PART_TIME_HOUR;
        case IS_FULL_TIME: return FULL_TIME_HOUR;
        default: return 0;
    }
}

// UC 5 & 6: Employee Wage Calculation Variables
const MAX_HRS_IN_MONTH = 100;
const NUMBER_OF_WORKING_DAY = 10;
let totalEmpHrs = 0;
let totalWorkingDays = 0;

// UC 8: Storing Wages and Hours in Arrays & Maps
let empDailyWageArr = [];
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();
let empDailyHrsAndWageArr = []; // Moved from UC 10

while (totalEmpHrs < MAX_HRS_IN_MONTH && totalWorkingDays < NUMBER_OF_WORKING_DAY) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;

    let dailyWage = empHrs * WAGE_PER_HOUR;
    
    empDailyWageArr.push(dailyWage);
    empDailyWageMap.set(totalWorkingDays, dailyWage);
    empDailyHrsMap.set(totalWorkingDays, empHrs);

    // UC 10: Storing Objects Instead of Running a New Loop
    empDailyHrsAndWageArr.push({
        dayNum: totalWorkingDays,
        dailyHours: empHrs,
        dailyWage: dailyWage,
        toString() {
            return `\nDay ${this.dayNum} => Working Hours: ${this.dailyHours}, Wage Earned: ${this.dailyWage}`;
        },
    });
}

// UC 8: Total Wages Calculation
function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("UC 8 - Emp Wage Map totalHrs:", Array.from(empDailyWageMap.values()).reduce(totalWages, 0));

// UC 9: Arrow Functions for Total Hours and Wages
const findTotal = (totalVal, dailyVal) => totalVal + dailyVal;
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);

console.log(`UC 9A - Emp Wage with Arrow: Total Hours: ${totalHours}, Total Wages: ${totalSalary}`);

// UC 9B: Categorizing Working Days
let nonWorkingDays = [];
let partWorkingDays = [];
let fullWorkingDays = [];

empDailyHrsMap.forEach((value, key) => {
    if (value === 8) fullWorkingDays.push(key);
    else if (value === 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});

console.log("Full Working Days:", fullWorkingDays);
console.log("Part Working Days:", partWorkingDays);
console.log("Non Working Days:", nonWorkingDays);

// UC 10: Displaying Daily Hours & Wages
console.log("UC 10 - Daily Hours Worked and Wage Earned:", empDailyHrsAndWageArr.join(""));
