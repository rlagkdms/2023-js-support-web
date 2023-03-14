window.onload= ()=>{
  var btns = document.getElementsByClassName("aco_btn");
  const hides = document.getElementsByClassName("hide")
  
  for(var i=0; i<btns.length; i++){
    console.log(i)
    btns[i].addEventListener("click",(e)=>clickButton(e));
  }                
  
  function clickButton(e) {
    const minusIcon = "../images/js_img/faq/Group 7.png"
    const plusIcon= "../images/js_img/faq/Group 72.png"
    if(e.target.id === "plus"){
      e.target.src = minusIcon
      e.target.id = "minus"
      e.target.parentNode.style.borderBottom="none"
      e.target.parentNode.nextElementSibling.style.display="block" 
      console.log(e.target.parentNode.id) 
    }
    else{
      e.target.src = plusIcon
      e.target.id = "plus"
      e.target.parentNode.nextElementSibling.style.display="none"
      console.log(e.target.parentNode.parentNode.getElementsByClassName("end"))
      if(!e.target.parentNode.parentNode.getElementsByClassName("end")){
      }
      else{
        e.target.parentNode.style.borderBottom ="1px solid #C7C7C7"
        e.target.parentNode.nextElementSibling.nextElementSibling.style.borderTop="none"
      }
    }
        
  }
}
