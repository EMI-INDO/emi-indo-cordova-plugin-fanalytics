package emi.indo.cordova.plugin.fanalytics;

import android.os.Bundle
import com.google.firebase.analytics.FirebaseAnalytics
import com.google.firebase.analytics.FirebaseAnalytics.ConsentStatus
import com.google.firebase.analytics.FirebaseAnalytics.ConsentType
import org.apache.cordova.CallbackContext
import org.apache.cordova.CordovaInterface
import org.apache.cordova.CordovaPlugin
import org.apache.cordova.CordovaWebView
import org.json.JSONArray
import org.json.JSONException
import org.json.JSONObject
import java.util.*

class emiFanalyticsPlugin : CordovaPlugin() {
    private var mFirebaseAnalytics: FirebaseAnalytics? = null
    var consentMap: MutableMap<ConsentType, ConsentStatus> = EnumMap(ConsentType::class.java)
    override fun initialize(cordova: CordovaInterface, webView: CordovaWebView) {
        super.initialize(cordova, webView)
        mFirebaseAnalytics = FirebaseAnalytics.getInstance(this.cordova.activity.applicationContext)
    }

    @Throws(JSONException::class)
    override fun execute(action: String, args: JSONArray, callbackContext: CallbackContext): Boolean {
        when (action) {
            "setEnabled" -> {
                val enabled = args.getBoolean(0)
                try {
                    FirebaseAnalytics.getInstance(cordova.activity).setAnalyticsCollectionEnabled(enabled)
                    callbackContext.success()
                } catch (e: NullPointerException) {
                    callbackContext.error(e.toString())
                }
                return true
            }
            "logEvent" -> {
                val name = args.getString(0)
                val params = args.getJSONObject(1)
                val bundle = createBundleFromJSONObject(params)
                try {
                    mFirebaseAnalytics!!.logEvent(name, bundle)
                    callbackContext.success()
                } catch (e: NullPointerException) {
                    callbackContext.error(e.toString())
                }
                return true
            }
            "logEventSelectContent" -> {
                val id = args.getString(0)
                val name = args.getString(1)
                val value = args.getString(2)
                try {
                    val bundle = Bundle()
                    bundle.putString(FirebaseAnalytics.Param.ITEM_ID, id)
                    bundle.putString(FirebaseAnalytics.Param.ITEM_NAME, name)
                    bundle.putString(FirebaseAnalytics.Param.CONTENT_TYPE, value)
                    mFirebaseAnalytics!!.logEvent(FirebaseAnalytics.Event.SELECT_CONTENT, bundle)
                    callbackContext.success()
                } catch (e: NullPointerException) {
                    callbackContext.error(e.toString())
                }
                return true
            }
            "setUserId" -> {
                val userId = args.getString(0)
                try {
                    mFirebaseAnalytics!!.setUserId(userId)
                    callbackContext.success()
                } catch (e: NullPointerException) {
                    callbackContext.error(e.toString())
                }
                return true
            }
            "setUserProperty" -> {
                val name = args.getString(0)
                val value = args.getString(1)
                try {
                    mFirebaseAnalytics!!.setUserProperty(name, value)
                    callbackContext.success()
                } catch (e: NullPointerException) {
                    callbackContext.error(e.toString())
                }
                return true
            }
            "resetAnalyticsData" -> {
                try {
                    mFirebaseAnalytics!!.resetAnalyticsData()
                    callbackContext.success()
                } catch (e: NullPointerException) {
                    callbackContext.error(e.toString())
                }
                return true
            }
            "setCurrentScreen" -> {
                val screenName = args.getString(0)
                try {
                    val bundle = Bundle()
                    bundle.putString(FirebaseAnalytics.Param.SCREEN_NAME, screenName)
                    mFirebaseAnalytics!!.logEvent(FirebaseAnalytics.Event.SCREEN_VIEW, bundle)
                    callbackContext.success()
                } catch (e: NullPointerException) {
                    callbackContext.error(e.toString())
                }
                return true
            }
            "setDefaultEventParameters" -> {
                val params = args.getJSONObject(0)
                val bundle = createBundleFromJSONObject(params)
                try {
                    mFirebaseAnalytics!!.setDefaultEventParameters(bundle)
                    callbackContext.success()
                } catch (e: NullPointerException) {
                    callbackContext.error(e.toString())
                }
                return true
            }
            "setConsent" -> {
                val analyticsStorage = args.getString(0)
                val adStorage = args.getString(1)
                consentMap[ConsentType.ANALYTICS_STORAGE] = ConsentStatus.valueOf(analyticsStorage)
                consentMap[ConsentType.AD_STORAGE] = ConsentStatus.valueOf(adStorage)
                mFirebaseAnalytics!!.setConsent(consentMap)
                return true
            }
        }
        return false
    }

    @Throws(JSONException::class)
    private fun createBundleFromJSONObject(params: JSONObject): Bundle {
        val bundle = Bundle()
        val iter = params.keys()
        while (iter.hasNext()) {
            val key = iter.next()
            val obj = params[key]
            if (obj is Int) {
                bundle.putInt(key, obj)
            } else if (obj is Double) {
                bundle.putDouble(key, obj)
            } else if (obj is Float) {
                bundle.putFloat(key, obj)
            } else if (obj is JSONObject) {
                val item = createBundleFromJSONObject(obj)
                bundle.putBundle(key, item)
            } else if (obj is JSONArray) {
                val objArr = obj
                val bundleArray = ArrayList<Bundle>(objArr.length())
                for (idx in 0 until objArr.length()) {
                    val tmp = objArr[idx]
                    if (tmp is JSONObject) {
                        val item = createBundleFromJSONObject(objArr.getJSONObject(idx))
                        bundleArray.add(item)
                    }
                }
                bundle.putParcelableArrayList(key, bundleArray)
            } else {
                bundle.putString(key, obj.toString())
            }
        }
        return bundle
    }

    companion object {
        private const val TAG = "FirebaseAnalyticsPlugin"
    }
}