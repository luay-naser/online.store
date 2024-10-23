
//     document.getElementById("bar").addEventListener("click",function(){
//         document.getElementById("navbar").style.right = "0px";
//     })


// document.getElementById("close").addEventListener("click",function(){
//     document.getElementById("navbar").style.right = "-300px";
// })
const nav = document.getElementById("bar");
const navbar = document.getElementById("navbar");
const close = document.getElementById("close");

nav.addEventListener("click", function(){
    navbar.classList.add("active");
})
close.addEventListener("click", function(){
    navbar.classList.remove("active");
})

