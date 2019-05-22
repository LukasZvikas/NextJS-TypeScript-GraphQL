import App, { Container } from "next/app";
import React from "react";
import { ApolloProvider } from "react-apollo";
import withApollo from "../lib/withApollo";
import Head from "next/head";
import "../styles/main.scss";

class MyApp extends App<any> {
    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    render() {
        const { Component, pageProps, apolloClient } = this.props;
        return (
            <Container>
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"
                    />
                </Head>
                <ApolloProvider client={apolloClient}>
                    <Component {...pageProps} />
                </ApolloProvider>
            </Container>
        );
    }
}

export default withApollo(MyApp);
