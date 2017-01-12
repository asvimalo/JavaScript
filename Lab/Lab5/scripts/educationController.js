$(document).ready(function(){
         document.getElementById("students").style.visibility = "hidden";
         document.getElementById("courses").style.visibility = "hidden";
         document.getElementById("addStudents").style.visibility = "hidden";
         document.getElementById("filterStudents").style.display = "none";

        //  document.getElementById("foundOrNot").style.visibility = "hidden";
})
//Angular
//1 - Create app from angular module
var App = angular.module("App",[]);

//Factory
App.factory("educationFactory", function(){
        var students = [{name: "Andres", status: true, course: "Programming"},
                        {name: "Andreas", status: false, course: "Finance"},
                        {name: "Pedro", status: true, course: "Math"},
                        {name: "Maria", status: false, course: "Art"},
                        {name: "Bartolomeo", status: true, course: "Design"},
                        {name: "Bjorn", status: true, course: "Programming"},
                        {name: "Maria de la O", status: true, course: "Art"},
                        {name: "Alcacer", status: true, course: "History"},
                        {name: "Francisco", status: true, course: "Geography"},
                        {name: "Mario Bros", status: true, course: "Pornography"},
                        {name: "Fernando", status: true, course: "Philosophy"},
                        {name: "Franbuesa", status: true, course: "Mecanics"},
                        {name: "Fresa", status: false, course: "AI"},
                        {name: "Pomelo", status: true, course: "French"},
                        {name: "Naranja", status: true, course: "Spanish"}];

        var Courses = [{course: "Programming"},
                       {course: "Finance"},
                       {course: "Math"},
                       {course: "Art"},
                       {course: "Design"},
                       {course: "History"},
                       {course: "Geography"},
                       {course: "Pornography"},
                       {course: "Philosophy"},
                       {course: "Mecanics"},
                       {course: "AI"},
                       {course: "French"},
                       {course: "Spanish"}];


        var factory = {};
        factory.getStudents = function(){

                return students;
                };

        factory.getCourses = function(){

                return Courses;
                };

        factory.addStudentToList = function(student){

                var dfd = $.Deferred();
                var isFound = false;
                var isCourseFound = false;

                for(var i = 0; i < students.length; i++)
                {
                      if(student.name == students[i].name)
                      {
                              isFound = true;

                      }
                }
                for(var i = 0; i < courses.length;i++)
                {
                        if(courses[i].course === student.course)
                        {
                                isCourseFound = true;
                        }
                        // *In if condition && isCourseFound == true
                }
                if(!isFound && isCourseFound)
                {
                        students.push(student);

                        dfd.resolve();
                 }
                else{
                        dfd.reject();
                }
                return dfd.promise();


                };
        factory.addCourseToList = function(course){

                course.push(course);
                };

        return factory;
});

var controllers = {};

//Student Controller
controllers.studentsController = function($scope, educationFactory){

        $scope.students = educationFactory.getStudents();

        $scope.showStudents = function(){
                document.getElementById("students").style.visibility = "visible";
            };
        $scope.openAddDiv = function(){
                     console.log("in openAddDiv");
                document.getElementById("addStudents").style.visibility = "visible";
        };
        $scope.openAddDivFilter = function(){
                    console.log("in openAddDiv filter");
                document.getElementById("filterStudents").style.display = "inline-block";
        };


        $scope.addStudentToDataBase = function(){

                console.log("inside addstudenttodatabase controller");
                if($scope.newCourse != null)
                {
                        $scope.newStatus = true;
                }
                else{
                        $scope.newStatus = false;
                }


                educationFactory.addStudentToList(
                        {
                                name: $scope.newName,
                                status: $scope.newStatus,
                                course: $scope.newCourse

                        }).then(function(){
                                        console.log("inside addstudentToList promise function positive");
                                        var foundOrNot = document.getElementById("foundOrNot");
                                        foundOrNot.style.visibility = "visible";
                                        foundOrNot.className = "alert alert-success";
                                        foundOrNot.innerHTML = "Congrats " + $scope.newName + ", Student has been registered";

                                }, function(){
                                        console.log("inside addstudentToList promise function negative");
                                        var foundOrNot = document.getElementById("foundOrNot");
                                        foundOrNot.style.visibility = "visible";
                                        foundOrNot.className = "alert alert-danger";
                                        foundOrNot.innerHTML = "Student is already registered or course is not available";
                                });

            };

};

//Course Controller
controllers.coursesController = function($scope, educationFactory){
        $scope.courses = educationFactory.getCourses();

        $scope.showCourses = function(){
               document.getElementById("courses").style.visibility = "visible";
                };

        $scope.addCourse = function(){
                educationFactory.addCourseToList({ course: $scope.course});
                };

 };

App.controller(controllers);