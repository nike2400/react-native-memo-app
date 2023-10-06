import { View, Text, StyleSheet } from 'react-native';

export default MemoList = () => {
  return (
    <View>
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle} >List Name</Text>
          <Text style={styles.memoListItemDate}>Date</Text>
        </View>
        <View>
          <Text>Close</Text>
        </View>
      </View>

      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle} >List Name</Text>
          <Text style={styles.memoListItemDate}>Date</Text>
        </View>
        <View>
          <Text>Close</Text>
        </View>
      </View>
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
});