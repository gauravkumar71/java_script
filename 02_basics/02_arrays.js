const marvel_heros = ["thoz", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

//  const allHeros = marvel_heros_concat(dc_heros) // to just concat one string to onther string

// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]// here we use spread operator to concat the two array 

// console.log(all_new_heros);

const another_array = [1,2,3,  [4,5,6], 7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)// we use flat for merge subarray into one array

// console.log(real_another_array)

console.log(Array.isArray("hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"}))//interesting


