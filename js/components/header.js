import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function Header(props) {
    return (
			    <div className="header-intro">
			        <div className="header-text">
			            <h1> Explore Your Options </h1>
			            <p> by researching career opportunities and colleges</p>
			        </div>
			    </div>
    )
}
