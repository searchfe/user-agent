define(function () {
    function factory (ua) {
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
                var match = ua.match(/ baiduboxapp\/([0-9]+_)?([0-9.]+)/i);
                var version = /(iPhone|iPod|iPad)/.test(ua) ? match[2].split('.').reverse() : match[2].split('.');
                return version ? version.map(parseFloat) : [];
            },
            // 简单搜索版本号
            secrVersion: function () {
                var match = ua.match(/ SearchCraft\/([0-9]+_)?([0-9.]+)/i);
                var version = /(iPhone|iPod|iPad)/.test(ua) ? match[2].split('.') : match[2].split('.');
                return version ? version.map(parseFloat) : [];
            },

            /**
             * [versionCompare 版本号对比]
             *
             * @param  {Array}   version1 版本号的数组形式
             * @param  {Array}   version2 版本号的数组形式
             * @return {integer}          1 表示 大于，0 表示 等于，-1 表示 小于
             */
            versionCompare: function (version1, version2) {
                var len1 = version1.length;
                var len2 = version2.length;

                if (!(version1 instanceof Array) || !(version2 instanceof Array)) {
                    return 'wrong version';
                }

                for (var i = 0; i < Math.min(len1, len2); i++) {
                    if (version1[i] > version2[i]) {
                        return 1;
                    }
                    else if (version1[i] < version2[i]) {
                        return -1;
                    }
                }
                if (len1 === len2) {
                    return 0;
                }
                var tmp = len1 > len2 ? 1 : -1;
                var ary = len1 > len2 ? version1 : version2;
                for (var j = i; j < Math.max(len1, len2); j++) {
                    if (ary[j] > 0) {
                        return tmp;
                    }
                    else if (ary[j] === 0) {
                        return 0;
                    }

                }
            },

            // Browser
            isBaiduBox: function () {
                return /baiduboxapp/.test(ua);
            },
            isBaiduBoxLite: function () {
                return /lite baiduboxapp/.test(ua);
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
            isSogouMobile: function () {
                return /SogouMobileBrowser/.test(ua);
            },
            isMiuiBrowser: function () {
                return /MiuiBrowser\/(\S*)/.test(ua);
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

            // functionality
            use: factory
        };
        return mod;
    }

    return factory(navigator.userAgent);
});
