# emi-indo-cordova-plugin-fanalytics
 Cordova Plugin Firebase Analytics support consent
 
 ## [full index.html example ](https://github.com/EMI-INDO/emi-indo-cordova-plugin-fanalytics/blob/main/example/index.html) 
 
 ## 💰Sponsor this project
  [![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/emiindo)  


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

## project confirmation

### add file  ```google-services.json ``` inside the www folder
add this line ``` <resource-file src="www/google-services.json" target="app/google-services.json" />``` in config.xml 
- like the example below, must be inside a platform block

```sh
<platform name="android">
    ...
    <resource-file src="www/google-services.json" target="app/google-services.json" />
</platform>
```


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

## config.xml ( Optional )
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
