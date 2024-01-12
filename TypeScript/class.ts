import {login, User} from './interface';

interface Address{
    street: string;
    city:string;
    state:string;
    pin:string
 };


class Employee implements login{
    #id: number;
    protected name: string;
    address: Address;

    get empId():number{
        return this.#id;
    }

    set empId(id:number){
         this.#id=id;
    }

    static getEmployeeCount() : number{
        return 50;
    }

    constructor(id:number, name: string, address: Address) {
        
        this.#id=id;
        this.name=name;
        this.address=address;
 
   }
   login():User{
    return  { name: "Kishan",  id:1, email:''};
    //throw new Error(" Method not implemented");
   }
   

   getNameWithAddress() :string{
    // return this.name + " " + this.address;
    return `${this.name} stays at ${this.address}`;
   }

}

let emp = new Employee(1,"Kishan", {
    street:"Saraswatipuram",
    city:"Luucknow",
    state:"UP",
    pin:"226002",
});
let address = emp.getNameWithAddress();

emp.empId=100;
console.log(emp.empId);
// emp.id=1;
// emp.name="Kishan";
// emp.address="Lucknow";

console.log(emp);
console.log(address);
console.log(Employee.getEmployeeCount());

class Manager extends Employee {
    constructor(id:number, name: string, address: string) {
        super(id, name, address);
    }
}

let mng = new Manager(2,"Amit", "Noida");
console.log(mng.getNameWithAddress());