// Task 1 - Mrs. Gojo's Shopping List

// 1. Create the shopping list array
let shoppingList = ['Wheat Bread', 'Apples', 'Lowfat Yogurt', 'Eggs', 'Chicken Breast'];

// 2. Take "Wheat Bread" from the array and store it in importantToBuy
let importantToBuy = shoppingList[0];
console.log('Important to buy:', importantToBuy);

// 3. Replace "Lowfat Yogurt" with "Soy Milk"
let yogurtIndex = shoppingList.indexOf('Lowfat Yogurt');
if (yogurtIndex !== -1) {
    shoppingList[yogurtIndex] = 'Soy Milk';
}
console.log('Updated shopping list:', shoppingList);

// 4. Use the length method to find out how many items are in the shopping list
console.log('Length of the shopping list:', shoppingList.length);



// Task 2 - Mrs. Gojo's Holiday Plans

// 1. Create the holidayPlans array
let holidayPlans = ['Paris', 'Tokyo', 'Sydney', 'New York'];

// 2. Display the holidayPlans array
console.log('Original holiday plans:', holidayPlans);

// 3. Add "Bali" and "Hokkaido" to the holidayPlans array
holidayPlans.push('Bali', 'Hokkaido');

// 4. Display the updated holidayPlans array
console.log('Updated holiday plans:', holidayPlans);
