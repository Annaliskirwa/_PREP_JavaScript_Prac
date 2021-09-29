console.log('I am a Typescript example');
//template strings
let multiline = `THW 
WJW
JSD
 euwen`
 console.log(multiline);
 //const keyword
 const namee = "Jaack"
 //let keyword
 //variable substitution
 let introduction = `Hi he is called ${namee}`
 console.log(introduction)
//fat arrow function
 function ping (){
    setTimeout(()=>console.log("Till I come back home"),1000);
  }
  ping()//ping starts here
//for in lopps
  const person = {"first": "Jack",
                    "last": "Obura"}
   for (let attr in person){
       console.log(attr)
   }
   //object destructuring
  const {first: firstname, last: lastname} = person
  console.log("Last name is " + lastname);
  console.log("The first name is "+ firstname);
//array destructuring
  const num = [1,2]
  const [a,b] = num
  console.log(a)

  const numbers=[1,2,3]
  //for of loops
for (let num of numbers){
  console.log(num);
}
//promises in javascript
function asyncTask (){
    var promise = new Promise((resolve, reject)=>{
        setTimeout(() => {
            try{console.log("This is completed");
        resolve("Success");}
        catch(err){
            reject(err)
        }
        }, 1000)
    });
    return promise;
}asyncTask().then((val)=> {console.log(val)}, (err)=> {console.log(err)},)