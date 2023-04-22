const mobile = document.querySelector('#menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cancel = document.querySelector('#cancel');

function display() {
  mobileMenu.classList.remove('hidden');
}

mobile.addEventListener('click', display);

function hide() {
  mobileMenu.classList.add('hidden');
}

cancel.addEventListener('click', hide);

const projects = {
  multiPost: {
    title: 'Multi-Post Stories',
    technologies: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    image: './images/Snapshoot Portfolio.jpg',
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    link: 'link_to_live_version.com',
  },

  artPrinting: {
    title: 'Professional Art Printing Data',
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    image: './images/Snapshoot Portfolio.jpg',
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    link: 'link_to_live_version.com',
  },

  dataDashboard: {
    title: 'Data Dashboard Healthcare',
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    image: './images/Snapshoot Portfolio.jpg',
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    link: 'link_to_live_version.com',
  },

  websitePortfolio: {
    title: 'Website Portfolio',
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    image: './images/Snapshoot Portfolio.jpg',
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    link: 'link_to_live_version.com',
  },
};

function detailsPopup(projectId) {
  const container = document.querySelector('.project_list');
  const details = document.createElement('div');
  details.id = 'pop-up-window';
  let listItems = `<li><p class='new-section-technology'>${projects[projectId].technologies[0]}</p></li><li><p class='new-section-technology'>${projects[projectId].technologies[1]}</p></li><li><p class='new-section-technology'>${projects[projectId].technologies[2]}</p></li>`;
  if (projects[projectId].technologies.length > 3) {
    listItems += `<li><p class='new-section-technology'>${projects[projectId].technologies[3]}</p></li>`;
  }
  details.innerHTML = `<div class='pop-up-container'>
                          <h3 class='hdr' style='margin: 0;'>${projects[projectId].title}
                            <a id='closePopUp' class='close-pop-up' onclick='closeDetailsPopup()'>
                              <img src='./images/Icon - Cancel.svg' alt='Close menu'>
                            </a>
                          </h3>
                          <ul class='lis'>${listItems}</ul>
                          <img src='${projects[projectId].image}' alt='${projects[projectId].title}' class='pop-up-image'/>
                          <div class='text-and-buttons'><p class='para'>${projects[projectId].paragraph}</p>
                          <div id='detail-buttons'>
                          <a class="button detl-butn" href='#'>See Live<img src='./images/Icon - Export.svg' alt='See live'></a>
                          <a class="button detl-butn" href='#'>See Source<img src='./images/see-project.svg' alt='See source'></a>
                          </div>
                          </div>
                          </div>`;
  container.appendChild(details);
  details.style.display = 'flex';
}
function closeDetailsPopup() {
  const details = document.getElementById('pop-up-window');
  details.parentNode.removeChild(details);
}

const closePopUp = document.getElementById('closePopUp');
closePopUp.onclick = closeDetailsPopup();

const openPopUp = document.getElementById('popButton');
openPopUp.onclick = showNewSection();

const form = document.querySelector('form');

function validateForm(event) {
  const email = document.querySelector('#email');
  const errorMessage = document.querySelector('#er-msg');
  if (email.value !== email.value.toLowerCase()) {
    event.preventDefault();
    errorMessage.innerHTML = 'Please use only lowercase';
  }
}
form.addEventListener('submit', validateForm);
