let doc = document.body;
const message = prompt("Enter the text to show:");

function myFunc(text) {

    doc.innerHTML = `<p>${text}</p>`;

}

// console.log(doc);

myFunc(message);