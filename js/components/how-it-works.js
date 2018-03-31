import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function HowItWorks(props) {
    return (
    <section class="how-it-works">
        <div class="how-it-works-title">
            <h1>How it Works</h1>
        </div>
        <div class="row">
            <div class="col-6 category career-img">
            </div>
            <div class="col-6 details red">
                <p class="title-details"> search careers</p>
                <p> search by career and location to return:</p>
                <ul>
                    <li>national median salary</li>
                    <li>local median salary</li>
                    <li>education required</li>
                    <li>number of years of experience</li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col-6 category grad-img right">
            </div>
            <div class="col-6 details left gold">
                <p class="title-details"> search colleges</p>
                <p> search colleges by degree, speciality and location to return:</p>
                <ul>
                    <li> average cost</li>
                    <li> average debt</li>
                    <li> average salaray 10 years after graduation</li>
                    <li> program and cost details </li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col-6 category compare-img">
            </div>
            <div class="col-6 details">
                <p class="title-details"> compare</p>
                <p> compare colleges against desires career and calculate return on investment.</p>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <button class="button sign-up-btn"> Sign Up</button>
            </div>
        </div>
    </section>
    )
}
