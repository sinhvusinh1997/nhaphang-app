import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export const Home = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          height: '100%',
          width: '100%',
          justifyContent: 'flex-end',
        }}>
        <TouchableOpacity
          style={{
            borderWidth: 2,
            borderColor: '#fff',
            width: '50%',
            alignSelf: 'center',
            backgroundColor: '#0d1933',
            borderRadius: 10,
            shadowColor: '#192461',
            shadowOffset: {width: 0, height: 4},
            shadowOpacity: 2,
            shadowRadius: 5,
          }}>
          <Text
            style={{
              color: '#c6bfc2',
              fontSize: 20,
              textAlign: 'center',
              paddingTop: 10,
              paddingBottom: 10,
              textTransform: 'uppercase',
            }}>
            Home page
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
