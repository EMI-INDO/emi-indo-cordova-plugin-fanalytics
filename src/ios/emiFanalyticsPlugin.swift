import Firebase
import FirebaseAnalytics;
import UIKit
import Foundation

@objc(emiFanalyticsPlugin)
public class emiFanalyticsPlugin : CDVPlugin {
    public override func pluginInitialize() {
        FirebaseApp.configure()
        }
    
    
    @objc
    func setEnabled(_ command: CDVInvokedUrlCommand) {
      let enabled = command.argument(at: 0) as! Bool
      let pluginResult:CDVPluginResult
        Analytics.setAnalyticsCollectionEnabled(enabled)
        pluginResult = CDVPluginResult.init(status: CDVCommandStatus_OK, messageAs: enabled)
      self.commandDelegate.send(pluginResult, callbackId: command.callbackId)
  }
    
    
  @objc
  func logEvent(_ command: CDVInvokedUrlCommand) {
    let name = command.argument(at: 0) as! String
    let params = command.argument(at: 1) as! NSDictionary
    let pluginResult:CDVPluginResult
    Analytics.logEvent(name, parameters: NSDictionary(dictionary: params) as? [String : Any] )
    pluginResult = CDVPluginResult.init(status: CDVCommandStatus_OK, messageAs: "OK")
    self.commandDelegate.send(pluginResult, callbackId: command.callbackId)
}
    
 
    @objc
    func logEventSelectContent(_ command: CDVInvokedUrlCommand) {
      let id = command.argument(at: 0) as! String
      let name = command.argument(at: 1) as! String
      let value = command.argument(at: 2) as! String
      let pluginResult:CDVPluginResult
        Analytics.logEvent(AnalyticsEventSelectContent, parameters: [
          AnalyticsParameterItemID: id,
          AnalyticsParameterItemName: name,
          AnalyticsParameterContentType: value,
        ])
      pluginResult = CDVPluginResult.init(status: CDVCommandStatus_OK, messageAs: "OK")
      self.commandDelegate.send(pluginResult, callbackId: command.callbackId)
  }
    
    
    
    
    @objc
    func setUserId(_ command: CDVInvokedUrlCommand) {
      let userId = command.argument(at: 0) as! String
      let pluginResult:CDVPluginResult
        Analytics.setUserID(userId)
      pluginResult = CDVPluginResult.init(status: CDVCommandStatus_OK, messageAs: "OK")
      self.commandDelegate.send(pluginResult, callbackId: command.callbackId)
  }
    
    
    @objc
    func setUserProperty(_ command: CDVInvokedUrlCommand) {
      let name = command.argument(at: 0) as! String
      let value = command.argument(at: 0) as! String
      let pluginResult:CDVPluginResult
        Analytics.setUserProperty(name, forName: value)
      pluginResult = CDVPluginResult.init(status: CDVCommandStatus_OK, messageAs: "OK")
      self.commandDelegate.send(pluginResult, callbackId: command.callbackId)
  }
    
    
    @objc
    func setCurrentScreen(_ command: CDVInvokedUrlCommand) {
      let screenName = command.argument(at: 0) as! String
      let pluginResult:CDVPluginResult
        Analytics.logEvent(AnalyticsEventScreenView,
                           parameters: [AnalyticsParameterScreenName: screenName,
                                        AnalyticsParameterScreenClass: "screenClass"])
      pluginResult = CDVPluginResult.init(status: CDVCommandStatus_OK, messageAs: "OK")
      self.commandDelegate.send(pluginResult, callbackId: command.callbackId)
  }
    

    @objc
    func setDefaultEventParameters(_ command: CDVInvokedUrlCommand) {
      let params = command.argument(at: 0) as! NSDictionary  //[String: Any]
      let pluginResult:CDVPluginResult
        Analytics.setDefaultEventParameters(NSDictionary(dictionary: params) as? [String : Any] )
      pluginResult = CDVPluginResult.init(status: CDVCommandStatus_OK, messageAs: "OK")
      self.commandDelegate.send(pluginResult, callbackId: command.callbackId)
  }
    
    @objc
    func resetAnalyticsData(_ command: CDVInvokedUrlCommand) {
      let pluginResult:CDVPluginResult
        Analytics.resetAnalyticsData()
      pluginResult = CDVPluginResult.init(status: CDVCommandStatus_OK, messageAs: "OK")
      self.commandDelegate.send(pluginResult, callbackId: command.callbackId)
  }
    
    
    @objc
    func setSessionTimeoutDuration(_ command: CDVInvokedUrlCommand) {
      let milliseconds = command.argument(at: 0) as! Double
      let pluginResult:CDVPluginResult
        Analytics.setSessionTimeoutInterval(milliseconds)
      pluginResult = CDVPluginResult.init(status: CDVCommandStatus_OK, messageAs: "OK")
      self.commandDelegate.send(pluginResult, callbackId: command.callbackId)
  }

}

extension NSDictionary {
  
  var swiftDictionary: [String : AnyObject] {
    var params: [String : AnyObject] = [:]
    let keys = self.allKeys.compactMap { $0 as? String }
    for key in keys {
      let keyValue = self.value(forKey: key) as AnyObject
        params[key] = keyValue
    }
    return params
  }
}


