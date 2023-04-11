function searchArray(arr, value) {
    if (arr.length === 0) {
        return false;
    } 
    if (arr[0] === value) {
        return true;
    } 
    else {
        return searchArray(arr.slice(1), value);
    }
}
console.log(searchArray([1, 2, 4, 5, 7, 10, 15] , 6));
console.log(searchArray([16, 24, 35, 44, 55], 35));