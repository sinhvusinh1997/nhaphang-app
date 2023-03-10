import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {LoadingScreen} from '~/components';
import {setUser} from '~/redux';
import {LocalStorage, _format} from '~/utils';
import {ForgetPass, Login, Register} from '~/views';
import {DrawerNavigator} from './DrawerNavigator';

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState<any>(null);
  const dispatch = useDispatch();

  const getUserToken = async () => {
    const token = await LocalStorage.getToken();
    try {
      if (token) {
        const user: any = JSON.parse(
          _format.getJWTDecode(token)[
            'http://schemas.microsoft.com/ws/2008/06/identity/claims/userdata'
          ],
        );

        dispatch(setUser(user));
        setUserToken(token);
      }
    } catch (e) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUserToken();
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

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
          <Stack.Screen name="ForgetPass" component={ForgetPass} />
        </>
      ) : (
        <Stack.Screen name="HomeDrawer" component={DrawerNavigator} />
      )}
    </Stack.Navigator>
  );
};
