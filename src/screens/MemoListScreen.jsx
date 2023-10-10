import { useEffect } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';
import LogOutButton from '../components/LogOutButton';
import firebase from '../services/firebase';
import { getAuth } from 'firebase/auth';

export default function MemoListScreen(props) {
  const { navigation } = props;
  const auth = getAuth(firebase);

  const handlePress = () => {
    auth.signOut()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        });
      })
      .catch((error) => {
        Alert.alert("ログアウトに失敗しました");
        console.log(error.code, error.message);
      });
  };

  useEffect(() => {
    // AppBarの変更
    navigation.setOptions({
      headerRight: () => <LogOutButton label="Log out" onPress={handlePress}></ LogOutButton>
    });
  }, []);
  return (
    <View style={styles.container}>
      {/* Memo List */}
      <MemoList></MemoList>
      {/* Floating Bottun */}
      <CircleButton iconType="+" onPress={() => { navigation.navigate('MemoCreate') }}></CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
});