import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LogInScreen from './src/screens/LogInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox } from 'react-native';

const Stack = createNativeStackNavigator();

// 不要な警告を非表示
LogBox.ignoreLogs(['Setting a timer']);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: '#467FD3' },
          headerTitleStyle: { color: '#ffffff' },
          headerTitle: 'Memo App',
          headerTintColor: '#ffffff',
          headerBackTitle: 'Back',
          animation: 'slide_from_right',
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      >
        <Stack.Screen name="MemoList" component={MemoListScreen}></Stack.Screen>
        <Stack.Screen name="MemoDetail" component={MemoDetailScreen}></Stack.Screen>
        <Stack.Screen name="MemoCreate" component={MemoCreateScreen}></Stack.Screen>
        <Stack.Screen name="MemoEdit" component={MemoEditScreen}></Stack.Screen>
        <Stack.Screen
          options={{
            animation: 'fade_from_bottom',
          }}
          name="Login" component={LogInScreen}></Stack.Screen>
        <Stack.Screen
          options={{
            animation: 'fade_from_bottom',
          }}
          name="SignUp" component={SignUpScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

  );
}