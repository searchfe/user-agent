# User Agent 工具

[![Build Status](https://travis-ci.org/searchfe/user-agent.svg?branch=master)](https://travis-ci.org/searchfe/user-agent)
[![Coverage Status](https://coveralls.io/repos/github/searchfe/user-agent/badge.svg?branch=master)](https://coveralls.io/github/searchfe/user-agent?branch=master)

这是一个 User Agent 检测工具。

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

## UMD 版本引入
### Rollup

```javascript
import path from 'path';

export default {
    //...
    plugins: [{
        resolveId(id) {
            if (id.startsWith('@searchfe/user-agent')) {
                return path.resolve(`${yourPath}/@searchfe/user-agent/index.umd.js`);
            }
            return null;
        }
    }],
    //...
}
```

### Webpack
```javascript
module.exports = {
    //...
    resolve: {
        alias: {
            "@searchfe/user-agent": "@searchfe/user-agent/index.umd.js"
        }
    }
};
```

## 贡献

本仓库使用 [semantic release](https://github.com/semantic-release/semantic-release) 自动发布 NPM，因此需要你的 commit 信息符合 [Commitizen](https://github.com/commitizen/cz-cli) 规范。比如：

- bugfix 例子（自动发 bugfix 版本）：`fix: 修复在 XX 情况下的 XX 问题`。
- feature 例子（自动发 minor 版本）：`feat: 支持 XX 浏览器的识别`。
- 维护工作（不发版本）：`chore: 支持 XX 浏览器的识别`。
- 不兼容变更需要包含一段 `BREAKING CHANGES` 的说明，下次发版递增主版本号。
