/////////////////////////////////////////////////////////
// znajdowanie duplikatów i wyrzucanie na koniec

let arr = [3, 7, 1, 7, 1, 2, 3, 7, 1, 3, 7, 6, 7];
let uniArr = arr.sort();

let findDuplicates = (arr) =>
  arr.filter((item, index) => arr.indexOf(item) != index);

let duplica = [
  ...findDuplicates(uniArr),
  ...[...new Set(findDuplicates(uniArr))],
].sort();

let difference = uniArr.filter((x) => !duplica.includes(x));

let FinlVal = [...difference, ...duplica];
console.log(FinlVal);

//////////////////////////////////////////////////////////////////////
// Sortowanie tablicy obiektów itp...

// const listOfTags = [
//   { id: 1, label: "Hello", color: "red" },
//   { id: 2, label: "World", color: "green" },
//   { id: 3, label: "Hello", color: "blue" },
//   { id: 4, label: "Sunshine", color: "yellow" },
//   { id: 5, label: "Sunshine", color: "red" },
//   { id: 6, label: "Hello", color: "blue" },
//   { id: 7, label: "Hello", color: "blue" },
// ];

// listOfTags.sort((a, b) => a.label.localeCompare(b.label));
// console.log(listOfTags);

// const unique = [...new Set(listOfTags.map((tag) => tag.label))];
// console.log(unique);
// let dupvar = [];

// let idnext = 0;
// listOfTags.forEach((el, id) => {
//   if (idnext < listOfTags.length - 1) {
//     idnext++;
//     // console.log(el.id, listOfTags[idnext].id);
//     if (el.label === listOfTags[idnext].label) {
//       dupvar.push(el.label);
//     }
//   }
// });

// console.log(dupvar);

// let uprr = listOfTags.filter((el, id) => {
//   if (dupvar.includes(el.label)) {
//   } else {
//     return el;
//   }
// });

// uprr = [...uprr, ...unique];

// console.log(uprr);

//////////////////////////////////////////////////////////////////////
