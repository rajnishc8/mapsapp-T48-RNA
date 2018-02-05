# mapsapp-T48-RNA
# React Native App 
Google map app using direction API's , as part of Hasura Team Task.
This app is react-native app. 
Directions app using [`react-native-maps`](https://github.com/airbnb/react-native-maps/) – Draw a route between two coordinates, powered by the Google Maps Directions API.
Display's Time and duration to destination.

![react-native-maps-directions](https://photos.google.com/share/AF1QipM6wRrvV1KrdET-klMAgUziYzjaIWMgxIXxQE-vZM3572gedXon_nEt64Hd_D8e3A/photo/AF1QipPBCnEkfjsT_nMqpA2lMIDW2zSbp4szNXlMBabL?key=cEFFdVF4LXM5MXVNR1lNTkxwOF9SR0s4dVNKd0hR)

https://photos.google.com/share/AF1QipM6wRrvV1KrdET-klMAgUziYzjaIWMgxIXxQE-vZM3572gedXon_nEt64Hd_D8e3A?key=cEFFdVF4LXM5MXVNR1lNTkxwOF9SR0s4dVNKd0hR

## To test this out

1. Clone repository   
```
git clone https://github.com/rajnishc8/mapsapp-T48-RNA.git
cd mapsapp-T48-RNA
npm install
react-native run-android
```

## Get Started

### Creating this app 
1.  react-native init mapsapp-T48-RNA
2.  cd mapsapp-T48-RNA
```
    2a.) npm install --save react-native-maps
    2b.) react-native link        <- do this after installing all npm packages.
```
3.  In order to use Google maps you will need to create a Google Maps API key.
```
    3a.)  https://developers.google.com/maps/documentation/android-api/start
```
4. And finally in your android/app/src/main/AndroidManifest.xml file you will need to insert your API key inside the <application> section.
```
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <application>
       <meta-data
          android:name="com.google.android.geo.API_KEY"
          android:value="INSERT GOOGLE MAPS API KEY HERE!!!!!!!"/>
    </application>
```
5. react-native run-android.
6. wait few moments . You should see app running in device or emulator.
 