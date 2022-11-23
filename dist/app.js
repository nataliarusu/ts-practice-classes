"use strict";
class Department {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        // private name: string;
        // private id: string;
        this.employees = []; //force employee to be added only using addEmployee() method
        //private and public infront of args it is shorthand initialization
        //instead of creating these 2 lines we can initialize properties in one line
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
    printEmploeeInfo() {
        console.log(this.employees);
    }
}
const devDepartment = new Department('Development', '1'); //{name: 'Development'}
console.log(devDepartment.getDepartment()); //Department: Development
devDepartment.addEmployee('Max');
devDepartment.addEmployee('Kate');
//devDepartment.employees[2]='Jhon'; //error, private property
devDepartment.printEmploeeInfo();
//# sourceMappingURL=app.js.map