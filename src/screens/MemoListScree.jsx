import { StyleSheet, View } from 'react-native';
import AppBar from '../components/AppBar';
import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';

export default function MemoListScreen() {
  return (
    <View style={styles.container}>
      {/* App bar */}
      <AppBar></AppBar>

      {/* Memo List */}
      <MemoList></MemoList>

      {/* Floating Bottun */}
      <CircleButton iconType="+"></CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
});