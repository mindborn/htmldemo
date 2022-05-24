function test()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(10);
        },5000);
    });
}

async function test2()
{
    let a=await test();
    return a;
    // console.log(a);
}

let b=await test2();
console.log(b);

// test().then((result)=>console.log(result));

// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('resolved');
//       }, 2000);
//     });
//   }
  
//   async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
//     // expected output: "resolved"
//   }
  
//   asyncCall();
  