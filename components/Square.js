import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Animated, TouchableWithoutFeedback, View } from 'react-native';

const COLORS = ['black', 'blue', 'cyan', 'green', 'magenta', 'red', 'yellow'];

const getColor = (i) => COLORS[i % 7];

export default class Row extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: props.index,
    };
    this.animation = new Animated.Value(props.index % 7);
    this.backgroundColorConfig = this.animation.interpolate({
        inputRange: [0, 1, 2, 3, 4, 5, 6],
        outputRange: COLORS,
    });
  }

    startBackgroundColorAnimation() {
        let nextIndex = this.state.index + 1 > 6 ? 0 : this.state.index + 1;
        Animated
            .timing(this.animation, {toValue: nextIndex, duration: 250})
            .start(() => this.setState({index: nextIndex }));
    }

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => this.startBackgroundColorAnimation()}>
        <Animated.View style={[styles.square, {backgroundColor: this.backgroundColorConfig}]} />
      </TouchableWithoutFeedback>
    );
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
