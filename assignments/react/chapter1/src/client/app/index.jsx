import React from 'react';
import { render } from 'react-dom';
import { createStore, bindActionCreators, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';

import ColorPicker from './ColorPicker';

var pack = {
    renderColorPicker(colors, selectedColor, domNode) {
        render(<ColorPicker colors={colors} selectedColor={selectedColor} />, domNode);
    }
};

module.exports = pack;


// colors, "#9E9B9B", document.getElementById('colorPickerDiv'