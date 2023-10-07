import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';

export default MemoDetailScreen = () => {
  return (
    <View style={styles.container}>
      <AppBar></AppBar>
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>List Name</Text>
        <Text style={styles.memoDate}>Date</Text>
      </View>

      {/* Content */}
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoText}>
          aaaaaaaaaaaaaaaaaa
          aaaaaaaddd
          ddfggdgdgdgfgf

          fgsfgsdfgesfgfg

          eeeeeee
          dfgsfgsfgsfgegrgr
        </Text>
      </ScrollView>

      {/* CircleButton */}
      <CircleButton iconType="-" customStyle={{ top: 160, buttom: 'auto' }}></CircleButton>
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