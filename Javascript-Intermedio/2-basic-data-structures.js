// -----> EXERCISE 1: Use an Array to Store a Collection of Data <-----
let yourArray = ["Tomi", {dir: "street 21", cell: 379}, 35, null, true,]; // Change this line

// -----> EXERCISE 2: Access an Array's Contents Using Bracket Notation <-----
let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = "Hola y Chau";
// Only change code above this line
console.log(myArray);


// -----> EXERCISE 3: Add Items to an Array with push() and unshift() <-----
function mixedNumbers(arr) {
    // Only change code below this line
    arr.unshift('I', 2, 'three');
    arr.push(7, 'VIII', 9);
    // Only change code above this line
    return arr;
}
  
console.log(mixedNumbers(['IV', 5, 'six']));


// -----> EXERCISE 4: Remove Items from an Array with pop() and shift() <-----
function popShift(arr) {
    let popped = arr.pop(); // Change this line
    let shifted = arr.shift(); // Change this line
    return [shifted, popped];
}
  
console.log(popShift(['challenge', 'is', 'not', 'complete']));


// -----> EXERCISE 5: Remove Items Using splice() <-----
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
  arr.splice(1, 4);
// Only change code above this line
console.log(arr);


// -----> EXERCISE 6: Add Items Using splice() <-----
function htmlColorNames(arr) {
    // Only change code below this line
    arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
    // Only change code above this line
    return arr;
}
  
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));


// -----> EXERCISE 7: Copy Array Items Using slice() <-----
function forecast(arr) {
    // Only change code below this line
    const newArr = arr.slice(2, 4);
    return newArr;
}
  
// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));


// -----> EXERCISE 8: Copy an Array with the Spread Operator <-----
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // Only change code below this line
      newArr.push([...arr]);
      // Only change code above this line
      num--;
    }
return newArr;
}
  
console.log(copyMachine([true, false, true], 2));


// -----> EXERCISE 9: Combine Arrays with the Spread Operato <-----
function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line
    return sentence;
}

console.log(spreadOut());


// -----> EXERCISE 10: Check For The Presence of an Element With indexOf() <-----
function quickCheck(arr, elem) {
    // Only change code below this line
    const resp = arr.indexOf(elem);
    if(resp === -1){
      return false;
    }else{
      return true;
    }
// Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));


// -----> EXERCISE 11: Iterate Through All an Array's Items Using For Loops <-----
function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {    
      if(!arr[i].includes(elem)){
        newArr.push(arr[i]);
      }
    }
    // Only change code above this line
    return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));


// -----> EXERCISE 12: Create complex multi-dimensional arrays <-----
let myNestedArray = [
    // Only change code below this line
    ['unshift', false,
     ['deep', 3, ['deeper', true, ['deepest', 'hola', 95]], 24 ],
     1, 2, 3, 'complex', 'nested'],
    ['loop', 'shift', 6, 7, 1000, 'method'],
    ['concat', false, true, 'spread', 'array'],
    ['mutate', 1327.98, 'splice', 'slice', 'push'],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
    // Only change code above this line
];


// -----> EXERCISE 13: Add Key-Value Pairs to JavaScript Objects <-----
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
};
  
// Only change code below this line
foods.bananas = 13;
foods['grapes'] = 35;
const keyStraw = 'strawberries';
foods[keyStraw] = 27;
// Only change code above this line
  
console.log(foods);


// -----> EXERCISE 14: Modify an Object Nested Within an Object <-----
let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
};

// Only change code below this line
userActivity.data.online = 45;
// Only change code above this line

console.log(userActivity);


// -----> EXERCISE 15: Access Property Names with Bracket Notation <-----
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};

function checkInventory(scannedItem) {
    // Only change code below this line
    return foods[scannedItem];
    // Only change code above this line
}

console.log(checkInventory("apples"));


// -----> EXERCISE 16: Use the delete Keyword to Remove Object Properties <-----
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};

// Only change code below this line
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
// Only change code above this line

console.log(foods);


// -----> EXERCISE 17: Check if an Object has a Property <-----
let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
};

function isEveryoneHere(userObj) {
    // Only change code below this line
    if (
        "Alan" in userObj &&
        "Jeff" in userObj &&
        "Sarah" in userObj &&
        "Ryan" in userObj
    ) {
        return true;
    }else{
        return false;
    }
    // Only change code above this line
}
  
console.log(isEveryoneHere(users));


// -----> EXERCISE 18: Iterate Through the Keys of an Object with a for...in Statement <-----
const users2 = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
}

function countOnline(usersObj) {
// Only change code below this line
let cont = 0;
for (let user in usersObj) {
    
    if(usersObj[user].online === true){
    cont +=1;
    }
}
return cont;
// Only change code above this line
}

console.log(countOnline(users2));


// -----> EXERCISE 19: Generate an Array of All Object Keys with Object.keys() <-----
let users3 = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
};

function getArrayOfUsers(obj) {
// Only change code below this line
const arrayUsers = Object.keys(obj);
return arrayUsers;
// Only change code above this line
}

console.log(getArrayOfUsers(users3));


// -----> EXERCISE 20: Modify an Array Stored in an Object <-----
let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
};

function addFriend(userObj, friend) {
    // Only change code below this line
    userObj.data.friends.push(friend);
    return  userObj.data.friends;
    // Only change code above this line
}

console.log(addFriend(user, 'Pete'));