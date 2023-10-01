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
    title: 'Ministry of Communications and Digital Economy',
    technologies: ['CSS', 'HTML', 'JavaScript'],
    image: './images/capstone-1-scrn-sht.jpg',
    paragraph:
      'The Ministry of Communications and Digital Economy is a Ministry created in 2011 as Ministry of Communication Technology. It was created to foster a knowledge based economy and information society in Nigeria. The Ministry was created to facilitate ICT as a key tool in the transformation agenda for Nigeria in the areas of job creation, economic growth and transparency of governance, and this is a website that I\'ve established with two pages i.e Home and About page that showcase my proficiency in HTML and CSS.',
    link: 'https://sahlminkok.github.io/Capstone-Project-1/',
    source: 'https://github.com/sahlminkok/Capstone-Project-1',
  },

  artPrinting: {
    title: 'Smart Budget',
    technologies: ['HTML', 'Sass', 'Ruby on Rails'],
    image: './images/smartbudget.jpg',
    paragraph:
      "Smart Budget is a cutting-edge mobile web application designed to revolutionize your budget management. Take control of your finances with ease, track expenses, categorize transactions, and gain valuable insights into your spending habits. Empower yourself to make informed financial decisions and embark on a journey towards financial success. Get smart with SmartBudget today! 💡💸",
    link: 'https://smartbudget-mhwp.onrender.com/',
    source: 'https://github.com/sahlminkok/smart-budget'
  },

  dataDashboard: {
    title: 'Data Dashboard',
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
                          <a class="button detl-butn" target='_blank' href='${projects[projectId].link}'>See Live<img src='./images/Icon - Export.svg' alt='See live'></a>
                          <a class="button detl-butn" target='_blank' href='${projects[projectId].source}'>See Source<img src='./images/see-project.svg' alt='See source'></a>
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
openPopUp.onclick = detailsPopup();

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

// local storage

const fullNameInput = form.user_name;
const emailInput = form.user_email;
const messageInput = form.user_message;

const formObj = {
  fullName: '',
  email: '',
  message: '',
};

if (localStorage.formStorage) {
  formObj.fullName = JSON.parse(localStorage.formStorage).fullName;
  formObj.email = JSON.parse(localStorage.formStorage).email;
  formObj.message = JSON.parse(localStorage.formStorage).message;
  fullNameInput.value = formObj.fullName;
  emailInput.value = formObj.email;
  messageInput.value = formObj.message;
}

fullNameInput.addEventListener('input', () => {
  formObj.fullName = fullNameInput.value;
  localStorage.setItem('formStorage', JSON.stringify(formObj));
});

emailInput.addEventListener('input', () => {
  formObj.email = emailInput.value;
  localStorage.setItem('formStorage', JSON.stringify(formObj));
});

messageInput.addEventListener('input', () => {
  formObj.message = messageInput.value;
  localStorage.setItem('formStorage', JSON.stringify(formObj));
});
