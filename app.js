function addition(num1, num2) {
    return num1 + num2;
}

console.log(addition(3, 5));
console.log(addition(-3, -9));
console.log(addition(7, 3));


function convertHoursToSeconds(hours) {
    return hours * 60 * 60;
}

console.log(convertHoursToSeconds(2));
console.log(convertHoursToSeconds(10));
console.log(convertHoursToSeconds(24));


function calcPerimeter(length, width) {
    return 2 * (length + width);
}

console.log(calcPerimeter(6, 7));
console.log(calcPerimeter(20, 10));
console.log(calcPerimeter(2, 9));


function calculateTriangleArea(base, height) {
    return 0.5 * base * height;
}

console.log(calculateTriangleArea(3, 2));
console.log(calculateTriangleArea(10, 10));
console.log(calculateTriangleArea(20, 20));


function appendFrontend(string) {
    return string + " Frontend";
}

console.log(appendFrontend("Apple"));
console.log(appendFrontend("Banana"));
console.log(appendFrontend("Orange"));


function sumGreaterThan100(num1, num2) {
    return num1 + num2 > 100;
}

console.log(sumGreaterThan100(20, 10));
console.log(sumGreaterThan100(50, 60));
console.log(sumGreaterThan100(100, -50));


function lessThanOrEqualTo0(num) {
    return num <= 0;
}

console.log(lessThanOrEqualTo0(3));
console.log(lessThanOrEqualTo0(0));
console.log(lessThanOrEqualTo0(-2));



// opposite boolean use ! before the boolean value to return the opposite value
function oppositeBolean(bool) {
    return !bool;
}

console.log(oppositeBolean(true));
console.log(oppositeBolean(false));
console.log(oppositeBolean(!!0));



function isNotEqualTo0(num) {
    return num !== 0;
}

console.log(isNotEqualTo0(3));
console.log(isNotEqualTo0(0));
console.log(isNotEqualTo0(-2));
console.log(isNotEqualTo0(null));


function calcRemainder(num1, num2) {
    return num1 % num2;
}

console.log(calcRemainder(4, 2));
console.log(calcRemainder(7, 8));
console.log(calcRemainder(9, 8));


function isOdd(num) {
    return num % 2 !== 0;
}

console.log(isOdd(3));
console.log(isOdd(4));
console.log(isOdd(-3));

function isOddOrEven(num) {
    if (num % 2 === 0) {
        return "1";
    } else {
        return "-1";
    }
}

console.log(isOddOrEven(1));
console.log(isOddOrEven(2));
console.log(isOddOrEven(5
));

// other way to write this is
function isOddOrEven(num) {
    return num % 2 === 0 ? "1" : "-1";
}
console.log(isOddOrEven(1));



function isLoggedInAndSubscribed(loggedIn, subscribed) {
    return (loggedIn==='LOGGED_IN') && (subscribed==='SUBSCRIBED');
}

console.log(isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'));
console.log(isLoggedInAndSubscribed('LOGGED_OUT', 'UNSUBSCRIBED'));
console.log(isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED'));


function isLoggedInOrSubscribed(loggedIn, subscribed) {
    return (loggedIn==='LOGGED_IN') || (subscribed==='SUBSCRIBED');
}
console.log(isLoggedInOrSubscribed('LOGGED_IN', 'UNSUBSCRIBED'));
console.log(isLoggedInOrSubscribed('LOGGED_OUT', 'SUBSCRIBED'));
console.log(isLoggedInOrSubscribed('LOGGED_OUT', 'UNSUBSCRIBED'));


