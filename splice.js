const friends = [12, 45, 32, 22, 44, 62, 19, 69, 87];

// Remove elements from an array
// and, if necessary, inserts new elements in their place,
// returing the deleted elements.
// will change the original array
const partial = friends.splice(2, 5, 55, 999, 1111);
console.log(partial);
console.log(friends);