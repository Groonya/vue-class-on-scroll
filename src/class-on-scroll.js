const namespace = '@@vue-class-on-scroll'

class ClassOnScroll {
  constructor (el, vm) {
    this.el = el
    this.vm = vm
    this.class = 'sticky'
    this.initialized = false
    this.initTop = null
  }

  init () {
    document.addEventListener('scroll', () => {this.checkState()})
    window.addEventListener('resize', () => {this.reset()})
    this.checkState()
  }

  reset () {
    this.initialized = false
    this.el.classList.remove(this.class)
    this.checkState()
  }

  checkState () {
    const windowTop = ClassOnScroll.getScrollOffset()

    if (!this.initialized) {
      this.initTop = this.el.getBoundingClientRect().top + windowTop
      this.initialized = true
    }

    if (windowTop > this.initTop) {
      this.el.classList.add(this.class)
    } else {
      this.el.classList.remove(this.class)
    }
  }

  static getScrollOffset () {
    return window.pageYOffset || document.documentElement.scrollTop
  }
}

export default {
  inserted (el, bind, vnode) {
    el[namespace] = new ClassOnScroll(el, vnode.context)
    el[namespace].init()
  }
}