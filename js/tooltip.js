const sideToolTip = document.querySelector('.side-tooltip'),
    sideToolTipMenu = sideToolTip.lastElementChild.lastElementChild
document.querySelector('.redactor').addEventListener('click', hideOrShowMenu)


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

function hideOrShowMenu(e) {
    const { target } = e
    if (target.classList.contains('side-tooltip_child') || target.classList.contains('side-tooltip')) {
        showMenu()
    } else if (target.offsetParent.classList.contains('content')) {
        setSideTooltip(target)
    } else {
        hideSideTooltip()
    }
} 

function showMenu() {
    sideToolTipMenu.style.display = 'flex'
    sideToolTip.classList.add('clicked')
}

function hideMenu() {
    sideToolTipMenu.style.display = 'none'
    sideToolTip.classList.remove('clicked')
}