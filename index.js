//menu bar
let body = document.querySelector("body")
let homeBtn = document.createElement('li');
homeBtn.style.listStyle = 'none';
homeBtn.style.marginLeft = '15px'

const todoLink =  document.createElement('a')
todoLink.style.textDecoration = 'none'
todoLink.setAttribute('href','home.html');
todoLink.style.color = 'black';

homeBtn.innerText = 'back';

homeBtn.style.backgroundColor = 'rgb(31, 210, 255';
homeBtn.style.width = '4%';
homeBtn.style.padding = '5px';
homeBtn.style.fontSize = '20px';
homeBtn.style.margin = '4px 2px';
homeBtn.style.borderRadius = '15px';
homeBtn.style.marginLeft = '10px';
homeBtn.style.border = '2px solid black'

todoLink.append(homeBtn)

body.append(todoLink);


//first h and p
let h1 = document.createElement('h1');
let p1 = document.createElement('p');
let divh = document.createElement('div')

divh.setAttribute('id','heading');

h1.innerText = 'To Do List';
p1.innerText = 'Write whats on your mind down';

divh.append(h1);
divh.append(p1);

//creating form

 let form = document.createElement('form');
 form.setAttribute('id','inputform');

let input = document.createElement('input');

input.setAttribute('type','text');
input.setAttribute('class','inputText');
input.setAttribute('placeholder','Title');
input.setAttribute('id','new-title-input');
input.setAttribute('autocomplete','off');
input.setAttribute('required','');

let input2 = document.createElement('input');
input2.setAttribute('type','text');
input2.setAttribute('class','inputText');
input2.setAttribute('placeholder','Note content');
input2.setAttribute('id','new-list-input');
input2.setAttribute('autocomplete','off');
input2.setAttribute('required','');


let divform = document.getElementById('form');

form.append(input);
form.append(input2);

//button

let button = document.createElement('button');
button.setAttribute('type','button');
button.setAttribute('class','btn');
button.innerText = 'Add to my list';

form.append(button);


// Append to body


body.append(divh)
body.append(form)


//last part 

let h3 = document.createElement('h3');
h3.setAttribute('id','no-notes')
h3.innerText = 'No List Found?, Create One!';

body.append(h3);

//styling 

body.style.backgroundColor = 'rgba(233, 159, 98, 0.938)';
body.style.color = 'white';
p1.style.color = 'black';
p1.style.fontSize ='25px';

input.style.padding = input2.style.padding = button.style.padding = '10px';

input.style.margin = input2.style.margin = '15px';
input.style.borderRadius = input2.style.borderRadius = '5px';
input.style.width = input2.style.width = '30%';
input.style.border = input2.style.border = '2px solid hsl(194, 100%, 56%';
input.style.outline = input2.style.outline = button.style.outline = 'none';

button.style.borderRadius = '20px';
button.style.border = '2px solid black';
button.style.backgroundColor = 'rgb(31, 210, 255)';
button.style.color = 'black';
button.style.cursor = 'pointer';

body.style.fontSize ='100%';
body.style.margin = '3em';

divh.style.marginLeft = '15px';

h3.style.textAlign = 'center';
h3.style.padding = '100px 0px';

let index = 0
// function to add Todo

let ul = document.createElement('ul');
    ul.setAttribute('id','notes')

    ul.style.overflow = 'hidden';
    ul.style.padding = '3em 1em';
    ul.style.listStyle =  'none';

const addList = ()=>{
// list 
const title = document.getElementById('new-title-input').value;
const note =  document.getElementById('new-list-input').value;

if(title === '' || note === '')
return;

if(index === 0)
h3.style.display = 'none';


let li = document.createElement('li');
let a = document.createElement('a');
a.setAttribute('href','#')

let hlist = document.createElement('h2');
hlist.innerText = title;

let btn = document.createElement('button');

btn.setAttribute('class','delete');

let plist = document.createElement('p');
plist.innerText = note;

a.append(hlist,btn,plist)

// list style

btn.style.float = 'right';
btn.style.position = 'absolute';
btn.style.top = '0';
btn.style.right = '0';
btn.style.width = '30px';
btn.style.height = '30px';
btn.style.backgroundColor = 'red';
btn.style.fontWeight = 'bold';
btn.style.cursor = 'pointer';
btn.style.border = '4px double white';
btn.innerText = 'X'
btn.addEventListener('click',(e)=>alert('Sorry. This feature is not done yet. Check back soon.'))

a.style.textDecoration= 'none'

li.style.margin = '1em';
li.style.float = 'left';
li.style.position = 'relative';
li.style.color = a.style.color = '#000';

a.style.background = `rgb(${Math.random()*256|0}, ${Math.random()*256|0}, ${Math.random()*256|0})`;
a.style.height = '10em';
a.style.width = '10em';
a.style.padding = '1em'
a.style.display = 'block';
a.style.boxShadow = '5px 5px 7px rgb(33 33 33 / 70%) ';
a.style.transform = index%2 === 0 ?'rotate(-6deg )' : 'rotate(6deg )';

ul.style.cursor = li.style.cursor = a.style.cursor = 'default';

li.append(a)
ul.append(li);
body.append(ul);

index++;

title.value = '';
note.value = '';

}

button.addEventListener('click', addList)