const student ={
    name: "xyz",
    course: "BTECH",
    branch : "CS" ,
    section : "C",
    phoneNo : {
        phoneNo1 : 683747383,
        phoneNo2 : 372893839
    },
    address : {
        hno: 23,
        city: "delhi",
        state : "delhi",
    }
}
console.log(("before modification newstudent value of student is "));

const newStudent = Object.assign({},student);
console.log(newStudent);

newStudent.address.city ="noida";

