class Department {
  name: string;
  employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }
  describe(this: Department) {
    //should add that 'this' will be the instance of Department
    console.log(`Department: ${this.name}`);
  }
  addEmployee(employee:string){
    this.employees.push(employee);
  }
  printEmploeeInfo(){
    console.log(this.employees);
  }
}

const devDepartment = new Department('Development'); //{name: 'Development'}
devDepartment.describe(); //Department: Development
devDepartment.addEmployee('Max');
devDepartment.addEmployee('Kate');
devDepartment.printEmploeeInfo();