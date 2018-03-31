import React from 'react';
import ReactDOM from 'react-dom';
const render = ReactDOM.render;
import {Provider} from 'react-redux';

// import '../assets/css/main.css';

import Header from '../js/components/header';
import Navigation from '../js/components/nav';
import HowItWorks from '../js/components/how-it-works';


document.addEventListener('DOMContentLoaded', () =>
                          {return ReactDOM.render(<Header />,
                                                  document.getElementById('reactHeader'));} );
document.addEventListener('DOMContentLoaded', () =>
                          {return ReactDOM.render(<Navigation />,
                                                  document.getElementById('reactNavigation'));} );
document.addEventListener('DOMContentLoaded', () =>
                          {return ReactDOM.render(<HowItWorks />,
                                                  document.getElementById('reactHowItWorks'));} );
