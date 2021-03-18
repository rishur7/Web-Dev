function myfun(){
   var x = document.getElementById("id1").value;
   if(x.length==6 && !isNaN(x))
   {
   document.getElementById("id1").remove();
   document.getElementById("pin").style.display="block";
   document.getElementById("pin").innerHTML=` Pincode: ${x} `;
   document.getElementById("pinchange").innerHTML="CHANGE PINCODE";
   document.getElementById("err").style.display="none";
}
else{
   document.getElementById("err").style.display="block";
}
}