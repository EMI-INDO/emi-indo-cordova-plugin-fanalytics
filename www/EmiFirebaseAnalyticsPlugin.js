var exec = require('cordova/exec');

exports.setEnabled = function (options, success, error) {
    exec(success, error, 'EmiFirebaseAnalyticsPlugin', 'setEnabled', [options]);
};

exports.setSessionTimeoutDuration = function (options, success, error) {
    exec(success, error, 'EmiFirebaseAnalyticsPlugin', 'setSessionTimeoutDuration', [options]);
};

exports.logEvent = function (options, success, error) {
    exec(success, error, 'EmiFirebaseAnalyticsPlugin', 'logEvent', [options]);
};

exports.logEventSelectContent = function (options, success, error) {
    exec(success, error, 'EmiFirebaseAnalyticsPlugin', 'logEventSelectContent', [options]);
};

exports.setUserId = function (options, success, error) {
    exec(success, error, 'EmiFirebaseAnalyticsPlugin', 'setUserId', [options]);
};

exports.setUserProperty = function (options, success, error) {
    exec(success, error, 'EmiFirebaseAnalyticsPlugin', 'setUserProperty', [options]);
};

exports.resetAnalyticsData = function (success, error) {
    exec(success, error, 'EmiFirebaseAnalyticsPlugin', 'resetAnalyticsData', []);
};

exports.setCurrentScreen = function (options, success, error) {
    exec(success, error, 'EmiFirebaseAnalyticsPlugin', 'setCurrentScreen', [options]);
};

exports.setDefaultEventParameters = function (options, success, error) {
    exec(success, error, 'EmiFirebaseAnalyticsPlugin', 'setDefaultEventParameters', [options]);
};

exports.setConsent = function (options, success, error) {
    exec(success, error, 'EmiFirebaseAnalyticsPlugin', 'setConsent', [options]);
};

exports.setAdMobRevenuePaid = function (options, success, error) {
    exec(success, error, 'EmiFirebaseAnalyticsPlugin', 'setAdMobRevenuePaid', [options]);
};

