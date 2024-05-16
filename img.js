let backbtn = document.getElementById("backbtn");
let nextbtn = document.getElementById("nextbtn");
let scrollcon  = document.querySelector(".carousel")

scrollcon.addEventListener("wheel",(evt) => {
     evt.preventDefault();
     scrollcon.scrollLeft += evt.deltaX;
     scrollcon.style.scrollBehavior = "auto";
})

nextbtn.addEventListener("click",()=>{
     scrollcon.style.scrollBehavior = "smooth";
     scrollcon.scrollLeft += 600;
});

backbtn.addEventListener("click",()=>{
     scrollcon.style.scrollBehavior = "smooth";
     scrollcon.scrollLeft -= 600;
});
 