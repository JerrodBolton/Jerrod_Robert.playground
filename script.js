function getUserName(){let userName = prompt('Hi! Welcome to the Safe Bank, what is your name')}

let enterBtn = document.getElementById('enterBtn');
enterBtn.addEventListener('click',getUserName);

let welcome = document.getElementById('welcome');
welcome.innerText`Welcome to Safe Bank ${userName}`;

