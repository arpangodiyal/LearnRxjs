class Student{
    name: String = "John";

    display(){
        console.log(this.name);
    }
}

const s = new Student();
s.display();