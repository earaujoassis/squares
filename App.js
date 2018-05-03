import React from 'react';
import { StyleSheet, View } from 'react-native';

import Grid from './components/Grid';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Grid columns={7} rows={7} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
