import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    'CircularStd-Black': require('./src/assets/fonts/CircularStd-Black.ttf'),
    'CircularStd-Bold': require('./src/assets/fonts/CircularStd-Bold.ttf'),
    'CircularStd-Book': require('./src/assets/fonts/CircularStd-Book.ttf'),
    'CircularStd-Medium': require('./src/assets/fonts/CircularStd-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
          <Stack.Screen
            name='Home'
            component={HomeScreen}
            options={{ title: 'Characters' }}
          />
          <Stack.Screen
            name='Detail'
            component={DetailScreen}
            options={{ title: 'Detail Screen' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
