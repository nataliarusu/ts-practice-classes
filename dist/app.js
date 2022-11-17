"use strict";
class Department {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    describe() {
        //should add that 'this' will be the instance of Department
        console.log(`Department: ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmploeeInfo() {
        console.log(this.employees);
    }
}
const devDepartment = new Department('Development'); //{name: 'Development'}
devDepartment.describe(); //Department: Development
devDepartment.addEmployee('Max');
devDepartment.addEmployee('Kate');
devDepartment.printEmploeeInfo();
//# sourceMappingURL=app.js.map