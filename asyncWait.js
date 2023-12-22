// //WITHOUT ASYUNC & AWAIT:
// //person1 & 2 has tickets
// console.log('person1: shows ticket');
// console.log('person2: shows ticket');

// //person 3 doesn't have a ticket & makes a promise to wait aside
// const promiseBringingTicket=new Promise((resolve,reject)=>{
//     //waiting for tickets
//     setTimeout(()=>{
//         console.log('Got the tickets');
//         resolve('ticket');
//     },3000)
// });

// const getPopCorn=promiseBringingTicket.then((t)=>{

//         console.log('Got some popcorn');
//         return new Promise((resolve,reject)=> resolve(t));

// });

// const getDrinks=getPopCorn.then((t)=>{

//     console.log('Got some drinks');
//     return new Promise((resolve,reject)=> resolve(t));
// });

// //when she has brought tickets
// getDrinks.then((t)=>{
//     console.log(`person3: shows ${t}`);
// });

// //rest of the queue
// console.log('person4: shows ticket');
// console.log('person5: shows ticket');
// console.log('person6: shows ticket');
// console.log('person7: shows ticket');
// console.log('person8: shows ticket');








//WITH ASYNC & AWAIT
console.log('person1: shows ticket');
console.log('person2: shows ticket');

//person 3 doesn't have a ticket & makes a promise to wait aside
const preMovie=async()=>{
    const promiseBringingTicket=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('ticket')
        },3000);
    });

    //WITHOUT USING PROMISE ALL
    // const getPopCorn=new Promise((resolve,reject)=>resolve(`popcorn`));

    // const getDrinks=new Promise((resolve,reject)=>resolve(`drinks`));

    // let ticket=await promiseBringingTicket;

    // console.log(`I have the ${ticket}`);
    // console.log('Need food!!');

    // let popcorn=await getPopCorn;

    // console.log(`Got the ${popcorn}`);
    // console.log('Need drinks!!');

    // let drinks=await getDrinks;

    // console.log(`Got the ${drinks}`);
    // console.log("Great! Let's go!");

    //USING PROMISEALL
    const getPopCorn=new Promise((resolve,reject)=>resolve(`Popcorn`));
    const getDrinks=new Promise((resolve,reject)=>resolve(`Drinks`));
    const getCandy=new Promise((resolve,reject)=>resolve(`Candy`));

    let ticket=await promiseBringingTicket;

    let [popcorn,drinks,candy]=await Promise.all([getPopCorn,getDrinks,getCandy])

    console.log(`${popcorn},${drinks},${candy}`)
    

    return ticket;
}

preMovie().then((val)=>console.log('person3: shows',val));


console.log('person4: shows ticket');
console.log('person5: shows ticket');
console.log('person6: shows ticket');
console.log('person7: shows ticket');
console.log('person8: shows ticket');
