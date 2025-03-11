let heads = prompt("Enter player 1");
let tails = prompt("Enter player 2");
let toss = Math.floor(Math.random()*2);
if(toss==0){
    Swal.fire({
        title: "Toss",
        text: "rizwan won the toss",
        icon: "success"
      });
}
else{
    Swal.fire({
        title: "toss",
        text: "Rohit won the toss",
        icon: "success"
      });
}
