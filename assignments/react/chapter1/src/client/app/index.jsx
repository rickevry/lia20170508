import React from 'react';
import { render } from 'react-dom';
import { createStore, bindActionCreators, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';

import ColorPicker from './ColorPicker';
import Toolbar from './Toolbar';


var pack = {
    renderToolbar(domNode) {
        render(<Toolbar/>, domNode);
    }
};

module.exports = pack;

