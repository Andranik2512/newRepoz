// const cv = document.querySelector('#dop');
// cv.innerHTML = ('sdfd')
// cv.style.color = 'green'

// const rr = document.querySelector('#dop2')
// rr.innerHTML = (`<ul>
// <li class="er"></li>
// <li class="er"></li>
// <li class="er"></li>
// </ul>`)

// const cvv = document.querySelectorAll('.er');
// for (let i = 0; i < cvv.length; i++) {
//   cvv[i].innerHTML = ('sdfdsfdsfd')
//   cvv[i].style.fontStyle = 'italic'
// }

//создание элементов через js

const newSpan = document.createElement('span');
document.body.appendChild(newSpan)
newSpan.innerHTML = 'Привет!';
newSpan.classList.add('value')
// newSpan.style.fontStyle = 'italic'


for (let i = 0; i < 3; i++) {
  const newDiv = document.createElement('div')
newDiv.id = 'testqq';
newDiv.textContent = 'asd'
document.body.appendChild(newDiv);
document.body.appendChild(newDiv);
document.body.appendChild(newDiv);
}
