var name = 'Fred';
let firstName = 'Saly';

// immutable
const Pi = 3.14;

// 1. update immutable object
// const meal = {
//     id: 1,
//     descriptin: 'Breakfast',
// }

// const updateMeal = {
//     ...meal,
//     descriptin: 'Brunch',
//     calories: 600,
// }

// const { id, ...mealWithoutId } = updateMeal;
// console.log(id, mealWithoutId);

// 2. update immutable array

const meals = [
    { id: 1, descriptin: 'Breakfast', calories: 420 },
    { id: 2, descriptin: 'Lunch', calories: 520 },
]

const meal = {
    id: 3,
    descriptin: 'Snack',
    calories: 180,
}

const updateMeals = [...meals, meal];
// console.log(meal, updateMeals);

const updateMealsDeascription = updateMeals.map(updateDescription);

function updateDescription(meal) {
    if(meal.id === 2) {
        return {
            ...meal,
            descriptin: 'Early Lunch',
        };
    }
    return meal;
}


const filteredMeals = updateMeals.filter(function(meal){
    return meal.id !== 1;
});

console.log(updateMealsDeascription, filteredMeals);