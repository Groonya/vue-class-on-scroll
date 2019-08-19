# vue-class-on-scroll
A directive to add css class to the element for vue.js(2.x).

# Install
`npm install vue-class-on-scroll --save`

# Dev
run `npm install` and `npm run dev`

# Import
```javascript
import ClassOnScroll from 'vue-class-on-scroll' // Es6 module
```

# Use

``` javascript
directives: {
  'class-on-scroll': ClassOnScroll,
},
```

``` html
<ELEMENT v-class-on-scroll="{ class: 'myClass' }">
 
</ELEMENT>
```