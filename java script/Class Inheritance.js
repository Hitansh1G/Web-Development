class Person {
    constructor(name) {
        this.name = name;
    }
}

class student extends Person {
    constructor(name, roll, division) {
        super(name)
        this.rollNo = roll
        this.divsion = division
    }
    getDetails() {
        return [this.name, this.rollNo, this.divsion]
    }
}

class teacher extends Person {
    constructor(name, id, subject) {
        super(name)
        this.teacherId = id
        this.subject = subject
    }

    getDetails() {

        return [this.name, this.teacherId, this.subject]
    }

}