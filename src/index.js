define(function () {
    var traits = {
        // OS
        isAndroid: /android/i,
        isIOS: /(iPhone|iPod|iPad)/,
        isWinPhone: /Windows Phone ([\d.]+)/,

        // Browser
        isBaiduBox: /baiduboxapp/,
        isBaiduBoxLite: /lite baiduboxapp/,
        isQQ: /QQBrowser/,
        isBaiduBrowser: /baidubrowser/,
        isSearchCraft: /SearchCraft/i,
        isUC: /UCBrowser/,
        isChromeDesktop: /Chrome\//,
        isChromeMobile: /Chrome\/(\S*) Mobile/,
        isSogouMobile: /SogouMobileBrowser/,
        isMiuiBrowser: /MiuiBrowser\/(\S*)/
    };

    function factory (userAgentString) {
        var ua = {
            use: factory
        };

        Object.keys(traits).forEach(function (key) {
            var regexp = traits[key];
            ua[key] = function () {
                return regexp.test(userAgentString);
            };
        });
        return ua;
    };

    return factory(navigator.userAgent);
});
