let allproduct = document.querySelectorAll(".list li")
let contant = document.querySelector("#contant")
let btn = document.querySelector("#addtocart")
let showprice = document.querySelector("#showprice")
var totalprice = 0

allproduct.forEach(function(item){
   
    item.onclick = function(){
        totalprice += +item.getAttribute("price")
        contant.innerHTML += item.textContent + ","
        if (contant.innerHTML != " "){
            btn.style.display ="block"
            btn.style.margin="25px"
            
        }

        btn.onclick = function(){

            showprice.style.display ="block"
            showprice.style.background ="#eee"
            showprice.innerHTML = "Total Price :" + totalprice
        }
    }
    
   
})


