// Regular expression: /patternString/flags
// JS uses ECMAScript for Regex.
// By default regex is case sensitive and only takes into account the first 
// appearence.

// Sets and ranges are represented with [...] in Regular Expressions.
var regexIr = '/[ABC]ir/gi'; // global and case-insesitive
var regexNumbers = '/[\d]/gi';
// ^ use to indicate that the string must start with
var regexStartsBy = '/^[0-9]/'; 
// Dollar $ is the end condition
var regexFinishWith = '/[0-9]$/'

// Quantifiers define how many times an element must appear in the string.
// Use curly-braces {n}, where n is the number of repetitions. 
// To select a // range of appearences use two comma separated numbers: {m,n}.
var regexQuantPrecise = '/[\d]{2}/';
var regexQuantRange = '/[\d]{2,5}/';
// + means one or more elements must appear.
var regexMoreOnce = '/[\d]+/';
// * means zero or more elements might appear.
var regexMoreZero = '/[\d]*/';
// ? optional, one element that might appear or not.
var regexOptional = '/[\d]?/';

// Usage:
// 1. The one used before
var text = 'My text 123';
text.search(regexMoreOnce); // returns string position
text.match(regexMoreOnce); // returns the matched string.
// 2. Using RegExp class
var regex = new RegExp('[\d]{2,4}', 'gi');
regex.test(text); // returns true if there is a match and returns false if 
                  // there is no match.

// To use special characters, escape them using backslash \
// Use parentheses to group letters and symbols. I.e: ^(www)
// Can match one or other strings using slash |. I.e: (com|es|io|eu)