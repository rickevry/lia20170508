import React from 'react';
import { render } from 'react-dom';
import { createStore, bindActionCreators, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';

import ColorPicker from './ColorPicker';
import ShapeOptions from './ShapeOptions';


var pack = {
    renderColorPicker(colors, selectedColor, pickerId, domNode) {
        render(<ColorPicker colors={colors} selectedColor={selectedColor} pickerId={pickerId}/>, domNode);
    },
    renderShapeOptions(fill, line, domNode) {
        render(<ShapeOptions fill={fill} line={line}/>, domNode);
    }
};

module.exports = pack;


// colors, "#9E9B9B", document.getElementById('colorPickerDiv'