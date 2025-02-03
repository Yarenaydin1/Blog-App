import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';  // ✨ Düzeltildi

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CreateScreen from './screens/CreateScreen';
import { Provider } from './context/BlogContext';
import ShowScreen from './screens/ShowScreen';
import AntDesign from '@expo/vector-icons/AntDesign';
import EditScreen from './screens/EditScreen';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitle: 'Blog App' }}>
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                  <AntDesign name="pluscircleo" size={25} color="black" />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen name="Create" component={CreateScreen} />
          <Stack.Screen 
            name="Show" 
            component={ShowScreen} 
            options={({ navigation, route }) => ({
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: route.params.id })}>
                  <FontAwesome name="pencil" size={25} color="black" />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen name="Edit" component={EditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
