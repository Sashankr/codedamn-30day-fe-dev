let employee = {
	"full name" : "john doe",
	role : "developer",
	age : 23
}

let fullname = employee["full name"]; // john doe
console.log(fullname);
let role = employee.role; // developer
console.log(role);
delete employee.age;

console.log(employee);