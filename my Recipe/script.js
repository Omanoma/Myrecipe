//document.getElementById("b2").addEventListener("click", myFunction);
var j = 0;
console.log("The people");
function myFunction(y) {
    var n = "Thank you for your "+y+ " donation for the oma foundation.";
    j = j+ y;
    document.getElementById("f").innerText = n;
    //var img = document.createElement("img");
    //img.src = "https://alexanderprange.files.wordpress.com/2019/02/thank-you-post-freature-pic.jpg";
    var block = document.getElementById("i");
    block.src = "https://alexanderprange.files.wordpress.com/2019/02/thank-you-post-freature-pic.jpg";

    
  }
  function other(){
    let h  = prompt("how much are you going to donate?");
    j = j+ h;
    myFunction(h);
  }
  //sign in 
  var modal = document.getElementById('we');
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
  function myform(){
    let x = document.forms["myForm"]["uname"].value;
    let y = document.forms["myForm"]["pw"].value;
    if(y === x){
      alert("Welcome back "+x);
      modal.style.display = "none";
    }
    else{
      alert("Who are you?");
      modal.style.display = "block";
    }
  }
 
  