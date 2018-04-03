define(['src/index'], function (Browser) {
    describe('Browser', function () {
        describe('new', function () {
            it('should get qq browser name', function () {
                var ua = 'Mozilla/5.0 (Linux; U; Android 4.4.4; zh-cn; HUAWEI C8818 Build/HuaweiC8818) AppleWebKit/537.36 (KHTML, like Gecko)Version/4.0 MQQBrowser/5.8 Mobile Safari/537.36';
                var browser = new Browser();
                browser._getBrowserName(ua);
                expect(browser._name).to.equal('qq');
            });
        });
    });
});
