// @flow

import React, { Component } from 'react';
import SvgUri from './react-native-svg-uri';

type IconProps = {
    icon: String,
    size: Number,
    color: String | Number,
    style: any,
};

export default function createIconSet(svg: Object, fontName: String) {
    class Icon extends Component<IconProps> {
        render () {
            const { icon, color, size, style } = this.props;
            let svgXmlData = svg[icon];

            if (!svgXmlData) {
                let err_msg = `no "${icon}"`;
                throw new Error(err_msg);
            }
            return (
                <SvgUri width={size} height={size} svgXmlData={svgXmlData} fill={color} style={style} />
            );
        }
    };

    return Icon;
}