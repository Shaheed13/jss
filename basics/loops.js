// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(index);
    
// }
// for (let i= 0; i< 10; i++) {
//     console.log(`outerloop value ${i}`);
//     for (let j= 0; j<20; j++) {
//        // console.log(`innerloop value${j} and inner loop ${i}`);
//        console.log(i+`*`+j+`=`+i*j);

        
//     }
// }
// const array=["sabbu","nandu","shahii"]
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
    
// }
// for (let index = 1; index <=20; index++) {
    
//     if (index==5) {
//         console.log(`detected 5`);
//         break
        
//     }
//     console.log(`value of index is ${index}`);
// }
// let index=0
// while (index<=10) {
//     console.log(`value of index is ${index}`);
//     index=index+3
    
// }
// 
// 
// const greetings="hello js!"
// for (const greet of greetings){
//     console.log(`each char is ${greet}`);
// }
// const map=new Map()
// map.set('in',"india")
// map.set('usa',"united states of america")
// map.set('fr',"france")
// map.set('in',"indonesia")
// map.set('in',"inter")
//  console.log(map);
// const myObject={
//     'game':'gta',
//     'game2':'vicecity'
// }
// for(const[key,value]of myObject){
//     console.log(key,':-',value);
// }
const myObject={
    js:'javascript',
    cpp:'c++',
    swift:'swift by apple',
}
for(const key in myObject){
    //console.log(key);
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
const programming=["js","rb",""]
