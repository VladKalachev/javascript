/**
 * 1. update immutable array
 */
 
// const meals = [
//     { id: 1, descriptin: 'Breakfast', calories: 420 },
//     { id: 2, descriptin: 'Lunch', calories: 520 },
// ]

// const meal = {
//     id: 3,
//     descriptin: 'Snack',
//     calories: 180,
// }

// const updateMeals = [...meals, meal];
// console.log(meal, updateMeals);

// const updateMealsDeascription = updateMeals.map(updateDescription);

// function updateDescription(meal) {
//     if(meal.id === 2) {
//         return {
//             ...meal,
//             descriptin: 'Early Lunch',
//         };
//     }
//     return meal;
// }


// const filteredMeals = updateMeals.filter(function(meal){
//     return meal.id !== 1;
// });

// console.log(updateMealsDeascription, filteredMeals);

/**
 *  2. summarize information in an array
 */
const numbers = [1,2,3];

function sum(x, y) {
    return x + y;
}

//const total = numbers.reduce(sum); // 1+2+3 = 6
// const total = numbers.reduce(sum, 4); // 4+1+2+3 = 10
// console.log(total)

const grades = [60, 55, 80, 90, 99, 92, 75, 72];

const total = grades.reduce(sum);

function sum(acc, grad) {
    return acc + grad;
};

const count = grades.length;
const letterGradCount = grades.reduce(groupByGrade, {})

function groupByGrade(acc, grade) {
    const { a = 0, b = 0, c = 0, d = 0, f = 0 } = acc;
    if(grade > 90) {
        return { ...acc, a: acc.a + 1 };
    } else if(grade >= 80) {
        return { ...acc, b: b + 1};
    } else if (grade >= 70) {
        return {...acc, c: c + 1}
    } else if (grade >= 60) {
        return {...acc, d: d + 1}
    } else if (grade >= 50) {
        return {...acc, f: f + 1}
    }
}

// console.log(total, total / count);