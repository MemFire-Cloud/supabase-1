import { Button, Tabs, Alert } from 'ui'

// Common components
import Admonition from './Admonition'
import ButtonCard from './ButtonCard'
import CodeBlock from './CodeBlock/CodeBlock'
import { parseNumericRange } from './CodeBlock/CodeBlock.utils'
import JwtGenerator from './JwtGenerator'

// Page specific components
//Frameworks快速入门组件 ，Frameworks1 SDK组件，Frameworks2最佳实践组件


import Frameworks from './Frameworks'
import Frameworks1 from './Frameworks1'
import Frameworks2 from './Frameworks2'

import AuthProviders from './AuthProviders'
import FunctionsExamples from './FunctionsExamples'
import Extensions from './Extensions'

// Other components
import { Heading } from './CustomHTMLElements'
import QuickstartIntro from './MDX/quickstart_intro.mdx'
import ProjectSetup from './MDX/project_setup.mdx'
import { Mermaid } from 'mdx-mermaid/lib/Mermaid'
import InlineCodeTag from './CustomHTMLElements/InlineCode'

const components = {
  Admonition,
  Button,
  ButtonCard,
  CodeBlock,
  Frameworks,
  Frameworks1,
  Frameworks2,
  AuthProviders,
  FunctionsExamples,
  JwtGenerator,
  QuickstartIntro,
  ProjectSetup,
  Mermaid,
  Extensions,
  Alert: (props: any) => (
    <Alert {...props} className="not-prose">
      {props.children}
    </Alert>
  ),
  Tabs,
  TabPanel: (props: any) => <Tabs.Panel {...props}>{props.children}</Tabs.Panel>,

  h2: (props: any) => (
    <Heading tag="h2" {...props}>
      {props.children}
    </Heading>
  ),
  h3: (props: any) => (
    <Heading tag="h3" {...props}>
      {props.children}
    </Heading>
  ),
  code: (props: any) => {
    const linesToHighlight = parseNumericRange(props.lines ?? '')
    return <CodeBlock {...props} linesToHighlight={linesToHighlight} />
  },
  mono: (props: any) => <code className="text-sm">{props.children}</code>,
  inlineCode: (props: any) => <InlineCodeTag>{props.children}</InlineCodeTag>,
}

export default components
