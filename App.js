import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './ventanas/MainTabScreen/MainTabScreen';

import { DrawerContent } from './ventanas/DrawContent/DrawContent';
import Login from './ventanas/login/Login2'
import Intro from './ventanas/Intro/Intros';


import UserState from './context/user/userState';
import FirebaseState from './context/firebase/firebaseState';

import { createStackNavigator } from '@react-navigation/stack';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const TheDrawer = () => (
  <Drawer.Navigator  drawerContent={props => <DrawerContent {...props} />}>
    {<Drawer.Screen name="HomeDrawer"   component={MainTabScreen} />}
  </Drawer.Navigator>
)

function App() {
  return (
    <FirebaseState>
      <UserState>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Intro" component={Intro} options={{ headerMode: 'none', headerShown: false }}
            />
            <Stack.Screen
              name="Login" component={Login} options={{ headerMode: 'none', headerShown: false }}
            />

            <Stack.Screen
              name="HomeDrawer"  component={TheDrawer} options={{ headerMode: 'none', headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </UserState>
    </FirebaseState>
  );
}

export default App;