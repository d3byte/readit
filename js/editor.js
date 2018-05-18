const newArticleContainer = document.querySelector('.new-article .content')
const childNodes = newArticleContainer.childNodes
newArticleContainer.childNodes = newArticleContainer.removeChild(childNodes[0])
newArticleContainer.childNodes = newArticleContainer.removeChild(childNodes[childNodes.length - 1])

// tooltip and all related methods are imported to global namespace from ./tooltip.js

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

const inputHandler = e => {
    const selection = window.getSelection()
    checkForPlaceholders()
    if (selection.anchorNode.innerText !== '\n') {
        hideSideTooltip()
    } else {
        setSideTooltip(selection.anchorNode)
    }
}

const keyHandler = e => {
    if (e.key === 'Enter') {
        e.preventDefault()
        const paragraph = document.createElement('p')
        paragraph.innerHTML = '<br/>'
        newArticleContainer.appendChild(paragraph)
        focusNextParagraph(newArticleContainer.lastElementChild)
        setSideTooltip(newArticleContainer.lastElementChild)
    } else if (e.key === 'Backspace') {
        const { target } = e
        if(target.childNodes.length === 1) {
            target.childNodes[0].innerText === '\n' && e.preventDefault()
            return
        }
        setSideTooltip(newArticleContainer.lastElementChild.previousSibling)
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        const { target, key } = e
        let selection = window.getSelection()
        if (selection.anchorNode.tagName === 'P' || selection.anchorNode.tagName === 'H3') {
            key === 'ArrowUp' ? 
                (selection.anchorNode.previousSibling && setSideTooltip(selection.anchorNode.previousSibling)) :
                (selection.anchorNode.nextSibling && setSideTooltip(selection.anchorNode.nextSibling))
        } else {
            hideSideTooltip()
        }
    }
}

newArticleContainer.addEventListener('input', inputHandler)
newArticleContainer.addEventListener('keydown', keyHandler)
newArticleContainer.addEventListener('selectstart', selectHandler)
