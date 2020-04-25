/**
 * Persian Calendar Picker Component
 *
 * Copyright 2016 Reza (github.com/rghorbani)
 * Licensed under the terms of the MIT license. See LICENSE file in the project root for terms.
 */

'use strict';

const React = require('react');
const PropTypes = require('prop-types');
const {
  Text,
  View,
} = require('react-native');

const styles = require('./style');
const {
  WEEKDAYS,
} = require('./util');

class WeekDaysLabels extends React.Component {
  constructor(props) {
    super(props);
    this.DAY_WIDTH = (this.props.screenWidth - 16) / 7;
  }

  render() {
    let labels = (this.props.weekdays || WEEKDAYS).map((day, key) => { return <Text key={key} style={[styles.dayLabels, this.props.textStyle]}>{day}</Text>; });
    labels.reverse();
    return (
      <View style={[styles.dayLabelsWrapper, this.props.rtl && styles.rtl]}>
        {labels}
      </View>
    );
  }
}

module.exports = WeekDaysLabels;
