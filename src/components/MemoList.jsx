import { View, Text, StyleSheet, TouchableOpacity, Alert, FlatList } from 'react-native';
// 子コンポーネントでNavigationを使いたい場合
import { useNavigation } from '@react-navigation/native';

export default MemoList = (props) => {
  const navigation = useNavigation();
  const { memos } = props;
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.memoListItem} onPress={() => { navigation.navigate('MemoDetail'); }}>
        <View>
          <Text numberOfLines={1} style={styles.memoListItemTitle}>{item.bodyText}</Text>
          <Text style={styles.memoListItemDate}>{item.updatedAt}</Text>
        </View>
        <TouchableOpacity style={styles.memoDelete} onPress={() => { Alert.alert('Are you sure?'); }}>
          <Text>Close</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };


  return (
    <View style={styles.container}>
      <FlatList data={memos} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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