// 1. update immutable object
const meal = {
    id: 1,
    descriptin: 'Breakfast',
}

const updateMeal = {
    ...meal,
    descriptin: 'Brunch',
    calories: 600,
}

const { id, ...mealWithoutId } = updateMeal;
// console.log(id, mealWithoutId);
