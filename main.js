let form = document.querySelector('.form');
let firstname = document.querySelector(".firstname");
let lastname = document.querySelector(".lastname");
let email = document.querySelector(".mail");
let password = document.querySelector(".pass");
let submit = document.querySelector(".submit");
let firstname_error=document.querySelector(".fname");
let lastname_error=document.querySelector(".lname");
let email_error=document.querySelector(".email");
let password_error=document.querySelector(".password");
let layout = document.querySelector(".layout");
form.onsubmit = function(e){
     e.preventDefault();
   if(firstname.value=="")
   {
       firstname_error.style.display="block";
       lastname.style.marginTop="55px"
   }
   else{
       firstname_error.style.display="none";
       lastname.style.marginTop="0px";
   }
  if(lastname.value=="")
   {
       lastname_error.style.display="block";
       email.style.marginTop="55px"
   }
   else{
       lastname_error.style.display="none";
       email.style.marginTop="0px";
   }
   if(email.value=="")
   {
       email_error.style.display="block";
       password.style.marginTop="55px"
   }
   else{
       email_error.style.display="none";
       password.style.marginTop="0px"
   }
  
  if(password.value=="")
   {
       password_error.style.display="block";
       submit.style.marginTop="55px"
   }
   else{
       password_error.style.display="none";
       submit.style.marginTop="0";
   }
   if(firstname.value !="" && lastname.value!=""&& email.value!="" && password.value!="")
   {
       layout.style.display='block';
       firstname.value="";
       lastname.value="";
       email.value="";
       password.value="";
       setTimeout(() => {
            layout.style.display='none';
       }, 1000);
   }
}
