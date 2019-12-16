import {AsyncStorage} from 'react-native'
const STORAGE_KEY = 'Token'
export  const readCookieFromStorage = async () => {
    const data = await AsyncStorage.getItem(STORAGE_KEY)
    // console.log(data)
    return data
  };