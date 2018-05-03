import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

import Row from './Row';

export default class Grid extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {
          Array.from(Array(this.props.rows), (e, i) => {
            return <Row key={i} columns={this.props.columns} style={styles.row} />
          })
        }
      </View>
    );
  }
}

Grid.propTypes = {
  columns: PropTypes.number,
  rows: PropTypes.number,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  row: {
    flex: 1,
  }
});
