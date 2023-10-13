import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import CircleButton from '../components/CircleButton';
import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import firebase from '../services/firebase';
import { doc, getFirestore, onSnapshot, query } from 'firebase/firestore';

export default MemoDetailScreen = (props) => {
  const { navigation, route } = props;
  const { id } = route.params;
  const [memo, setMemo] = useState(null);

  // MmeoDetail 取得
  useEffect(() => {
    const { currentUser } = getAuth(firebase);
    let unSubscribe = () => { };
    if (currentUser) {
      const db = getFirestore(firebase);
      const q = query(doc(db, `users/${currentUser.uid}/memos`, id));
      unSubscribe = onSnapshot(q, (doc) => {
        const data = doc.data();
        setMemo({
          id: doc.id,
          bodyText: data.bodyText,
          updatedAt: data.updatedAt.toDate().toString(),
        });
      }, (error) => {
        Alert.alert("データの読み込みに失敗しました。")
      });
    }
    return unSubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text numberOfLines={1} style={styles.memoTitle}>{memo && memo.bodyText}</Text>
        <Text style={styles.memoDate}>{memo && memo.updatedAt}</Text>
      </View>

      {/* Content */}
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoText}>{memo && memo.bodyText}</Text>
      </ScrollView>

      {/* CircleButton */}
      <CircleButton
        iconType="-"
        customStyle={{ top: 60, buttom: 'auto' }}
        onPress={() => { navigation.navigate('MemoEdit', { id: memo.id, bodyText: memo.bodyText }) }}></CircleButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  memoHeader: {
    backgroundColor: '#467FD3',
    height: 96,
    justifyContent: 'center',
    paddingHorizontal: 19,
    paddingVertical: 24,
  },
  memoTitle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 32,
  },
  memoDate: {
    color: '#FFFFFF',
    fontSize: 12,
    lineHeight: 16,
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memoText: {
    fontSize: 16,
    lineHeight: 24,
  }
});