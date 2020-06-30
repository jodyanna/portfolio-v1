
/* ==========================================================================
   JavaScript for resume
   ========================================================================== */

function applyUnderlineNavLinks() {
  /*
  This function checks the current webpage and applies an underline style
  to the corresponding nav bar text.
  */
  let navLinks = document.getElementsByClassName("nav-link");
  let navLinksLength = navLinks.length;
  console.log(navLinks)
  console.log(document.URL)

  for (let i = 0; i < navLinksLength; i++) {
    if (document.URL.localeCompare(navLinks[i].href) === 0) {
      navLinks[i].style.textDecoration = "underline";
    }
  }

}

function toggleDropDownNavContents() {
  /*
  This function reveals or hides the contents of the drop down navigation menu
  for mobile users.
  */
  let dropDownNavContent = document.getElementsByClassName("dropdown-content")[0];

  if (dropDownNavContent.style.display === "none") {
    dropDownNavContent.style.display = "block";
  } else {
    dropDownNavContent.style.display = "none";
  }
}




// Event Listeners
// set up
window.addEventListener("load", applyUnderlineNavLinks, false);

// mobile
let dropDownNavButton = document.getElementsByClassName("dropdown-btn")[0];
dropDownNavButton.addEventListener("click", toggleDropDownNavContents, false);
