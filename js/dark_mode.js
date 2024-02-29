document.getElementById("darkModeToggle").addEventListener("change", function() {
    if (this.checked) {
      document.body.classList.remove("dark-mode");
    } else {
      document.body.classList.add("dark-mode");
    }
  });
  