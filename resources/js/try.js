let randomList = ["apples", "oranges", "chocolate", "milk"]


for (ele in randomList){
    if (randomList[ele] == "oranges"){
        console.log(randomList[ele]);
        console.log("que fue mano");
        break
    }else{
        console.log(randomList[ele]);
        console.log("the hueveaste");
    }
}
