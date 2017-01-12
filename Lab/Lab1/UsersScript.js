//Users js file


function changeParagraph1(){
    console.log("It is working...");
    document.getElementById('p1').className = "changedp1";
    console.log(document.getElementById('p1').className = "changedp1");
    console.log("Paragraph 1 has changed...");
}

function changeParagraph2(){
     console.log("It is working...");
    document.getElementById('p2').className = "changedp2";
    console.log(document.getElementById('p2').className = "changedp2");
    console.log("Paragraph 1 has changed...");
}    

function ChangeForm() {
    console.log("Starting point in function");

    var userName = document.getElementById("userName").value;
    console.log(userName);

    var surName = document.getElementById("surname").value;
    console.log(surName);
    var lastName = document.getElementById("lastname").value;
    console.log(lastName);
    var tel = document.getElementById("tel").value;
    console.log(tel);
    var city = document.getElementById("city").value;
    console.log(city);
    var age = document.getElementById("age").value;
    console.log(age);
    

    var text = "<p>User name: " + userName + "</p>" +
               "<p>Surname: " + surName + "</p>" +
               "<p>Lastname: " + lastName + "</p>" +
               "<p>Phone: " + tel + "</p>"+
               "<p>City: " + city + "</p>" +
               "<p>Age: " + age + "</p>";
    
    document.getElementById("message").style.visibility = "visible";
    
    document.getElementById("desapear").remove();
    document.getElementById("list").innerHTML = text;
    console.log("finishing point in function");
}