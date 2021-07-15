import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.avatar_container}>
        <View
          style={{ justifyContent: 'center', alignItems: 'center' }}
        >
          <Image
            style={{ borderRadius:100, marginBottom: 10, width:200, height: 200 }}
            source={require('./assets/girl.gif')}
          />
          <Text style={{ maxWidth: 200 }}>
            "Who doesn't start, never ends"
          </Text>
        </View>
      </View>
      <View style={styles.details_container}>
        <View style={styles.item}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.data}>Barbara</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>Country:</Text>
          <Text style={styles.data}>Argentina</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>Fav Color:</Text>
          <Text style={styles.data}>Black</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>Job:</Text>
          <Text style={styles.data}>Pretend Coding</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  avatar_container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.4,
    borderBottomWidth: 1,
    borderBottomColor: 'darkred',
  },
  details_container: {
    backgroundColor: 'black',
    flex: 0.6,
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: 'darkred',
    flex: 0.25,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  label: {
    flex: 0.9,
    color: 'red',
    fontSize: 32,
  },
  data: {
    fontSize: 32,
    color: 'white'
  },
});
