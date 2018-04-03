define(function() {

    function Browser () {
        this._name = '';
    };

    Browser.prototype._getBrowserName = function (ua) {
        var ua = ua || navigator.userAgent;
        if (ua.indexOf('QQBrowser') > -1) {
            this._name = 'qq';
        }
    }

    return Browser;

});