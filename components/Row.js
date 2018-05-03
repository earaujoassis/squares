import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

import Square from './Square';

export default class Row extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {
          Array.from(Array(this.props.columns), (e, i) => {
            return <Square key={i} index={i % 7} />
          })
        }
      </View>
    );
  }
}

Row.propTypes = {
  columns: PropTypes.number,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});
