class Department {
  // private name: string;
  // private id: string;
  private employees: string[] = []; //force employee to be added only using addEmployee() method

  //private and public infront of args it is shorthand initialization
  //readonly means should be initialized once and shouldn't be changed thereafter (like const)
  constructor(private name: string, private readonly id: string) {
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
