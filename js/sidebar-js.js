let menu = document.querySelector(".menu-left");
let resizeSidebar = document.querySelector(".resize-use");

let recreateSidebar = document.querySelector(".main-compo");
let sidebar = document.querySelector(".side-bar");
let mainCompoAllSideBar = document
  .querySelector(".main-compo")
  .querySelectorAll(".sidebar-div");

let mainVideos = document.querySelector("main");
let resizeVideos = document.querySelectorAll(".video-div");

let add = document.createElement("div");
 console.log(mainCompoAllSideBar)
menu.onclick = () => {
  mainCompoAllSideBar.forEach((element) => {
    element.classList.toggle("test");
  });
  resizeSidebar.classList.toggle("small-sidebar");

  recreateSidebar.classList.toggle("recreate-smallbar");

  // recreateSidebar.classList.toggle("test");

  sidebar.classList.toggle("side-bar");
  sidebar.classList.toggle("tt");
  mainVideos.classList.toggle("resize-videos-div");

  resizeVideos.forEach((element) => {
    element.classList.toggle("video-div");
    element.classList.toggle("resize-videos");
  });

  recreateSidebar.appendChild(add);
  add.classList = "new-add-you";
  let addNewSection = document.querySelector(".new-add-you");

  if (addNewSection.style.display === "flex") {
    addNewSection.style.display = "none";
    
  } else {
    addNewSection.style.display = "flex";
    addNewSection.innerHTML =
      '<div class="img"><img src="/image/library.png" alt="" /></div><p>You</p>';
  }

  addNewSection.classList.toggle("test");
};
