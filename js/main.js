// Scroll events for fixed header & appearence of go-to-top button

const header = document.querySelector('header'),
logoImg = document.querySelector('.logo-box img'),
toTop = document.querySelector('.to-top')
let topPlace = document.querySelector('.about').getBoundingClientRect().top

function scrollStyle(bg, width, trans) {
    header.style.backgroundColor = bg
    logoImg.style.width = width
    toTop.style.transform = `translateX(${trans}px)`
}

window.addEventListener('scroll', () => {
    let top = window.scrollY
    if (top > 0) {
        if (top >= topPlace / 2) {
            scrollStyle('#333', '72px', 0)
            return 1
        }
        scrollStyle('#333', '72px', 100)
    } else {
        scrollStyle('rgba(239, 238, 238, .3)', '120px', 100)
    }
})

// Modal window for searching

const searchBtn = document.querySelector('.fa-search'),
lightbox = document.querySelector('.lightbox')

function openModal(modal, className, target) {
    modal.classList.add(className)
    modal.addEventListener('click', e => {
        if (e.target.tagName != target) {
            modal.classList.remove(className)
        }
    })
}

function reset(prev, current) {
    prev.style.display = 'none'
    current.style.display = 'flex'
}

searchBtn.addEventListener('click', () => {
    lightbox.classList.add('blue-bg')
    reset(lightbox.children[1], lightbox.children[2])
    openModal(lightbox, 'open', 'INPUT')
})

// Headears trigger-nav for small screen

const triggerBtn = document.querySelector('.trigger'),
menu = document.querySelector('.menu')
let clickIndicator = false

function menuShow(change) {
    clickIndicator = change
    if (clickIndicator) {
        triggerBtn.style.color = '#32c4d1'
        menu.style.transform = 'translateX(0)'
    } else {
        triggerBtn.style.color = '#fff'
        menu.style.transform = 'translateX(250px)'
    }
}

triggerBtn.addEventListener('click', () => {
    menuShow(!clickIndicator)
})

document.addEventListener('click', (e) => {
    if (e.target != triggerBtn && e.target.className != 'header-text anchor') {
        menuShow(false)
    } else {
        menuShow(clickIndicator)
    }
})

// Slider functioning

const arrows = document.querySelectorAll('.arrow-box img'),
initSrc = arrows[0].src,
hugeSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAwCAYAAAD6g+EuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDQjc0RUIyMTEwRDUxMUU1OTUyRTkyNEVBRUY5MDQ5NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDQjc0RUIyMjEwRDUxMUU1OTUyRTkyNEVBRUY5MDQ5NyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkNCNzRFQjFGMTBENTExRTU5NTJFOTI0RUFFRjkwNDk3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNCNzRFQjIwMTBENTExRTU5NTJFOTI0RUFFRjkwNDk3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+7bSkcgAAAl5JREFUeNqsmE1IVGEUhu8dh1lIUIvchSt3oYuCWog/TBYoKCEhSKtKQg2FWYmBiQWzFRfqRsQWKQRGpqSUipYuRF00uGwTuBtdJNVCkPE5cAYGG+f+nQMPH9yR99z5vnPf947ura0fTpTar63579rt7UySpSfuGBfCd1neQ0fcWPgmy0d4zjdajxkKV7IswxDCH+RazEi4gmUNJhCeyl93ox4odRU2YAXhwcIPot55OSzALry8+GEUcRmGOTiSseOuc8X+IEy5MANXoBnhs8u6h6kxqIIkwqelvlrQegWNcA/+ee1bkOqFJ1AHWT+H4rcewzDUwqHfE/dTrTAKTfAzyDh5lWzBNLRDJsgees15NczDM/ge9ORLicuorUIKPoWZ18vEb8AXeA3vwj7CxcSvw2d4C+NRjCdWxIiWYBNGotploXgCFnXU+i18Pi9eBrPwB55CzkI8rg43CZImzXBqFX0inoY70OBlRGG2xbXahmLiknt7Glfl1uJy191wrLEVtxSXkpjq1Nia0a1yLOdcpqRNPWXMWlzqr3p3o8ZZ5FG8WBJfLbClrw0TluKOxpikzjb8DuuMpSZDPOYBfIUT9R2zsJCSF8lHGnN11uJS3zTm5jX2TMUdjbmUxl6VZfrnSw71msZfvZ93l6CP+nhBDCZ1VCNvS2GN6DkseRld2PfzPh3VRX6yJKzFcxqHEouzNCizFM8bXafG4yQNXEtxR2OxTWMybS0uP8/Fe+7Lk8zdD5iKa4OsGt0LGnSZimuDX2rVb2jQbiquDQ5YHsKU/OfCVFwb7KiT9p4LMAApRI7zhUp04wAAAABJRU5ErkJggg==',
sTitle = document.querySelector('.title-box h2'),
sDescription = document.querySelector('.slider-description'),
slider = document.querySelector('.slider-box'),
sliderHtml = {
    0: new FillSliderHtml(sTitle.textContent, sDescription.textContent, getComputedStyle(slider).backgroundImage),
    1: new FillSliderHtml('himalayas welcome you', 'Phasellus maximus laoreet massa, eu aliquet mauris imperdiet a. Donec euismod augue sit amet vestibulum tristique.', "url('img/slide2.jpg')")
}
let currentSlide = 0

