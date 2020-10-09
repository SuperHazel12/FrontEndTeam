//chatbox
(function () {
  $("#live-chat header").on("click", function () {
    $(".chat").slideToggle(300, "swing");
    $(".chat-message-counter").fadeToggle(300, "swing");
  });

  $("#chatbox").on("click", function () {
    $(".chat").slideToggle(300, "swing");
    $(".chat-message-counter").fadeToggle(300, "swing");
  });

  // $(".chat-close").on("click", function (e) {
  //   e.preventDefault();
  //   $("#live-chat").fadeOut(300);
  // });
  $(document).ready(function () {
    $(".chat-close").click(function () {
      $("#live-chat").hide("slow");
    });
    $("#chatbox").click(function () {
      $("#live-chat").show("slow");
    });
  });
})();

//dropdown
function dropdownUser() {
  document.getElementById("userDropdown").classList.toggle("active");
}
window.onclick = function (event) {
  if (!event.target.matches(".but-arrow")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function dropdownPref() {
  document.getElementById("prefDropdown").classList.toggle("show-pref");
}
window.onclick = function (event) {
  if (!event.target.matches(".ellipsis")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (close), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//Avatar Modal
var span1 = document.getElementsByClassName("close1")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

var modalAvatar = document.getElementById("avatarModal");
// When the user clicks on <span> (close), close the modal
span1.onclick = function () {
  modalAvatar.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalAvatar) {
    modalAvatar.style.display = "none";
  }
};

//color
