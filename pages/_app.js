import MainLayout from "../components/main/MainLayout.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import firebase from "firebase/app";
import { config } from "../config.js";
import theme from 'prism-react-renderer/themes/palenight'
import '../themes/xonokai.css'
import { MDXProvider } from '@mdx-js/react'
import Highlight, {
  defaultProps,
} from 'prism-react-renderer'

function Code({ children, className }) {
  const language = className.replace(/language-/, '')
  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children.trim()}
      language={language}
    >
      {({
        className,
        style,
        tokens,
        getLineProps,
        getTokenProps,
      }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div
              key={i}
              {...getLineProps({ line, key: i })}
            >
              {line.map((token, key) => (
                <span
                  key={key}
                  {...getTokenProps({ token, key })}
                />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
const components = {
  code: Code,
}

function MyApp({ Component, pageProps }) {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  return (
    <MainLayout pageTitle="" description="My Personal Blog">
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </MainLayout>
  );
}

export default MyApp
