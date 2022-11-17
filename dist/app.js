"use strict";
class Department {
    constructor(n) {
        this.employees = []; //force employee to be added only using addEmployee() method
        this.name = n;
    }
    getDepartment() {
        //'this' will be the instance of Department
        return `Department: ${this.name}`;
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmploeeInfo() {
        console.log(this.employees);
    }
}
const devDepartment = new Department('Development'); //{name: 'Development'}
console.log(devDepartment.getDepartment()); //Department: Development
devDepartment.addEmployee('Max');
devDepartment.addEmployee('Kate');
//devDepartment.employees[2]='Jhon'; //error, private property
devDepartment.printEmploeeInfo();
//# sourceMappingURL=app.js.map