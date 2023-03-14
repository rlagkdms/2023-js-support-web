window.onload= ()=>{
    let button1 = document.getElementById("btn22");
    let button2 = document.getElementById("btn23");
    button1.addEventListener("click",()=>btncluck(1));
    button2.addEventListener("click",()=>btncluck(2));

    console.log(document.querySelector(".change1"))
    console.log(button1,button2)
  
    function btncluck(num){
        if(num==1){
            button1.style.backgroundColor = "#016BFF";
            button1.style.color = "white";
            button1.style.borderColor = "#016BFF";
            button2.style.backgroundColor ="white";
            button2.style.color ="#016BFF"; 
            button2.style.borderColor = "#016BFF";  
            document.querySelector(".change1").style.display="none";
            document.querySelector(".change2").style.display="none";
            document.querySelector(".change3").style.display="none";
            document.querySelector(".change4").style.display="none";
            document.querySelector(".change5").style.display="none";
            document.querySelector(".change6").style.display="none";
            document.querySelector(".change7").style.display="none";
            document.querySelector(".change8").style.display="none";
            document.querySelector(".change9").style.display="block";
            document.querySelector(".change10").style.display="block";
            document.querySelector(".change11").style.display="block";
            document.querySelector(".change11").style.display="block";
            
        }     
        else{
            button1.style.backgroundColor = "white";
            button1.style.color = "#016BFF";
            button1.style.borderColor = "#016BFF";
            button2.style.backgroundColor ="#016BFF";
            button2.style.color ="white";           
            button2.style.borderColor = "#016BFF";
            document.querySelector(".change1").style.display="block";
            document.querySelector(".change2").style.display="block";
            document.querySelector(".change3").style.display="block";
            document.querySelector(".change4").style.display="block";
            document.querySelector(".change5").style.display="block";
            document.querySelector(".change6").style.display="block";
            document.querySelector(".change7").style.display="block";
            document.querySelector(".change8").style.display="block";
            document.querySelector(".change9").style.display="none";
            document.querySelector(".change10").style.display="none";
            document.querySelector(".change11").style.display="none";
            document.querySelector(".change11").style.display="none";
            
        }
    }
    
}