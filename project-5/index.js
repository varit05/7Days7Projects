const tabs = document.getElementsByClassName('tab-header');
const tabContents = document.getElementsByClassName('tab-content');

// by default tab open
tabs[0].classList.add('active');
tabContents[0].classList.add('active');

//On click of tabs

const onTabClick = e => {
  for (let tabContent of tabContents) {
    if (tabContent.id === e.target.id) {
      tabContent.classList.add('active');
      tabs[tabContent.id].classList.add('active');
    } else {
      tabContent.classList.remove('active');
      tabs[tabContent.id].classList.remove('active');
    }
  }
};

// Attach event listener to the tabs
for (let tab of tabs) {
  tab.addEventListener('click', onTabClick);
}
