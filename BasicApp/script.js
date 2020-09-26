(function () {
  $("#live-chat header").on("click", function () {
    $(".chat").slideToggle(300, "swing");
    $(".chat-message-counter").fadeToggle(300, "swing");
  });

  $("#chatbox").on("click", function () {
    $(".chat").slideToggle(300, "swing");
    $(".chat-message-counter").fadeToggle(300, "swing");
  });

  $(".chat-close").on("click", function (e) {
    e.preventDefault();
    $("#live-chat").fadeOut(300);
  });
})();

// Javascript from W3school
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
