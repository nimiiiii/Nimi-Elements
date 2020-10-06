import React from 'react'
import prism from 'prismjs'
import { addons, types } from '@storybook/addons'
import { AddonPanel } from '@storybook/components'
import { useParameter } from '@storybook/api'
import styled from 'styled-components'

// TSX (JSX in TypeScript) inherits from 'jsx'
import 'prismjs/components/prism-markdown.min'
import 'prismjs/components/prism-jsx.min'
import 'prismjs/components/prism-tsx.min'

// CSS supersets (except Stylus) require 'css'
import 'prismjs/components/prism-scss.min'
import 'prismjs/components/prism-sass.min'

// C-like languages (C, C#, Go, D, Dart, Java, etc.) inherit from 'clike'
// C++ inherits from 'c'
import 'prismjs/components/prism-clike.min'
import 'prismjs/components/prism-c.min'
import 'prismjs/components/prism-csharp.min'
import 'prismjs/components/prism-dart.min'
import 'prismjs/components/prism-go.min'
import 'prismjs/components/prism-java.min'
import 'prismjs/components/prism-cpp.min'

// PHP inherits from 'markup-templating'
import 'prismjs/components/prism-markup-templating.min'
import 'prismjs/components/prism-php.min'

// JSDoc and JavaDoc inherit from 'javadoclike'
import 'prismjs/components/prism-javadoclike.min'

const PARAM_KEY = 'example'
const ADDON_ID = 'example'
const PANEL_ID = `${ADDON_ID}/panel`

const highlight = (code, language) => {
	const parser = prism.languages[language ?? 'markup'] || prism.languages.html
	const highlighted = prism.highlight(code, parser, language ?? 'markup')
    return `<pre class="language-${language}"><code class="language-${language}">${highlighted}</code></pre>`
}

const Container = styled.div`
    padding: 0px;
    height: 100%;

    pre[class*="language-"],
    code[class*="language-"] {
        background: none;
        font-family: Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace;
        font-feature-settings: normal;
        font-size: 14px;
        color: #D9D7CE;
        text-shadow: none;
        direction: ltr;
        text-align: left;
        white-space: pre;
        word-spacing: normal;
        word-break: normal;
        line-height: 1.5;
        -moz-tab-size: 4;
        -o-tab-size: 4;
        tab-size: 4;
        -webkit-hyphens: none;
        -moz-hyphens: none;
        -ms-hyphens: none;
        hyphens: none;
    }
    pre[class*="language-"]::selection,
    code[class*="language-"]::selection,
    pre[class*="language-"]::mozselection,
    code[class*="language-"]::mozselection {
        text-shadow: none;
        background: none;
    }
    @media print {
        pre[class*="language-"],
        code[class*="language-"] {
            text-shadow: none;
        }
    }
    pre[class*="language-"] {
        padding: 1.5em 1em;
        overflow: auto;
        background: #212733;
        min-height: 100%;
        margin: 0;
    }
    :not(pre) > code[class*="language-"] {
        padding: .1em;
        border-radius: .3em;
        color: #D9D7CE;
        background: #212733;
    }
    /*********************************************************
    * Tokens
    */
    .token.comment,
    .token.prolog,
    .token.doctype,
    .token.cdata {
        color: #606e87;
    }
    .token.punctuation {
        color: #7B94A5;
    /* color: #b96767; */
    }
    .token.tag {
        color: #87a2d1de;
    }
    .token.boolean {
        color: #f8c2a7;
    }
    .token.property,
    .token.number,
    .token.constant,
    .token.symbol,
    .token.deleted {
        color: #bbba74;
    }
    .token.selector,
    .token.attr-name,
    .token.string,
    .token.char,
    .token.builtin,
    .token.inserted {
        color: #53C88C;
    }
    .token.operator,
    .token.entity,
    .token.url,
    .language-css .token.string,
    .style .token.string {
        color: #7B94A5;
    }
    .token.atrule,
    .token.attr-value,
    .token.keyword {
        color: #f8c2a7;
    }
    .token.function {
        color: #D9D7CE;
    }
    .token.regex {
        color: #a462a7;
    }
    .token.important,
    .token.variable {
        color: #f8c2a7;
    }
    .token.important,
    .token.bold {
        font-weight: bold;
    }
    .token.italic {
        font-style: italic;
    }
    .token.entity {
        cursor: help;
    }
    /*********************************************************
    * CSS
    */
    .language-css {
        color: #b388c7 !important;
    }
    .language-css .token.function {
        color: #b388c7;
    }
    .language-css .token.selector {
        color: #9fc097;
    }
    .language-css .token.property {
        color: #abc9d1;
    }
    /*********************************************************
    * SCSS
    */
    .language-scss {
        color: #b388c7 !important;
    }
    .language-scss .token.function {
        color: #b388c7;
    }
    .language-scss .token.selector {
        color: #9fc097;
    }
    .language-scss .token.property {
        color: #abc9d1;
    }
    /*********************************************************
    * JSON
    */
    .language-json .token.property {
        color: #abc9d1;
    }
    .language-json .token.punctuation {
        color: #D4D4AA;
    }
    /*********************************************************
    * CSharp
    */
    .language-csharp .token.namespace {
        color: #b96767;
    }
    /*********************************************************
    * TypeScript
    */
    .language-typescript .token.class-name {
        color: #b96767;
    }
    /*********************************************************
    * Git
    */
    .language-git .token.deleted {
        color: #b96767;
    }
    /*********************************************************
    * Line highlighting
    */
    pre[data-line] {
        position: relative;
    }
    pre[class*="language-"] > code[class*="language-"] {
        position: relative;
        z-index: 1;
    }
`

const MyPanel = () => {
    const example = useParameter(PARAM_KEY, null)
    if (example) {
        const language = example.language
        const code = example.code
        const highlighted = highlight(code, language)
        return <Container dangerouslySetInnerHTML={{__html: highlighted}} />
    }
    return <></>
}

addons.register(ADDON_ID, (api) => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'Example',
    render: ({ active, key }) => (
      <AddonPanel active={active} key={key}>
        <MyPanel />
      </AddonPanel>
    ),
  })
})