import React from 'react';
import { render } from 'react-dom';
import { createStore, bindActionCreators, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';

import ColorPicker from './ColorPicker';

var pack = {
    renderColorPicker(domNode) {
        render(<AutoCompleteTest />, domNode);
    }
};

module.exports = pack;


