# User Agent 工具

这是一个 User Agent 的 AMD 工具，特点：

* 使用简单，不需初始化且直接返回结果。

## 安装

```bash
apmjs install --save @searchfe/user-agent
```

## 例子

```javascript
var ua = require('@searchfe/user-agent')
if (ua.isIOS()) {
    var version = ua.iOSVersion()
    console.log('main version': version[0])
    console.log('sub  version': version[1])
}
```
