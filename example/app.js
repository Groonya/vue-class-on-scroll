/* eslint-disable */
import ClassOnScroll from '../src/class-on-scroll.js';

Vue.directive('class-on-scroll', ClassOnScroll);

new Vue({
  el: document.querySelector('.app'),
  template: '#app-template'
});