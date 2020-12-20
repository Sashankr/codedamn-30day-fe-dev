/*
We've created an object, users, with some users in it and a function isEveryoneHere, which we pass the users object to as an argument. Finish writing this function so that it returns true only if the users object contains all four names, Alan, Jeff, Sarah, and Ryan, as keys, and false otherwise.
 */

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

function isEveryoneHere(obj) {
  // Only change code below this line
    if(('Alan' in obj) && ('Jeff' in obj) && ('Sarah' in obj) & ('Ryan' in obj)){
        return true;
    } 
    else{
        return false;
    }
  // Only change code above this line
}

console.log(isEveryoneHere(users));
