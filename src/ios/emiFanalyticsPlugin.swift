import FirebaseCore;
import FirebaseAnalytics;
import UIKit
import Foundation

@objc(emiFanalyticsPlugin)
public class emiFanalyticsPlugin : CDVPlugin {
    
    
    override func pluginInitialize() {

            // Do not call PhotoLibraryService here, as it will cause permission prompt to appear on app start.

        FirebaseApp.configure()

        }
    
  @objc
  func logEvent(_ command: CDVInvokedUrlCommand) {
   // let name = command.argument(at: 0) as! String ?? ""
    let name:String! = command.arguments.objectAtIndex(0)
    let parameters:NSDictionary! = command.arguments.objectAtIndex(1)
    let pluginResult:CDVPluginResult
    
    Analytics.logEvent(name, parameters:parameters)
    pluginResult = CDVPluginResult.init(status: CDVCommandStatus_OK)
    self.commandDelegate.send(pluginResult, callbackId: command.callbackId)
    
}



