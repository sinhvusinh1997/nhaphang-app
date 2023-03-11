import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN = 'ACCESS_TOKEN';
const USER = 'USER';

export const LocalStorage = {
  async setToken(token: string) {
    await AsyncStorage.setItem(TOKEN, token);
  },
  async getToken() {
    const response = await AsyncStorage.getItem(TOKEN);
    return response == null ? null : response;
  },
  async deleteToken() {
    await AsyncStorage.removeItem(TOKEN);
  },
  async setUserInformation(params: any) {
    try {
      let temp = JSON.stringify(params);
      await AsyncStorage.setItem(USER, temp);
    } catch (error) {
      console.log(error);
    }
  },
  async getUserInformation() {
    const response = await AsyncStorage.getItem(USER);
    return response == null ? null : JSON.parse(response);
  },
  async mergeUser(params: any) {
    await AsyncStorage.mergeItem(USER, JSON.stringify(params));
  },
  async logout() {
    await AsyncStorage.multiRemove([USER, TOKEN]);
  },
};
