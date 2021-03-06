import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteScreen from './screens/writeScreen';
import ReadScreen from './screens/readScreen';

export default class App extends React.Component{
  render(){
    return(
        <AppContainer/>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  WRITING: {screen: WriteScreen},
  READING: {screen: ReadScreen}
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      if(routeName == "READING"){
      return(
        <Image
         source = {require('./assets/read.png')}
         style = {{width: 30, height: 30}}
        />
      )
    }
    else if(routeName == "WRITING"){
      return(
        <Image
         source = {require('./assets/write.png')}
         style = {{width: 30, height: 30}}
        />
      )
    }
   }
  })
}
)

const AppContainer = createAppContainer(TabNavigator);