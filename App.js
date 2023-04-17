import React from 'react';
import LottieView from "lottie-react-native";
// import {Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from 'react-native-onboarding-swiper';

function HomeScreen() {
  return (
    <Text>Home</Text>
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
        <Stack.Screen options={{headerShown: false}} name="OnBoarding" component={OnBoardingScreen} />
        <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}