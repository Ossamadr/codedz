let header = document.getElementById("header");
onscroll = () => {
  if (scrollY >= 20) {
    header.style.background = "#1e053d";
  } else {
    header.style.background = "none";
  }
};

let toggleBtn = document.querySelector("#toggleBtn");
let body = document.querySelector("body");
toggleBtn.addEventListener("change", (e) => {
  let darkMode = e.target.checked;
  if (darkMode) {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
});
let toggle = document.getElementById("burger");
let listMob = document.getElementById("list-mob");

toggle.addEventListener("click", () => {
  listMob.classList.toggle("hide");
});

//-------------------------------------

let switcherLis =
 document.querySelectorAll(".switcher button");
let imgs =  document.querySelectorAll(".gallery img");;

switcherLis.forEach((btn) => {
  // Remove Active Class From All 
  //button And Add To target button
  btn.addEventListener("click",
   function removeActive() {
    switcherLis.forEach((li) => {
      li.classList.remove("active");
      this.classList.add("active");
    });
  });
 // Manage Images
  btn.addEventListener("click",
   function manageImgs() {
    imgs.forEach((img) => {
      img.style.display = "none";
    });
    document.querySelectorAll
    (this.dataset.cat).forEach((el) => {
      el.style.display = "block";
    });
  });
});
