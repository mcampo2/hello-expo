# Create iOS bundle
mkdir "ios"
npx react-native bundle --entry-file index.js --platform ios --dev false \
  --bundle-output ios/main.jsbundle --assets-dest ios;

# Create Android bundle
mkdir "android/app/src/main/assets/";
mkdir "android/app/src/main/res";
npx react-native bundle --entry-file index.js --platform android --dev false  \
  --bundle-output android/app/src/main/assets/index.android.bundle \
  --assets-dest android/app/src/main/res;
