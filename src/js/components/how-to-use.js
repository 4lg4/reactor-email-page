import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const HowToUse = () => (
  <Fragment>
  <h3>How to use</h3>

  <p>This is the reactor email page. This will be the best experience for you to send your emails.</p>
  <p>In this version we are following some standards</p>
  <ul>
    <li>You can send emails from different people, so the fields 'TO', 'CC' and 'BCC' can accept more than 1 email. You can type the emails with `,` between them. EX: `first@email.com,second@email.com`</li>
    <li>It doesn't accept html, sorry :( .</li>
  </ul>
  </Fragment>
);

export default HowToUse;
