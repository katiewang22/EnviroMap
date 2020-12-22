import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapView from 'react-native-maps';
import { styles } from './AppStyles.js';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Go to Map"
        onPress={() => navigation.navigate('Map')}
      />
    </View>
  );
}

function MapScreen() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}
        initialRegion={{
          latitude: 33.748997, 
          longitude: -84.387985, //coords of Atlanta, but want to get coords of phone in the future
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,

          /*latitude: Location().latitude,
          longitude: Location().longitude, TO DO: connect location var from Location.js to here
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,*/
        }}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;