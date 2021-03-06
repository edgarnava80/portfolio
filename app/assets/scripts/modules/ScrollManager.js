import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

class ScrollManager {
    constructor() {
            // GLOBAL CONSTRUCTOR
            this.browserHeight = window.innerHeight
            this.browserWidth = window.innerWidth
            this.scrolledVertically = window.pageYOffset
            this.events()
                // PARAMETERS DEFINED FOR EACH PARTICULAR WEBSITE
            this.currentPage = 0
            this.pageHeader = document.querySelector('.page-header')
            this.menuElements = document.querySelectorAll('.primary-nav--item')
        }
        // GLOBAL METHODS
    events() {
        window.addEventListener("scroll", throttle(() => this.runOnScroll(), 10))
        window.addEventListener("resize", debounce(() => {
            this.browserHeight = window.innerHeight
            this.browserWidth = window.innerWidth
        }, 333))
    }

    getCurrentTop() {
        return (this.scrolledVertically / this.browserHeight).toFixed(2)
    }

    runOnScroll() {
        this.defineScrollDirection()
            //Methods to execute on scroll defined for each particular website
        this.headerHandler()
            //if (this.getCurrentTop() < 1.1) this.actionsHome()
            //if (this.getCurrentTop() > .5 && this.getCurrentTop() < 2.5) this.actionsAbout()
            //if (this.getCurrentTop() > 1.5 && this.getCurrentTop() < 3.5) this.actionsExperience()

    }

