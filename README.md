# emi-indo-cordova-plugin-fanalytics
 Cordova Plugin Firebase Analytics support consent 
 
 ## [full index.html example ](https://github.com/EMI-INDO/emi-indo-cordova-plugin-fanalytics/blob/main/example/index.html) 
 
 ## 💰Sponsor this project
  [![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/emiindo)  


## Minimum Cordova Engines
- cordova version = 10.0.0
- cordova-android version = 11.0.0
- cordova-ios version = 6.0.0

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

# project confirmation ( Android )

### add file  ```google-services.json ``` inside the www folder
add this line ``` <resource-file src="www/google-services.json" target="app/google-services.json" />``` in config.xml 
- like the example below, must be inside a platform block

```sh
<platform name="android">
    ...
    <resource-file src="www/google-services.json" target="app/google-services.json" />
</platform>
```
## If the above is completed
- add plugin ```cordova plugin add emi-indo-cordova-plugin-fanalytics```
- add platform ```cordova patform add android@11.0.0```
- ```cordova prepare```
- ```cordova build android```

## Installation plugin

```sh
cordova plugin add emi-indo-cordova-plugin-fanalytics
```
### Or
```sh
cordova plugin add https://github.com/EMI-INDO/emi-indo-cordova-plugin-fanalytics
```
### With variable
```sh
cordova plugin add emi-indo-cordova-plugin-fanalytics --variable ANDROID_FIREBASE_BOM_VERSION=32.0.0 --variable ANALYTICS_KTX_VERSIONS=21.2.2
```
## Remove
```sh
cordova plugin rm emi-indo-cordova-plugin-fanalytics
```

## ( Optional default value)
### Add from config.xml
```sh
<preference name="ANDROID_FIREBASE_BOM_VERSION" value="32.0.0"/>
<preference name="ANALYTICS_KTX_VERSION" value="21.2.2"/>
<preference name="ANALYTICS_COLLECTION_ENABLED" value="true"/>
<preference name="AUTOMATIC_SCREEN_REPORTING_ENABLED" value="true"/>
  
  
<!-- https://developers.google.com/tag-platform/devguides/app-consent?platform=android -->

<preference name="DEFAULT_ALLOW_ANALYTICS_STORAGE" value="true"/>
<preference name="DEFAULT_ALLOW_AD_STORAGE" value="true"/>
  

<preference name="AndroidXEnabled" value="true"/>
<preference name="GradlePluginGoogleServicesEnabled" value="true"/>
<preference name="GradlePluginGoogleServicesVersion" value="4.3.15"/>
  
  ```

### Add from Variabel
- ```cordova plugin add emi-indo-cordova-plugin-fanalytics --variable ANDROID_FIREBASE_BOM_VERSION=32.0.0```
- ```cordova plugin add emi-indo-cordova-plugin-fanalytics --variable ANALYTICS_KTX_VERSION=21.2.2```
- ```cordova plugin add emi-indo-cordova-plugin-fanalytics --variable ANALYTICS_COLLECTION_ENABLED=true```
- ```cordova plugin add emi-indo-cordova-plugin-fanalytics --variable AUTOMATIC_SCREEN_REPORTING_ENABLED=true```
- ```cordova plugin add emi-indo-cordova-plugin-fanalytics --variable DEFAULT_ALLOW_ANALYTICS_STORAGE=true```
- ```cordova plugin add emi-indo-cordova-plugin-fanalytics --variable DEFAULT_ALLOW_AD_STORAGE=true```




# project confirmation ( IOS )

- 1: Add Platform IOS ```cordova platform add ios``` ( Don't add plugins )
- 2: Add file  ```GoogleService-Info.plist ``` inside the platform/ios folder
- 3: Add this line ``` <resource-file src="GoogleService-Info.plist" />``` in config.xml ( like the example below, must be inside a platform block )

```sh
<platform name="ios">
    ...
    <resource-file src="GoogleService-Info.plist" />
    <preference name="deployment-target" value="12.0" />
    <preference name="SwiftVersion" value="5.3" />
</platform>
```
## If the above is completed
### Then from the command line run: cd/path cordova project
- add plugin ```cordova plugin add emi-indo-cordova-plugin-fanalytics```
- ```cordova prepare```
### Then from the command line run: cd/path/platform/ios
- ```pod install --repo-update```
- wait for the pod to finish installing
- open file ```YourProject.xcworkspace```   ( Or open ```YourProject.xcworkspace``` file from Xcode )

## Installation plugin

```sh
cordova plugin add emi-indo-cordova-plugin-fanalytics
```
### Or
```sh
cordova plugin add https://github.com/EMI-INDO/emi-indo-cordova-plugin-fanalytics
```
### With variable
```sh
cordova plugin add emi-indo-cordova-plugin-fanalytics --variable IOS_FIREBASE_POD_VERSION=10.10.0
```
## Remove
```sh
cordova plugin rm emi-indo-cordova-plugin-fanalytics
```

## ( Optional default value)
### Add from config.xml
```sh
<preference name="IOS_FIREBASE_POD_VERSION" value="10.10.0"/>
<preference name="ANALYTICS_COLLECTION_ENABLED" value="true"/>
<preference name="AUTOMATIC_SCREEN_REPORTING_ENABLED" value="true"/>

<!-- https://developers.google.com/tag-platform/devguides/app-consent?platform=ios -->

<preference name="DEFAULT_ALLOW_ANALYTICS_STORAGE" value="true"/>
<preference name="DEFAULT_ALLOW_AD_STORAGE" value="true"/>

  ```

### Add from Variabel
- ```cordova plugin add emi-indo-cordova-plugin-fanalytics --variable IOS_FIREBASE_POD_VERSION=10.10.0```
- ```cordova plugin add emi-indo-cordova-plugin-fanalytics --variable ANALYTICS_COLLECTION_ENABLED=true```
- ```cordova plugin add emi-indo-cordova-plugin-fanalytics --variable AUTOMATIC_SCREEN_REPORTING_ENABLED=true```
- ```cordova plugin add emi-indo-cordova-plugin-fanalytics --variable DEFAULT_ALLOW_ANALYTICS_STORAGE=true```
- ```cordova plugin add emi-indo-cordova-plugin-fanalytics --variable DEFAULT_ALLOW_AD_STORAGE=true```


## Support Platform
- Android
- IOS
