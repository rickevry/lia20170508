import React from 'react';
import { render } from 'react-dom';
import { createStore, bindActionCreators, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';

import style from './style.css';

import ColorPicker from './ColorPicker';
import Toolbar from './Toolbar';
import Accordion from './Accordion';


var pack = {
    renderAccordion(domNode) {
        render(<Accordion/>, domNode);
    },
    renderToolbar(domNode) {
        render(<Toolbar/>, domNode);
    }
};



module.exports = pack;


// colors, "#9E9B9B", document.getElementById('colorPickerDiv'