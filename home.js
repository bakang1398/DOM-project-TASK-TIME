// Navigation bar documentation down below

const navBar = document.querySelector('#navBar');

//The logo documentation

const logo = document.createElement('h3');
logo.classList.add('logo');
logo.textContent = 'TASK & TIME';

const menuBar = document.createElement('ul');
menuBar.classList.add('menu');

const homeTab = document.createElement('li')
const home = document.createElement('a');
home.setAttribute('href', 'home.html');

const toDo = document.createElement('li');
const list = document.createElement('a');
list.setAttribute('href', 'index.html');

const calender = document.createElement('li');
const cal = document.createElement('a');
cal.setAttribute('href', '#');

//The texts content of the menu bar

home.textContent = 'HOME';
list.textContent = 'TO DO';
cal.textContent = 'CALENDER';

//Appending of anchor elements to the list element

homeTab.appendChild(home);
toDo.appendChild(list);
calender.appendChild(cal);

// Appending of the list items to the unordered list elemen tag

menuBar.appendChild(logo);
menuBar.appendChild(homeTab);
menuBar.appendChild(toDo);
menuBar.appendChild(calender);

// Appending the unordered list to the Navigation bar

navBar.appendChild(menuBar);

// Creating a banner image

let bannerImg = document.createElement('img');
bannerImg.classList.add('banner');
bannerImg.src = 'planning.jpg';

document.body.appendChild(bannerImg);

// The description on the banner

let div = document.createElement('div');
div.classList.add('header');
const header = document.createElement('h1');
header.textContent = 'TASK & TIME. A DAY TO DAY TO DO PLANNING WEBSITE';

div.appendChild(header);
document.body.appendChild(div);

//The advantages of a to do list heading below

const advantages = document.createElement('h2');
advantages.classList.add('adv');
advantages.textContent = 'ADVANTAGES OF A TO DO LIST:';

document.body.appendChild(advantages);

//Creating and appending the contents of the advantages

let container = document.createElement('div');
container.classList.add('container');

//Advantages 1

let content1 = document.createElement('div');
content1.classList.add('content');

let heading1 = document.createElement('h3');
heading1.classList.add('heading');
heading1.textContent = 'A to-do list doesn’t forget!';

let text1 = document.createElement('p');
text1.classList.add('texts');
text1.textContent = 'Your brain is not the most efficient memory tool and will only trust systems that it knows works. Good memory recall is as simple as finding those things that will jog your brain at the time it needs to remember. Having a written list helps us remember when things have do be done so we do not miss anything.';

content1.appendChild(heading1);
content1.appendChild(text1);
container.appendChild(content1);

//Advantage 2

let content2 = document.createElement('div');
content2.classList.add('content');

let heading2 = document.createElement('h3');
heading2.classList.add('heading');
heading2.textContent = 'A to-do list helps you set priorities!';

let text2 = document.createElement('p');
text2.classList.add('texts');
text2.textContent = 'Making a to-do list is an important first step but prioritizing that list ensures that you focus on the most important items rather than giving in to the temptation of working on less important items because they may stand out more or because they are easier to do.';

content2.appendChild(heading2);
content2.appendChild(text2);
container.appendChild(content2);

//Advantage 3

let content3 = document.createElement('div');
content3.classList.add('content');

let heading3 = document.createElement('h3');
heading3.classList.add('heading');
heading3.textContent = 'A to-do list lets you coordinate similar tasks!';

let text3 = document.createElement('p');
text3.classList.add('texts');
text3.textContent = 'A to-do list helps us to avoid repetition of labour. For example, if we have to deliver a document at an office and collect a document from another office which is on the same block, both these tasks can be done together.';

content3.appendChild(heading3);
content3.appendChild(text3);
container.appendChild(content3);

//Advantages 4

let content4 = document.createElement('div');
content4.classList.add('content');

let heading4 = document.createElement('h3');
heading4.classList.add('heading');
heading4.textContent = 'A to-do list tracks your progress!';

let text4 = document.createElement('p');
text4.classList.add('texts');
text4.textContent = 'Using a to-do list enables you to mark off the tasks you have completed. At the end of the day, when you look at the list, it will give you a sense of accomplishment and satisfaction. It might also have the effect of waking you up if nothing has been marked completed.';

content4.appendChild(heading4);
content4.appendChild(text4);
container.appendChild(content4);

//Advantage 5

let content5 = document.createElement('div');
content5.classList.add('content');

let heading5 = document.createElement('h3');
heading5.classList.add('heading');
heading5.textContent = 'A to-do list makes it easy to carry-over tasks!';

let text5 = document.createElement('p');
text5.classList.add('texts');
text5.textContent = 'If anything remains incomplete at the end of the day, it can be carried over to tomorrow’s list. This is an easy way of preparing a to-do list for the next day; by examining the to-do list of today and carrying forward any task that is incomplete.';

content5.appendChild(heading5);
content5.appendChild(text5);
container.appendChild(content5);

document.body.appendChild(container);



