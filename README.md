# Tap Counter

A minimal, clean counter app for Android. Tap the big green button to count; use −1 to step back or Reset to start over. Supports dark mode automatically.

## Features
- Large tap button with haptic feedback
- Decrement (−1) and Reset buttons
- Automatic dark / light mode
- No ads, no permissions, no internet required

---

## Prerequisites (one-time setup)

| Tool | Version | Download |
|------|---------|----------|
| Node.js | 18 or 20 | https://nodejs.org |
| JDK | 17 | https://adoptium.net (pick **JDK 17 LTS**) |
| Android Studio | latest | https://developer.android.com/studio |

After installing Android Studio, open it → **More Actions → SDK Manager** and install:
- Android SDK Platform 34
- Android SDK Build-Tools 34
- Android Emulator

Set environment variables (Windows — add to System Variables):
```
ANDROID_HOME = C:\Users\<you>\AppData\Local\Android\Sdk
Path += %ANDROID_HOME%\platform-tools
JAVA_HOME = C:\Program Files\Eclipse Adoptium\jdk-17...
```

---

## Install dependencies

```bash
cd "e:\Sites + Apps\TapCounter"
npm install
```

---

## Run on emulator / device (development)

```bash
npx react-native run-android
```

---

## Build for Google Play Store

### Step 1 — Generate a release keystore (one time only)

```bash
keytool -genkeypair -v -storetype PKCS12 ^
  -keystore android/app/tap-counter-upload-key.keystore ^
  -alias tap-counter-key-alias ^
  -keyalg RSA -keysize 2048 -validity 10000
```

You will be prompted for passwords — save them somewhere safe.

### Step 2 — Add your passwords to gradle.properties

Open `android/gradle.properties` and uncomment + fill in:

```properties
MYAPP_UPLOAD_STORE_FILE=tap-counter-upload-key.keystore
MYAPP_UPLOAD_KEY_ALIAS=tap-counter-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=<your_store_password>
MYAPP_UPLOAD_KEY_PASSWORD=<your_key_password>
```

> **Never commit gradle.properties with real passwords to git.**

### Step 3 — Build the release AAB

```bash
cd android
gradlew bundleRelease
```

Output: `android/app/build/outputs/bundle/release/app-release.aab`

### Step 4 — Upload to Play Store

1. Go to https://play.google.com/console
2. Create a new app → **Tap Counter**
3. Fill in the store listing (description, screenshots, icon)
4. Upload `app-release.aab` under **Production → Releases**
5. Submit for review

---

## App details

| Field | Value |
|-------|-------|
| Package ID | `com.tapcounter` |
| Min Android | 5.0 (API 21) |
| Target Android | 14 (API 34) |
| Version | 1.0 (versionCode 1) |
