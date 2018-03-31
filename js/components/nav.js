import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function Navigation(props) {
    return (
    <nav class="navigation navbar-fixed-top">
        <ul>
            <li class="left home">
                <a href="#"><i class="fab fa-fly" aria-hidden="true"></i> Explore Your Options</a>
            </li>
        </ul>
        <div class="sm-view">
            <ul class="center-float">
                <li class="right">
                    <a href="#" class="nav-signout">signout</a>
                </li>
                <li class="right">
                    <a href="#" class="nav-login">login</a>
                </li>
                <li class="right">
                    <a href="#" class="nav-sign-up">sign up</a>
                </li>
                <li class="right">
                    <a href="#" class="nav-saved">my saved info</a>
                </li>
                <li class="right">
                    <a href="#" class="nav-search">search</a>
                </li>
            </ul>
        </div>
        <div class="error-message">
            <span> Oops! Something went wrong</span>
        </div>
    </nav>
    )
}
