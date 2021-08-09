// promeises in javascript

const dis=new Promise(function(resolve,reject){

    flag=true;
    if(flag)
    {
        resolve("This is done")
    }
    else
    {
        reject("This is not done");
    }



});
dis.then(function(res){
    console.log(res);
}).catch(function(res){
    alert(res)
})