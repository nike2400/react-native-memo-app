import { useEffect, useState } from 'react';
import { StyleSheet, View, Alert, Text } from 'react-native';
import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';
import LogOutButton from '../components/LogOutButton';
import Button from '../components/Button';
import firebase from '../services/firebase';
import { getAuth } from 'firebase/auth';
import { collection, getFirestore, onSnapshot, query } from 'firebase/firestore';
import Loading from '../components/Loading';

export default function MemoListScreen(props) {
  const { navigation } = props;
  const [memos, setMemos] = useState([]);
  const [isLoading, setLoading] = useState(false);

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
      setLoading(true);
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
        setLoading(false);
      }, (error) => {
        setLoading(false);
        Alert.alert("データの読み込みに失敗しました。")
      });
    }
    return unSunscribe;
  }, []);

  if (memos.length === 0) {
    return (
      <View style={emptyStyles.container}>
        <Loading isLoading={isLoading}></Loading>
        <View style={emptyStyles.inner}>
          <Text style={emptyStyles.title}>Create your first memo</Text>
          <Button customStyle={emptyStyles.button} label="Create" onPress={() => { navigation.navigate('MemoCreate') }}></Button>
        </View>
      </View>
    );
  }

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

const emptyStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F4F8',
  },
  inner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 24,
  },
  button: {
    alignSelf: 'center',
  }
});