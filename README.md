# ts-practice-classes
This is an introduction to classes in typescript repository for learning purposes only
## Learning
- Adding in constructor public or private infront of arguments makes shorthand initialization

    class Department{
        private employees: string[] = []; 
        private id: string;
        public name: string;

        constructor(id:string, name: string, employees: string[]){
            this.id = id;
            this.employees=employees;
            this.name=name;
        }
    }

equal to 

    class Department{
        constructor(private id:string, public name: string, private employees: string[]){  

        }
    }

- readonly makes the property unchangable once it was initialized (as const does in js)

        class Department {  
            constructor(private readonly id: string, private name: string, private employees: string[]) {
        
        } //when we create an instance of Department we initialize id, and after that, we won't be able to change its value

- <code>protected</code> vs <code>private</code>
<code>private</code> properties are accessible only inside the class they defined and are not accessible in the class that inherited that class.<br>
<code>protected</code> is like private, but unlike <code>private</code> they not just available in the class they defined but also in the classes which inherited the class where protected properies defined. If the property is <code>protected</code> it can't be changed from outside of the class it defined, but it can be accessible from the class based on parent class<br>


        class Department {    
            constructor(
                private readonly id: string,
                private name: string,
                protected employees: string[]
            ) {}
            }

        class ITDepartment extends Department {
            constructor(id: string, employees: string[], public admins: string[]) {
            super(id, 'IT', employees); //hardcoding the name because ITDepatment class
        }
            addAdmin(employee: string) {
                if(!this.employees.find(person=> person === employee)){ //this.employees is available because it is protected, not private
                this.addEmployee(employee);
                }
                this.admins.push(employee);
            }
        }

- get and set in class we access like a property, without ()


        accountingDepartment.mostRecentReport='Report 2022'; //set
        const recentReport = accountingDepartment.mostRecentReport;//get returns value




