function dish(rec, availableIngredients) {
  let max = Infinity;
  for (let ingr in rec) {
    if (!availableIngredients.hasOwnProperty(ingr)) {
      return 0;
    }
    max = Math.min(max,Math.floor(availableIngredients[ingr]/rec[ingr]));
  }
  return max;
}
console.log(dish({water: 500, potato: 200, egg: 1}, {water: 1200, potato: 1200, egg: 5, milk: 200}));