const panels = document.querySelectorAll('.panel');

//Toggle open class to panel
function toggleOpen() {
  this.classList.toggle('open');
}

//When transitionend add open-active class to panel
function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach((panel) => panel.addEventListener('click', toggleOpen));
panels.forEach((panel) =>
  panel.addEventListener('transitionend', toggleActive)
);

console.log(panels);
