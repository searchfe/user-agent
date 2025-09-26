interface factory {
    isAndroid(): boolean;
    isIOS(): boolean;
    isWinPhone(): boolean;

    iOSVersion(): [number, number] | [];
    appleWebkitVersion(): Array<number>;
    baiduBoxVersion(): Array<number> | number;
    baiduBoxVersionOnArk(): Array<number> | number;
    baiduMainVersionOnArk(): Array<number> | number;
    baiduLiteVersionOnArk(): Array<number> | number;
    baiduBoxOrBdappVersion(): Array<number> | null;
    honorVersion(): Array<number> | null;
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
    isBaiduHonorBrowser(): boolean;
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
    isArkBrowser(): boolean;
    isBaiduBoxOnArk(): boolean;
    isBaiduMainOnArk(): boolean;
    isBaiduLiteOnArk(): boolean;
    isQuarkBrowser(): boolean;
    use(ua: string): factory
}

declare const mod: factory;

export = mod
