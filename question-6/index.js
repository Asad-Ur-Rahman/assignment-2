function storeObj(keyName, obj) {

    const strfy = JSON.stringify(obj);
    localStorage.setItem(keyName, strfy);

}

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

storeObj("John", person);
