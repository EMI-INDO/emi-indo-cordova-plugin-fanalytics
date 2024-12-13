# emi-indo-cordova-plugin-fanalytics
 Cordova Plugin Firebase Analytics support consent and AdMob
 
 ## [full example ](https://github.com/EMI-INDO/emi-indo-cordova-plugin-fanalytics/tree/main/example/www) 

> [!NOTE]  
> - To maintain this plugin in the long run, 
> - for (regular maintenance),
> - just give me a cup of coffee.
 
 ## 💰Sponsor this project
  [![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/emiindo)  
  [![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/F1F16NI8H)


 ## This plugin comes with a hook
- so this is not required `<resource-file src=“www/google-services.json” target=“app/google-services.json” />`
- just add `google-services.json` or `GoogleService-Info.plist` to the `www folder` and it will run automatically.


## Minimum Cordova Engines
- cordova version = 10.0.0
- cordova-android version = 11.0.0
- cordova-ios version = 6.0.0

> [!NOTE]  
> - Android only, IOS I have not updated yet
> - Next release capacitor support will be added.


## Features

- setEnabled
- setSessionTimeoutDuration
- logEvent
- logEventSelectContent
- setUserId
- setUserProperty
- resetAnalyticsData
- setCurrentScreen
- setDefaultEventParameters
- setConsent
- setAdMobRevenuePaid

## Installation plugin

```sh
cordova plugin add emi-indo-cordova-plugin-fanalytics
```
### Or
```sh
cordova plugin add https://github.com/EMI-INDO/emi-indo-cordova-plugin-fanalytics
```

## Remove
```sh
cordova plugin rm emi-indo-cordova-plugin-fanalytics
```

# project confirmation (ANDROID)

### add file  ```google-services.json ``` inside the www folder


# project confirmation ( IOS )
### add file  ```GoogleService-Info.plist ``` inside the www folder
- After the plugin has been added run the`
- ```cordova prepare```
### Then from the command line run: cd/path/platform/ios
- ```pod install --repo-update```
- wait for the pod to finish installing
- open file ```YourProject.xcworkspace```   ( Or open ```YourProject.xcworkspace``` file from Xcode )


## This plugin was outdated at first, because it was not maintained, now I am maintaining it again.

## Support Platform
- Android
- IOS
