consoleLog= console.log;

adsGameCon= function() {
  this.recordOpen= function() {
    return true;
  }

  this.showAd= function(options) {
    options.beforeShowAd();
    setTimeout(options.afterShowAd, 1000);
    return true;
  }

  this.showAdOfEvent= function(options) {
    options.beforeShowAd();
    options.afterShowAd();
    // options.onRewardDismissed();
  }

  this.moreGame= function() {
  }
  
}

adsGameCon= new adsGameCon();
