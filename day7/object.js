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
// accessing object properties
console.log(student.name);
console.log(student['name']);
