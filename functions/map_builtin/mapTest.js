// const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];

// // write code here to use map
// // It should output: [ 15, 13, 11, 16, 10, 11, 10 ]




// // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // const filtered = numbers.filter(function(number) {
// //   return (number % 2) === 0;
// // });

// // console.log(filtered);



// let number of Character = lighthouses.map(function(lighthouses) {
//   return lighthouses;
// });


// console.log(lighthouses);





// let names = [];
// for (let i = 0; i < lighthouses.length; i++) {
//   names.push(lighthouses[i].names);
// }

// console.log(names);
const map = function(array, callback) {

  // temporary code:
  console.log('array: ', array);
  console.log('callback: ', callback);
  
  const results = [];
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);
