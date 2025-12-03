"use strict"
// 1. Через filter и indexOf
function removeDuplicates(arr) {
    return arr.filter((el, index) => arr.indexOf(el) === index);
}

// 2. Через Set
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// 3. Через reduce
function removeDuplicates(arr) {
    return arr.reduce((acc, el, i) => {
        if (!acc.includes(el)) acc.push(el);
        return acc;
    }, [])
}