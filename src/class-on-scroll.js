const namespace = '@@vue-class-on-scroll'

class ClassOnScroll {
  constructor (el, config) {
    this.el = el
    this.class = config.cssClass
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

const getBindingConfig = binding => {
  const params = binding.value || {}
  let cssClass = params.class || 'sticky'
  return { cssClass }
}

let bindingConfig = {}

export default {
  bind (el, binding) {
    bindingConfig = getBindingConfig(binding)
    el[namespace] = new ClassOnScroll(el, bindingConfig)
  },
  inserted (el, bind, vnode) {
    el[namespace].init()
  }
}