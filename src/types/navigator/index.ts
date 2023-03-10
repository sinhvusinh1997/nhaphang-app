import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Routers = {
  Login: any;
  Register: any;
  ForgetPass: any;
  HomeDrawer: any;
};

export type TViewProps = NativeStackScreenProps<Routers>;
