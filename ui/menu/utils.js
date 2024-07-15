function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

const MOCK_DATA = {
  root: {
    id: uuid(),
    type: 'folder',
    name: 'root',
    isOpen: true,
    children: [
      {
        id: uuid(),
        type: 'folder',
        name: 'Documents',
        isOpen: true,
        children: [
          {
            id: uuid(),
            type: 'file',
            name: 'Resume.docx',
            extension: '.docx',
            size: '15KB',
          },
          {
            id: uuid(),
            type: 'file',
            name: 'CoverLetter.docx',
            extension: '.docx',
            size: '10KB',
          },
        ],
      },
      {
        id: uuid(),
        type: 'folder',
        name: 'Pictures',
        isOpen: true,
        children: [
          {
            id: uuid(),
            type: 'file',
            name: 'Vacation.jpg',
            extension: '.jpg',
            size: '350KB',
          },
        ],
      },
      {
        id: uuid(),
        type: 'file',
        name: 'README.txt',
        extension: '.txt',
        size: '1KB',
      },
    ],
  },
}

const id = MOCK_DATA.root.children[0].id

const findNodeById = (node) => {
  if (node.id === id) {
    return node
  }
  if (node.type === 'folder') {
    for (let child of node.children) {
      let found = findNodeById(child)
      if (found) {
        return found
      }
    }
  }
  return null
}

console.log(id)
console.log(findNodeById(MOCK_DATA.root))
