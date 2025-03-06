class EmployeePayrollData {
    _id;
    _name;
    _salary;
    _gender;
    _startDate;

    constructor(id, name, salary, gender, startDate) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.gender = gender;
        this.startDate = startDate;
    }

    get id() { return this._id; }
    set id(id) {
        let idRegex = /^[1-9][0-9]*$/;
        try {
            if (!idRegex.test(id)) {
                throw new Error("Invalid ID. Employee ID must be a non-zero positive number.");
            }
            this._id = id;
        } catch (error) {
            console.error(error.message);
        }
    }

    get name() { return this._name; }
    set name(name) {
        let nameRegex = /^[A-Z][a-zA-Z]{2,}$/;
        try {
            if (!nameRegex.test(name)) {
                throw new Error("Invalid Name. Name should start with a capital letter and have at least 3 characters.");
            }
            this._name = name;
        } catch (error) {
            console.error(error.message);
        }
    }

    get salary() { return this._salary; }
    set salary(salary) {
        let salaryRegex = /^[1-9][0-9]*$/;
        try {
            if (!salaryRegex.test(salary)) {
                throw new Error("Invalid Salary. Salary must be a non-zero positive number.");
            }
            this._salary = salary;
        } catch (error) {
            console.error(error.message);
        }
    }

    get gender() { return this._gender; }
    set gender(gender) {
        let genderRegex = /^(M|F)$/;
        try {
            if (!genderRegex.test(gender)) {
                throw new Error("Invalid Gender. Gender must be 'M' or 'F'.");
            }
            this._gender = gender;
        } catch (error) {
            console.error(error.message);
        }
    }

    get startDate() { return this._startDate; }
    set startDate(startDate) {
        try {
            if (startDate > new Date()) {
                throw new Error("Invalid Start Date. Date cannot be in the future.");
            }
            this._startDate = startDate;
        } catch (error) {
            console.error(error.message);
        }
    }

    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate === undefined ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "id=" + this.id + ", name=" + this.name + ", salary=" + this.salary + ", gender=" + this.gender + ", startDate=" + empDate;
    }
}

// Testing the Class with Valid and Invalid Inputs
console.log("Testing Valid Inputs");
let employee1 = new EmployeePayrollData(1, "Mark", 30000, "M", new Date("2024-03-01"));
console.log(employee1.toString());

console.log("\nTesting Invalid Name");
let employee2 = new EmployeePayrollData(2, "john", 40000, "M", new Date("2024-02-01"));
console.log(employee2.toString());

console.log("\nTesting Invalid ID");
let employee3 = new EmployeePayrollData(0, "Alice", 50000, "F", new Date("2024-01-01"));
console.log(employee3.toString());

console.log("\nTesting Invalid Salary");
let employee4 = new EmployeePayrollData(3, "Bob", -100, "M", new Date("2023-12-01"));
console.log(employee4.toString());

console.log("\nTesting Invalid Gender");
let employee5 = new EmployeePayrollData(4, "Charlie", 60000, "X", new Date("2023-11-01"));
console.log(employee5.toString());

console.log("\nTesting Future Start Date");
let employee6 = new EmployeePayrollData(5, "David", 70000, "M", new Date("2025-01-01"));
console.log(employee6.toString());
