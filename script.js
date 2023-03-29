button = document.querySelector(".share-button");
profile = document.querySelector(".profile-info");
shareText = document.querySelector(".share-text");
icons = document.querySelector(".share-info");
profileContainer = document.querySelector(".profile-container");
click = false;

button.addEventListener("click", function () {
  if (window.matchMedia("(max-width:769px)").matches) {
    if (click == false) {
      click = true;
      button.classList.add("share-button-active");
      icons.classList.add("displayFlex");
      profile.classList.add("displayNone");
      profileContainer.classList.add("profile-container-active");
    } else if (click == true) {
      click = false;
      button.classList.remove("share-button-active");
      icons.classList.remove("displayFlex");
      profile.classList.remove("displayNone");
      profileContainer.classList.remove("profile-container-active");
    }
  } else {
    if (click == false) {
      click = true;
      button.classList.add("share-button-active");
      icons.classList.add("displayFlex");
    } else if (click == true) {
      click = false;
      button.classList.remove("share-button-active");
      icons.classList.remove("displayFlex");
    }
  }
  console.log(click);
});
