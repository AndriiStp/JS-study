// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i].name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i].name === potionName) {
//         this.potions.splice(i, 1);
//       }
//     }
//   },

//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i].name === oldName) {
//         this.potions[i].name = newName;
//       }
//     }
//     return `Potion ${oldName} is not in invertory!`;
//   },
//   // Change code above this line
// };

// const arr = [2, 4, 62, 6, 3, 34];

// function each(arr, callback) {
//   let total = 5;
//   for (let i = 0; i < arr.length; i += 1) {
//     total += callback(total, arr[i]);
//   }
//   return total;
// }

// function add(a, b) {
//   return a * b;
// }
// function sum(a, b) {
//   return a + b;
// }

// console.log(each(arr, add));
// console.log(each(arr, sum));
