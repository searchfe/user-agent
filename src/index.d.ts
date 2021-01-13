interface factory {
    isAndroid(): boolean;
    isIOS(): boolean;
    isWinPhone(): boolean;

    iOSVersion(): [number, number] | [];
    appleWebkitVersion(): Array<number>;
    baiduBoxVersion(): Array<number>;
    secrVersion(): Array<number>;
    getChromeVersion(): Array<number>;
    androidVersion(): Array<number>;
    isBaiduOrBdBox(): boolean;
    isBdBox(): boolean;
    isBaiduBox(): boolean;
    isBaiduBoxLite(): boolean;
    isBaiduBoxJisu(): boolean;
    isBaiduBoxVision(): boolean;
    isQQ(): boolean;
    isQQApp(): boolean;
    isWeixinApp(): boolean;
    isQQBrowser(): boolean;
    isBaiduBrowser(): boolean;
    isSearchCraft(): boolean;
    isUC(): boolean;
    isChromeDesktop(): boolean;
    isChromeMobile(): boolean;
    isSafariBrowser(): boolean;
    isGoogleChrome(): boolean;
    isCriOS(): boolean;
    isSogouMobile(): boolean;
    isMiuiBrowser(): boolean;
    isHUAWEIBrowser(): boolean;
    isMZBrowser(): boolean;
    isWKWebview(): boolean;
    isUIWebview(): boolean;
    isXcxApp(): boolean;
    use(ua: string): factory
}

declare const mod: factory;

export = mod
