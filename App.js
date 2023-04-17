import React, { useState, useEffect } from 'react';
import LottieView from "lottie-react-native";
import { Text, View, StyleSheet, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from 'react-native-onboarding-swiper';
import { BarCodeScanner } from 'expo-barcode-scanner';

function HomeScreen() {
  return (
    <View></View>
  );
}
function ScanQr(){
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);
  const checkID=(data)=>{
    const data2=parseInt(data)
    if (data.length!=7)
      return false
    if (data2<1700000 || data2>2300000) 
      return false
    
      return true
  }
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    if (checkID(data))
      alert(`Student ID ${data} has been scanned!`);
    else
      alert('Invalid Id');
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{flex:1,paddingTop:50}}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}
function OnBoardingScreen() {
  return (
    <Onboarding
    titleStyles={{ color: '#5c59e3', width: 300}}
    subTitleStyles={{width:350}}
     pages={[
    {
      backgroundColor: '#f2f4f6',
      image: <LottieView autoPlay loop source={require('./assets/48646-girl-running.json')} style={{height:300, width:300, backgroundColor:'#f2f4f6'}} />,
      title: 'FIND YOUR BUDDY',
      subtitle: 'Feature that connects users with like-minded individuals based on shared interests and goals, fostering new friendships and fitness partnerships.',
    },

    {
      backgroundColor: '#f2f4f6',
      image: <LottieView autoPlay loop source={require('./assets/42941-man-running.json')} style={{height:300, width:300, backgroundColor:'#f2f4f6'}} />,      
      title: 'HEALTHIER BODY AND MIND',
      subtitle: 'A lounge for runners around the world to connect and share their love of running.',
    },
    
    {
      backgroundColor: '#f2f4f6',
      image: <LottieView autoPlay loop source={require('./assets/36222-couple.json')} style={{height:300, width:300, backgroundColor:'#f2f4f6'}} />,
      title: 'THE JOY RUNNING TOGETHER',
      subtitle: 'Find your perfect running buddy with our app, stay motivated, reach your fitness goals, and make new friends!',
    },
  ]}
/>

  )
}
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen options={{headerShown: false}} name="ScanQr" component={ScanQr} />
        <Stack.Screen options={{headerShown: false}} name="OnBoarding" component={OnBoardingScreen} />
        <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}