
function typing(){
    var typed = new Typed(".auto-type", {
        strings:["Data Science |Full Stack Development |AWS |Digital Marketing"],
        typeSpeed:180,
        backSpeed:0,
        loop:false
    })
}
typing()

function Callbutton(){
    const callbutton=document.querySelector(".callbutton");
    const calldiv=document.querySelector(".calldiv");
    const inquirydiv=document.querySelector(".inquiry-div");
    const  iconbutton=document.querySelector("#icon-call")

    if(callbutton.value=="true"){
        callbutton.value="false";
        calldiv.classList.add("expandcalldiv")
        inquirydiv.classList.add("show")
        inquirydiv.classList.remove("hide")  

        
        iconbutton.classList.remove("fa-phone")
       
        iconbutton.classList.add("fa-xmark")
        
       

        console.log("false")
    }
    else{
        callbutton.value="true";
        calldiv.classList.remove("expandcalldiv")
        inquirydiv.classList.add("hide")
        inquirydiv.classList.remove("show")

      
        iconbutton.classList.remove("fa-xmark")
       
        iconbutton.classList.add("fa-phone")

        console.log("true")
    }
}

