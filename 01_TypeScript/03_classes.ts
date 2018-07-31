class Person {
    Details: string;
    constructor(public ID: string, public Name: string) {
        this.Details = Name + " (" + ID + ")";
    }
}

interface Employee {
    ID: string;
    Name: string;
}

function GetEmployee(employee: Employee) {
    console.log("Hello " + employee.Name + " (" + employee.ID + ")");
}

var myPerson = new Person("EMP001", "Rishikesh Jadhav");

console.log("Welcome to Interfaces");

GetEmployee(myPerson);