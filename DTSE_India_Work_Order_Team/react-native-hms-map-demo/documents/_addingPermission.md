To call capabilities of HUAWEI Map Kit, you must apply for the following permissions for your app:
```xml
<uses-permission android:name="android.permission.INTERNET"/> 
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/> 
```

To obtain the current device location, you need to add the following permissions in the AndroidManifest.xml file. In Android 6.0 and later, you need to apply for these permissions dynamically.
```xml
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/> 
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
```

