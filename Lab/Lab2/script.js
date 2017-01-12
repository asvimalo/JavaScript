function changeDiv() {
    console.log("In function");
    var names = ["Andrés", "Andreas", "Dalius", "Ivan", "Pedro"];
    
    console.log(typeof names);
    var namesToPrint = "";
    for(var i = 0; i < names.length ; i++)
    {
        var name = names[i];
        if(typeof name === "string")
        {
            namesToPrint += name + ", ";
            console.log("Successful, it is a string.");
            document.getElementById("enterTextData").style.visibility = "visible";
            document.getElementById("enterTextData").className = "alert alert-success";
            document.getElementById("enterTextData").innerHTML = namesToPrint;
            
            
        }
        else{
            
            document.getElementById("enterTextData").style.visibility = "visible";
            document.getElementById("enterTextData").className = "alert alert-danger";
            document.getElementById("enterTextData").innerHTML = "Siffor hittades i Arrayn. Dessa har ej skrivits ut.";
        }
        
    }
    
}
function ChangeForm() {
var submitOK = "";
    //Get input first for validation after

    var username = document.getElementById("userName").value;
    var surname = document.getElementById("surname").value;
    var lastname = document.getElementById("lastname").value;
    var tel = document.getElementById("tel").value;
    var city = document.getElementById("city").value;
    var ageRaw = document.getElementById("age").value;

    //Problems if Age input type is "number"  => It accepts e or E as a number => solved changing to type="text"
    console.log(ageRaw + " " + typeof ageRaw);
    var age = Number(ageRaw);   
    console.log(age + " " + typeof age);
    console.log(isNaN(age));

    //Validate

    if(username.length > 10)
    {
        document.getElementById("warningUsername").style.visibility = "visible";
        document.getElementById("warningUsername").className = "alert alert-danger";
        document.getElementById("warningUsername").innerHTML = "Please enter a username with less than 10 characters";
        
        submitOK = "false";
    }
    if( isNaN(age))
    {
        
        console.log("I am in is NaN (Is Not a Number)");
        document.getElementById("warningAge").style.visibility = "visible";
        document.getElementById("warningAge").className = "alert alert-danger";
        document.getElementById("warningAge").innerHTML = "Please enter a real number without any letters.";
        
        submitOK = "false";
    }
    
    if (submitOK == "false") {
        return false;
    }
    
    
    
    var text = "Ten years ago you were "  + substractTenYears(age) +" years old";
    console.log(text);
    document.getElementById("ageTenAgo").innerHTML = text;
    console.log("Starting point in function");
    document.getElementById("message").style.visibility = "visible";
    document.getElementById("desapear").remove();
    console.log("finishing point in function");
}
//fUNTION THAT TAKES THE AGE AND SUBSTRACT 10
function substractTenYears(age){
    
    return age - 10
}
//functionforthebutton
//Create a findUser methode

function findUser()
{
    var userName = document.getElementById("userName").value;
    var users = createUsers();
    var text = "";
    for(var i = 0; i < users.length; i++)
    {
        if(users[i].username === userName)
        {
            document.getElementById("userName").value = users[i].username;
            document.getElementById("surname").value = users[i].surname;
            document.getElementById("lastname").value = users[i].lastname;
            document.getElementById("tel").value = users[i].tel;
            document.getElementById("city").value = users[i].city;
            document.getElementById("age").value = users[i].age;

        }
        else{
            document.getElementById("notAvailable").style.visibility = "visible";
            document.getElementById("notAvailable").innerHTML = "User not found";
            document.getElementById("notAvailable").className = "alert alert-warning";
        }
    }

}
function createUsers()
{
    users = [{
            EmployeeID: 1,
            username: "asvimalo",
            surname: "Andres",
            lastname: "Martinez",
            tel: "0708521504",
            city: "Madrid",
            age: 37
        },
        {
            EmployeeID: 2,
            username: "zulema",
            surname: "Azucena",
            lastname: "Fernandez",
            tel: "0708150206",
            city: "Barcelona",
            age: 36
        },
        {
            EmployeeID: 1,
            username: "peluca",
            surname: "Patricia",
            lastname: "García",
            tel: "0475286394",
            city: "Gigón",
            age: 37
        }];

    return users;
}
