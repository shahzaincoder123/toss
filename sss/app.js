// function fact(n) {
//     let res = 1;
//     for (let i = 1; i <= n; i++) {
//         res *= i;
//     }
//     return res;
// }
// console.log(fact(5));

var para = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos molestiae autem, voluptates accusantium recusandae corrupti unde atque commodi odio modi vitae magnam non suscipit odit vero voluptate distinctio, rem nesciunt?";

var capitalpara = para.split(" ").map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
).join(" ");

console.log(capitalpara);
