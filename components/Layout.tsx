import * as React from 'react';
import Link from 'next/link';
import Head from 'next/head';

interface Props {
  title?: string;
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title'
}) => (
    <div style={{ position: 'relative' }}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header style={{ position: 'absolute' }}>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/login">
            <a>Login</a>
          </Link>
          <Link href="/register">
            <a>Register</a>
          </Link>
        </nav>
      </header>
      {children}
      <footer style={{ position: 'absolute', bottom: 0 }}>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </div>
  );

export default Layout;
