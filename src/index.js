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
                var version = /(iPhone|iPod|iPad)/.test(ua) ? match[2].split('.').reverse() : match[2].split('.')
                return version ? version.map(parseFloat) : [];
            },

            // Browser
            isBaiduBox: function () {
                return /baiduboxapp/.test(ua);
            },
            isBaiduBoxLite: function () {
                return /lite baiduboxapp/.test(ua);
            },
            isQQ: function () {
                return /QQBrowser/.test(ua);
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
    };

    return factory(navigator.userAgent);
});
