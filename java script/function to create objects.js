var student1 = {
    name:"abc",
    rollno:10,
    marks:80,
};
var student2 = {
    name:"xyz",
    rollno:20,
    marks:85,
};

//if we have to make mroe objects like this 
function createStudent(){
    var student = {};
    student.name = name;
    student.rollno = rollno;
    student.marks = marks;
    return student;
    
}
var student1 = createStudent("abcd",15,78);
var student2 = createStudent("taebd",20,77);


