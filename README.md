### Learning
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

- 