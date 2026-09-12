// map -> stores a data in the form of key and value in map
// key cannot be duplicate values can be dupliate. 

let map = new Map();
console.log(map);

// methods of map

map.set("name", "alok");
map.set("age", 21);
map.set("ispassed", true);
map.has('alok')
console.log(map);

for(let [key,value] of map){
    console.log( key + "->" + value);
}

for(let key of map.keys()){
    console.log(key);
}

for(let value of map.values()){
    console.log(value);
}