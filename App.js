import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Post from './Components/Post/Post'

import {Data} from './data/data'

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar />
      {
        Data.map(post => <Post key={post.id} postData={post}/>)
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    marginTop: 24
  },
});
