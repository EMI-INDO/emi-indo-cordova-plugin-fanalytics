var exec = require('cordova/exec');

exports.setEnabled = function (arg0, success, error) {
    exec(success, error, 'emiFanalyticsPlugin', 'setEnabled', [arg0]);
};

exports.setSessionTimeoutDuration = function (arg0, success, error) {
    exec(success, error, 'emiFanalyticsPlugin', 'setSessionTimeoutDuration', [arg0]);
};

exports.logEvent = function (arg0, arg1, success, error) {
    exec(success, error, 'emiFanalyticsPlugin', 'logEvent', [arg0, arg1]);
};

exports.setUserId = function (arg0, success, error) {
    exec(success, error, 'emiFanalyticsPlugin', 'setUserId', [arg0]);
};

exports.setUserProperty = function (arg0, arg1, success, error) {
    exec(success, error, 'emiFanalyticsPlugin', 'setUserProperty', [arg0, arg1]);
};

exports.resetAnalyticsData = function (success, error) {
    exec(success, error, 'emiFanalyticsPlugin', 'resetAnalyticsData', []);
};

exports.setCurrentScreen = function (arg0, arg1, success, error) {
    exec(success, error, 'emiFanalyticsPlugin', 'setCurrentScreen', [arg0, arg1]);
};

exports.setDefaultEventParameters = function (arg0, success, error) {
    exec(success, error, 'emiFanalyticsPlugin', 'setDefaultEventParameters', [arg0]);
};

exports.setConsent = function (arg0, arg1, success, error) {
    exec(success, error, 'emiFanalyticsPlugin', 'setConsent', [arg0, arg1]);
};
