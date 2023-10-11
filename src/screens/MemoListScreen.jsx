import { useEffect, useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';
import LogOutButton from '../components/LogOutButton';
import firebase from '../services/firebase';
import { getAuth } from 'firebase/auth';
import { collection, getFirestore, onSnapshot, orderBy, query } from 'firebase/firestore';

export default function MemoListScreen(props) {
  const { navigation } = props;
  const [memos, setMemos] = useState([]);

  const handlePress = () => {
    const auth = getAuth(firebase);
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

  // AppBarの変更
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton label="Log out" onPress={handlePress}></ LogOutButton>
    });
  }, []);

  // Memo List
  useEffect(() => {
    const { currentUser } = getAuth(firebase);
    let unSunscribe = () => { };
    if (currentUser) {
      const db = getFirestore(firebase);
      const q = query(collection(db, `users/${currentUser.uid}/memos`));
      unSunscribe = onSnapshot(q, (snapshot) => {
        const userMemos = [];
        snapshot.forEach((doc) => {
          let data = doc.data();
          userMemos.push({
            id: doc.id,
            bodyText: data.bodyText,
            updatedAt: data.updatedAt.toDate().toString(),
          });
        });
        setMemos(userMemos);
      }, (error) => {
        Alert.alert("データの読み込みに失敗しました。")
      });
    }
    return unSunscribe;
  }, []);


  return (
    <View style={styles.container}>
      {/* Memo List */}
      <MemoList memos={memos}></MemoList>
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