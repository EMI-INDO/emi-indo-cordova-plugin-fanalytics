

/*

if (window.cordova.platformId === 'ios') {

  

} else {
   


}


*/


    /*
// A pair of jeggings
const item_jeggings = {
  item_id: 'SKU_123',
  item_name: 'jeggings',
  item_category: 'pants',
  item_variant: 'black',
  item_brand: 'Google',
  price: 9.99
};

// A pair of boots
const item_boots = {
  item_id: 'SKU_456',
  item_name: 'boots',
  item_category: 'shoes',
  item_variant: 'brown',
  item_brand: 'Google',
  price: 24.99
};

*/

// A pair of socks

const default_item_socks = {
    item_id: 'SKU_456',
    item_name: 'ankle_socks',
    item_category: 'socks',
    item_variant: 'red',
    item_brand: 'Google',
    price: 2.99
  };
  
  const item_socks = {
    item_id: 'SKU_123',
    item_name: 'ankle_socks',
    item_category: 'socks',
    item_variant: 'red',
    item_brand: 'Google',
    price: 5.99
  };


  

  function logEvent() {

    if (typeof cordova !== 'undefined') {

        cordova.plugins.EmiFirebaseAnalyticsPlugin.logEvent({ name: "item_socks", params: item_socks });

    }
}
  
  


function logEventSelectContent() {

    if (typeof cordova !== 'undefined') {
  
      cordova.plugins.EmiFirebaseAnalyticsPlugin.logEventSelectContent({

      id: "item_id",
      name: "item_name",
      value: "item_value"
      
      });

    }
     
  }
  
  
  
  function resetAnalyticsData() {

    if (typeof cordova !== 'undefined') {
  
      cordova.plugins.EmiFirebaseAnalyticsPlugin.resetAnalyticsData();

   }
}


  
function setCurrentScreen() {

    if (typeof cordova !== 'undefined') {
  
      cordova.plugins.EmiFirebaseAnalyticsPlugin.setCurrentScreen({ screenName: "Main menu" });
    }

  }
  
  
  function setUserId() {

    if (typeof cordova !== 'undefined') {

      cordova.plugins.EmiFirebaseAnalyticsPlugin.setUserId({ userId: "123456" });

    }

  }
  
  
  
  
  function setUserProperty() {

    if (typeof cordova !== 'undefined') {
  
      cordova.plugins.EmiFirebaseAnalyticsPlugin.setUserProperty({
      name: 'favorite_food',
      value: "favoriteFood"

      });

    }

  }
  
  
  
  function setDefaultEventParameters() {

    if (typeof cordova !== 'undefined') {
  
      cordova.plugins.EmiFirebaseAnalyticsPlugin.setDefaultEventParameters({ params: default_item_socks });

  }

}


  
function setConsent() {

    if (typeof cordova !== 'undefined') {
  
      cordova.plugins.EmiFirebaseAnalyticsPlugin.setConsent({
      analyticsStorage: "DENIED", // String // DENIED | GRANTED
      adStorage: "DENIED", // String // DENIED | GRANTED
     
      });
     
    }
  }



//////////////////////
// cordova deviceready
/////////////////////
document.addEventListener("deviceready", function () {

   cordova.plugins.EmiFirebaseAnalyticsPlugin.setEnabled({ enabled: true });
	
	//Sets the duration of inactivity that terminates the current session. The default value is 1800000 (30 minutes).
	cordova.plugins.EmiFirebaseAnalyticsPlugin.setSessionTimeoutDuration({ milliseconds: 500 });

}, false);
