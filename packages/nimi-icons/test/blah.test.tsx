/*
 * Copyright 2020 Tom Bazarnik et al.
 * Licensed under the GNU General Public License v2.0 w/Classpath exception
 * See LICENSE for details.
 */

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { IronBloodIcon } from '../dist'

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<IronBloodIcon />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})