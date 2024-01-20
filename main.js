let calculator = document.querySelector(".calculator");
let buttons = document.querySelectorAll(".calculator span");
let screen = document.querySelector("#value");
console.log(screen.textContent);
[...buttons].forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    if (btn.textContent !== "clear" && btn.textContent !== "=") {
      if (sessionStorage.getItem("lastBtn") === "=") {
        sessionStorage.removeItem("lastBtn");
        screen.textContent = btn.textContent;
      } else {
        screen.textContent += btn.textContent;
      }
    } else if (btn.textContent === "clear") {
      screen.textContent = "";
    } else {
      try {
        screen.textContent = eval(screen.textContent);
        sessionStorage.setItem("lastBtn", "=");
      } catch {
        screen.textContent = "error";
        sessionStorage.setItem("lastBtn", "=");
      }
    }
  });
});
