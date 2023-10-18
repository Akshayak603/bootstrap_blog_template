let body_tag = document.querySelector("body");
let dark = document.querySelector(".dark-page");
let dark_text = document.querySelector(".dark-page-text");

dark.addEventListener("click", () => {
  console.log(body_tag.classList);
  body_tag.classList.toggle("bg-dark");
  body_tag.classList.toggle("text-white");
  if (body_tag.classList.length > 0) {
    dark_text.innerHTML = "Dark Mode On";
  } else {
    dark_text.innerHTML = "Dark Mode Off";
  }
});
