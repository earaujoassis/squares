import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

const COLORS = ['black', 'blue', 'cyan', 'green', 'magenta', 'red', 'yellow'];

export default class Row extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: props.index,
    };
  }

  componentWillMount() {

  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => this.setState({index: this.state.index + 1})}>
        <View style={[styles.square, {backgroundColor: this.getNextColor()}]} />
      </TouchableWithoutFeedback>
    );
  }

  getNextColor() {
    return COLORS[this.state.index % 7];
  }
}

Row.propTypes = {
  index: PropTypes.number,
};

const styles = StyleSheet.create({
  square: {
    flex: 1,
  },
});
