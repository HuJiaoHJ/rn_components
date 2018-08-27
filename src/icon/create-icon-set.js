import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { createElement, StyleSheet } from 'react-native'

export default function createIconSet(svgs, fontName) {
  class Icon extends Component {
    static propTypes = {
      icon: PropTypes.string,
      size: PropTypes.number,
      color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      style: PropTypes.object,
    }
    render() {
      const { icon, color, size, style } = this.props
      const styles = StyleSheet.create({
        iconStyle: {
          color,
          fontSize: size,
        },
      })
      const props = {
        className: `${fontName ? fontName + '-' : 'icon-'}${icon}`,
        style: StyleSheet.compose(
          style,
          styles.iconStyle
        ),
      }
      return createElement('i', props)
    }
  }
  return Icon
}
