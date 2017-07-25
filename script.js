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

const headerBar = document.getElementById('header-bar');

headerBar.addEventListener('click', function() {
  if(window.innerWidth < 840) {
    const navTab = document.getElementById('nav-tab');

    navTab.style.display = navTab.style.display === 'none' ? 'flex' : 'none';
  }
})

window.onresize = () => {
  const navTab = document.getElementById('nav-tab');
  if(window.innerWidth > 840) {
    navTab.style.display = 'flex';
  } else {
    navTab.style.display = 'none';
  }
}
