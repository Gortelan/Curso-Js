const elements = [
    { tag: 'p', text: 'Qualquer texto' },
    { tag: 'div', text: 'Frase1' },
    { tag: 'section', text: 'Frase2' },
    { tag: 'footer', text: 'Frase3' }
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elements.length; i++) {
    let { tag, text } = elements[i];
    let tagCreated = document.createElement(tag);
    tagCreated.innerText = text;
    div.appendChild(tagCreated);
}

container.appendChild(div);