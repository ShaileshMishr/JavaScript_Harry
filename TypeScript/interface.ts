export interface User{
    name: string;
    age?:number;  // optional
    id:number;
    email: string;

}

let {name:userName, email:userLogin} : User = { name: "Kishan",  id:1, email:''};




interface EmployeeS extends User{
    salary:number;
}

let employee : EmployeeS = {name:"Amit", id:11, email:"", salary:500000};

export interface login{
    login(): User;
}

// array destructuring

let [user1, user2, ...ressUsers]: User[] = [
    { name: "Kishan",  id:1, email:''},
    { name: "Ram",  id:2, email:''},
    { name: "Guru",  id:3, email:''},
    { name: "Rahul",  id:4, email:''}
    ];

    console.log(user1);
    console.log(user2);
    console.log(ressUsers);

    let result = ressUsers.filter(user => user.id>3);
    console.log(result);