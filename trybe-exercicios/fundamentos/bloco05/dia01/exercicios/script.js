// header
document.querySelector('#header-container').style.backgroundColor = 'rgba(0,176,105,255)';;

// body
document.querySelector('body').style.backgroundColor = 'rgba(243,243,243,255)';

let emergencyTask = document.querySelector('.emergency-tasks');
emergencyTask.style.backgroundColor = 'rgba(255,159,132,255)';

let h3emergencyTask = document.querySelectorAll('.emergency-tasks div h3');
for (let i = 0; i < h3emergencyTask.length; i++) {
  h3emergencyTask[i].style.backgroundColor = 'rgba(165,0,243,255)';
}

let noemergencyTask = document.querySelector('.no-emergency-tasks');
noemergencyTask.style.backgroundColor = 'rgba(249,219,94,255)';

let h3noemergencyTask = document.querySelectorAll('.no-emergency-tasks div h3');
for (let i = 0; i < h3noemergencyTask.length; i++) {
  h3noemergencyTask[i].style.backgroundColor = 'rgba(35,37,37,255)';
}

// footer
document.querySelector('#footer-container').style.backgroundColor = 'rgba(0,53,51,255)';