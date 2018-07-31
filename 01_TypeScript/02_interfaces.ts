interface Employee {
    ID: string;
    Name: string;
}

function GetEmployee(employee: Employee) {
    console.log("Hello " + employee.Name + " (" + employee.ID + ")");
}

var myEmployee = { ID: "EMP001", Name: "Rishikesh Jadhav" };

console.log("Welcome to Interfaces");

GetEmployee(myEmployee);