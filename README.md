### Vue.js notifications

Demo: To be added.



### Install

```bash
npm install --save vue-easily-notify
```

### How to

In main.js:

```javascript
import Vue           from 'vue'
import Notifications from 'vue-easily-notify'

Vue.use(Notifications)
```



In any of your vue files:

```javascript
this.$hnotify.success({
  text: 'success !',
  mode: 'root'
});
this.$hnotify.info({
  text: 'info !',
  mode: 'root'
});
this.$hnotify.warnning({
  text: 'warnning !',
  mode: 'root'
});
this.$hnotify.error({
  text: 'error !',
  mode: 'root'
});
```

### API

```javascript
  this.$hnotify({
    // (optional)
    // Mode of the mobile size view. value should be 'root' or '', when your html tag's font-size is 16 , should be 'root' .Other cases it should be ''.
    root: '',

    // Content
    text: 'This is content '
  })
```



### Development

```bash
To run an example:

# Build main library

cd vue-easily-notify
npm install
npm run lib

# Build and run demo

cd demo
npm install
npm run dev

```
