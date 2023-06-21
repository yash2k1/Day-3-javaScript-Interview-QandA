// const promise1=new Promise((res)=>{
// res("promise 1 resolve");
// })
// const promise2=new Promise((res)=>{
// res("promise 2 resolve");
// })
// const promise3=new Promise((res)=>{
// res("promise 3 resolve");
// })
// Promise.all([promise1,promise2,promise3])
// .then(result=>console.log(result));


// function promise(num,time){
//     return new Promise((res)=>{
//         setTimeout(()=>{
//             console.log(num);
//             res("solved")
//         },time)
        
//     })   
// }
// // promise(1,1000)
// // .then(()=>promise(2,2000))
// // .then(()=>promise(3,3000))
// // .then(()=>promise(4,4000))
// // .then(()=>promise(5,5000))
// function myPromise(number, timeout) {
//     return new Promise((res) => {
//       setTimeout(() => {
//         console.log(number);
//         res("promise is resolved");
//       }, timeout);
//     });
//   }
//   myPromise(1,1000)
//   .then(()=>myPromise(2,2000))
//   .then(()=>myPromise(3,3000))
//   .then(()=>myPromise(4,4000))
//   .then(()=>myPromise(5,5000))
//   .then(()=>myPromise(6,6000))
//   .then(()=>myPromise(7,7000))

// 4)
function outerAreaOfRectange(L){
 return  function innerAreaOfRectange(B){
    console.log(`area of rectange is ${L*B}`);
  }
 
}
let length=5;
let breath=7;
const firstCall=outerAreaOfRectange(length);
firstCall(breath);