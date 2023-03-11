import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {LoadingScreen} from '~/components';
import {RESTORE_TOKEN, RootState, setUser} from '~/redux';
import {LocalStorage, _format} from '~/utils';
import {StackNavigator} from './StackNavigator';

export const AppNavigator = () => {
  const {token: storeToken} = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState<null | string>(storeToken);

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
        dispatch(RESTORE_TOKEN(token));
        setUserToken(token);
      }
    } catch (e) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!storeToken) {
      getUserToken();
    }
  }, []);

  useEffect(() => {
    setUserToken(storeToken);
  }, [storeToken]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      <StackNavigator userToken={userToken} />
    </NavigationContainer>
  );
};
