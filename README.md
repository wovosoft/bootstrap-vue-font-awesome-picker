<p align="center">
  <a href="https://wovosoft.com/">
    <img src="https://wovosoft.com/wp-content/uploads/2019/10/logo_text-scaled-177x58.png" alt="Wovosoft Software Development Compnay"  height="72">
  </a>
</p>

<h3 align="center">Bootstrap Vue Font-Awesome Icon Picker</h3>

<p align="center">
  This is a simple vuejs plugin for picking font-awesome 5 Icons. 
  <br>
  It Supports Font Awesome 5 Icons.
</p>

## Installation
```
yarn add bootstrap-vue-font-awesome-picker  
or  
npm install bootstrap-vue-font-awesome-picker
```
## Project setup
```
yarn install 
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```


## Quick start

Several quick start options are available:

- [Download the latest release.](https://github.com/wovosoft/bootstrap-vue-font-awesome-picker/archive/0.1.2.zip)
- Clone the repo: `git clone https://github.com/wovosoft/bootstrap-vue-font-awesome-picker.git`
- Install with [npm](https://www.npmjs.com/): `npm install bootstrap-vue-font-awesome-picker`
- Install with [yarn](https://yarnpkg.com/): `yarn add bootstrap-vue-font-awesome-picker`

## Status


[![npm version](https://img.shields.io/npm/v/bootstrap-vue-font-awesome-picker.svg)](https://www.npmjs.com/package/bootstrap-vue-font-awesome-picker)



## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```text
bootstrap-vue-font-awesome-picker
└── dist/
    ├── css/
    │   ├── app.css
    └── js/
        ├── app.js
        ├── app.map
        ├── chunk-vendors.js
        ├── chunk-vendors.js.map
```

## Documentation
You Can Use the Plugin as a compnent directly to your vuejs application as the example written below.  
No need to import additional CSS, the plugin will load the required CSS styles automatically.
```html

<template>
    <div>
        <font-awesome-picker v-model="icon"></font-awesome-picker>
    </div>
</template>

<script>
    import FontAwesomePicker from "bootstrap-vue-font-awesome-picker";

    export default {
        name: "MyComponent",
        components: {
            FontAwesomePicker
        },
       
        data() {
            return {
                icon: "fas fa-user-cog"
            };
        }
    }
</script>

```
If you want to use it as a global plugin, then in your `app.js` use it as written below.
```js
import Vue from "vue";
import FontAwesomePicker from "bootstrap-vue-font-awesome-picker";
Vue.use(FontAwesomePicker);
new Vue({
    el: '#main',
    router,
    store,
    template: '<Main/>',
    components: {
        Main
    },
}
```
Another Method is,
```js
import Vue from "vue";
import FontAwesomePicker from "bootstrap-vue-font-awesome-picker";

new Vue({
    el: '#main',
    router,
    store,
    template: '<Main/>',
    components: {
        Main,
        FontAwesomePicker
    },
}
```
## Creators

**Narayan Adhikary**

- <https://facebook.com/narayan.adhikary>
- <https://github.com/narai420>
- [narayanadhikary24@gmail.com](mailto:narayanadhikary24@gmail.com)
- [wovosoft@gmail.com](mailto:wovosoft@gmail.com)

## Copyright and license

Code and documentation copyright 2015-2020 the [Wovosoft Authors] . Code released under the [MIT License](https://github.com/twbs/bootstrap/blob/master/LICENSE). 
