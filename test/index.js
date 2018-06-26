define(['src/index'], function (UA) {
    var qqAndroid = 'Mozilla/5.0 (Linux; U; Android 4.4.4; zh-cn; HUAWEI C8818 Build/HuaweiC8818) AppleWebKit/537.36 (KHTML, like Gecko)Version/4.0 MQQBrowser/5.8 Mobile Safari/537.36';
    var qqIOS = 'Mozilla/5.0 (iPhone 84; CPU iPhone OS 10_3_3 like Mac OS X) AppleWebKit/603.3.8 (KHTML, like Gecko) Version/10.0 MQQBrowser/7.8.0 Mobile/14G60 Safari/8536.25 MttCustomUA/2 QBWebViewType/1 WKType/1';
    var ucAndroid = 'Mozilla/5.0 (Linux; U; Android 7.0; zh-CN; ZUK Z2121 Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/40.0.2214.89 UCBrowser/11.6.8.952 Mobile Safari/537.36';
    var safariIOS = 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1';
    var ucIOS = 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X; zh-CN) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/16A5288q UCBrowser/12.0.3.1077 Mobile  AliApp(TUnionSDK/0.1.20.3)';

    describe('UA', function () {
        it('should detect chrome', function () {
            expect(UA.isChromeDesktop()).to.equal(true);
            expect(UA.isQQ()).to.equal(false);
            expect(UA.isUC()).to.equal(false);
        });
        it('should detect QQ browser', function () {
            expect(UA.use(qqAndroid).isQQ()).to.equal(true);
            expect(UA.use(qqIOS).isQQ()).to.equal(true);
        });
        it('should detect UC browser', function () {
            expect(UA.use(ucAndroid).isUC()).to.equal(true);
        });
        it('should detect iOS version', function () {
            expect(UA.use(qqIOS).isIOS()).to.equal(true);
            expect(UA.use(qqIOS).iOSVersion()).to.deep.equal([10, 3]);
        });
        it('should detect AppleWebkit version', function () {
            expect(UA.use(safariIOS).appleWebkitVersion()).to.deep.equal([603, 1, 30]);
        });
        it('should detect UIWebview', function () {
            expect(UA.use(qqIOS).isUIWebview()).to.equal(false);
            expect(UA.use(ucIOS).isUIWebview()).to.equal(true);
            expect(UA.use(ucAndroid).isUIWebview()).to.equal(false);
        });
        it('should detect WKWebview', function () {
            expect(UA.use(qqIOS).isWKWebview()).to.equal(true);
            expect(UA.use(ucIOS).isWKWebview()).to.equal(false);
            expect(UA.use(ucAndroid).isWKWebview()).to.equal(false);
        });
    });
});
