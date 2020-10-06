import { html as htmlLit, render } from 'lit-html'
import { FASTElement, html, css } from "@microsoft/fast-element"
import React from 'react';

const template = html`
    <p>${x => x.attributes.value.value}</p>
`;

const styles = css`
    p {
        font-size: 24px;
    }
`

class FastText extends FASTElement {
    value: string
    static definition = {
      name: 'fast-text',
      template,
      styles,
      attributes: [
        'value'
      ]
    };

    connectedCallback() {
        super.connectedCallback();
        console.log('fast-text is now connected to the DOM');
        console.log(this.attributes);
    }
}

export class FastElementWrapper extends React.Component {
    elementProps: any
    element: any
    wrapperRef: any;
    constructor(props) {
      super(props);
      this.wrapperRef = React.createRef();
      this.elementProps = props.elementProps
      this.element = props.element
    }

    componentDidMount() {
      FASTElement.define(FastText)
      console.log(FastText);
      render(htmlLit`<fast-text value="hey hey"></fast-text>`, this.wrapperRef.current);
    }

    render() {
      return React.createElement('div', { ref: this.wrapperRef });
    }
}