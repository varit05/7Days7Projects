const toolTips = document.querySelectorAll('[data-tooltip="tooltip"]');

// ToolTip Event
const onMouseHoverToolTip = event => {
  event.target.children[0].classList.add('active');
};
const onMouseOutToolTip = event => {
  event.target.children[0].classList.remove('active');
};

// Add Event Listeners to the tooltip
toolTips.forEach(toolTip => {
  toolTip.addEventListener('mouseover', onMouseHoverToolTip);
  toolTip.addEventListener('mouseout', onMouseOutToolTip);
});
