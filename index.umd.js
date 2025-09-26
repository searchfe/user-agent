/* globals self */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.myModule = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {
    function factory (ua) {
        var honorMap = [
            [[8, 0, 1, 0], [13, 38, 5, 0]]
        ];
        var mod = {
            // OS
            isAndroid: function () {
                return /android/i.test(ua);
            },
            isIOS: function () {
                return /(iPhone|iPod|iPad)/.test(ua);
            },
            isWinPhone: function () {
                return /Windows Phone ([\d.]+)/.test(ua);
            },

            // Version
            iOSVersion: function () {
                var match = /OS (\d+)_(\d+)/.exec(ua);
                return match ? [Number(match[1]), Number(match[2])] : [];
            },
            appleWebkitVersion: function () {
                var match = ua.match(/ applewebkit\/([0-9.]+)/i);
                return match ? match[1].split('.').map(parseFloat) : [];
            },
            baiduBoxVersion: function () {
                // 非手百版本号返回 0
                if (!this.isBaiduBox() || mod.isArkWeb()) {
                    return 0;
                }
                var version;
                var oldReg = /([\d+.]+)_(?:diordna|enohpi)_/i;
                var newReg = /baiduboxapp\/([\d+.]+)/;
                var honorReg = /bdhonorbrowser\/([\d+.]+)/;
                if (oldReg.test(ua)) {
                    version = ua.match(oldReg)[1].split('.').reverse();
                } else if (newReg.test(ua)) {
                    version = ua.match(newReg)[1].split('.');
                } else if (honorReg.test(ua)) {
                    version = ua.match(honorReg)[1].split('.');
                    for (var i = 0; i < honorMap.length; i++) {
                        var map = honorMap[i];
                        if (
                            version[0] * 10000000 +
                            version[1] * 100000 +
                            version[1] * 1000 +
                            version[1] >=
                            map[0][0] * 10000000 +
                            map[0][1] * 100000 +
                            map[0][2] * 1000 +
                            map[0][3]
                        ) {
                            version = map[1];
                        }
                    }
                }
                return version ? version.map(parseFloat) : [];
            },
            honorVersion: function () {
                var honorReg = /bdhonorbrowser\/([\d+.]+)/;
                var version;
                if (honorReg.test(ua)) {
                    version = ua.match(honorReg)[1].split('.');
                }
                return version ? version.map(parseFloat) : [];
            },
            // 百度主线或矩阵产品版本号
            baiduBoxOrBdappVersion: function () {
                if (this.isBaiduBox()) {
                    return this.baiduBoxVersion() && this.baiduBoxVersion().length > 0 ? this.baiduBoxVersion() : null;
                }
                if (this.isBdapp()) return this.bdappVersion();
                return null;
            },
            // 矩阵产品版本号
            bdappVersion: function () {
                if (!this.isBdapp()) return null;
                var reg = /bdapp\/[\d+.]+\s\(\w+;\s\w+\)\s\w+\/([\d+.]+)/i;
                var result = ua.match(reg);
                var version = result ? result[1].split('.') : null;
                return version ? version.map(parseFloat) : null;
            },
            // 简单搜索版本号
            secrVersion: function () {
                // 非简单浏览器版本返回 0
                if (!this.isSearchCraft()) {
                    return 0;
                }
                var match = ua.match(/ SearchCraft\/([0-9]+_)?([0-9.]+)/i);
                var version = /(iPhone|iPod|iPad)/.test(ua) ? match[2].split('.') : match[2].split('.');
                return version ? version.map(parseFloat) : [];
            },
            // chrome 内核版本
            getChromeVersion: function () {
                // 非 chrome 内核，chrome 内核版本返回 0
                if (!this.isChromeDesktop() && !this.isChromeMobile()) {
                    return 0;
                }
                var match = ua.match(/ Chrome\/([0-9]+_)?([0-9.]+)/i);
                return match && match[2] ? match[2].split('.').map(parseFloat) : [];
            },
            androidVersion: function () {
                var match = ua.match(/Android ([0-9.]+);/);
                if (!match) {
                    return [];
                }
                var version = match[1].split('.').map(parseFloat);
                return version;
            },
            // 获取vivo浏览器版本
            vivoBrowserVersion: function () {
                var match = ua.match(/VivoBrowser\/([0-9.]+)/);
                if (!match || !match[1]) {
                    return [];
                }
                return match[1].split('.').map(parseFloat);
            },
            // 是否为百度端内产品
            isBaiduboxOrBdapp: function () {
                return this.isBaiduBox() || this.isBdapp();
            },
            // 按照新UA规范，是否为百度矩阵产品
            isBdapp: function () {
                return /bdapp/.test(ua);
            },
            // 是否为百度大字版
            isTomas: function () {
                return /tomas/.test(ua);
            },
            // 是否为趣新热APP，其关联厂商小米白牌，属于半个手百矩阵产品
            isKnews: function () {
                return /knews/.test(ua);
            },
            // 是否为百度关怀版
            isBaiduboxsenior: function () {
                return /baiduboxsenior/.test(ua);
            },
            // 是否支持搜索 SDK
            isBDBoxEngine: function () {
                return /BDBoxEngine/.test(ua);
            },
            // 百度app主版和极速版
            isBaiduBox: function () {
                return !mod.isArkWeb() && (/baiduboxapp/.test(ua) || /bdhonorbrowser/.test(ua));
            },
            isBaiduHonorBrowser: function () {
                return /bdhonorbrowser/.test(ua);
            },
            // 百度极速版
            isBaiduBoxLite: function () {
                return !mod.isArkWeb() && /(lite|info) baiduboxapp/.test(ua);
            },
            // 百度极速版(遗留接口)
            // lite 在 iOS 的标识为 info baiduboxapp
            isBaiduBoxJisu: function () {
                return mod.isBaiduBoxLite();
            },
            // 百度app视频版
            isBaiduBoxVision: function () {
                return /baiduboxvision/.test(ua);
            },
            // isQQ 会判断是否 QQ 浏览器
            // 但 Android 平台的手机内置 QQ 的 UA 没有 QQBrowser 字段
            // 所以请使用 isQQApp || isWeixinApp || isQQBrowser 代替此接口
            isQQ: function () {
                return /QQBrowser/.test(ua);
            },
            isQQApp: function () {
                return /QQ\/[0-9]+/.test(ua);
            },
            isWeixinApp: function () {
                return /MicroMessenger/.test(ua);
            },
            // isQQBrowser 会判断是否 QQ 浏览器 但不包括 QQ 微信内置
            isQQBrowser: function () {
                return /QQBrowser/.test(ua) && !(/QQ\//.test(ua) || /MicroMessenger/.test(ua));
            },
            isBaiduBrowser: function () {
                return /baidubrowser/.test(ua);
            },
            isSearchCraft: function () {
                return /SearchCraft/i.test(ua);
            },
            isUC: function () {
                return /UCBrowser/.test(ua);
            },
            isChromeDesktop: function () {
                return /Chrome\//.test(ua);
            },
            isChromeMobile: function () {
                return /Chrome\/(\S*) Mobile/.test(ua);
            },
            // ios 上 chrome 不是 chrome 内核
            isCriOS: function () {
                return /CriOS/.test(ua);
            },
            isSogouMobile: function () {
                return /SogouMobileBrowser/.test(ua);
            },
            isMiuiBrowser: function () {
                return /MiuiBrowser\/(\S*)/.test(ua);
            },
            // HUAWEI其他浏览器的UA中也有HUAWEI字段，要剔除掉
            isHUAWEIBrowser: function () {
                return /HUAWEI/i.test(ua) && !(/baiduboxapp/.test(ua) || /QQBrowser/.test(ua) || /UCBrowser/.test(ua) || /MicroMessenger/.test(ua) || /SearchCraft/.test(ua));
            },
            isMZBrowser: function () {
                return /MZBrowser/i.test(ua);
            },
            // 是否 oppo 浏览器
            isOppoBrowser: function () {
                return /HeyTapBrowser/.test(ua);
            },
            // 判断是否为iphone手机的safari浏览器
            isSafariBrowser: function () {
                var uaLower = ua.toLowerCase();
                return (uaLower.indexOf('applewebkit') > -1 && uaLower.indexOf('mobile') > -1 && uaLower.indexOf('safari') > -1 &&
                    uaLower.indexOf('linux') === -1 && uaLower.indexOf('android') === -1 && uaLower.indexOf('chrome') === -1 &&
                    uaLower.indexOf('ios') === -1 && uaLower.indexOf('browser') === -1);
            },
            /**
             * 仅只是chrome浏览器（排除安卓下谷歌内核浏览器）
             * @return {boolean} chrome
             */
            isGoogleChrome: function () {
                var andrChrome = /^Mozilla\/(\d*?(\.\d*?)*?) \(Linux; Android (\d*?(\.\d*?)*?); .*?\) AppleWebKit\/(\d*?(\.\d*?)*?) \(KHTML, like Gecko\) Chrome\/(\d*?(\.\d*?)*?) Mobile Safari\/(\d*?(\.\d*?)*?)$/.test(ua);
                var iosChrome = /^Mozilla\/(\d*?(\.\d*?)*?) \(iPhone; CPU iPhone OS (\d*?(_\d*?)*?) like Mac OS X\) AppleWebKit\/(\d*?(\.\d*?)*?) \(KHTML, like Gecko\) CriOS\/(\d*?(\.\d*?)*?) Mobile\/(.*?) Safari\/(\d*?(\.\d*?)*?)$/.test(ua);
                return andrChrome || iosChrome;
            },
            // kernel
            isWKWebview: function () {
                var webkitVersion = mod.appleWebkitVersion();
                return mod.isIOS() && webkitVersion[0] && webkitVersion[0] > 600;
            },
            isUIWebview: function () {
                var webkitVersion = mod.appleWebkitVersion();
                return mod.isIOS() && webkitVersion[0] && webkitVersion[0] <= 600;
            },
            isXcxApp: function () {
                // 屏蔽的关键字用base64解码代替
                var xcx = window.atob('c3dhbg==');
                var reg = new RegExp('(' + xcx + '-baiduboxapp|baiduboxapp-' + xcx + ')');
                return reg.test(ua);
            },
            isVivoBrowser: function () {
                return /VivoBrowser/.test(ua);
            },

            // 鸿蒙系统
            isArkWeb: function () {
                return ua.indexOf('ArkWeb') > -1;
            },
            // 鸿蒙百度app主版和极速版
            isBaiduBoxOnArk: function () {
                return mod.isBaiduMainOnArk() || mod.isBaiduLiteOnArk();
            },
            // 鸿蒙百度app主版
            isBaiduMainOnArk: function () {
                // 兼容后端ua，接入层将baiduboxapp替换为baiduarkwebapp
                return /ArkWeb.* (baiduboxapp|baiduarkwebapp)/i.test(ua);
            },
            // 鸿蒙百度极速版
            isBaiduLiteOnArk: function () {
                // 兼容后端ua，接入层将baiduboxlite替换为baiduarkweblite
                return /ArkWeb.* (baiduboxlite|baiduarkweblite)/i.test(ua);
            },
            // 鸿蒙百度app主版和极速版的版本号
            baiduBoxVersionOnArk: function () {
                return mod.baiduMainVersionOnArk() || mod.baiduLiteVersionOnArk();
            },
            // 鸿蒙百度app的版本号
            baiduMainVersionOnArk: function () {
                if (mod.isArkWeb()) {
                    var newReg = /baiduboxapp\/([\d.]+)/;
                    var result = ua.replace(/baiduarkwebapp/g, 'baiduboxapp').match(newReg);
                    if (result && result[1]) {
                        return result[1].split('.').map(parseFloat);
                    }
                }
                return 0;
            },
            // 鸿蒙百度极速版的版本号
            baiduLiteVersionOnArk: function () {
                if (mod.isArkWeb()) {
                    var newReg = /baiduboxlite\/([\d.]+)/;
                    var result = ua.replace(/baiduarkweblite/g, 'baiduboxlite').match(newReg);
                    if (result && result[1]) {
                        return result[1].split('.').map(parseFloat);
                    }
                }
                return 0;
            },

            // 夸克浏览器
            isQuarkBrowser: function () {
                return /Quark/.test(ua);
            },

            // functionality
            use: factory
        };

        // 需要屏蔽swan关键字用base64解码代替
        // 兼容非浏览器环境
        typeof window === 'object' && (mod[window.atob('aXNTd2FuQXBw')] = function () {
            var xcx = window.atob('c3dhbg==');
            var reg = new RegExp('(' + xcx + '-baiduboxapp|baiduboxapp-' + xcx + ')');
            return reg.test(ua);
        });

        return mod;
    }

    return factory(navigator.userAgent);
}));
