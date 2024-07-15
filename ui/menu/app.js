function uuid() {
  return Math.random().toString(36).substring(7)
}

const data = [
  {
    id: uuid(),
    value: 'Mens',
    children: [
      {
        id: uuid(),
        value: 'Top Wear',
        children: [
          {
            id: uuid(),
            value: 'T-Shirts',
            children: [],
          },
          {
            id: uuid(),
            value: 'Shirts',
            children: [],
          },
          {
            id: uuid(),
            value: 'Jackets',
            children: [],
          },
        ],
      },
      {
        id: uuid(),
        value: 'Bottom Wear',
        children: [
          {
            id: uuid(),
            value: 'Jeans',
            children: [],
          },
          {
            id: uuid(),
            value: 'Trousers',
            children: [],
          },
          {
            id: uuid(),
            value: 'Shorts',
            children: [],
          },
        ],
      },
      {
        id: uuid(),
        value: 'Foot Wear',
        children: [
          {
            id: uuid(),
            value: 'Sports Shoes',
            children: [],
          },
          {
            id: uuid(),
            value: 'Casual Shoes',
            children: [],
          },
          {
            id: uuid(),
            value: 'Formal Shoes',
            children: [],
          },
        ],
      },
    ],
  },
]

/**
 * <ul>
 * <li>
 *      <ul>
 *          <li></li>
 *          <li></li>
 *          <li></li>
 *      </ul>
 * </li>
 * </ul>
 */

function render(data) {
  const ul = document.createElement('ul')
  data.forEach((item) => {
    const li = document.createElement('li')
    li.textContent = item.value
    if (item.children.length) {
      li.appendChild(render(item.children))
    }
    li.dataset.id = item.id
    ul.appendChild(li)
  })
  return ul
}

function toggleChildren(nodes) {
  ;[...nodes].forEach((node) => {
    if (node.style.display !== 'none') {
      node.style.display = 'none'
    } else {
      node.style.display = 'block'
    }
  })
}

const root = document.getElementById('app')
const node = render(data)
node.addEventListener('click', function (e) {
  const current = e.target
  toggleChildren(current.children)
})

root.appendChild(node)
