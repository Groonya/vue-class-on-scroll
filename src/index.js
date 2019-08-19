import ClassOnScroll from './class-on-scroll'

const install = function(Vue) {
  Vue.directive('class-on-scroll', ClassOnScroll);
};

if (window.Vue) {
  Vue.use(install);
}

ClassOnScroll.install = install;

export default ClassOnScroll;