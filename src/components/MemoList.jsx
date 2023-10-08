import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
// 子コンポーネントでNavigationを使いたい場合
import { useNavigation } from '@react-navigation/native';

export default MemoList = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity style={styles.memoListItem} onPress={() => { navigation.navigate('MemoDetail'); }}>
        <View>
          <Text style={styles.memoListItemTitle} >List Name</Text>
          <Text style={styles.memoListItemDate}>Date</Text>
        </View>
        <TouchableOpacity style={styles.memoDelete} onPress={() => { Alert.alert('Are you sure?'); }}>
          <Text>Close</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
  memoDelete: {
    padding: 8,
  },
});