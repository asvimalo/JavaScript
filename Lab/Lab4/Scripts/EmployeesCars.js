

//LAB 4
var text = "";
var app = app || {};

app.Employees = [{
            EmployeeID: 1,
            EmpName: "Andres",
            EmpLastName: "Martinez",
            EmpAge: 37,
            CarAvailable: true
        },
        {
            EmployeeID: 2,
            EmpName: "Maria",
            EmpLastName: "Godin",
            EmpAge: 37,
            CarAvailable: false
        },
        {
            EmployeeID: 3,
            EmpName: "Pedro",
            EmpLastName: "Gutierrez",
            EmpAge: 37,
            CarAvailable: true
        }];

 app.Cars = [{
            CarID: 1,
            CarName: "Golf",
            
        },
        {
            CarID: 2,
            CarName: "Porche",  
        },
        {
            CarID: 3,
            CarName: "Volvo"  
        }];


jQuery(document).ready(function(){
    document.getElementById("DivOutputEmployees").style.visibility = "hidden";
    document.getElementById("DivOutputCars").style.visibility = "hidden";

    CheckAnswer().then(function(){
        document.getElementById("DivOutputEmployees").style.visibility = "visible";
        document.getElementById("DivOutputEmployees").innerHTML = text;
    }, function(){
        
        alert("No employees with driving license available");
    })
});


// function showEmployees()
// {
//     var text ="";
//     console.log("In employees");
//     for(var i = 0; i < app.Employees.length; i++)
//     {
//         var employee = app.Employees[i];
//         text += "Employee Name: " + employee.EmpName + "</br>"
//     }
//     document.getElementById("DivOutputEmployees").style.visibility = "visible";
//     document.getElementById("DivOutputEmployees").innerHTML = text;

    
// }

// function showCars()
// {
//     var text ="";
//     console.log("In Cars");
//     for(var i = 0; i < app.Cars.length; i++)
//     {
//         var car = app.Cars[i];

//         text += "Car's Model: " + car.CarName + "</br>"
//     }
//     document.getElementById("DivOutputCars").style.visibility = "visible";

//     document.getElementById("DivOutputCars").innerHTML = text;

// }

function CheckAnswer()
{
    var dfd = $.Deferred();
   
    var employeewitCarExist = false;





    for(var i = 0; i < app.Employees.length; i++)
    {
        console.log(app.Employees[i]);

        var employee = app.Employees[i];
        var carAvailable = app.Employees[i].CarAvailable;

        console.log("car available?: " + carAvailable);

        if(carAvailable === true)
        {         
            text += "Employee Name: " + employee.EmpName + "</br>";
            console.log("Found employee wit access to car. Will set bool to true");
             employeewitCarExist = true;     
        }          
    }
    //Send it to promise
    if(employeewitCarExist)
    {
        dfd.resolve();
    }
    else{
        dfd.reject();
    }
    return dfd.promise();  
        

    
    
}