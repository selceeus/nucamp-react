
class Student {
    constructor( name, email, community ) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor( name, level, students = [] ) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent( student ) {
        if ( this.students.filter(st => st.email === student.email).length ) {
            console.log(`${student.email} is already in our records for ${student.name}.`);
        }
        else {
            this.students.push( student );
            console.log(`Registering ${student.name} with email ${student.email} to the bootcamp ${this.name}.`);
        }
        return this.students;
    }
}