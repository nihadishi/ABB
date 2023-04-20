function change(str) {
  let out = '';
  for (let i = 0; i < str.length; i++) {
    out += str[i].toUpperCase() + str[i].repeat(i).toLowerCase() + '-';
  }
  return out.slice(0, -1);
}

console.log(change('Nihad')); 
console.log(change('Maharramov')); 