const tabElements = document.querySelectorAll('button[role="tab"]');
const panelElements = document.querySelectorAll('[role="tabpanel"]');
let activeIndex = 0;

console.log(tabElements);

// Listen to clicks on tabs
tabElements.forEach(function (tab, index) {
  tab.addEventListener("click", function (e) {
    console.log(index);
    setActiveTab(index);
  });
});

function setActiveTab(index) {
  // Make currently active tab inactive
  tabElements[activeIndex].setAttribute("aria-selected", "false");

  // Set the new tab as active
  tabElements[index].setAttribute("aria-selected", "true");
  console.log(tabElements[index]);

  setActivePanel(index);
  activeIndex = index;
};

function setActivePanel(index) {
  // Hide currently active panel  
  panelElements[activeIndex].style.display = 'none';
  

  // Show the new active panel  
  panelElements[index].style.display = 'flex';
  //console.log(panelElements[index]);
}