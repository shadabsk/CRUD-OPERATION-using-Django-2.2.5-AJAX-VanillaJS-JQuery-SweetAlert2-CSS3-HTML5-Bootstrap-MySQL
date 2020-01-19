
  function Flip()
  {
    document.getElementById("signup").innerHTML="<style> .thecard { transform: rotateY(180deg); } </style>";
    document.getElementById("right").style.display = "none";
    document.getElementById("left").style.display = "none";
  }
  
  function Fliplog()
  {
    document.getElementById("logsignup").innerHTML="<style> .thecardlog { transform: rotateY(180deg); } </style>";
    document.getElementById("rightlog").style.display = "none";
    document.getElementById("leftlog").style.display = "none";

  }
	
  function onreg() {
    document.getElementById("reg_btn").style.display = "block";
    document.getElementById("maincontainerlog").style.display = "none";
  }
  function onbackreg() {
    document.getElementById("maincontainer").style.display = "none";
    document.getElementById("reg_btn").style.display = "block";
    
  }
  function onbacklog() {

    document.getElementById("thefrontlog").style.display="none";
    document.getElementById("Password").style.display = "none";
    document.getElementById("maincontainerlog").style.display = "none";
   
  }
  function onlog() {
    document.getElementById("maincontainer").style.display = "none";
    document.getElementById("reg_btn").style.display = "none";
    
    
  }
 
  function onsignup(value) {
    console.log(value)
    document.getElementById("reg_btn").style.display = "none";
    document.getElementById("maincontainerlog").style.display="none";
    
      
  }

  function onlogin() {
  document.getElementById("maincontainer").style.display = "none";
    document.getElementById("Username").style.display = "block";
   }

  function main() {
    window.location.href="index.html";     
  }


