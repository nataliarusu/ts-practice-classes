class Department {
  private name: string;
  private employees: string[] = [];//force employee to be added only using addEmployee() method

  constructor(n: string) {
    this.name = n;
  }
  getDepartment(this: Department) {
    //'this' will be the instance of Department
    return `Department: ${this.name}`;
  }
  addEmployee(employee:string){
    this.employees.push(employee);
  }
  printEmploeeInfo(){
    console.log(this.employees);
  }
}

const devDepartment = new Department('Development'); //{name: 'Development'}
console.log(devDepartment.getDepartment()); //Department: Development
devDepartment.addEmployee('Max');
devDepartment.addEmployee('Kate');
//devDepartment.employees[2]='Jhon'; //error, private property

devDepartment.printEmploeeInfo();