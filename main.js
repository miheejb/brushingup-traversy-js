const ul = document.querySelector('.items');

ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'brad';
ul.lastElementChild.innerHTML = '<h1>hello</h1>'

const btn = document.querySelector('.btn');
