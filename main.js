// this is the begging of my froyo projectr// 
let flavors = prompt("asking for the flavors")
console.log(flavors)
const myArray = flavors.split(",");
console.log(myArray)
let nameofObject ={

}
for(let taste = 0; taste <myArray.length; taste++){
    console.log(myArray[taste]);
    if(nameofObject[myArray [taste]]>0){
        nameofObject[myArray[taste]]+=1

    }
    else{nameofObject[myArray[taste]] =1 

    }
}
console.table(nameofObject)