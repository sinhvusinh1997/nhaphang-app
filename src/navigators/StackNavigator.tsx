import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {ForgetPass, Login, Register} from '~/views';
import {DrawerNavigator} from './DrawerNavigator';

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState<any>(null);

  // const getUserToken = async () => {
  //   const token = await AsyncStorage.getItem('@storage_token');
  //   console.log('token: ', token);
  //   try {
  //     if (token) {
  //       setUserToken(token);
  //     }
  //   } catch (e) {
  //     // error reading value
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   getUserToken();
  // }, []);

  // if (isLoading) {
  //   return <ActivityIndicator size="large" />;
  // }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {userToken === null ? (
        <>
          <Stack.Screen name="Login">
            {props => <Login {...props} setUserToken={setUserToken} />}
          </Stack.Screen>
          <Stack.Screen name="Register">
            {props => <Register {...props} setUserToken={setUserToken} />}
          </Stack.Screen>
          <Stack.Screen name="ForgetPass">
            {props => <ForgetPass {...props} setUserToken={setUserToken} />}
          </Stack.Screen>
        </>
      ) : (
        <Stack.Screen name="HomeDrawer" component={DrawerNavigator} />
      )}
    </Stack.Navigator>
  );
};
