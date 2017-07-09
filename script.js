const tabs = document.querySelectorAll('.tab-name');

tabs.forEach((tab) => {
  tab.addEventListener('click', function() {
    const content = this.nextElementSibling;
    if (content.classList.contains('show-tab')) {
      content.classList.remove('show-tab');
      this.classList.remove('show-header');
    } else {
      clickedTab()
      content.classList.add('show-tab');
      this.classList.add('show-header');
    }
  })
})

const clickedTab = function(){
  const tabs = document.querySelectorAll('.tabs');
  tabs.forEach(tab => {
    if (tab.classList.contains('show-tab')) {
      tab.classList.remove('show-tab');
      tab.previousElementSibling.classList.remove('show-header');
    }
  })
}

window.onload = () => {
  document.getElementById('tab-1').classList.add('show-tab');
  document.querySelector('.tab-name').classList.add('show-header');
}
