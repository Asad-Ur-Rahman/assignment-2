function strNrtrv(obj) {
    
    for (const key in obj) {
        localStorage.setItem(key,obj[key]);
        // console.log(key);
    }

    for (const key in obj) {
        let x = `${key} : ${localStorage.getItem(key)}`;
        console.log(x)
    }
}


const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

strNrtrv(person)