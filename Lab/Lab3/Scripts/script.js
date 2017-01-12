
//jQuery call

$(document).ready(function (){
    // document.getElementById("TextOutput").style.display = "none";
    AppEx2.getCountrysidePopulation();
    AppEx2.getCountrysidePopulation();
    AppEx2.getCityPopulation();
});

var App = App || {};


    


 
App.people = [
    {
        Name : "Andres",
        LastName : "Martinez", 
        Age: 37, 
        FullName: function(){ return this.Name + " " + this.LastName;}
    },
    {
        Name : "Pedro",
        LastName : "Rodriguez", 
        Age: 27, 
        FullName: function(){ return this.Name + " " + this.LastName;}
    },
    {
        Name : "Maria",
        LastName : "Luengo", 
        Age: 17, 
        FullName: function(){ return this.Name + " " + this.LastName;}
    }
];

App.returnPeople = function ()
{
   
    
    
    
    

    var text = "";
    var textOutput = document.getElementById("TextOutput");
    textOutput.className = "alert alert-success col-md-12 col-sm-12"
    
    
    /*For Loop*/
    
    // for(i = 0; i < this.people.length; i++)
    // {
    //    text += "<li class=\"list-group-item col-md-12 col-sm-12 text-center\"><b>First name:</b> "+ App.people[i].Name + " - <b>Last name:</b> " + App.people[i].LastName +" - <b>Age:</b> " + App.people[i].Age + " - <b>Full name:</b> " + App.people[i].FullName() + "</li>"  
    // }
    // document.getElementById("TextOutput").innerHTML = text;

    /*jQuery Loop*/

    $.each(App.people , function(key,value){ 
        text += "<li class=\"list-group-item col-md-12 col-sm-12 text-center\"><b>First name:</b> "+ 
        value.Name + " - <b>Last name:</b> " + value.LastName +" - <b>Age:</b> " + value.Age + 
        " - <b>Full name:</b> " + value.FullName() + "</li>";       
        
    });
    $("#TextOutput").html(text);
    $("#TextOutput").slideToggle("slow");
        

   

};

// App.reloadList = function(){
//     $("#TextOutput").fadeOut(1000);
//     $("#TextOutput").slideToggle();
//     setTimeout(1000);
//     var textOutput = document.getElementById("TextOutput");
//     textOutput.style.display = "none";
// }


var AppEx2 = AppEx2 || {};

AppEx2.countrysidePopulation = [{
                Name : "Flaco",
                LastName : "Zanguinni", 
                Age: 37, 
                FullName: function(){ return this.Name + " " + this.LastName;}
            },
            {
                Name : "Mario",
                LastName : "Gutierrez", 
                Age: 66, 
                FullName: function(){ return this.Name + " " + this.LastName;}
            },
            {
                Name : "Angel",
                LastName : "Tortolito", 
                Age: 41, 
                FullName: function(){ return this.Name + " " + this.LastName;}
            }];

AppEx2.cityPopulation = [{
                Name : "Franco",
                LastName : "Humberto", 
                Age: 55, 
                FullName: function(){ return this.Name + " " + this.LastName;}
            },
            {
                Name : "Paco",
                LastName : "Flores", 
                Age: 44, 
                FullName: function(){ return this.Name + " " + this.LastName;}
            },
            {
                Name : "Andres",
                LastName : "Martinez", 
                Age: 33, 
                FullName: function(){ return this.Name + " " + this.LastName;}
            }];

    AppEx2.getCountrysidePopulation = function(){
        var text = "";
        var textOutput = document.getElementById("TextOutputCountrysidePopulation");
        textOutput.className = "alert alert-success col-md-12 col-sm-12";

        $.each(AppEx2.countrysidePopulation , function(key,value){ 
        text += "<li class=\"list-group-item col-md-12 col-sm-12 text-center\"><b>First name:</b> "+ 
        value.Name + " - <b>Last name:</b> " + value.LastName +" - <b>Age:</b> " + value.Age + 
        " - <b>Full name:</b> " + value.FullName() + "</li>";       
        });

        $("#TextOutputCountrysidePopulation").html(text);
        /*$("#TextOutputCountrysidePopulation").hide();*/
        
        
    }

    AppEx2.getCityPopulation = function(){
        var text = "";
        var textOutput = document.getElementById("TextOutputCityPopulation");
        textOutput.className = "alert alert-success col-md-12 col-sm-12";

        $.each(AppEx2.cityPopulation , function(key,value){ 
        text += "<li class=\"list-group-item col-md-12 col-sm-12 text-center\"><b>First name:</b> "+ 
        value.Name + " - <b>Last name:</b> " + value.LastName +" - <b>Age:</b> " + value.Age + 
        " - <b>Full name:</b> " + value.FullName() + "</li>";       
        });

        $("#TextOutputCityPopulation").html(text);
        // $("#TextOutputCityPopulation").hide();
    }

    AppEx2.FadeIn1 = function(){
        console.log("in FadeIn1")
       $("#TextOutputCountrysidePopulation").fadeIn("slow");

    }
    AppEx2.FadeIn2 = function(){
        console.log("in FadeIn2")
       $("#TextOutputCityPopulation").fadeIn("slow");
    }

    AppEx2.FadeOut1 = function(){
        console.log("in FadeIn1")
       $("#TextOutputCountrysidePopulation").fadeOut("slow");
    //    setTimeout(2000);
       $("#TextOutputCountrysidePopulation").hide("slow");
       

    }
    AppEx2.FadeOut2 = function(){
        console.log("in FadeIn2")
       $("#TextOutputCityPopulation").fadeOut("slow");
    //    setTimeout(5000);
       $("#TextOutputCityPopulation").hide("slow");
    }


