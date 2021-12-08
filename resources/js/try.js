const anArray = ["apple", "orange", "dog", "cat"];

for (let i = 0; i < anArray.length; i++){
    console.log(anArray[i]);
}

const anObject = {
    playerName: "maugod", 
    experienceLevel: 9000,
}

for (ele in anObject){
    console.log(`${ele}: ${anObject[ele]}`);
}

