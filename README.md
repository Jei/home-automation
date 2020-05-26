# Home Automation

A simple React Native + Redux Toolkit experiment.

## Setup

### React Native

To build and run the project, you should first setup the development environment for React Native. You can follow their [official guidelines](https://facebook.github.io/react-native/docs/getting-started) to do so. Be sure to use the instructions in the "React Native CLI Quickstart" section.

### Project

From the root of the project run:

```bash
yarn install
```

or if you use npm:

```bash
npm install
```

That's it!

## Run debug version

### Android device

Open a terminal and run from the root of the project:

```bash
yarn start
```

This will start the Metro bundler. To run the Android application, open another terminal and run:

```bash
yarn android
```

This command will build and run the app on any connected Android device, or on a new emulator if no physical device is available.

### Start mock server

The project uses the json-server package to provide a mock server for the application. Start the mock by running in a terminal:

```bash
yarn mock-server
```

You can use all the flags provided by json-server:
```bash
# This will delay every response by 1.5 seconds
yarn mock-server -d 1500
```
Run `yarn mock-server --help` to show more informations.

**IMPORTANT NOTE:** The server will automatically use `localhost` as host. If you run the app on an emulator, no further configuration is required. However, if you run the application on a physical device you will have to change the host to your current IP on your subnet, like this:

```bash
yarn mock-server --host <YOUR IP ADDRESS>
```

You can use the "Set current host" button in the home page of the app to set the same IP as endpoint.

## Package

### Android debug version

From the root of the project run:

```bash
yarn assembleAndroidDebug
```

This command should build a standalone debug version of the app, packaged as an .apk file.

The generated file will be saved as `<project root>/android/app/build/outputs/apk/debug/app-debug.apk`.
To install it on a connected device, run:

```bash
yarn installAndroidDebug
```

from the root of the project.

### Android release version

Follow the directions in https://reactnative.dev/docs/signed-apk-android#generating-an-upload-key to generate a keystore and an upload key for the app. Rename it `keystore.jks`.

Create a `keystore.properties` and paste the following lines in it, replacing the values with your keystore's informations:
```
storePassword=<YOUR KEYSTORE'S PASSWORD>
keyPassword=<YOUR UPLOAD KEY'S PASSWORD>
keyAlias=<YOUR UPLOAD KEY'S ALIAS>
storeFile=keystore.jks
```

Move both files under `<project root>/android/app`.

From the root of the project, run:
```bash
yarn assembleAndroidRelease
```
This will build a signed release version of the app. To install it on a connected device, run:
```bash
yarn installAndroidRelease
```
