let myVariable;

myVariable = "lets make this happen";

console.log(myVariable);


let ray = document.getElementById("rain");
ray.addEventListener('click' ,() =>{
if(ray.style.color == "red"){
  ray.style.color ="black";
}else {
  ray.style.color = "red";
}

})
