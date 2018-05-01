import React from 'react'; 
import sinon from 'sinon';
import chai, { expect, should } from 'chai';
import chaiEnzyme from 'chai-enzyme'; 
import { mount, shallow, render } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

const willMount = sinon.spy();
const didMount = sinon.spy();
const willUnmount = sinon.spy();

chai.use(chaiEnzyme());

if (!global.document) {
  try {
    const jsdom = require('jsdom').jsdom; // could throw

    global.document = jsdom('');
    global.window = document.defaultView;
    Object.keys(document.defaultView).forEach((property) => {
      if (typeof global[property] === 'undefined') {
        global[property] = document.defaultView[property];
      }
    });

    global.navigator = {
      userAgent: 'node.js',
    };
  } catch (e) {
    // jsdom is not supported...
    if (e.message === "Cannot find module 'jsdom'") {
      console.error('[enzyme/withDom] Error: missing required module "jsdom"');
      console.error('[enzyme/withDom] To fix this you must run:');
      console.error('[enzyme/withDom]   npm install jsdom --save-dev');
    } else {
      console.error(`[enzyme withDom] ${e.stack || e.message}`);
    }
  }
}

import FrontPage from '../components/pages/front-page';


describe('FrontPage', () => {
  it('Should render a div with class landing_page', () => {
 	shallow(<FrontPage />)
  });
});