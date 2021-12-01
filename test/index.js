define(['src/index'], function (UA) {
    var qqAndroid = 'Mozilla/5.0 (Linux; U; Android 4.4.4; zh-cn; HUAWEI C8818 Build/HuaweiC8818) AppleWebKit/537.36 (KHTML, like Gecko)Version/4.0 MQQBrowser/5.8 Mobile Safari/537.36';
    var qqIOS = 'Mozilla/5.0 (iPhone 84; CPU iPhone OS 10_3_3 like Mac OS X) AppleWebKit/603.3.8 (KHTML, like Gecko) Version/10.0 MQQBrowser/7.8.0 Mobile/14G60 Safari/8536.25 MttCustomUA/2 QBWebViewType/1 WKType/1';
    var ucAndroid = 'Mozilla/5.0 (Linux; U; Android 7.0; zh-CN; ZUK Z2121 Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/40.0.2214.89 UCBrowser/11.6.8.952 Mobile Safari/537.36';
    var safariIOS = 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1';
    var ucIOS = 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X; zh-CN) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/16A5288q UCBrowser/12.0.3.1077 Mobile  AliApp(TUnionSDK/0.1.20.3)';
    var baiduIOS = 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13F69 baiduboxapp/0_8.0.0.9_enohpi_6311_046/2.3.9_2C2%255enohPi/1000306f/C4FF069AC425606E29ACA3E490065B7C5DFD70645OCEANNARPH/1';
    var baiduAndroid = 'Mozilla/5.0 (Linux; U; Android 4.1.1; zh-cn; SCH-N719 Build/JRO03C) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30 baiduboxapp/6.3 (Baidu; P1 4.1.1)';
    var qqApp = 'Mozilla/5.0 (Linux; Android 7.1.1; OS105 Build/NGI77B; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/62.0.3202.84 Mobile Safari/537.36 V1_AND_SQ_7.6.8_872_YYB_D QQ/7.6.8.3615 NetType/WIFI WebP/0.4.1 Pixel/1080';
    var weixinApp = 'Mozilla/5.0 (Linux; Android 7.1.1; OS105 Build/NGI77B; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.132 MQQBrowser/6.2 TBS/044109 Mobile Safari/537.36 MicroMessenger/6.6.7.1320(0x26060739) NetType/WIFI Language/en';
    var searchCraft = 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E216 SearchCraft/2.6.0 (Baidu; P2 11.3)';
    var wrongChrome = 'Mozilla/5.0 (Linux; U; Android 7.0; zh-CN; ZUK Z2121 Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/ UCBrowser/11.6.8.952 Mobile Safari/537.36';
    var chromeMobile = 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_4_1 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) CriOS/68.0.3440.83 Mobile/15G77 Safari/604.1';
    var pixel2 = 'Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3555.0 Mobile Safari/537.36';
    var pixel2XL = 'Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2 XL Build/OPD1.170816.004) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3555.0 Mobile Safari/537.36';
    var XiaoMiBrowser = 'Mozilla/5.0 (Linux; U; Android 6.0; zh-cn; Redmi Note 4 Build/MRA58K) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/71.0.3578.141 Mobile Safari/537.36 XiaoMi/MiuiBrowser/12.8.32';
    var galaxyS5 = 'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3555.0 Mobile Safari/537.36';
    var HUAWEIMeta9 = 'Mozilla/5.0 (Linux; Android 8.0.0; MHA-AL00 Biild/HUAWEIMHA-AL00) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36';
    var HUAWEIChromeBrowser = 'Mozilla/5.0 (Linux; Android 10; VOG-AL00) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.117 Mobile Safari/537.36';
    var MEIZUPRO6 = 'Mozilla/5.0 (Linux; Android 7.1.1; zh-CN; MZ-PRO 6 Biild/MRA58K) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.108 MZBrowser/7.7.2 UWS/2.15.0.2 Mobile Safari/537.36';
    var HUAWEIMeta10baidu = 'Mozilla/5.0 (Linux; Android 8.1.0; ALP-AL00 Build/HUAWEIALP-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/63.0.3239.83 Mobile Safari/537.36 T7/10.13 baiduboxapp/10.13.0.11 (Baidu; P1 8.1.0)';
    var HUAWEIMeta10ProQQ = 'Mozilla/5.0 (Linux; U; Android 8.1.0; zh-cn; BLA-AL00 Build/HUAWEIBLA-AL00) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.132 MQQBrowser/8.9 Mobile Safari/537.36';
    var HUAWEInova3Wechat = 'Mozilla/5.0 (Linux; Android 8.1; PAR-AL00 Build/HUAWEIPAR-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.132 MQQBrowser/6.2 TBS/044304 Mobile Safari/537.36 MicroMessenger/6.7.3.1360(0x26070333) NetType/WIFI Language/zh_CN Process/tools';
    var HUAWEIMeta9UC = 'Mozilla/5.0 (Linux; U; Android 8.0.0; zh-CN; MHA-AL00 Build/HUAWEIMHA-AL00) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.108 UCBrowser/12.1.4.994 Mobile Safari/537.36';
    var baiduIOSJisu = 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E277 info baiduboxapp/3.7.6.12 (Baidu; P2 10.3)';
    var baiduAndroidJisu = 'Mozilla/5.0 (Linux; Android 7.1.1; OS105 Build/NGI77B; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/63.0.3239.83 Mobile Safari/537.36 T7/10.13 lite baiduboxapp/3.7.5.11 (Baidu; P1 7.1.1)';
    var swanApp = 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 swan/2.4.0 swan-baiduboxapp/11.9.0.1 baiduboxapp/11.9.0.1 (Baidu; P2 12.2)';
    // oppo原生浏览器
    var oppoBrowser = 'Mozilla/5.0 (Linux; U; Android 8.1.0; zh-cn; PBBM30 Build/OPM1.171019.026) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.80 Mobile Safari/537.36 HeyTapBrowser/10.7.4.2';
    var tomasApp = 'Mozilla/5.0 (Linux; Android 10; TAS-AN00 Build/HUAWEITAS-AN00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/76.0.3809.89 Mobile Safari/537.36 T7/12.1 matrixstyle/1 SP-engine/0.0.0 bdapp/1.0 (tomas; tomas) tomas/1.0.0.1 (Baidu; P1 10) NABar/1.0';
    var baiduboxvision = 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 SP-engine/2.24.0 bdapp/1.0 (baiduboxvision; baiduboxvision) baiduboxvision/1.4.0.10 (Baidu; P2 14.0) main/1.0 bdapp/1.0 (baiduboxvision; baiduboxvision) baiduboxvision/1.4.0.10 (Baidu; P2 14.0) NABar/1.0';
    // 关怀版浏览器
    var baiduboxsenior = 'Mozilla/5.0 (Linux; Android 8.1.0; ONEPLUS A5000 Build/OPM1.171019.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/63.0.3239.83 Mobile Safari/537.36 T7/10.13 bdapp/1.0 (baiduboxsenior; baiduboxsenior) baiduboxsenior/1.0.0.0 (Baidu; P1 8.1.0)';
    // 趣新热 APP 即小米白牌
    var knewsApp = 'Mozilla/5.0 (Linux; Android 10; TAS-AN00 Build/HUAWEITAS-AN00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/76.0.3809.89 Mobile Safari/537.36 T7/12.13.0 SP-engine/0.0.0 bdapp/1.0 (knews; knews) knews/2.0.0.1 (Baidu; P1 10) NABar/1.0'
    describe('UA', function () {
        it('should detect chrome', function () {
            expect(UA.isChromeDesktop()).to.equal(true);
            expect(UA.isQQ()).to.equal(false);
            expect(UA.isUC()).to.equal(false);
            expect(UA.use(wrongChrome).isChromeMobile()).to.equal(false);
        });
        it('should detect QQ browser', function () {
            expect(UA.use(qqAndroid).isQQ()).to.equal(true);
            expect(UA.use(qqIOS).isQQ()).to.equal(true);
            expect(UA.use(qqAndroid).isQQBrowser()).to.equal(true);
            expect(UA.use(qqIOS).isQQBrowser()).to.equal(true);
        });
        it('should detect QQ app', function () {
            expect(UA.use(qqApp).isQQApp()).to.equal(true);
            expect(UA.use(qqApp).isQQBrowser()).to.equal(false);
        });
        it('should detect weixin', function () {
            expect(UA.use(weixinApp).isWeixinApp()).to.equal(true);
            expect(UA.use(weixinApp).isQQBrowser()).to.equal(false);
        });
        it('should detect UC browser', function () {
            expect(UA.use(ucAndroid).isUC()).to.equal(true);
        });
        it('should detect iOS version', function () {
            expect(UA.use(qqIOS).isIOS()).to.equal(true);
            expect(UA.use(qqIOS).iOSVersion()).to.deep.equal([10, 3]);
        });
        it('should detect BaiduBox version', function () {
            expect(UA.use(baiduIOS).isBaiduBox()).to.equal(true);
            expect(UA.use(baiduAndroid).isBaiduBox()).to.equal(true);
            expect(UA.use(baiduIOS).baiduBoxVersion()).to.deep.equal([9, 0, 0, 8]);
            expect(UA.use(baiduAndroid).baiduBoxVersion()).to.deep.equal([6, 3]);
        });
        it('should detect AppleWebkit version', function () {
            expect(UA.use(safariIOS).appleWebkitVersion()).to.deep.equal([603, 1, 30]);
        });
        it('should detect safari browser', function () {
            expect(UA.use(safariIOS).isSafariBrowser()).to.equal(true);
            expect(UA.use(qqIOS).isSafariBrowser()).to.equal(false);
            expect(UA.use(chromeMobile).isSafariBrowser()).to.equal(false);
        });
        it('should detect only chrome browser', function () {
            expect(UA.use(chromeMobile).isGoogleChrome()).to.equal(true);
            expect(UA.use(HUAWEIChromeBrowser).isGoogleChrome()).to.equal(true);
            expect(UA.use(HUAWEIMeta9).isGoogleChrome()).to.equal(false);
            expect(UA.use(HUAWEIMeta9UC).isGoogleChrome()).to.equal(false);
            expect(UA.use(XiaoMiBrowser).isGoogleChrome()).to.equal(false);
            expect(UA.use(MEIZUPRO6).isGoogleChrome()).to.equal(false);
            expect(UA.use(oppoBrowser).isGoogleChrome()).to.equal(false);
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
        it('should detect searchCraft', function () {
            expect(UA.use(searchCraft).isSearchCraft()).to.equal(true);
            expect(UA.use(ucIOS).isWKWebview()).to.equal(false);
            expect(UA.use(ucAndroid).isWKWebview()).to.equal(false);
        });
        it('should detect CriOS', function () {
            expect(UA.use(chromeMobile).isCriOS()).to.equal(true);
            expect(UA.use(ucIOS).isCriOS()).to.equal(false);
            expect(UA.use(ucAndroid).isCriOS()).to.equal(false);
        });
        it('should detect HUAWEIBrowser', function () {
            expect(UA.use(HUAWEIMeta9).isHUAWEIBrowser()).to.equal(true);
            expect(UA.use(HUAWEIMeta10baidu).isHUAWEIBrowser()).to.equal(false);
            expect(UA.use(HUAWEIMeta10ProQQ).isHUAWEIBrowser()).to.equal(false);
            expect(UA.use(HUAWEInova3Wechat).isHUAWEIBrowser()).to.equal(false);
            expect(UA.use(HUAWEIMeta9UC).isHUAWEIBrowser()).to.equal(false);
        });
        it('should detect MZBrowser', function () {
            expect(UA.use(MEIZUPRO6).isMZBrowser()).to.equal(true);
        });
        it('should detect baiduBoxJisu', function () {
            expect(UA.use(baiduAndroidJisu).isBaiduBoxJisu()).to.equal(true);
        });
        it('should detect baiduBoxJisu', function () {
            expect(UA.use(baiduIOSJisu).isBaiduBoxJisu()).to.equal(true);
        });
        it('should detect swanApp', function () {
            expect(UA.use(swanApp).isXcxApp()).to.equal(true);
        });
        it('should detect baiduboxvision', function () {
            expect(UA.use(baiduboxvision).isBaiduBoxVision()).to.equal(true);
        });
        it('should detect baiduboxvision is bdapp', function () {
            expect(UA.use(baiduboxvision).isBdapp()).to.equal(true);
        });
        it('should detect baiduboxvision is baiduboxOrBdapp', function () {
            expect(UA.use(baiduboxvision).isBaiduboxOrBdapp()).to.equal(true);
        });
        it('should detect tomas', function () {
            expect(UA.use(tomasApp).isTomas()).to.equal(true);
        });
        it('should detect tomas is bdapp', function () {
            expect(UA.use(tomasApp).isBdapp()).to.equal(true);
        });
        it('should detect tomas is baiduboxOrBdapp', function () {
            expect(UA.use(tomasApp).isBaiduboxOrBdapp()).to.equal(true);
        });
        it('should detect knews', function () {
            expect(UA.use(knewsApp).isKnews()).to.equal(true);
        });
        it('should detect knews is bdapp', function () {
            expect(UA.use(knewsApp).isBdapp()).to.equal(true);
        });
        it('should detect knews is baiduboxOrBdapp', function () {
            expect(UA.use(knewsApp).isBaiduboxOrBdapp()).to.equal(true);
        });

        it('should detect baiduboxsenior', function () {
            expect(UA.use(baiduboxsenior).isBaiduboxsenior()).to.equal(true);
            expect(UA.use(baiduboxsenior).isTomas()).to.equal(false);
            expect(UA.use(baiduboxsenior).isBdapp()).to.equal(true);
            expect(UA.use(baiduboxsenior).isBaiduboxOrBdapp()).to.equal(true);
            expect(UA.use(baiduboxsenior).isBaiduBox()).to.equal(false);
            expect(UA.use(tomasApp).isBaiduboxsenior()).to.equal(false);
            expect(UA.use(knewsApp).isBaiduboxsenior()).to.equal(false);
            expect(UA.use(baiduboxvision).isBaiduboxsenior()).to.equal(false);
            expect(UA.use(baiduAndroidJisu).isBaiduboxsenior()).to.equal(false);
            expect(UA.use(baiduIOSJisu).isBaiduboxsenior()).to.equal(false);
            expect(UA.use(baiduIOS).isBaiduboxsenior()).to.equal(false);
            expect(UA.use(baiduAndroid).isBaiduboxsenior()).to.equal(false);
        });

    });

    describe('version', function () {
        it('should get baiduBox version', function () {
            expect(UA.use(baiduAndroid).baiduBoxVersion()).to.deep.equal([6, 3]);
            expect(UA.use(baiduboxsenior).baiduBoxVersion()).to.deep.equal(0);
        });
        it('should get searchCraft version', function () {
            expect(UA.use(searchCraft).secrVersion()).to.deep.equal([2, 6, 0]);
        });
        it('should get Chrome version', function () {
            expect(UA.use(ucAndroid).getChromeVersion()).to.deep.equal([40, 0, 2214, 89]);
        });
        it('should not get baiduBox version', function () {
            expect(UA.use(ucAndroid).baiduBoxVersion()).to.equal(0);
            expect(UA.use(searchCraft).baiduBoxVersion()).to.equal(0);
            expect(UA.use(baiduboxsenior).baiduBoxVersion()).to.deep.equal(0);
        });
        it('should not get searchCraft version', function () {
            expect(UA.use(ucAndroid).secrVersion()).to.equal(0);
            expect(UA.use(baiduIOS).secrVersion()).to.equal(0);
            expect(UA.use(baiduboxsenior).secrVersion()).to.equal(0);
        });
        it('should not get Chrome version', function () {
            expect(UA.use(qqAndroid).getChromeVersion()).to.equal(0);
            expect(UA.use(wrongChrome).getChromeVersion()).to.deep.equal([]);
        });
        it('should get android version', function () {
            expect(UA.use(galaxyS5).androidVersion()).to.deep.equal([5, 0]);
            expect(UA.use(pixel2).androidVersion()).to.deep.equal([8, 0]);
            expect(UA.use(pixel2XL).androidVersion()).to.deep.equal([8, 0, 0]);
            expect(UA.use(qqIOS).androidVersion()).to.deep.equal([]);
        });
    });
    describe('baiduBoxOrbdappVersion', function () {
        var testBdappUa = 'Mobile/15E148 SP-engine/2.24.0 bdapp/1.0 (test) test  (Baidu; P2 14.0) main/1.0 bdapp/1.0 (Baidu; P2 14.0) NABar/1.0';
        var btestBaiduboxappUa = '(KHTML, like Gecko) Mobile/13F69 baiduboxapp /1000306f/C4FF069AC425606E29ACA3E490065B7C5DFD70645OCEANNARPH/1';
        it('should detect baiduBoxOrBdapp version', function () {
            expect(UA.use(btestBaiduboxappUa).baiduBoxOrBdappVersion()).to.deep.equal(null);
            expect(UA.use(baiduIOS).baiduBoxOrBdappVersion()).to.deep.equal([9, 0, 0, 8]);
            expect(UA.use(baiduAndroid).baiduBoxOrBdappVersion()).to.deep.equal([6, 3]);
            expect(UA.use(baiduIOSJisu).baiduBoxOrBdappVersion()).to.deep.equal([3, 7, 6, 12]);
            expect(UA.use(baiduAndroidJisu).baiduBoxOrBdappVersion()).to.deep.equal([3, 7, 5, 11]);
            expect(UA.use(testBdappUa).baiduBoxOrBdappVersion()).to.deep.equal(null);
            expect(UA.use(tomasApp).baiduBoxOrBdappVersion()).to.deep.equal([1, 0, 0, 1]);
            expect(UA.use(knewsApp).baiduBoxOrBdappVersion()).to.deep.equal([2, 0, 0, 1]);
            expect(UA.use(baiduboxvision).baiduBoxOrBdappVersion()).to.deep.equal([1, 4, 0, 10]);
            expect(UA.use(qqApp).baiduBoxOrBdappVersion()).to.deep.equal(null);
            expect(UA.use(weixinApp).baiduBoxOrBdappVersion()).to.deep.equal(null);
            expect(UA.use(baiduboxsenior).baiduBoxOrBdappVersion()).to.deep.equal([1, 0, 0, 0]);
        });
        it('should detect bdapp version', function () {
            expect(UA.use(testBdappUa).bdappVersion()).to.deep.equal(null);
            expect(UA.use(btestBaiduboxappUa).bdappVersion()).to.deep.equal(null);
            expect(UA.use(tomasApp).bdappVersion()).to.deep.equal([1, 0, 0, 1]);
            expect(UA.use(knewsApp).bdappVersion()).to.deep.equal([2, 0, 0, 1]);
            expect(UA.use(baiduboxvision).bdappVersion()).to.deep.equal([1, 4, 0, 10]);
            expect(UA.use(qqApp).bdappVersion()).to.deep.equal(null);
            expect(UA.use(weixinApp).bdappVersion()).to.deep.equal(null);
            expect(UA.use(baiduboxsenior).bdappVersion()).to.deep.equal([1, 0, 0, 0]);
        });
    });
});
