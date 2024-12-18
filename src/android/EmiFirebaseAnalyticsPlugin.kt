package emi.indo.cordova.plugin.fanalytics;

import android.app.Activity
import android.content.Context
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

/**
 * Created by EMI INDO So on May 6, 2023
 */

class EmiFirebaseAnalyticsPlugin : CordovaPlugin() {
    private lateinit var firebaseAnalytics: FirebaseAnalytics
    private var mActivity: Activity? = null
    private var mContext: Context? = null
    var consentMap: MutableMap<ConsentType, ConsentStatus> = EnumMap(ConsentType::class.java)
    override fun initialize(cordova: CordovaInterface, webView: CordovaWebView) {
        super.initialize(cordova, webView)
        mActivity = this.cordova.activity
        mContext = this.cordova.activity.applicationContext
        firebaseAnalytics = FirebaseAnalytics.getInstance(mContext!!)
    }

    @Throws(JSONException::class)
    override fun execute(action: String, args: JSONArray, callbackContext: CallbackContext): Boolean {

        when (action) {
            "setEnabled" -> {
                val options = args.getJSONObject(0)
                val enabled = options.getBoolean("setEnabled")
                try {
                    firebaseAnalytics.setAnalyticsCollectionEnabled(enabled)
                    callbackContext.success()
                } catch (e: NullPointerException) {
                    callbackContext.error(e.toString())
                }
                return true
            }
            "logEvent" -> {
                val options = args.getJSONObject(0)
                val name = options.getString("name")
                val params = options.getJSONObject("params")
                val bundle = createBundleFromJSONObject(params)
                try {
                    firebaseAnalytics.logEvent(name, bundle)
                    callbackContext.success()
                } catch (e: NullPointerException) {
                    callbackContext.error(e.toString())
                }
                return true
            }
            "logEventSelectContent" -> {
                val options = args.getJSONObject(0)
                val id = options.getString("id")
                val name = options.getString("name")
                val value = options.getString("value")
                try {
                    val bundle = Bundle()
                    bundle.putString(FirebaseAnalytics.Param.ITEM_ID, id)
                    bundle.putString(FirebaseAnalytics.Param.ITEM_NAME, name)
                    bundle.putString(FirebaseAnalytics.Param.CONTENT_TYPE, value)
                    firebaseAnalytics.logEvent(FirebaseAnalytics.Event.SELECT_CONTENT, bundle)
                    callbackContext.success()
                } catch (e: NullPointerException) {
                    callbackContext.error(e.toString())
                }
                return true
            }
            "setUserId" -> {
                val options = args.getJSONObject(0)
                val userId = options.getString("userId")
                try {
                    firebaseAnalytics.setUserId(userId)
                    callbackContext.success()
                } catch (e: NullPointerException) {
                    callbackContext.error(e.toString())
                }
                return true
            }
            "setUserProperty" -> {
                val options = args.getJSONObject(0)
                val name = options.getString("name")
                val value = options.getString("value")
                try {
                    firebaseAnalytics.setUserProperty(name, value)
                    callbackContext.success()
                } catch (e: NullPointerException) {
                    callbackContext.error(e.toString())
                }
                return true
            }
            "resetAnalyticsData" -> {
                try {
                    firebaseAnalytics.resetAnalyticsData()
                    callbackContext.success()
                } catch (e: NullPointerException) {
                    callbackContext.error(e.toString())
                }
                return true
            }
            "setCurrentScreen" -> {
                val options = args.getJSONObject(0)
                val screenName = options.getString("screenName")
                try {
                    val bundle = Bundle()
                    bundle.putString(FirebaseAnalytics.Param.SCREEN_NAME, screenName)
                    firebaseAnalytics.logEvent(FirebaseAnalytics.Event.SCREEN_VIEW, bundle)
                    callbackContext.success()
                } catch (e: NullPointerException) {
                    callbackContext.error(e.toString())
                }
                return true
            }
            "setDefaultEventParameters" -> {
                val options = args.getJSONObject(0)
                val params = options.getJSONObject("params")
                val bundle = createBundleFromJSONObject(params)
                try {
                    firebaseAnalytics.setDefaultEventParameters(bundle)
                    callbackContext.success()
                } catch (e: NullPointerException) {
                    callbackContext.error(e.toString())
                }
                return true
            }
            "setConsent" -> {
                val options = args.getJSONObject(0)
                val analyticsStorage = options.getString("analyticsStorage")
                val adStorage = options.getString("adStorage")
                try {
                    consentMap[ConsentType.ANALYTICS_STORAGE] = ConsentStatus.valueOf(analyticsStorage)
                    consentMap[ConsentType.AD_STORAGE] = ConsentStatus.valueOf(adStorage)
                    firebaseAnalytics.setConsent(consentMap)
                    callbackContext.success()
                } catch (e: NullPointerException) {
                    callbackContext.error(e.toString())
                }
                return true
            }
            "setAdMobRevenuePaid" -> {
                val options = args.getJSONObject(0)
                try {
                    val data: JSONObject = options.getJSONObject("data")
                    val value = data.optDouble("value", 0.0)
                    val currencyCode = data.optString("currencyCode", "USD")
                    val precision = data.optString("precision", "unknown")
                    val adUnitId = data.optString("adUnitId", "unknown")
                    val bundle = Bundle().apply {
                        putDouble("value", value)
                        putString("currencyCode", currencyCode)
                        putString("precision", precision)
                        putString("adUnitId", adUnitId)
                    }
                    firebaseAnalytics.logEvent(FirebaseAnalytics.Event.AD_IMPRESSION, bundle)
                    callbackContext.success("Event logged successfully.")
                } catch (e: JSONException) {
                    callbackContext.error("JSONException: ${e.message}")
                } catch (e: Exception) {
                    callbackContext.error("Exception: ${e.message}")
                }
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
            when (obj) {
                is Int -> bundle.putInt(key, obj)
                is Double -> bundle.putDouble(key, obj)
                is Float -> bundle.putFloat(key, obj)
                is Boolean -> bundle.putBoolean(key, obj)
                is JSONObject -> bundle.putBundle(key, createBundleFromJSONObject(obj))
                is JSONArray -> {
                    val bundleArray = ArrayList<Bundle>(obj.length())
                    for (idx in 0 until obj.length()) {
                        val item = obj.get(idx)
                        if (item is JSONObject) {
                            bundleArray.add(createBundleFromJSONObject(item))
                        } else {
                            // Log data non-JSONObject (opsional)
                            // Log.w("createBundle", "Item at index $idx is not a JSONObject: $item")
                        }
                    }
                    bundle.putParcelableArrayList(key, bundleArray)
                }
                else -> bundle.putString(key, obj.toString())
            }
        }
        return bundle
    }


    companion object {
        private const val TAG = "FirebaseAnalyticsPlugin"
    }
}