    defineScrollDirection() {
            if (window.pageYOffset > this.scrolledVertically) {
                this.scrollDirection = 'down'
            } else {
                this.scrollDirection = 'up'
            }
            this.scrolledVertically = window.pageYOffset
        }
        //METHODS DEFINED FOR EACH PARTICULAR WEBSITE
        // Method to trigger the actions for the header
    headerHandler() {
            let scrollingPage = Math.floor(this.getCurrentTop())
            console.log('scrollingPage: ' + scrollingPage)
            switch (scrollingPage) {
                case 0:
                    if (this.currentPage > 0) {
                        console.log('page 0: ')
                        this.currentPage = 0
                        this.pageHeader.classList.remove('is-shown')
                    }
                    break
                case 1:
                    if (this.currentPage != 1) {
                        console.log('page about: ')
                        const text = document.querySelector('.page-about')
                        this.currentPage = 1
                        this.pageHeader.classList.add('is-shown')
                        this.pageHeader.classList.toggle('odd-style')
                        this.menuElements.forEach(element => element.classList.remove('highlighted'))
                        text.classList.add('highlighted')

                    }
                    break
                case 2:
                    if (this.currentPage != 2) {
                        console.log('page about: ')
                        const text = document.querySelector('.page-about')
                        this.currentPage = 2
                        this.pageHeader.classList.add('is-shown')
                        this.pageHeader.classList.toggle('odd-style')
                        this.menuElements.forEach(element => element.classList.remove('highlighted'))
                        text.classList.add('highlighted')
                    }
                    break
                case 3:
                    if (this.currentPage != 3) {
                        console.log('page exp: ')
                        const text = document.querySelector('.page-experience')
                        this.currentPage = 3
                        this.pageHeader.classList.add('is-shown')
                        this.pageHeader.classList.toggle('odd-style')
                        this.menuElements.forEach(element => element.classList.remove('highlighted'))
                        text.classList.add('highlighted')
                    }
                    break
                case 4:
                    if (this.currentPage != 4) {
                        const text = document.querySelector('.page-education')
                        this.currentPage = 4
                        this.pageHeader.classList.add('is-shown')
                        this.pageHeader.classList.toggle('odd-style')
                        this.menuElements.forEach(element => element.classList.remove('highlighted'))
                        text.classList.add('highlighted')
                    }
                    break
                case 5:
                    if (this.currentPage != 5) {
                        const text = document.querySelector('.page-skills')
                        this.currentPage = 5
                        this.pageHeader.classList.add('is-shown')
                        this.pageHeader.classList.toggle('odd-style')
                        this.menuElements.forEach(element => element.classList.remove('highlighted'))
                        text.classList.add('highlighted')
                    }
                    break
                case 6:
                    if (this.currentPage != 6) {
                        const text = document.querySelector('.page-portfolio')
                        this.currentPage = 6
                        this.pageHeader.classList.add('is-shown')
                        this.pageHeader.classList.toggle('odd-style')
                        this.menuElements.forEach(element => element.classList.remove('highlighted'))
                        text.classList.add('highlighted')
                    }
                    break
                case 7:
                    if (this.currentPage != 7) {
                        const text = document.querySelector('.page-contact')
                        this.currentPage = 7
                        this.pageHeader.classList.add('is-shown')
                        this.pageHeader.classList.toggle('odd-style')
                        this.menuElements.forEach(element => element.classList.remove('highlighted'))
                        text.classList.add('highlighted')
                    }
                    break
                default:
                    break
            }
        }
        // Method to trigger the actions on page home
    actionsHome() {
            //console.log('actions home: ' + this.getCurrentTop())
            //this.getCurrentTop() < 1 ? this.mainTitle.classList.remove('is-shown') : this.mainTitle.classList.add('is-shown')
        }
        // Method to trigger the actions on page about
    actionsAbout() {
        const text = document.querySelector('.page-about')
        let opacity = (this.getCurrentTop() * 2 - 1.2)
            // Set tilte text to "about"
        if (this.scrollMath.floor(this.getCurrentTop()) == 1) {
            this.mainTitle.classList.remove('odd-style')

        }
        if (this.getCurrentTop() >= 1.5) {
            //text.style.opacity = 1;
        }
        if (this.getCurrentTop() <= 1) {
            //text.style.opacity = 0;
        }
        /*if(this.scrollDirection === 'down' && this.getCurrentTop() >= 1.1){
          tint.style.backgroundColor = 'rgba(0,0,0,1)';
        }
        if(this.scrollDirection === 'up' && this.getCurrentTop() <= 1.11){
          tint.style.backgroundColor = 'rgba(0,0,0,0.5)';
        }*/


        /*const mainTitleP1 = document.querySelector('.site-home__title')
        const mainSubtitleP1 = document.querySelector('.site-home__subtitle')
        mainTitleP1.style.opacity = (1 - this.scrolledVertically / 1000 * 1.5).toFixed(2)
        mainSubtitleP1.style.opacity = (1 - this.scrolledVertically / 1000 * 1.7).toFixed(2)
        mainSubtitleP1.style.transform = 'translate(0px,' + this.scrolledVertically / 2.5 + 'px)'
        mainTitleP1.style.transform = 'translate(0px,' + this.scrolledVertically / 1.8 + 'px)'*/
    }
    actionsExperience() {
        // Set tilte text to "experience" and add class 'odd-style'
        if (this.scrollDirection == 'down' && this.getCurrentTop() == 2.10 || this.scrollDirection == 'up' && this.getCurrentTop() == 2.80) {
            this.mainTitle.classList.add('odd-style')
            this.mainTitleText.textContent = 'experience'
        }
    }
    actionsEducation() {
        // Set tilte text to "education" and remove class 'odd-style'
        if (this.scrollDirection == 'down' && this.getCurrentTop() == 3.10 || this.scrollDirection == 'up' && this.getCurrentTop() == 3.80) {
            this.mainTitle.classList.remove('odd-style')
            this.mainTitleText.textContent = 'education'
        }
    }
    actionsSkills() {
        // Set tilte text to "skills" and add class 'odd-style'
        if (this.scrollDirection == 'down' && this.getCurrentTop() == 4.10 || this.scrollDirection == 'up' && this.getCurrentTop() == 4.80) {
            this.mainTitle.classList.add('odd-style')
            this.mainTitleText.textContent = 'skills'
        }
    }
    actionsProjects() {
        // Set tilte text to "projects" and remove class 'odd-style'
        if (this.scrollDirection == 'down' && this.getCurrentTop() == 5.10 || this.scrollDirection == 'up' && this.getCurrentTop() == 5.80) {
            this.mainTitle.classList.remove('odd-style')
            this.mainTitleText.textContent = 'projects'
        }
    }
    actionsContact() {
            // Set tilte text to "contact" and add class 'odd-style'
            if (this.scrollDirection == 'down' && this.getCurrentTop() == 6.10 || this.scrollDirection == 'up' && this.getCurrentTop() == 6.80) {
                this.mainTitle.classList.add('odd-style')
                this.mainTitleText.textContent = 'contact'
            }
        }
        // Method to trigger the actions on page 2
    actionsP2() {
            const mainTitleP2 = document.querySelector('.site-main__title-1')
            const mainImageP2 = document.querySelector('.site-main__scene-1')

            if (this.getCurrentTop() > .9 || this.getCurrentTop() < 1) {
                mainImageP2.classList.add('rightLeft')
                mainTitleP2.classList.add('leftRight')
            }
            if (this.getCurrentTop() > 2 || this.getCurrentTop() < .2) {
                mainImageP2.classList.remove('rightLeft')
                mainTitleP2.classList.remove('leftRight')
            }
        }
        // Method to trigger the actions on page 3
    actionsP3() {
        const mainTitleP3 = document.querySelector('.site-main__title-2')
        const mainImageP3 = document.querySelector('.site-main__scene-2')
        if (this.getCurrentTop() > 1.9 || this.getCurrentTop() < 2) {
            mainImageP3.classList.add('leftRight')
            mainTitleP3.classList.add('rightLeft')
        }
        if (this.getCurrentTop() > 3 || this.getCurrentTop() < 1.2) {
            mainImageP3.classList.remove('leftRight')
            mainTitleP3.classList.remove('rightLeft')
        }
    }
    actionsP4() {
            console.log('CurrentTop: ' + this.getCurrentTop())
            const mainTitleP4 = document.querySelector('.site-main__synopsis__title')
            const mainSubtitleP4 = document.querySelector('.site-main__synopsis__text')
            if (this.getCurrentTop() > 3) {
                mainTitleP4.classList.add('fadeIn')
                mainSubtitleP4.classList.add('fadeIn')
            }
            if (this.getCurrentTop() < 2) {
                mainTitleP4.classList.remove('fadeIn')
                mainSubtitleP4.classList.remove('fadeIn')
            }
        }
        // Method to trigger the actions on page 5
    actionsP5() {
        const mainTitleP2 = document.querySelector('.site-main__title-1')
        const mainImageP2 = document.querySelector('.site-main__scene-1')

        if (this.getCurrentTop() > .9 || this.getCurrentTop() < 1) {
            mainImageP2.classList.add('rightLeft')
            mainTitleP2.classList.add('leftRight')
        }
        if (this.getCurrentTop() > 2 || this.getCurrentTop() < .2) {
            mainImageP2.classList.remove('rightLeft')
            mainTitleP2.classList.remove('leftRight')
        }
    }
    blinkArrow() {
        const arrowDown = document.querySelector('.site-home__arrow-btn')
        arrowDown.classList.toggle('blinkArrows')
    }
}

export default ScrollManager