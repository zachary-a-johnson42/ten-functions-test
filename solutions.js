"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

//isTrue
function isTrue(arg){
    if(arg === true){
        return true;
    } else{
        return false;
    }
}

//isFalse
function isFalse(arg){
    if(arg === false) {
        return true;
    } else {
        return false;
    }
}
//not
function not(arg){
    return !arg;
}

//addOne
function addOne(num){
    return parseFloat(num) + 1;
}

//isEven
function isEven(num){
    if(num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

//isIdentical
function isIdentical(val1, val2){
    if(val1 === val2){
        return true;
    } else {
        return false;
    }
}

//isEqual
function isEqual(val1, val2) {
    if(val1 == val2) {
        return true
    } else {
        return false
    }
}

//or
function or(val1, val2){
    return val1 || val2;
}

//and
function and(val1, val2) {
    return val1 && val2;
}

//concat
function concat(val1, val2) {
    return ''+val1+val2;
}