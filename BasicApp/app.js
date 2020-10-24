// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (close), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//Avatar Modal
var span1 = document.getElementsByClassName("close1")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

var modalAvatar = document.getElementById("avatarModal");
// When the user clicks on <span> (close), close the modal
span1.onclick = function () {
    modalAvatar.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modalAvatar) {
        modalAvatar.style.display = "none";
    }
}

//Room Modal
var spanRoom = document.getElementsByClassName("closeRoom")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

var modalRoom = document.getElementById("roomModal");
// When the user clicks on <span> (close), close the modal
spanRoom.onclick = function () {
    modalRoom.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modalRoom) {
        modalRoom.style.display = "none";
    }
}

function padlock(x) {
  x.classList.toggle("fa-unlock");
} 

function mic(x) {
x.classList.toggle("fa-microphone-slash");
}

(function($) {
  $('nav li').click(function() {
    $(this).addClass('active').siblings('li').removeClass('active');
    $('section:nth-of-type('+$(this).data('rel')+')').stop().fadeIn(400, 'linear').siblings('section').stop().fadeOut(100, 'linear'); 
  });
})(jQuery);