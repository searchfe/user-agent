interface factory {
    isAndroid(): boolean;
    isIOS(): boolean;
    isWinPhone(): boolean;

    iOSVersion(): [number, number] | [];
    appleWebkitVersion(): Array<number>;
    baiduBoxVersion(): Array<number>;
    baiduBoxOrBdappVersion(): Array<number> | null;
    bdappVersion(): Array<number>| null;
    secrVersion(): Array<number>;
    getChromeVersion(): Array<number>;
    androidVersion(): Array<number>;
    vivoBrowserVersion(): Array<number>;
    isBaiduboxOrBdapp(): boolean;
    isTomas(): boolean;
    isKnews(): boolean;
    isBDBoxEngine(): boolean;
    isBdapp(): boolean;
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
    isOppoBrowser(): boolean;
    isWKWebview(): boolean;
    isUIWebview(): boolean;
    isXcxApp(): boolean;
    isVivoBrowser(): boolean;
    use(ua: string): factory
}

declare const mod: factory;

export = mod
