const sideToolTip = document.querySelector('.side-tooltip'),
    sideToolTipMenu = sideToolTip.lastElementChild.lastElementChild
document.querySelector('.redactor').addEventListener('click', clickController)


const setSideTooltip = element => {
    if (element.title === 'Title' || element.innerText !== '\n') {
        hideSideTooltip()
        return
    }
    const title = document.querySelector('.title')
    const { offsetTop } = element
    sideToolTip.style.top = (offsetTop + title.offsetHeight + 10) + 'px'
    sideToolTip.style.display = 'flex'
    hideMenu()
}

const hideSideTooltip = () => {
    sideToolTip.style.display = 'none'
    hideMenu()
}

const selectHandler = e => {
    console.log(e)
    let selection = window.getSelection()
    console.log(selection)
}

function clickController(e) {
    const { target } = e
    if (isTextSelection()) {
        const selection = document.getSelection()
        // anchorOffset - start index, focusOffset - end index (not including)
        const selectedText = selection.anchorNode.data.slice(selection.anchorOffset, selection.focusOffset)
        console.log(selectedText)
    } 

    if (target.classList.contains('side-tooltip_child') || target.classList.contains('side-tooltip')) {
        showMenu()
    } else if (target.offsetParent.classList.contains('content')) {
        setSideTooltip(target)
    } else {
        hideSideTooltip()
    }
}

function isTextSelection() {
    const selection = window.getSelection()
    if (selection.toString())
        return true
    return false
}

function showMenu() {
    sideToolTipMenu.style.display = 'flex'
    sideToolTip.classList.add('clicked')
}

function hideMenu() {
    sideToolTipMenu.style.display = 'none'
    sideToolTip.classList.remove('clicked')
}