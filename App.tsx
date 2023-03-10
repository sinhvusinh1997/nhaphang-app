import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {AppNavigator} from '~/navigators';
import {store} from '~/redux';

LogBox.ignoreAllLogs();

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
