// Nav
document.querySelector('#menu').addEventListener('click', ()=>{
    document.querySelector('nav ul').classList.toggle('showmenu')
})

// Image Slides
var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 3) {
    counter = 1
  }
}, 5000);

// Current Year
        const date = new Date();
        const currentYear = date.getFullYear();

        // Copy Right P Tag

        const copyRightCode = "&copy;";
        const heart = " <span><box-icon type='solid' name='heart' size='sm' color='red'></box-icon></span> "
        let copyRightText = $(document).ready(function(){
          $(".copy-right").html("Copyright" + copyRightCode + " " + currentYear + " All rights reserved | This template is made with" + heart + " by Colorlib");
        });