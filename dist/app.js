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
        this.admins.push(employee);
    }
    printAdminsInfo() {
        console.log(this.admins);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        //2args
        super(id, 'Accounting', ['Anna', 'Bill']); //3 args as super class require
        this.reports = reports;
    }
    addReports(report) {
        this.reports.push(report);
    }
    printReports() {
        console.log(this.reports);
    }
}
const itDepartment = new ITDepartment('1', ['Dan'], ['Dan']);
itDepartment.addEmployee('Kate'); //super class's method
itDepartment.addAdmin('Kate'); //ITDepartment's method
itDepartment.addEmployee('Mathew');
itDepartment.addEmployee('Max');
itDepartment.printAdminsInfo(); //ITDepartment's method
itDepartment.printEmploeesInfo(); //super class's method
console.log(itDepartment);
const accountingDepartment = new AccountingDepartment('2', ['Report 2022']);
accountingDepartment.printEmploeesInfo(); //super class's method
accountingDepartment.printReports();
//# sourceMappingURL=app.js.map