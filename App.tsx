import {LogBox} from 'react-native';
import {AppNavigator} from '~/navigators';

LogBox.ignoreAllLogs();

const App = (): JSX.Element => {
  return <AppNavigator />;
};

export default App;
