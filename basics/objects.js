// console.log("hello");
// const heros=["nandu","sabbu","thor"]
// const heroins=["haa","hee"]
// heros.push(heroins)
// console.log(heros);
// console.log(heros[3][2]);
// const all=heros.concat(heroins)
// console.log(all)
// console.log(heros);
// console.log(Array.from("nandu"));
//console.log(Array.from({heros:"nandu"}));
const jsUser={
    name:"nandu",
    age:10,
    email:"ajsndkajshdiua@amshnciue"
}
// console.log(jsUser.email);
// jsUser.email="hfhufhfh@hasjags"
// Object.freeze(jsUser)
// jsUser.email="jhasdiuahs@jsndckjsndf"
// console.log(jsUser);
jsUser.greeting=function(){
    console.log("Hello JS user");
}
jsUser.greetingTwo=function(){
    console.log(`Hello JS user,${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());









