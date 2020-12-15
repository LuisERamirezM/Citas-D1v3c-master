import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button} from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './ventanas/MainTabScreen/MainTabScreen';

import { DrawerContent} from './ventanas/DrawContent/DrawContent';
import ComentariosScreen from './ventanas/Comentarios/comentario';
import Login from './ventanas/login/Login2'
import Intro from './ventanas/Intro/Intros';
import Calendario from './UI/calendarioUI';
import CalendarRNP from './ventanas/Calendar/CalendarPicker'

import UserState from './context/user/userState';
import FirebaseState from './context/firebase/firebaseState' ;

import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import RelojUI from './UI/relojUI';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const TheDrawer = ()=> (
  <Drawer.Navigator drawerContent = {props => <DrawerContent {... props} />}>
            {/* <Drawer.Screen name="Login" component={Login}/> */}
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
            <Drawer.Screen name="ComentariosDrawer" component={ComentariosScreen} />
            {/* <Drawer.Screen name="SoporteScreen" component={SoporteScreen} /> */}
          </Drawer.Navigator>          
)
// --------------------------Initial --------------------------------
function App() {
  return (
    <FirebaseState>
      <UserState>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen 
              name="Intro" component = {Intro} options={{headerMode: 'none', headerShown: false}}
            />
            <Stack.Screen 
              name="Login" component= {Login} options={{headerMode: 'none', headerShown: false}}
            />

            <Stack.Screen 
              name="HomeDrawer"component={TheDrawer} options={{headerMode: 'none', headerShown: false}} 
            />
          </Stack.Navigator>          
        </NavigationContainer>
      </UserState>
    </FirebaseState>
  );
}

export default App;