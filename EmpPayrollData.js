class EmployeePayrollData {
    // Properties
    id;
    salary;
    gender;
    startDate;

    // Constructor
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];  // Calls the setter
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    // Getter and Setter with Validation
    get name() { 
        return this._name; 
    }

    set name(name) {
        let nameRegex = /^[A-Z][a-zA-Z]{2,}$/;  // Name must start with a capital letter and have at least 3 characters
        try {
            if (!nameRegex.test(name)) {
                throw new Error("Invalid Name! Name should start with a capital letter and have at least 3 characters.");
            }
            this._name = name;
        } catch (error) {
            console.error(error.message);
        }
    }

    // Method to return Employee Details as a String
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate === undefined ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return `id=${this.id}, name=${this.name}, salary=${this.salary}, gender=${this.gender}, startDate=${empDate}`;
    }
}

// Testing the Class with Valid and Invalid Names
let employeePayrollData1 = new EmployeePayrollData(1, "Mark", 30000);
console.log(employeePayrollData1.toString());  

employeePayrollData1.name = "john"; 
console.log(employeePayrollData1.toString()); // Will keep the last valid name

let employeePayrollData2 = new EmployeePayrollData(2, "Jo", 40000, "M", new Date());  // ❌ Invalid (Less than 3 characters)
console.log(employeePayrollData2.toString()); // Will print "undefined" for name

let newEmployeePayrollData = new EmployeePayrollData(3, "Terrisa", 50000, "F", new Date());  // ✅ Valid
console.log(newEmployeePayrollData.toString());
