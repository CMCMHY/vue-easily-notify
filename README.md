[![npm version](https://badge.fury.io/js/vue-notification.svg)](https://badge.fury.io/js/vue-notification)
[![npm](https://img.shields.io/npm/dm/vue-notification.svg)](https://www.npmjs.com/package/vue-notification)

### Vue.js notifications

Demo: To be added.

<p align="center">
  <img src="https://media.giphy.com/media/xUn3C6FmbGmszMem64/giphy.gif">
</p>

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

### Props

All keys are optional.

| Name           | Type    | Default      | Description |
| ---            | ---     | ---          | ---         |
| text           | String  | ''           | Text of the notification holder |
| root           | String  | ''           | Mode of the notification holder, if should be 'root' or '' |

### API

```javascript
  this.$notify({
    // (optional)
    // Mode of the mobile size view. value should be 'root' or ''
    root: 'foo',

    // Content
    text: 'This is  content '
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
