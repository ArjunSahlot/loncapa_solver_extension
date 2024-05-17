// check if the url matches http://loncapa.*.org/res/fsu/* (problems)
if (!window.location.href.match(/http:\/\/loncapa\..*\.org\/res\/fsu\//)) {
  process.exit(0);
}


import extensionJsLogo from './images/extensionjs.svg'
import('./content.css')

let content_box = document.createElement('div');
content_box.classList.add('content_script-box');
document.body.appendChild(content_box);

let content_logo = document.createElement('img');
content_logo.classList.add('content_script-logo');
content_logo.src = extensionJsLogo;
content_box.appendChild(content_logo);

let content_title = document.createElement('h1');
content_title.classList.add('content_script-title');
content_title.innerText = 'Change the background-color ⬇';
content_box.appendChild(content_title);

let content_colorPicker = document.createElement('input');
content_colorPicker.classList.add('content_script-colorPicker');
content_colorPicker.id = 'colorPicker';
content_colorPicker.type = 'color';
content_box.appendChild(content_colorPicker);

let content_description = document.createElement('p');
content_description.classList.add('content_script-description');
content_description.innerHTML = 'Learn more about creating browser extensions at <a href="https://extension.js.org" target="_blank">https://extension.js.org</a>';
content_box.appendChild(content_description);


document.getElementById('colorPicker').addEventListener('input', (event) => {
  chrome.runtime
    .sendMessage({
      action: 'changeBackgroundColor',
      color: event.target.value
    })
    .catch(console.error)
})
