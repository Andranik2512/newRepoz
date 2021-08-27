const cv = document.querySelector('#dop');
cv.innerHTML = ('sdfd')
cv.style.color = 'green'

const rr = document.querySelector('#dop2')
rr.innerHTML = (`<ul>
<li class="er"></li>
<li class="er"></li>
<li class="er"></li>
</ul>`)

const cvv = document.querySelectorAll('.er');
for (let i = 0; i < cvv.length; i++) {
  cvv[i].innerHTML = ('sdfdsfdsfd')
  cvv[i].style.fontStyle = 'italic'
}

