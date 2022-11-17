"use strict";
var Department = /** @class */ (function () {
    function Department(n) {
        this.employees = [];
        this.name = n;
    }
    Department.prototype.describe = function () {
        //should add that 'this' will be the instance of Department
        console.log("Department: ".concat(this.name));
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmploeeInfo = function () {
        console.log(this.employees);
    };
    return Department;
}());
var devDepartment = new Department('Development'); //{name: 'Development'}
devDepartment.describe(); //Department: Development
devDepartment.addEmployee('Max');
devDepartment.addEmployee('Kate');
devDepartment.printEmploeeInfo();
//# sourceMappingURL=app.js.map