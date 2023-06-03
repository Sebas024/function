// const numbers = [1, 2, 3, 4, 5, 7, 10, 14, 17, 18];
const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];
const evens = grades.filter(function(num) {
  return num % 5 === 0;
});
console.log("Subset of even numbers:", evens);