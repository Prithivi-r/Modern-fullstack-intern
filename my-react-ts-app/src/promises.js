const promise=new Promise((resolve,reject)=>{
    console.log("this is a promise");
    reject("Promise Reject!");
    resolve("promise resolved !");
})
