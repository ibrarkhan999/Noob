
package com.noob

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class MyKotlinModule(
    reactContext: ReactApplicationContext
) : ReactContextBaseJavaModule(reactContext) {

    override fun getName() = "MyKotlinModule"

    @ReactMethod
    fun sayHello(promise: Promise) {
        promise.resolve("Hello from Kotlin!")
    }
}
