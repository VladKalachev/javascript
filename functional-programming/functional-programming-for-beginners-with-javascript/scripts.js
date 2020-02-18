var name = 'Fred';
let firstName = 'Saly';

// immutable
const Pi = 3.14;

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

console.log(id, mealWithoutId);
