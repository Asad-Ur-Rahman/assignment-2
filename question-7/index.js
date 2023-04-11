function getObj(keyName) {
    
    const person = localStorage.getItem(keyName)
    const prsn = person ? JSON.parse(person) : [];

    console.log(prsn);
}

getObj("John");