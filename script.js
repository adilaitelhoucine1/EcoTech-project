const button = document.querySelector(".addtocart");
const done = document.querySelector(".done");
console.log(button);
let added = false;
button.addEventListener('click',()=>{
if(added){
    done.style.transform = "translate(-110%) skew(-40deg)";
    added = false;
}
else{
    done.style.transform = "translate(0px)";
    added = true;
    console.log("non-clicked");
}   
});
