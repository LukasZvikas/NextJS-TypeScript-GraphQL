import Link from "next/link";
import * as React from "react";
import Layout from "../components/Layout";
import { ApolloConsumer } from "react-apollo";
import gql from "graphql-tag";

const IndexPage: React.FunctionComponent = () => {
    return (
        <Layout title="Home | Next.js + TypeScript Example">
            <h1>hello Next.js 👋</h1>
            <p>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </p>
            <ApolloConsumer>
                {(client: any) => (
                    <button
                        className="btn btn-primary"
                        onClick={async () => {
                            const response = await client.query({
                                query: gql`
                query {
                  loginUser(email: "lzvikas1@gmail.com", password: "1223") {
                    token
                    userId
                    email
                  }
                }`,
                            });
                            console.log("res", response);
                        }}
                    >
                        call login mutation
                    </button>
                )}
            </ApolloConsumer>
        </Layout>
    );
};

export default IndexPage;
