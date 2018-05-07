const sideToolTip = document.querySelector('.side-tooltip')

const setSideTooltip = element => {
    console.log(element, element.title, element.title === 'Title')
    if (element.title === 'Title') {
        console.log(element)
        hideSideTooltip()
        return
    }
    const title = document.querySelector('.title')
    const { offsetTop } = element
    sideToolTip.style.top = (offsetTop + title.offsetHeight + 10) + 'px'
    sideToolTip.style.display = 'flex'
}

const hideSideTooltip = () => {
    sideToolTip.style.display = 'none'
}

const selectHandler = e => {
    console.log(e)
}