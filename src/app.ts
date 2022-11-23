class Department {
  // private name: string;
  // private id: string;
  private employees: string[] = []; //force employee to be added only using addEmployee() method

  constructor(private name: string, private id: string) {
    //private and public infront of args it is shorthand initialization
    //instead of creating these 2 lines we can initialize properties in one line
    // this.name = name;
    //this.id = id;
  }
  getDepartment(this: Department) {
    //'this' will be the instance of Department
    return `Department: ${this.name}, ${this.id}`;
  }
  addEmployee(employee: string) {
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
