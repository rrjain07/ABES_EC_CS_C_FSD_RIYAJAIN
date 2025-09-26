class Student{
    constructor(rollNo, name , course,branch ){
        this.rollNo=rollNo,
        this.name = name;
        this.branch = branch;
        this.course = course;

    }
}
const student1 = new Student (1,"a","btech", "cse");
const student2 = new Student (2,"c","mtech", "cse");
console.log(student1)
console.log(student2);

