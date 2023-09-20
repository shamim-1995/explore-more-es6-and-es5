const products = [
    {id: 1, name: 'lenovo', price:23000},
    {id: 2, name: 'dell', price:24000},
    {id: 3, name: 'hp', price:267000},
    {id: 4, name: 'mac', price:212000}
 ]


 // similar
 // has some properties , method
 class Product{
    country = 'Bangladesh';
    constructor(name){
        this.name = name;
    }
    speak(talk){
        console.log(`talking about ${talk}`)
    }

 }


 const lenovo = new Product('Le le lenovo')
//  console.log(lenovo);
//  lenovo.speak('ki bolo na j kisu');



class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;

    }
    lecture(){
        console.log('sir is teaching mathematics');
    }

}

const tapan = new Teacher('tapon sir', 'Physics');
console.log(tapan);


const rashid = new Teacher('Rashid', 'English');
console.log(rashid);