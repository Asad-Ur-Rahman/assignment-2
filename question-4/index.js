let ul = document.getElementById("ull");
const message = prompt("Enter new item to add in list: ");

function myFunc(txt) {

    ul.innerHTML += `<li>${txt}</li>`;
}
// ul.innerHTML = '';
console.log(ul);

myFunc(message);