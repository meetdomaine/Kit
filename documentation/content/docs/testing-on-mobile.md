---
description: ''
sidebar: 'docs'
prev: '/docs'
next: '/docs'
---

# Testing On Mobile

There are a few settings that allow for easy testing on a mobile device connected to your current local network.

## Noteworthy Settings

```js
{
  "bs.local": 192.168.1.1 // Your local IP address
  "js.hmr": false
}
```

With these settings temporarily added to your `kit.config.js` file (you probably shouldn't commit them), you can set the URL of your localhost proxy to use your local IP address and turn off hot module reloading functionality. We turn off HMR in this situation since there are times where reloads are delayed or misfired across a network connection.
