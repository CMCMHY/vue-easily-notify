### Vue.js notifications, automatically adapt PC and mobile.

Demo: To be added.
Github: To be added.



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
    // root: Optional,default value is '',
    // Mode of the mobile size view. Based on the root tag's font-size,
    // When your html tag's font-size is 16 , it should be 'root',
    // Other cases it should be ''.
    root: '',
    // text: Content of notify action.
    text: 'This is content '
  })
```

