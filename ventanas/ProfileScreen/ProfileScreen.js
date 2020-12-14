import 'react-native-gesture-handler';
import React,{ useState } from 'react';

import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Agenda, Calendar, CalendarList} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';

// Datos Calendario
const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const Schedule: React.FC = () => {
  const [items, setItems] = useState({});

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Cita para ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };
// End Datos Calendario

const renderItem = (item) => {
  return (
    <TouchableOpacity style={{marginRight: 5, marginTop: 20,}}>
      <Card>
        <Card.Content>
          <View
            style={{
             
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              
            }}>
            <Text style ={{color:'#256d78'}}>{item.name} </Text>
            <Avatar.Text label="Cita" />
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

const dias = (dia,item) => {
  return (
    <View style={{height:200,width:'90%',backgroundColor:'green'}}>
      <Text>Este es el dia</Text>
      {/* <Text>{dia} - {item}</Text> */}  
    </View>
  )
}

return (
  <View style={{flex: 1}}>
    <Agenda 
      items={items}
      loadItemsForMonth={loadItems}
      selected={'2020-06-30'}      
      onDayPress={(day)=>{console.log('day pressed')}}
      onDayChange={(day)=>{console.log('day changed')}}
      renderDay={dias}
    />
  </View>
);
};


function DetailsScreen({navigation}) {
    return (
      <Text>Hola</Text>
    );
  }

export default Schedule;