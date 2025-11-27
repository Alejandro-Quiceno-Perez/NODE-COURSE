// node ./index.js -- Ejecutar un archivo de JavaScript con Node.js

// Esta es una seccion de repaso de JavaScript basico, vemos como se puede utilizar esta herramienta en node .js




// console.log(`Hello world`);

// let userName = "Alejo";
// let age = 26;
// let hasHobbies = true;
// let points = [10, 20, 30];
// let user ={
//     name: "Alejo",
//     lastName: "Perez"
// }

// const PI = 3.14;


// console.log(userName, age, hasHobbies);
// console.log(points);
// console.log(user);
// console.log(PI);

// let age = 13;

// if(age >= 18){
//     console.log("You are an adult");
// }else if(age <= 17) {
//     console.log("You are an teenager");
// } else {
//     console.log("You are a minor");
// }


const names = ["Alejo", "Maria", "Juan"];

for (let i = 0; i < names.length; i++) {
    console.log(names[i])
}


function showUserInfo(userName, age) {
    return `User name is ${userName} and age is ${age}`;
}

console.log(showUserInfo("Mariano", 12));
console.log(showUserInfo("Jaime", 50));


const showUserInfo2 = (userName, age) => {
    return `User name is ${userName} and age is ${age}`;
}

console.log(`Usando la funcion flecha -> ${showUserInfo2("Lucia", 22)}`);