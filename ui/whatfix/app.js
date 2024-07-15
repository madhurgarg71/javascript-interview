const whatfixBorder = document.createElement('div')
whatfixBorder.setAttribute('class', 'whatfix-border')
whatfixBorder.style.border = '2px solid red'
whatfixBorder.style.position = 'fixed'
whatfixBorder.style.zIndex = '10000'
document.body.appendChild(whatfixBorder)

const ele = document.querySelectorAll('.menu-item')[0]

function highlight(ele) {
  const pos = ele.getBoundingClientRect()
  console.log(pos.bottom)
  whatfixBorder.style.width = pos.width + 'px'
  whatfixBorder.style.height = pos.height + 'px'
  whatfixBorder.style.top = pos.top + 'px'
  whatfixBorder.style.bottom = pos.bottom + 'px'
  whatfixBorder.style.left = pos.left + 'px'
  whatfixBorder.style.right = pos.left + 'px'
}

document.body.addEventListener('mouseover', function (e) {
  // Check if the hovered element is the same as the one with the event listener
  console.log(e.target)
  if (e.target.className === 'whatfix-border') return

  highlight(e.target)
})
