"use strict"

function removeDuplicates(arr) {
    return arr.filter((el, index) => arr.indexOf(el) === index);
}