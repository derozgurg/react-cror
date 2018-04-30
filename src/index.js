/**
 * @class ExampleComponent
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export const createComp = render => {
  const comp = Component;
  comp.prototype.render = () => render;
  return comp;
}

export createSailsClient from './sails-client';