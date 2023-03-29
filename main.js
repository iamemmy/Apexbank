let navBtn = document.querySelector('.fas');
let navWrapper = document.querySelector('.nav-items-wrapper');
let navItem = document.querySelectorAll('.item');
let body = document.querySelector('body');

navBtn.addEventListener('click', function() {
    setTimeout(function() {
        navBtn.classList.toggle("fa-times");
    }, 300);

    if ( navWrapper.style.left != "0%" ) {
        navWrapper.style.left = "0%";
        body.style.overflowY = 'hidden'
    } else {
        navWrapper.style.left = "-100%";
        body.style.overflowY = 'scroll'
    }

    navItem.forEach( item =>{
        item.style.visibility = 'hidden'
        setTimeout(()=>{
            item.style.visibility = 'visible'
        }, 350)
       })
})


//LOGIN FUNCTIONS

let errorMsg = document.querySelector(".error");
let signIn = document.querySelector(".btn");
let signUp = document.querySelector("#btn2");

signIn.addEventListener("click", function() {
    errorMsg.style.color = "red";
    errorMsg.textContent = "incorrect login credentials... Try again!";
            setTimeout(()=>{
                errorMsg.textContent = "";
            }, 5000);
});

signUp.addEventListener("click", function() {
    errorMsg.style.color = "green";
    errorMsg.textContent = "Hello! To get started, send a mail to info@apexbank.site";
            setTimeout(()=>{
                errorMsg.textContent = "";
            }, 5000);
});

function field_focus(field, email)
  {
    if(field.value == email)
    {
      field.value = '';
    }
  }

  function field_blur(field, email)
  {
    if(field.value == '')
    {
      field.value = email;
    }
  }

//Fade in dashboard box
$(document).ready(function(){
    $('.box').hide().fadeIn(1000);
    });

//Stop click event
$('a').click(function(event){
    event.preventDefault(); 
	});