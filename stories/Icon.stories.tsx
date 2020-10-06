import React from 'react'
import { Icon } from '../packages/nimi-icons'

export const Basic = (args) => {
  const props = (({ size, ...o }) => o)(args)
  const height = args.size ?? 50
  const width = args.size ?? 50
  return <Icon height={height} width={width} {...props} />;
}
Basic.args = {
    type: 'hms',
    size: 50,
    fill: '#012'
};
Basic.argTypes = {
    type: { 
        description: 'overwritten description',
        control: { type: 'select', options: ['hms', 'kms', 'ffnf'] }
    },
    size: { control: { type: 'range', min: '20', max: '100' } },
    fill: { control: { type: 'color' } }
}

const code = `// Use the general purpose <Icon> component...
import {Icon} from '@nimiiiii/nimi-icons'
export const App = () => <Icon
  fill="#012"
  height={50}
  type="ironblood"
  width={50}
/>

// Or use one of registered Azur Lane nation icons
import {IronBloodIcon} from '@nimiiiii/nimi-icons'
export const App = () => <IronBloodIcon
  fill="#012"
  height={50}
  width={50}
/>
`

export default {
  title: 'Icon',
  component: Icon,
  parameters: {
      example: {
          language: 'jsx',
          code: code
      }
  }
}

