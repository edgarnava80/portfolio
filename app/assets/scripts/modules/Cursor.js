class Cursor {
    constructor() {
        this.tailOne = document.querySelector('.cursor--one')
        this.tailTwo = document.querySelector('.cursor--two')
        this.tailThree = document.querySelector('.cursor--three')
        this.tailRotate = document.querySelectorAll('.cursor-effect')
        this.events()
    }
    events() {
        window.addEventListener("mousemove", e => {
            //console.log("In mousemove: " + e)
            this.tailOne.setAttribute("style", "top: " + (e.pageY - 20) + "px; left: " + (e.pageX - 20) + "px;")
            this.tailTwo.setAttribute("style", "top: " + (e.pageY - 20) + "px; left: " + (e.pageX - 20) + "px;")
            this.tailThree.setAttribute("style", "top: " + (e.pageY - 20) + "px; left: " + (e.pageX - 20) + "px;")
            this.tailRotate.forEach(el => {
                el.addEventListener("mouseleave", () => {
                    this.tailOne.classList.remove('cursor--rotate-right')
                    this.tailTwo.classList.remove('cursor--rotate-left')
                })
                el.addEventListener("mouseover", () => {
                    this.tailOne.classList.add('cursor--rotate-right')
                    this.tailTwo.classList.add('cursor--rotate-left')
                })
            })
        })
    }
}

export default Cursor