"use strict";
//const message =  "Hello World"
//const targets =document.getElementsByTagName('.target');
//target.textContent = message;
//console.log(targets);
//let message = "Are you sure you want to stay";

//do
//{
  //message = `${message}?`;
//}
//while (confirm(message))

//function appendParagraph(text)
//{
  //const p = document.createElement('p');
  //p.textContent = text;
  //document.querySelector('main').appendChild(p);
//}
//['these', 'are', 'my', 'paragraphs'].forEach(appendParagraph);

const toggleHighlighted = (ev) =>
{
  console.log(ev);
  ev.target.classList.toggle("highlighted");
}

const elements = document.querySelectorAll('.clickable');

for (const element of elements) {
  element.addEventListener('click', toggleHighlighted);
}
