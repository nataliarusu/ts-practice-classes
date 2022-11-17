"use strict";
class Department {
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log(`Department: ${this.name}`);
    }
}
const devDepartment = new Department('Development'); //{name: 'Development'}
devDepartment.describe(); //Department: Development
const testD1 = { describe: devDepartment.describe }; //we pointing to the method
//testD1.describe(); //Department: undefined , because we call describe on testD, not on the obj that is indstance of Department (ts error)
const testD2 = { name: 'Testing', describe: devDepartment.describe }; //ts doesn't catch the error, because testD2 has 'name' property?
testD2.describe();
console.log(testD2 instanceof Department); //false
//# sourceMappingURL=app.js.map