## Configuring App Information in AppGallery Connect

Before you start developing an app, configure app information in AppGallery Connect.

### 1 Registering as a Developer

Before you get started, you must register as a HUAWEI developer and complete identity verification on the [HUAWEI Developer](https://developer.huawei.com/consumer/en/) website. For details, please refer to [Register a HUAWEI ID](https://developer.huawei.com/consumer/en/doc/10104).

### 2 Creating an App

Create an app by referring to [Creating an App](https://developer.huawei.com/consumer/en/doc/development/AppGallery-Connect/agc-create_app) at the AppGallery Connect help center. Set the following parameters as described:

- Package type: **APK (Android app)**

- Devices: **Mobile phone**

- App category: **App**

### 3 Generating a Signing Certificate Fingerprint

A signing certificate fingerprint is used to verify the authenticity of an app when it attempts to access an HMS Core service through the HMS SDK. Before using the HMS Core service, you must locally generate a signing certificate fingerprint and configure it in AppGallery Connect.


Please ensure that the following conditions are met:

- You have created the app's signature file. For details, please refer to [Generating a Signing Certificate](https://developer.huawei.com/consumer/en/codelab/HMSPreparation/index.html#3).

- The JDK has been installed on your PC.

!!!!! TODO OTHER PREPARATIONS

You can use the keytool tool in the JDK package to generate fingerprints as follows:

1. Open the command line tool and run the following command, in which <keystore-file> is the complete path to the app's signature file:

```bash
keytool -list -v -keystore <keystore-file>
```

2. Obtain the SHA-256 fingerprint from the result. An example of the result is as follows:
```bash
Alias name: <alias-name>
Creation date: Aug 29, 2019
Entry type: PrivateKeyEntry
Certificate chain length: 1
Certificate[1]:
Owner: CN=Android Debug, OU=hua, C=zg
Issuer: CN=Android Debug, OU=hua, C=zg
Serial number: 1e46890c
Valid from: Thu Aug 29 21:09:44 CST 2019 until: Mon Jan 14 21:09:44 CST 2047
Certificate fingerprints:
         MD5:  EC:29:9E:ED:18:35:E0:A0:93:EA:AD:E2:D9:4D:B7:6A
         SHA1: E6:6B:61:C9:E5:86:81:E7:3A:7A:86:11:87:FB:DD:B6:2F:72:9D:80
         SHA256: 39:B1:5E:52:70:8C:07:6D:5A:F7:0B:96:8B:D1:77:A0:8F:CA:09:08:72:90:FD:2A:1E:DB:9A:6C:2F:4E:B5:97
Signature algorithm name: SHA256withRSA
Subject Public Key Algorithm: 2048-bit RSA key
Version: 3
```

### 4 Configuring the Signing Certificate Fingerprint

1. Sign in to [AppGallery Connect](https://developer.huawei.com/consumer/en/service/josp/agc/index.html) and select **My apps**.

2. Find your app from the list and click it.

3. Go to **Develop** > **Overview** > **App information** and set **SHA-256 certificate fingerprint** to the SHA-256 fingerprint that is generated in the preceding section of [Generating a Signing Certificate Fingerprint](https://developer.huawei.com/consumer/en/doc/development/HMS-Guides/hms-map-v4-configuringinagc#h3).

![Configuring the Signing Certificate Fingerprint](../img/ConfiguringTheSigningCertificateFingerprint.png)

4. After completing configuration, click  ✓.


### 5 Enabling Required Services

To use Map Kit, enable it in AppGallery Connect.

For details, please refer to [Enabling Services](https://developer.huawei.com/consumer/en/doc/development/AppGallery-Connect/agc-enable_service).





I assume you have created an App at AppGallery Connect and enabled Map Kit APIs. 

[https://developer.huawei.com/consumer/en/doc/development/HMS-Guides/hms-map-v4-configuringinagc](https://developer.huawei.com/consumer/en/doc/development/HMS-Guides/hms-map-v4-configuringinagc)