function FillSliderHtml(titleText, descText, bgSrc) {
    this.title = titleText
    this.desc = descText
    this.bg = bgSrc
}

arrows.forEach(elem => {
    elem.addEventListener('mouseover', () => {
        elem.setAttribute('src', hugeSrc)
    })
    elem.addEventListener('mouseout', () => {
        elem.setAttribute('src', initSrc)
    })
})

function changeSlide(obj) {
    slider.style.animation = 'blur 1s'
    setTimeout(() => {
        sTitle.textContent = obj.title
        sDescription.textContent = obj.desc
        slider.style.backgroundImage = obj.bg
    }, 500)
}

function checking() {
    if (currentSlide === 0) {
        ++currentSlide
    } else {
        --currentSlide
    }
}

arrows[0].addEventListener('click', () => {
    checking()
    changeSlide(sliderHtml[currentSlide])
})
arrows[1].addEventListener('click', () => {
    checking()
    changeSlide(sliderHtml[currentSlide])
})

slider.addEventListener('animationend', () => {
    slider.style.animation = 'none'
})

// Portfolio functioning

const portfolioItems = document.querySelectorAll('.p-list li'),
portfolioImages = document.querySelectorAll('.p-list li img'),
hoverBlocks = document.querySelectorAll('.hover-box'),
zoomCalls = document.querySelectorAll('button.hover-btn')

function onMouseAction(scaleValue, translateValues, index) {
    portfolioImages[index].style.transform = `scale(${scaleValue})`
    
    for (let i = 0; i < 2; ++i) {
        hoverBlocks[index].children[i].style.transform = `translateY(${translateValues[i]}px)`
    }
}

portfolioItems.forEach((elem, index) => {
    elem.addEventListener('mouseover', () => {
        let values = [0, 0]
        onMouseAction(1.2, values, index)
    })
    elem.addEventListener('mouseout', () => {
        let values = [-150, 150]
        onMouseAction(1, values, index)
    })
})

function fillLightbox(index) {
    lightbox.classList.remove('blue-bg')
    reset(lightbox.children[2], lightbox.children[1]) // reset function, see on 40 string
    openModal(lightbox, 'open', 'IMG') // openModal function, see on 31 string
    lightbox.children[1].setAttribute('src', portfolioImages[index].src)
}

zoomCalls.forEach((elem, index) => {
    elem.addEventListener('click', () => {
        fillLightbox(index)
    })
})

// Team section mouse events

const teamMembers = document.querySelectorAll('.team-list li'),
teamContents = document.querySelectorAll('.team-main')

teamMembers.forEach((elem, index) => {
    elem.addEventListener('mouseover', () => {
        teamContents[index].style.transform = 'translateY(-150px)'
    })
    elem.addEventListener('mouseout', () => {
        teamContents[index].style.transform = 'translateY(0)'
    })
})

// Smooth scroll to anchors

let anchors = document.querySelectorAll('.anchor')

anchors.forEach(elem => {
    elem.addEventListener('click', e => {
        e.preventDefault()
        document.querySelector(elem.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        })
    })
})