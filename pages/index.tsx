import Link from 'next/link';
import * as React from 'react';
import Layout from '../components/Layout';
import { ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';

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
                        style={{ margin: '100px' }}
                        className="btn btn-primary"
                        onClick={async () => {
                            const response = await client.query({
                                query: gql`
                                    query {
                                        getUser {
                                            _id
                                            email
                                        }
                                    }
                                `,
                            });
                            console.log('res', response);
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
