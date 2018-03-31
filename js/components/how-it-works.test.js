import React from 'react';
import {shallow, mount, render} from 'enzyme';

import HowItWorks from './how-it-works';

describe('<HowItWorks />', () => {
    it('Renders without crashing', () => {
        shallow(<HowItWorks />);
                });
    });
