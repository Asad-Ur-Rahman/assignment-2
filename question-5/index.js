function myFunc(elmnt,clr) {
    document.getElementsByTagName(elmnt)[0].style.backgroundColor = clr;
}

myFunc('p','pink');
myFunc('h1', 'yellow');