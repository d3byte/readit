const newArticleContainer = document.querySelector('.new-article .content')
const childNodes = newArticleContainer.childNodes
newArticleContainer.childNodes = newArticleContainer.removeChild(childNodes[0])
newArticleContainer.childNodes = newArticleContainer.removeChild(childNodes[childNodes.length - 1])

const focusNextParagraph = element => {
    let selection = window.getSelection()
    let range = document.createRange()
    range.setStart(element, 0)
    range.setEnd(element, 0)
    selection.removeAllRanges()
    selection.addRange(range)
}

const checkForPlaceholders = () => {
    const title = document.querySelector('h3.title:first-child')
    const placeholders = document.getElementsByClassName('content-placeholders')[0]
    title.innerText !== '\n' ?
        placeholders.classList.add('hide') :
        placeholders.classList.toggle('hide') && placeholders.classList.remove('hide')
}

const keyHandler = e => {
    if (e.key === 'Enter') {
        e.preventDefault()
        const paragraph = document.createElement('p')
        paragraph.innerHTML = '<br/>'
        newArticleContainer.appendChild(paragraph)
        focusNextParagraph(newArticleContainer.lastChild)
    } else if (e.key === 'Backspace') {
        const { target } = e
        if(target.childNodes.length === 1) {
            target.childNodes[0].innerText === '\n' && e.preventDefault()
        }
    }
}

newArticleContainer.addEventListener('input', checkForPlaceholders)
newArticleContainer.addEventListener('keydown', keyHandler)
