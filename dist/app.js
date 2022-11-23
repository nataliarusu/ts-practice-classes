"use strict";
class Department {
    //private employees: string[] = []; //force employee to be added only using addEmployee() method
    constructor(id, name, employees) {
        this.id = id;
        this.name = name;
        this.employees = employees;
        // this.name = name;
        //this.id = id;
    }
    getDepartment() {
        //'this' will be the instance of Department
        return `Department: ${this.name}, ${this.id}`;
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmploeesInfo() {
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, employees, admins) {
        super(id, 'IT', employees); //hardcoding the name because ITDepatment class
        this.admins = admins;
    }
    addAdmin(employee) {
        if (!this.employees.find((person) => person === employee)) {
            this.addEmployee(employee);
        }
        this.admins.push(employee);
    }
    printAdminsInfo() {
        console.log(this.admins);
    }
    describe() {
        console.log('IT Department - T1');
    }
}
class AccountingDepartment extends Department {
    get mostRecentReport() {
        if (this.reports.length) {
            return this.reports[this.reports.length - 1]; //must return
        }
        else {
            throw Error('No report found.');
        }
    }
    set mostRecentReport(value) {
        if (!value) {
            throw Error('Please pass in a valid value!');
        }
        this.addReports(value);
    }
    constructor(id, reports) {
        //2args
        super(id, 'Accounting', ['Anna', 'Bill']); //3 args as super class require
        this.reports = reports;
    }
    describe() {
        console.log('Accounting Department - A1');
    }
    addReports(report) {
        this.reports.push(report);
    }
    printReports() {
        console.log(this.reports);
    }
}
const itDepartment = new ITDepartment('1', ['Dan'], ['Dan']);
itDepartment.addAdmin('Kate'); //ITDepartment's method
itDepartment.addEmployee('Mathew');
itDepartment.addEmployee('Max');
itDepartment.addAdmin('Max');
itDepartment.printAdminsInfo(); //ITDepartment's method
itDepartment.printEmploeesInfo(); //super class's method
console.log(itDepartment);
const accountingDepartment = new AccountingDepartment('2', ['Report 2020']);
accountingDepartment.printEmploeesInfo(); //super class's method
accountingDepartment.addReports('Report 2021');
accountingDepartment.mostRecentReport = 'Report 2022';
const recentReport = accountingDepartment.mostRecentReport; // because it is get we should call it without ()
accountingDepartment.printReports();
console.log(recentReport);
//# sourceMappingURL=app.js.map